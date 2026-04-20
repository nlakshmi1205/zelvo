export type Religion = "any" | "hindu" | "muslim" | "christian" | "jain" | "sikh";
export type TenantPreference = "any" | "married" | "family";

export interface OwnerProfile {
  petFriendly: boolean;
  vegOnly: boolean;
  religion: Religion; // "any" = no religion restriction
  tenantPreference: TenantPreference; // "any" | "married" | "family"
}

export interface Listing {
  id: string;
  title: string;
  locality: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnishing: "unfurnished" | "semi-furnished" | "fully-furnished";
  type: "apartment" | "villa" | "studio";
  amenities: string[];
  photos: string[];
  ownerName: string;
  ownerWhatsApp: string;
  availableFrom: string;
  description: string;
  ownerProfile: OwnerProfile;
}

export const listings: Listing[] = [
  // Bangalore — Koramangala
  {
    id: "blr-001",
    title: "Modern 2BHK in Koramangala 4th Block",
    locality: "Koramangala",
    city: "Bangalore",
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: ["Parking", "Gym", "24/7 Security", "Power Backup", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
    ],
    ownerName: "Vikram Rao",
    ownerWhatsApp: "918765432100",
    availableFrom: "2026-04-10",
    description:
      "Prime 2BHK in the startup hub of Koramangala 4th Block. Fully furnished with AC in all rooms. Walking distance to Forum Mall, Café Coffee Day, and top restaurants.",
    ownerProfile: { petFriendly: false, vegOnly: true, religion: "any", tenantPreference: "any" },
  },
  {
    id: "blr-002",
    title: "Spacious 3BHK, Koramangala 5th Block",
    locality: "Koramangala",
    city: "Bangalore",
    price: 55000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: ["Parking", "24/7 Security", "Power Backup", "Clubhouse"],
    photos: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    ],
    ownerName: "Ananya Krishnan",
    ownerWhatsApp: "918765432101",
    availableFrom: "2026-05-01",
    description:
      "Large 3BHK ideal for families or flatmates. Semi-furnished with wardrobes and kitchen fittings. Close to IIMB, National Games Village, and Outer Ring Road.",
    ownerProfile: { petFriendly: true, vegOnly: false, religion: "any", tenantPreference: "family" },
  },
  {
    id: "blr-003",
    title: "Cozy 1BHK Studio, Koramangala",
    locality: "Koramangala",
    city: "Bangalore",
    price: 18000,
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    furnishing: "fully-furnished",
    type: "studio",
    amenities: ["24/7 Security", "Power Backup", "Wifi"],
    photos: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    ],
    ownerName: "Siddharth Menon",
    ownerWhatsApp: "918765432102",
    availableFrom: "2026-04-01",
    description:
      "Compact, fully-furnished studio in the heart of Koramangala. Perfect for solo professionals. High-speed wifi included. Walking distance to Indiranagar and central Koramangala.",
    ownerProfile: { petFriendly: false, vegOnly: false, religion: "any", tenantPreference: "any" },
  },
  // Bangalore — HSR Layout
  {
    id: "blr-004",
    title: "Premium 2BHK in HSR Layout Sector 1",
    locality: "HSR Layout",
    city: "Bangalore",
    price: 28000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "24/7 Security",
      "Power Backup",
      "Children's Play Area",
    ],
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    ownerName: "Pooja Reddy",
    ownerWhatsApp: "918765432103",
    availableFrom: "2026-04-15",
    description:
      "Well-maintained 2BHK in HSR Layout with excellent connectivity to Sarjapur Road and Electronic City. Great for tech professionals. Nearby supermarkets, hospitals, and parks.",
    ownerProfile: { petFriendly: true, vegOnly: true, religion: "hindu", tenantPreference: "any" },
  },
  {
    id: "blr-005",
    title: "1BHK with Garden View, HSR Layout",
    locality: "HSR Layout",
    city: "Bangalore",
    price: 15000,
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    furnishing: "unfurnished",
    type: "apartment",
    amenities: ["Parking", "24/7 Security"],
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    ownerName: "Mahesh Kumar",
    ownerWhatsApp: "918765432104",
    availableFrom: "2026-05-15",
    description:
      "Ground floor 1BHK with a small garden-facing balcony in a quiet lane in HSR Layout Sector 2. Unfurnished, newly painted, ready to move in.",
    ownerProfile: { petFriendly: false, vegOnly: true, religion: "any", tenantPreference: "married" },
  },
  {
    id: "blr-006",
    title: "3BHK Villa, HSR Layout Sector 6",
    locality: "HSR Layout",
    city: "Bangalore",
    price: 70000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    furnishing: "fully-furnished",
    type: "villa",
    amenities: ["Parking", "Garden", "24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
    ownerName: "Geeta Sharma",
    ownerWhatsApp: "918765432105",
    availableFrom: "2026-04-20",
    description:
      "Elegant independent villa in HSR Layout Sector 6 with a private garden and covered parking for 2 cars. Fully furnished with premium furniture. Rare rental opportunity.",
    ownerProfile: { petFriendly: true, vegOnly: false, religion: "any", tenantPreference: "family" },
  },
  // Bangalore — Indiranagar
  {
    id: "blr-007",
    title: "Trendy 2BHK in Indiranagar 12th Main",
    locality: "Indiranagar",
    city: "Bangalore",
    price: 40000,
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: ["Parking", "Gym", "24/7 Security", "Lift", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    ownerName: "Rahul Menon",
    ownerWhatsApp: "918765432106",
    availableFrom: "2026-04-08",
    description:
      "Stylish 2BHK on the coveted 12th Main in Indiranagar. Steps from top cafés, restaurants, and the metro. Premium building with rooftop access. Ideal for young professionals.",
    ownerProfile: { petFriendly: false, vegOnly: false, religion: "any", tenantPreference: "any" },
  },
  {
    id: "blr-008",
    title: "1BHK near Indiranagar Metro",
    locality: "Indiranagar",
    city: "Bangalore",
    price: 20000,
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: ["24/7 Security", "Power Backup", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
    ],
    ownerName: "Divya Nair",
    ownerWhatsApp: "918765432107",
    availableFrom: "2026-05-01",
    description:
      "Convenient 1BHK just 200m from Indiranagar metro station. Semi-furnished with wardrobe and kitchen cabinets. Perfect base for professionals who commute frequently.",
    ownerProfile: { petFriendly: false, vegOnly: true, religion: "any", tenantPreference: "any" },
  },
  {
    id: "blr-009",
    title: "Luxury 3BHK Penthouse, Indiranagar",
    locality: "Indiranagar",
    city: "Bangalore",
    price: 95000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "Terrace",
      "24/7 Security",
      "Power Backup",
      "Lift",
      "Clubhouse",
    ],
    photos: [
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80",
    ],
    ownerName: "Arjun Patel",
    ownerWhatsApp: "918765432108",
    availableFrom: "2026-05-15",
    description:
      "Spectacular penthouse with private terrace and 360° city views. Premium furnishings, Italian marble flooring, modular kitchen. The ultimate Indiranagar address.",
    ownerProfile: { petFriendly: true, vegOnly: false, religion: "any", tenantPreference: "any" },
  },
  {
    id: "blr-010",
    title: "2BHK Apartment, Indiranagar 100ft Road",
    locality: "Indiranagar",
    city: "Bangalore",
    price: 30000,
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    furnishing: "unfurnished",
    type: "apartment",
    amenities: ["Parking", "24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80",
    ],
    ownerName: "Kiran Rao",
    ownerWhatsApp: "918765432109",
    availableFrom: "2026-06-01",
    description:
      "Clean and spacious 2BHK on the 100ft Road in Indiranagar. Unfurnished, freshly painted with new tiling. Ready to move in with your own furniture.",
    ownerProfile: { petFriendly: false, vegOnly: false, religion: "hindu", tenantPreference: "married" },
  },
];

export const cities = Array.from(new Set(listings.map((l) => l.city)));
export const localities = Array.from(new Set(listings.map((l) => l.locality)));

export const techParks = [
  "Koramangala",
  "HSR Layout",
  "Indiranagar",
  "Electronic City",
  "Whitefield / ITPL",
  "Marathahalli",
  "Sarjapur Road",
  "Bellandur",
  "Hebbal / Manyata",
  "Bagmane Tech Park",
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function filterListings(params: {
  city?: string;
  locality?: string;
  bedrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  furnishing?: string;
}): Listing[] {
  return listings.filter((l) => {
    if (params.city && l.city !== params.city) return false;
    if (params.locality && l.locality !== params.locality) return false;
    if (params.bedrooms && l.bedrooms !== params.bedrooms) return false;
    if (params.minPrice && l.price < params.minPrice) return false;
    if (params.maxPrice && l.price > params.maxPrice) return false;
    if (params.furnishing && l.furnishing !== params.furnishing) return false;
    return true;
  });
}
