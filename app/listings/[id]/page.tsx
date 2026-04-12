import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Bath,
  BedDouble,
  Maximize2,
  MapPin,
  Calendar,
  ChevronLeft,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { listings, getListingById } from "@/data/listings";

export async function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const listing = getListingById(params.id);
  if (!listing) return {};
  return {
    title: listing.title,
    description: `${listing.bedrooms} BHK in ${listing.locality}, ${listing.city}. ₹${listing.price.toLocaleString("en-IN")}/mo. ${listing.description.slice(0, 120)}...`,
    openGraph: {
      title: listing.title,
      description: `${listing.bedrooms} BHK · ₹${listing.price.toLocaleString("en-IN")}/mo · ${listing.locality}, ${listing.city}`,
      images: listing.photos[0] ? [{ url: listing.photos[0] }] : [],
    },
  };
}

const furnishingLabel = {
  unfurnished: "Unfurnished",
  "semi-furnished": "Semi-Furnished",
  "fully-furnished": "Fully Furnished",
};

export default function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = getListingById(params.id);
  if (!listing) notFound();

  const waMessage = encodeURIComponent(
    `Hi ${listing.ownerName}, I saw your listing for "${listing.title}" on Zelvo. Is it still available?`
  );
  const waUrl = `https://wa.me/${listing.ownerWhatsApp}?text=${waMessage}`;

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-primary transition-colors">
            Listings
          </Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{listing.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2">
          <Link href="/listings">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to listings
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: photos + details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl overflow-hidden">
              {listing.photos.map((photo, i) => (
                <div
                  key={i}
                  className={`relative bg-gray-100 ${
                    i === 0 && listing.photos.length > 1
                      ? "sm:row-span-2 h-64 sm:h-80"
                      : "h-48"
                  } ${listing.photos.length === 1 ? "sm:col-span-2 h-72" : ""}`}
                >
                  <Image
                    src={photo}
                    alt={`${listing.title} — photo ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Title & location */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge>
                  {listing.bedrooms} BHK
                </Badge>
                <Badge variant="outline">
                  {furnishingLabel[listing.furnishing]}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {listing.type}
                </Badge>
              </div>
              <h1 className="text-2xl font-bold mb-1">{listing.title}</h1>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                {listing.locality}, {listing.city}
              </div>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: BedDouble, label: "Bedrooms", value: `${listing.bedrooms} BHK` },
                { icon: Bath, label: "Bathrooms", value: `${listing.bathrooms} Bath` },
                { icon: Maximize2, label: "Area", value: `${listing.area} sqft` },
                {
                  icon: Calendar,
                  label: "Available",
                  value: new Date(listing.availableFrom).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }),
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-lg p-3 text-center">
                  <Icon className="h-5 w-5 mx-auto text-primary mb-1" />
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-semibold text-sm">{value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-lg mb-2">About this property</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {listing.amenities.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-1.5 bg-green-50 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-sm p-6 space-y-5">
              <div>
                <div className="text-3xl font-extrabold text-primary">
                  ₹{listing.price.toLocaleString("en-IN")}
                  <span className="text-base font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Zero broker fee
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="text-sm font-semibold mb-0.5">
                  {listing.ownerName}
                </div>
                <div className="text-xs text-muted-foreground">Property Owner</div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact on WhatsApp
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Opens WhatsApp with a pre-filled message to the owner.
              </p>

              <div className="border-t pt-4 text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Available from</span>
                  <span className="font-medium text-foreground">
                    {new Date(listing.availableFrom).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Property type</span>
                  <span className="font-medium text-foreground capitalize">
                    {listing.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Furnishing</span>
                  <span className="font-medium text-foreground">
                    {furnishingLabel[listing.furnishing]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
