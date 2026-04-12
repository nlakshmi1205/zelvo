import Link from "next/link";
import Image from "next/image";
import { Bath, BedDouble, Maximize2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Listing } from "@/data/listings";

function furnishingLabel(f: Listing["furnishing"]) {
  return { "unfurnished": "Unfurnished", "semi-furnished": "Semi", "fully-furnished": "Fully Furnished" }[f];
}

export default function ListingCard({ listing }: { listing: Listing }) {
  const waMessage = encodeURIComponent(
    `Hi, I saw your listing for "${listing.title}" on Zelvo. Is it still available?`
  );
  const waUrl = `https://wa.me/${listing.ownerWhatsApp}?text=${waMessage}`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={listing.photos[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-white text-foreground shadow-sm">
            {listing.bedrooms === 1 && listing.type === "studio" ? "Studio" : `${listing.bedrooms} BHK`}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground shadow-sm text-xs">
            {furnishingLabel(listing.furnishing)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start gap-1 text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
          <span>{listing.locality}, {listing.city}</span>
        </div>

        <Link href={`/listings/${listing.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-3">
            {listing.title}
          </h3>
        </Link>

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

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              ₹{listing.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-muted-foreground">/mo</span>
          </div>
          <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
