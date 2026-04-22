"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, CheckCircle2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PROFILE_STORAGE_KEY,
  religionLabels,
  maritalStatusLabels,
  genderLabels,
  type UserProfile,
  type MaritalStatus,
  type Gender,
} from "@/lib/profileUtils";
import type { Religion } from "@/data/listings";

const RELIGIONS: Religion[] = ["any", "hindu", "muslim", "christian", "jain", "sikh"];
const MARITAL_STATUSES: MaritalStatus[] = ["single", "married", "family"];
const GENDERS: Gender[] = ["male", "female", "other", "prefer_not_to_say"];

const defaultProfile: UserProfile = {
  name: "",
  gender: "prefer_not_to_say",
  isVeg: false,
  hasPets: false,
  religion: "any",
  maritalStatus: "single",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) setProfile(JSON.parse(stored));
    } catch {}
  }, []);

  function handleSave() {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleClear() {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    setProfile(defaultProfile);
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">My Profile</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16 max-w-xl">
        <Link
          href="/listings"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4 -ml-2 px-2 py-1 rounded"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to listings
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-full">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Your Tenant Profile</h1>
            <p className="text-sm text-muted-foreground">
              Set your preferences to see how well you match with each listing.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Your name</label>
            <Input
              placeholder="e.g. Priya Sharma"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Gender</label>
            <div className="grid grid-cols-2 gap-2">
              {GENDERS.map((g) => (
                <button
                  key={g}
                  onClick={() => setProfile({ ...profile, gender: g })}
                  className={`py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                    profile.gender === g
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground hover:border-primary"
                  }`}
                >
                  {genderLabels[g]}
                </button>
              ))}
            </div>
          </div>

          {/* Diet */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Diet preference</label>
            <div className="flex gap-3">
              {[
                { label: "Vegetarian", value: true },
                { label: "Non-vegetarian", value: false },
              ].map(({ label, value }) => (
                <button
                  key={label}
                  onClick={() => setProfile({ ...profile, isVeg: value })}
                  className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                    profile.isVeg === value
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground hover:border-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Pets */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Do you have pets?</label>
            <div className="flex gap-3">
              {[
                { label: "Yes, I have pets", value: true },
                { label: "No pets", value: false },
              ].map(({ label, value }) => (
                <button
                  key={label}
                  onClick={() => setProfile({ ...profile, hasPets: value })}
                  className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                    profile.hasPets === value
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground hover:border-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Religion */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Religion</label>
            <div className="grid grid-cols-3 gap-2">
              {RELIGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setProfile({ ...profile, religion: r })}
                  className={`py-2 rounded-lg border text-sm font-medium transition-colors ${
                    profile.religion === r
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground hover:border-primary"
                  }`}
                >
                  {religionLabels[r]}
                </button>
              ))}
            </div>
          </div>

          {/* Marital status */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Household type</label>
            <div className="flex flex-col gap-2">
              {MARITAL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setProfile({ ...profile, maritalStatus: s })}
                  className={`py-2.5 rounded-lg border text-sm font-medium transition-colors text-left px-4 ${
                    profile.maritalStatus === s
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground hover:border-primary"
                  }`}
                >
                  {maritalStatusLabels[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1" onClick={handleSave} disabled={!profile.name.trim()}>
              {saved ? (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Saved!
                </>
              ) : (
                "Save Profile"
              )}
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          {saved && (
            <p className="text-sm text-green-600 text-center">
              Profile saved. View a listing to see your match score!
            </p>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Your profile is stored locally on this device only. No account required.
        </p>
      </div>
    </main>
  );
}
