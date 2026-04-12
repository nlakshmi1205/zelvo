"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=60')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            <Button
              type="submit"
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold"
            >
              Search
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
