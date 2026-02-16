import { Card } from "@/components/ui/card";
import { Users, Zap, Wifi } from "lucide-react";

export function ForYouSection() {
  return (
    <section
      id="for-you"
      className="bg-stone-50/50 py-20 sm:py-32 border-y border-stone-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Perfect for Everyone
          </h2>
          <p className="text-lg text-stone-600 text-balance">
            Whether you're going solo or scaling a team, we have the right plan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Freelancers */}
          <Card className="p-8 border-stone-200/50 bg-white hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 bg-linear-to-r from-blue-400 to-blue-600">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Freelancers
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Escape the home office routine. Access professional spaces,
              networking opportunities, and the structure you need to thrive
              independently.
            </p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Hourly & daily passes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>No long-term commitment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Meeting room credits</span>
              </li>
            </ul>
          </Card>

          {/* Teams & Startups */}
          <Card className="p-8 border-orange-500/20 bg-linear-to-b from-orange-50/50 to-white hover:shadow-lg transition-shadow border-2">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 bg-linear-to-r from-orange-400 to-orange-600">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Teams & Startups
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Dedicated desks and private offices for growing teams.
              Collaboration spaces, high-speed internet, and room to expand.
            </p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Team discounts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Custom solutions</span>
              </li>
            </ul>
          </Card>

          {/* Remote Workers */}
          <Card className="p-8 border-stone-200/50 bg-white hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 bg-linear-to-r from-green-400 to-green-600">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Remote Workers
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Work with a stable internet connection and professional
              environment. Perfect for days when you need to escape the home
              office.
            </p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Flexible monthly plans</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Bring your team</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>24/7 access</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
