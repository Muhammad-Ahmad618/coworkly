import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-linear-to-r from-stone-900 via-stone-800 to-orange-900 py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Transform Your Work Life?
        </h2>
        <p className="text-lg text-stone-200 mb-10 text-balance">
          Join our community of productive professionals and discover where
          great work happens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-hover text-white gap-2 cursor-pointer"
          >
            Start Your 7-Day Free Trial <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-transparent cursor-pointer"
          >
            Schedule a Tour
          </Button>
        </div>
        <p className="text-sm text-stone-300 mt-8">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
