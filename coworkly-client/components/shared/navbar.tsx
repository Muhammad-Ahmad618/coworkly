"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";

export function Navbar() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-xl font-semibold text-gray-950">oworkly</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="text-stone-600 hover:text-stone-900 transition"
          >
            Pricing
          </a>
          <a
            href="#how-it-works"
            className="text-stone-600 hover:text-stone-900 transition"
          >
            About
          </a>
          <a
            href="#for-you"
            className="text-stone-600 hover:text-stone-900 transition"
          >
            Contact
          </a>
          <Button
            onClick={() => handleNavigation("/authentication/login")}
            className="bg-brand-primary hover:bg-brand-hover text-white cursor-pointer"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
