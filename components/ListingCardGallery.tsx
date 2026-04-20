"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Listing } from "@/data/listings";

interface Props {
  photos: string[];
  title: string;
  bedrooms: number;
  type: Listing["type"];
  furnishing: Listing["furnishing"];
}

const furnishingLabel = (f: Listing["furnishing"]) =>
  ({ unfurnished: "Unfurnished", "semi-furnished": "Semi", "fully-furnished": "Fully Furnished" }[f]);

export function ListingCardGallery({ photos, title, bedrooms, type, furnishing }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((i) => (i - 1 + photos.length) % photos.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((i) => (i + 1) % photos.length);
  };

  return (
    <div className="relative h-48 bg-gray-100 overflow-hidden group/gallery">
      <Image
        src={photos[current]}
        alt={`${title} — photo ${current + 1}`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
            aria-label="Next photo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Photo counter pill */}
          <div className="absolute bottom-2 right-2 z-10 bg-black/50 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
            {current + 1} / {photos.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {photos.slice(0, 6).map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Overlay badges */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-white text-foreground shadow-sm">
          {bedrooms === 1 && type === "studio" ? "Studio" : `${bedrooms} BHK`}
        </Badge>
      </div>
      <div className="absolute top-3 right-3 z-10">
        <Badge variant="secondary" className="bg-white/90 text-foreground shadow-sm text-xs">
          {furnishingLabel(furnishing)}
        </Badge>
      </div>
    </div>
  );
}
