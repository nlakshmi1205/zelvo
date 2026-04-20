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

const RADIUS = 11;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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

  const color =
    score >= 75 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
  const trackColor =
    score >= 75 ? "#bbf7d0" : score >= 50 ? "#fef08a" : "#fecaca";
  const bgColor =
    score >= 75 ? "#f0fdf4" : score >= 50 ? "#fefce8" : "#fff1f2";
  const label =
    score >= 75 ? "Great" : score >= 50 ? "Partial" : "Low";
  const dashOffset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div
      className="flex items-center gap-1.5 rounded-lg px-1.5 py-0.5"
      style={{ backgroundColor: bgColor }}
      title={`${score}% compatibility with owner`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className="-rotate-90 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="14"
          cy="14"
          r={RADIUS}
          fill="none"
          stroke={trackColor}
          strokeWidth="3"
        />
        <circle
          cx="14"
          cy="14"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className="text-[11px] font-extrabold tabular-nums"
          style={{ color }}
        >
          {score}%
        </span>
        <span className="text-[9px] font-medium" style={{ color }}>
          {label}
        </span>
      </div>
    </div>
  );
}
