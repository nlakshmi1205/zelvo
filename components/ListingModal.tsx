"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  User,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Listing } from "@/data/listings";
import {
  PROFILE_STORAGE_KEY,
  computeMatch,
  type UserProfile,
} from "@/lib/profileUtils";

const furnishingLabel: Record<string, string> = {
  unfurnished: "Unfurnished",
  "semi-furnished": "Semi-Furnished",
  "fully-furnished": "Fully Furnished",
};

const RING_R = 40;
const RING_C = 2 * Math.PI * RING_R;

function matchColors(score: number) {
  if (score >= 75) return { stroke: "#16a34a", track: "#bbf7d0", bg: "#f0fdf4", text: "#15803d", label: "Great Match" };
  if (score >= 50) return { stroke: "#ca8a04", track: "#fef08a", bg: "#fefce8", text: "#a16207", label: "Partial Match" };
  return { stroke: "#dc2626", track: "#fecaca", bg: "#fff1f2", text: "#b91c1c", label: "Low Match" };
}

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
}

export function ListingModal({ listing, onClose }: ListingModalProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  const prevPhoto = useCallback(() => {
    setPhotoIndex((i) => (i === 0 ? listing.photos.length - 1 : i - 1));
  }, [listing.photos.length]);

  const nextPhoto = useCallback(() => {
    setPhotoIndex((i) => (i === listing.photos.length - 1 ? 0 : i + 1));
  }, [listing.photos.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prevPhoto, nextPhoto]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) {
        const profile: UserProfile = JSON.parse(stored);
        setMatchScore(computeMatch(listing.ownerProfile, profile).score);
      }
    } catch {}
  }, [listing.ownerProfile]);

  const waMessage = encodeURIComponent(
    `Hi ${listing.ownerName}, I saw your listing for "${listing.title}" on Zelvo. Is it still available?`
  );
  const waUrl = `https://wa.me/${listing.ownerWhatsApp}?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md border transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Photo carousel */}
        <div className="relative bg-gray-900 rounded-t-2xl overflow-hidden" style={{ height: "320px" }}>
          {listing.photos.length > 0 && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={listing.photos[photoIndex]}
              alt={`${listing.title} — photo ${photoIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}

          {listing.photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">
                {photoIndex + 1} / {listing.photos.length}
              </div>
              <div className="absolute bottom-3 right-3 flex gap-1">
                {listing.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhotoIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === photoIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title row — match ring floated to the right when score is available */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge>{listing.bedrooms} BHK</Badge>
                <Badge variant="outline">{furnishingLabel[listing.furnishing]}</Badge>
                <Badge variant="secondary" className="capitalize">{listing.type}</Badge>
                {listing.gatedCommunity && (
                  <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">
                    <Shield className="h-3 w-3 mr-1" />
                    Gated Community
                  </Badge>
                )}
              </div>
              <h2 className="text-xl font-bold leading-snug">{listing.title}</h2>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                <MapPin className="h-4 w-4 shrink-0" />
                {listing.locality}, {listing.city}
              </div>
            </div>

            {/* Prominent match score ring */}
            {matchScore !== null && (() => {
              const c = matchColors(matchScore);
              const offset = RING_C - (matchScore / 100) * RING_C;
              return (
                <div
                  className="shrink-0 flex flex-col items-center rounded-2xl px-4 py-3 shadow-sm border"
                  style={{ backgroundColor: c.bg, borderColor: c.track }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: c.text }}>
                    Your Match
                  </div>
                  <div className="relative">
                    <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90" aria-hidden="true">
                      <circle cx="48" cy="48" r={RING_R} fill="none" stroke={c.track} strokeWidth="8" />
                      <circle
                        cx="48" cy="48" r={RING_R}
                        fill="none" stroke={c.stroke} strokeWidth="8"
                        strokeDasharray={RING_C} strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ transition: "stroke-dashoffset 0.6s ease" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold tabular-nums leading-none" style={{ color: c.stroke }}>
                        {matchScore}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-bold mt-1" style={{ color: c.text }}>{c.label}</div>
                </div>
              );
            })()}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-primary">
              ₹{listing.price.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-muted-foreground">/month</span>
            <span className="text-xs text-muted-foreground ml-2">· Zero broker fee</span>
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
                }),
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-gray-50 rounded-lg p-3 text-center">
                <Icon className="h-4 w-4 mx-auto text-primary mb-1" />
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold text-sm">{value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-sm mb-1.5">About this property</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{listing.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {listing.amenities.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 bg-green-50 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Owner + CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t">
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-primary/10 rounded-full p-2">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{listing.ownerName}</div>
                <div className="text-xs text-muted-foreground">Property Owner</div>
              </div>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href={`/listings/${listing.id}`} onClick={onClose}>
                  <ExternalLink className="h-4 w-4 mr-1.5" />
                  Full Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
