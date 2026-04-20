"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, User } from "lucide-react";
import {
  PROFILE_STORAGE_KEY,
  computeMatch,
  religionLabels,
  tenantPrefLabels,
  type UserProfile,
} from "@/lib/profileUtils";
import type { OwnerProfile } from "@/data/listings";

interface Props {
  ownerName: string;
  ownerProfile: OwnerProfile;
}

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ScoreRing({ score }: { score: number }) {
  const color =
    score >= 75 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
  const trackColor =
    score >= 75 ? "#bbf7d0" : score >= 50 ? "#fef08a" : "#fecaca";
  const bgColor =
    score >= 75 ? "bg-green-50" : score >= 50 ? "bg-yellow-50" : "bg-red-50";
  const label =
    score >= 75 ? "Great Match" : score >= 50 ? "Partial Match" : "Poor Match";
  const sublabel =
    score >= 75
      ? "You're a strong fit for this listing"
      : score >= 50
      ? "You meet some of the owner's preferences"
      : "Your preferences differ significantly";
  const dashOffset = RING_CIRCUMFERENCE - (score / 100) * RING_CIRCUMFERENCE;

  return (
    <div className={`flex flex-col items-center gap-3 rounded-2xl p-6 ${bgColor}`}>
      {/* Circular progress */}
      <div className="relative">
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          className="-rotate-90"
          aria-hidden="true"
        >
          {/* Track */}
          <circle
            cx="70"
            cy="70"
            r={RING_RADIUS}
            fill="none"
            stroke={trackColor}
            strokeWidth="10"
          />
          {/* Progress arc */}
          <circle
            cx="70"
            cy="70"
            r={RING_RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>
        {/* Score in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-3xl font-extrabold tabular-nums leading-none"
            style={{ color }}
          >
            {score}%
          </span>
          <span className="text-[11px] font-semibold mt-0.5 text-muted-foreground">
            match
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="text-center">
        <div className="font-bold text-base" style={{ color }}>
          {label}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5">{sublabel}</div>
      </div>
    </div>
  );
}

export default function OwnerTenantMatch({ ownerName, ownerProfile }: Props) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) setUserProfile(JSON.parse(stored));
    } catch {}
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-5">
      {/* Owner Preferences */}
      <div>
        <h2 className="font-semibold text-lg mb-3">Owner Preferences</h2>
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="text-sm font-medium text-muted-foreground mb-1">
            {ownerName} is looking for:
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
              ownerProfile.vegOnly
                ? "bg-green-50 text-green-800 border-green-200"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}>
              {ownerProfile.vegOnly ? "🥦 Veg only" : "🍽️ Veg & Non-veg"}
            </span>
            <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
              ownerProfile.petFriendly
                ? "bg-blue-50 text-blue-800 border-blue-200"
                : "bg-orange-50 text-orange-800 border-orange-200"
            }`}>
              {ownerProfile.petFriendly ? "🐾 Pets welcome" : "🚫 No pets"}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full border bg-purple-50 text-purple-800 border-purple-200">
              🙏 {ownerProfile.religion === "any" ? "Any religion" : `${religionLabels[ownerProfile.religion]} preferred`}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full border bg-indigo-50 text-indigo-800 border-indigo-200">
              👥 {tenantPrefLabels[ownerProfile.tenantPreference]}
            </span>
          </div>
        </div>
      </div>

      {/* Match Score */}
      {userProfile ? (
        <div>
          <h2 className="font-semibold text-lg mb-3">Your Match Score</h2>
          <div className="space-y-4">
            <ScoreRing score={computeMatch(ownerProfile, userProfile).score} />

            <div className="space-y-2">
              {computeMatch(ownerProfile, userProfile).criteria.map((c) => (
                <div key={c.label} className="flex items-start gap-3 text-sm">
                  {c.isMatch ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1">
                    <span className="font-medium">{c.label}:</span>{" "}
                    <span className="text-muted-foreground">
                      Owner wants <strong>{c.ownerValue}</strong> · You are <strong>{c.tenantValue}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Based on your{" "}
              <Link href="/profile" className="text-primary underline underline-offset-2">
                tenant profile
              </Link>
              . Update it anytime to recalculate.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-5 text-center space-y-3">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <User className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">See your match score</div>
            <p className="text-xs text-muted-foreground mt-1">
              Create a tenant profile to instantly see how well your preferences align with this owner.
            </p>
          </div>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 h-9 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Create Profile
          </Link>
        </div>
      )}
    </div>
  );
}
