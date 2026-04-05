import Link from "next/link";
import { Search, Shield, MessageCircle, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";

const featured = listings.slice(0, 6);

const trustStats = [
  { icon: TrendingDown, label: "Zero Broker Fee", sub: "Save 1–2 months rent" },
  { icon: Shield, label: "Verified Listings", sub: "Every listing is owner-posted" },
  { icon: MessageCircle, label: "Direct on WhatsApp", sub: "Talk straight to the owner" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=60')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto max-w-3xl text-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              No Brokers. No Middlemen.
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Find Your Perfect Home —{" "}
              <span className="text-yellow-300">Zero Broker Fees</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              Browse verified rental listings across Mumbai, Bangalore &amp;
              Hyderabad. Connect directly with owners via WhatsApp.
            </p>
            <form
              action="/listings"
              method="GET"
              className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-2"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  name="q"
                  placeholder="Search by locality or city..."
                  className="pl-9 bg-white text-foreground border-0 h-11"
                />
              </div>
              <Button type="submit" size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustStats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-lg">
                <div className="bg-primary/10 rounded-full p-2.5 shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="container mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Featured Listings</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Handpicked homes across top cities
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/listings">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/listings">Browse All 25 Listings</Link>
          </Button>
        </div>
      </section>

      {/* How it works teaser */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">How ListHome Works</h2>
          <p className="text-muted-foreground mb-6">
            Find and rent a home in 3 simple steps — no broker needed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-8">
            {[
              { step: "1", title: "Browse Listings", desc: "Filter by city, locality, BHK, and budget." },
              { step: "2", title: "WhatsApp Owner", desc: "One tap to open WhatsApp with a pre-filled message." },
              { step: "3", title: "Visit & Move In", desc: "Schedule a visit directly. No broker, no commission." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </div>
                <div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
