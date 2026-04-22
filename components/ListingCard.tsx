"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Bath, BedDouble, Maximize2, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Listing } from "@/data/listings";

const ListingCardGallery = dynamic(
  () => import("./ListingCardGallery").then((m) => m.ListingCardGallery),
  { ssr: false }
);

const MatchBadge = dynamic(
  () => import("./MatchBadge").then((m) => m.MatchBadge),
  { ssr: false }
);

interface ListingCardProps {
  listing: Listing;
  onShowDetails?: () => void;
}

export default function ListingCard({ listing, onShowDetails }: ListingCardProps) {
  const waMessage = encodeURIComponent(
    `Hi, I saw your listing for "${listing.title}" on Zelvo. Is it still available?`
  );
  const waUrl = `https://wa.me/${listing.ownerWhatsApp}?text=${waMessage}`;

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow group${onShowDetails ? " cursor-pointer" : ""}`}
      onClick={onShowDetails}
    >
      <ListingCardGallery
        photos={listing.photos}
        title={listing.title}
        bedrooms={listing.bedrooms}
        type={listing.type}
        furnishing={listing.furnishing}
      />

      <CardContent className="p-4">
        <div className="flex items-start gap-1 text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
          <span>{listing.locality}, {listing.city}</span>
        </div>

        {onShowDetails ? (
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-3 hover:text-primary transition-colors">
            {listing.title}
          </h3>
        ) : (
          <Link href={`/listings/${listing.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-3">
              {listing.title}
            </h3>
          </Link>
        )}

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" />
            {listing.bedrooms} bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {listing.bathrooms} bath
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="h-3.5 w-3.5" />
            {listing.area} sqft
          </span>
        </div>

        {/* Owner row */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <User className="h-3 w-3 shrink-0" />
          <span className="truncate">{listing.ownerName}</span>
          <span className="ml-auto shrink-0">
            <MatchBadge ownerProfile={listing.ownerProfile} />
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              ₹{listing.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-muted-foreground">/mo</span>
          </div>
          <Button
            size="sm"
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
