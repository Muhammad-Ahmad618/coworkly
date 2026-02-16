import { Injectable, BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(private readonly supabaseService: SupabaseService) {}

    //SignUp Service    
    async signUp(signUpDto: SignUpDto) {
        const { fullName, email, password } = signUpDto;

        // Use Supabase Auth to create the user (Supabase handles hashing)
        const { data, error } = await this.supabaseService.getClient().auth.signUp({
            email,
            password,
            options: {
                data: { fullName },
            },
        });

        if (error) {
            this.logger.warn('Supabase signUp error: ' + error.message);
            throw new BadRequestException(error.message);
        }
        // Create a profile row in `users` table (without password)
        try {
            await this.supabaseService
                .getClient()
                .from('users')
                .insert({ id: data.user?.id, email, full_name: fullName });
        } catch (e) {
            this.logger.error('Failed to create profile row: ' + String(e));
        }

        return {
            message: 'Registration successful',
            user: data.user,
        };
    }

    //Login Service
    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        // Use Supabase Auth to sign in (Supabase validates the password)
        const { data, error } = await this.supabaseService.getClient().auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            this.logger.warn('Supabase signIn error: ' + error.message);
            throw new BadRequestException(error.message);
        }

        // Fetch profile from `users` table (avoid selecting password)
        let profile: any = null;
        try {
            const { data: profileData, error: profileError } = await this.supabaseService
                .getClient()
                .from('users')
                .select('id,email,full_name')
                .eq('id', data.user?.id)
                .single();

            if (!profileError) profile = profileData;
        } catch (e) {
            this.logger.debug('Failed to fetch profile: ' + String(e));
        }

        return {
            message: 'Login successful',
            access_token: data.session?.access_token,
            refresh_token: data.session?.refresh_token,
            user: profile ?? data.user,
        };
    }

    //logout Service

    async logout() {
        const { error } = await this.supabaseService.getClient().auth.signOut();

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return { message: 'Logged out successfully' };
    }

    //Forgot Password Service       

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const { error } = await this.supabaseService.getClient().auth.resetPasswordForEmail(email);

        if (error) {
            throw new BadRequestException(error.message);
        }

        return { message: 'Password reset link sent to your email' };
    }
}
