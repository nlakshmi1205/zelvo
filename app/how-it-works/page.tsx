import type { Metadata } from "next";
import Link from "next/link";
import { Search, MessageCircle, Key, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "ListHome makes renting easy — browse verified listings, WhatsApp the owner directly, and move in without paying a single rupee to a broker.",
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse Verified Listings",
    desc: "All listings on ListHome are posted directly by property owners — no brokers, no fake duplicates. Filter by city, locality, BHK, budget, and furnishing to find your match.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Contact the Owner on WhatsApp",
    desc: "One tap opens WhatsApp with a pre-filled message to the owner. No middlemen, no commissions. Talk directly, schedule a visit, and negotiate the rent on your terms.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Key,
    number: "03",
    title: "Visit & Move In",
    desc: "Meet the owner, inspect the property, and sign the agreement directly. Zero broker fee means you save 1–2 months of rent, every time. (Self-tour with SmartLocks — coming soon!)",
    color: "bg-purple-50 text-purple-600",
  },
];

const faqs = [
  {
    q: "Is ListHome really free for renters?",
    a: "Yes, 100%. We never charge renters any fee. Browse, contact owners, and move in — all at zero cost to you.",
  },
  {
    q: "How do you ensure listings are genuine?",
    a: "All listings are submitted directly by property owners. We are building a verification layer that cross-checks against owner ID and utility bills. In the meantime, every listing has the owner's WhatsApp number so you can speak to them directly before visiting.",
  },
  {
    q: "What cities do you cover?",
    a: "We currently have verified listings in Mumbai, Bangalore, and Hyderabad. More cities are coming soon. If you're a property owner in another city, reach out to us on WhatsApp.",
  },
  {
    q: "What are SmartLocks?",
    a: "SmartLocks are our upcoming Stage 2 feature — digital locks on properties that allow you to self-schedule and self-tour homes without waiting for the owner to be available. Coming soon!",
  },
  {
    q: "Can I list my property on ListHome?",
    a: "Yes! If you are a property owner looking to rent without paying broker commissions, we want to work with you. Tap 'Contact on WhatsApp' on any listing to reach our team.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b py-14 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            How It Works
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Rent a Home Without Paying a Broker
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            ListHome puts you in direct contact with property owners. No
            middlemen, no commissions, no fake listings.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-10">
          {steps.map(({ icon: Icon, number, title, desc, color }, i) => (
            <div key={number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className={`${color} rounded-xl p-3.5 shrink-0`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-border min-h-[2rem]" />
                )}
              </div>
              <div className="pb-6">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                  Step {number}
                </div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group border bg-white rounded-lg px-5 py-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-sm list-none">
                  {q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-primary text-white">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-blue-100 mb-6">
            Browse 25+ verified listings across Mumbai, Bangalore &amp;
            Hyderabad. Zero broker, zero fees.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-blue-50 font-semibold"
          >
            <Link href="/listings">Browse Listings</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
