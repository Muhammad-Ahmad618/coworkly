import { Card } from "@/components/ui/card";
import { stepsData } from "./data";

export function HowItWorkSection() {
  return (
    <section
      id="how-it-works"
      className=" px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg text-stone-600 text-balance">
            From signing up to working productively takes just minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          {stepsData.map((step) => (
            <div className="relative" key={step.id}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                {step.id}
              </div>
              <Card className="p-8 border-stone-200/50 bg-white h-full pt-12 text-center">
                <h3 className="text-2xl font-bold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
