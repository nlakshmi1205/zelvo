"use client";

import { useState } from "react";
import ListingCard from "./ListingCard";
import { ListingModal } from "./ListingModal";
import type { Listing } from "@/data/listings";

interface Props {
  listings: Listing[];
}

export function FeaturedGrid({ listings }: Props) {
  const [selected, setSelected] = useState<Listing | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onShowDetails={() => setSelected(listing)}
          />
        ))}
      </div>
      {selected && (
        <ListingModal listing={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
