import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Zap } from "lucide-react";
import { Wifi } from "lucide-react";
import { Users } from "lucide-react";

export function HighlightsSection() {
  return (
    <section
      id="features"
      className="bg-white/50 py-20 sm:py-32 border-y border-stone-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-stone-600 text-balance">
            Premium features designed for modern professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Feature 1 */}
          <Card className="p-8 border-stone-200/50 hover:shadow-lg transition-shadow bg-white">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 mb-6">
              <Calendar className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Instant Booking
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Book your preferred desk or private office in seconds. Check
              availability in real-time and reserve exactly what you need, when
              you need it.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-8 border-stone-200/50 hover:shadow-lg transition-shadow bg-white">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 mb-6">
              <Zap className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Flexible Plans
            </h3>
            <p className="text-stone-600 leading-relaxed">
              From hourly passes to monthly memberships. Scale your plan up or
              down based on your needs without any long-term commitments.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-8 border-stone-200/50 hover:shadow-lg transition-shadow bg-white">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500/10 mb-6">
              <Wifi className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Lightning-Fast Wi-Fi
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Gigabit-speed internet with dedicated bandwidth. Stream, upload,
              and collaborate without any slowdowns.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-8 border-stone-200/50 hover:shadow-lg transition-shadow bg-white">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 mb-6">
              <Users className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Community Events
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Weekly networking events, workshops, and social gatherings. Build
              meaningful connections with like-minded professionals.
            </p>
          </Card>
        </div>

        <div className="bg-linear-to-r from-stone-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-stone-200/50">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">
            Plus All These Premium Amenities
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-stone-600">
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>24/7 Access & Security</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Professional Meeting Rooms</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Business Address Services</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Printing & Mail Services</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Premium Coffee & Beverages</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Parking Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
