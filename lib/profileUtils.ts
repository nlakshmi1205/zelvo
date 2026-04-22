import type { OwnerProfile, Religion, TenantPreference } from "@/data/listings";

export type MaritalStatus = "single" | "married" | "family";
export type Gender = "male" | "female" | "other" | "prefer_not_to_say";

export interface UserProfile {
  name: string;
  gender: Gender;
  isVeg: boolean;
  hasPets: boolean;
  religion: Religion;
  maritalStatus: MaritalStatus;
}

export const PROFILE_STORAGE_KEY = "zelvo_user_profile";

export const religionLabels: Record<Religion, string> = {
  any: "Any",
  hindu: "Hindu",
  muslim: "Muslim",
  christian: "Christian",
  jain: "Jain",
  sikh: "Sikh",
};

export const tenantPrefLabels: Record<TenantPreference, string> = {
  any: "Anyone",
  married: "Married Couples",
  family: "Families",
};

export const genderLabels: Record<Gender, string> = {
  male: "Male",
  female: "Female",
  other: "Other",
  prefer_not_to_say: "Prefer not to say",
};

export const maritalStatusLabels: Record<MaritalStatus, string> = {
  single: "Single / Bachelors",
  married: "Married Couple",
  family: "Family with Kids",
};

export interface MatchCriteria {
  label: string;
  ownerValue: string;
  tenantValue: string;
  isMatch: boolean;
}

export interface MatchResult {
  score: number; // 0–100
  criteria: MatchCriteria[];
  matchCount: number;
  totalCount: number;
}

export function computeMatch(
  ownerProfile: OwnerProfile,
  userProfile: UserProfile
): MatchResult {
  const criteria: MatchCriteria[] = [];

  // 1. Veg preference
  const vegMatch = !ownerProfile.vegOnly || userProfile.isVeg;
  criteria.push({
    label: "Diet preference",
    ownerValue: ownerProfile.vegOnly ? "Veg only" : "Veg & Non-veg",
    tenantValue: userProfile.isVeg ? "Vegetarian" : "Non-vegetarian",
    isMatch: vegMatch,
  });

  // 2. Pet policy
  const petMatch = ownerProfile.petFriendly || !userProfile.hasPets;
  criteria.push({
    label: "Pet policy",
    ownerValue: ownerProfile.petFriendly ? "Pets allowed" : "No pets",
    tenantValue: userProfile.hasPets ? "Has pets" : "No pets",
    isMatch: petMatch,
  });

  // 3. Religion preference
  const religionMatch =
    ownerProfile.religion === "any" ||
    userProfile.religion === "any" ||
    ownerProfile.religion === userProfile.religion;
  criteria.push({
    label: "Religion",
    ownerValue: religionLabels[ownerProfile.religion],
    tenantValue: religionLabels[userProfile.religion],
    isMatch: religionMatch,
  });

  // 4. Tenant type preference
  let tenantTypeMatch = true;
  if (ownerProfile.tenantPreference === "married") {
    tenantTypeMatch = userProfile.maritalStatus === "married" || userProfile.maritalStatus === "family";
  } else if (ownerProfile.tenantPreference === "family") {
    tenantTypeMatch = userProfile.maritalStatus === "family";
  }
  criteria.push({
    label: "Tenant type",
    ownerValue: tenantPrefLabels[ownerProfile.tenantPreference],
    tenantValue: maritalStatusLabels[userProfile.maritalStatus],
    isMatch: tenantTypeMatch,
  });

  const matchCount = criteria.filter((c) => c.isMatch).length;
  const totalCount = criteria.length;
  const score = Math.round((matchCount / totalCount) * 100);

  return { score, criteria, matchCount, totalCount };
}
