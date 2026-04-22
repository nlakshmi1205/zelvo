"use client";

import { useState } from "react";
import type { Listing } from "@/data/listings";
import ListingCard from "./ListingCard";
import { ListingModal } from "./ListingModal";

interface ListingsGridProps {
  listings: Listing[];
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onShowDetails={() => setSelectedListing(listing)}
          />
        ))}
      </div>

      {selectedListing && (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}
    </>
  );
}
