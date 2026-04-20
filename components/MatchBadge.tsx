"use client";

import { useEffect, useState } from "react";
import {
  PROFILE_STORAGE_KEY,
  computeMatch,
  type UserProfile,
} from "@/lib/profileUtils";
import type { OwnerProfile } from "@/data/listings";

interface Props {
  ownerProfile: OwnerProfile;
}

export function MatchBadge({ ownerProfile }: Props) {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) {
        const profile: UserProfile = JSON.parse(stored);
        setScore(computeMatch(ownerProfile, profile).score);
      }
    } catch {}
  }, [ownerProfile]);

  if (score === null) return null;

  const colorClass =
    score >= 75
      ? "bg-green-600 text-white"
      : score >= 50
      ? "bg-yellow-500 text-white"
      : "bg-red-500 text-white";

  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full shadow-sm ${colorClass}`}
      title="Your compatibility score with this owner"
    >
      {score}% match
    </span>
  );
}
