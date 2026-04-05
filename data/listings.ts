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
}

export const listings: Listing[] = [
  // Mumbai — Bandra
  {
    id: "mum-001",
    title: "Bright 2BHK in Bandra West",
    locality: "Bandra West",
    city: "Mumbai",
    price: 65000,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: ["Parking", "Gym", "24/7 Security", "Power Backup", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    ownerName: "Rohan Mehta",
    ownerWhatsApp: "919876543210",
    availableFrom: "2026-04-15",
    description:
      "Spacious 2BHK in the heart of Bandra West. Walking distance to Linking Road and Carter Road promenade. Fully equipped kitchen, premium furnishings. Ideal for working professionals.",
  },
  {
    id: "mum-002",
    title: "Cozy 1BHK near Bandra Station",
    locality: "Bandra East",
    city: "Mumbai",
    price: 32000,
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: ["Parking", "24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    ],
    ownerName: "Priya Shah",
    ownerWhatsApp: "919876543211",
    availableFrom: "2026-05-01",
    description:
      "Well-maintained 1BHK on 4th floor in a quiet building. 5-min walk to Bandra station. Good natural light, semi-furnished with wardrobe, beds, and kitchen cabinets.",
  },
  {
    id: "mum-003",
    title: "Luxury 3BHK with Sea View, Bandra",
    locality: "Bandra West",
    city: "Mumbai",
    price: 120000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "Swimming Pool",
      "24/7 Security",
      "Power Backup",
      "Clubhouse",
      "Lift",
    ],
    photos: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
    ownerName: "Kavita Nair",
    ownerWhatsApp: "919876543212",
    availableFrom: "2026-04-20",
    description:
      "Premium 3BHK with stunning sea views from the living room and master bedroom. Luxury building with top-notch amenities. Perfect for families or senior executives.",
  },
  // Mumbai — Andheri
  {
    id: "mum-004",
    title: "Modern 2BHK in Andheri West",
    locality: "Andheri West",
    city: "Mumbai",
    price: 48000,
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: ["Parking", "Gym", "24/7 Security", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    ownerName: "Amit Joshi",
    ownerWhatsApp: "919876543213",
    availableFrom: "2026-04-10",
    description:
      "Contemporary 2BHK in a newly constructed building in Andheri West. Close to metro station and D-Mart. Great for IT professionals working in MIDC or BKC.",
  },
  {
    id: "mum-005",
    title: "Affordable 1BHK, Andheri East",
    locality: "Andheri East",
    city: "Mumbai",
    price: 22000,
    bedrooms: 1,
    bathrooms: 1,
    area: 480,
    furnishing: "unfurnished",
    type: "apartment",
    amenities: ["24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    ],
    ownerName: "Deepak Verma",
    ownerWhatsApp: "919876543214",
    availableFrom: "2026-05-15",
    description:
      "Clean and affordable 1BHK in Andheri East. Close to SEEPZ and Chakala. Unfurnished, ready to move in. Good cross ventilation, peaceful society.",
  },
  {
    id: "mum-006",
    title: "Stylish Studio, Versova Andheri",
    locality: "Versova",
    city: "Mumbai",
    price: 28000,
    bedrooms: 1,
    bathrooms: 1,
    area: 400,
    furnishing: "fully-furnished",
    type: "studio",
    amenities: ["Parking", "24/7 Security", "Lift", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
    ownerName: "Sneha Kulkarni",
    ownerWhatsApp: "919876543215",
    availableFrom: "2026-04-25",
    description:
      "Compact, beautifully designed studio apartment near Versova beach. Fully furnished with smart storage solutions. Perfect for a single professional.",
  },
  // Mumbai — Powai
  {
    id: "mum-007",
    title: "Spacious 2BHK in Powai Hiranandani",
    locality: "Powai",
    city: "Mumbai",
    price: 55000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "Swimming Pool",
      "24/7 Security",
      "Clubhouse",
      "Lift",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    ownerName: "Sanjay Desai",
    ownerWhatsApp: "919876543216",
    availableFrom: "2026-04-01",
    description:
      "Well-appointed 2BHK in the prestigious Hiranandani township. Lake view from the balcony. Close to IIT Bombay and top IT companies. Township amenities included.",
  },
  {
    id: "mum-008",
    title: "3BHK Villa in Powai",
    locality: "Powai",
    city: "Mumbai",
    price: 90000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    furnishing: "fully-furnished",
    type: "villa",
    amenities: [
      "Parking",
      "Garden",
      "24/7 Security",
      "Power Backup",
      "Swimming Pool",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    ownerName: "Meera Iyer",
    ownerWhatsApp: "919876543217",
    availableFrom: "2026-05-01",
    description:
      "Gorgeous independent villa in Powai with private garden and modern interiors. Three large bedrooms, modular kitchen, and a private parking space. Rare find.",
  },
  {
    id: "mum-009",
    title: "2BHK near Powai Lake",
    locality: "Powai",
    city: "Mumbai",
    price: 42000,
    bedrooms: 2,
    bathrooms: 1,
    area: 780,
    furnishing: "unfurnished",
    type: "apartment",
    amenities: ["Parking", "24/7 Security", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    ],
    ownerName: "Rajan Pillai",
    ownerWhatsApp: "919876543218",
    availableFrom: "2026-06-01",
    description:
      "Affordable 2BHK with partial lake view in a well-maintained Powai society. Close to R-City Mall and Galleria. Easy access to the Eastern Express Highway.",
  },
  {
    id: "mum-010",
    title: "1BHK in L&T Powai",
    locality: "Powai",
    city: "Mumbai",
    price: 30000,
    bedrooms: 1,
    bathrooms: 1,
    area: 620,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: ["Parking", "Gym", "24/7 Security", "Lift"],
    photos: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
    ],
    ownerName: "Tanya Bose",
    ownerWhatsApp: "919876543219",
    availableFrom: "2026-04-20",
    description:
      "Well-maintained 1BHK in L&T Powai society. Gym and security included in maintenance. Ideal for a young professional. Good connectivity to both Western and Eastern suburbs.",
  },
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
  },
  // Hyderabad — Gachibowli
  {
    id: "hyd-001",
    title: "Modern 2BHK in Gachibowli IT Hub",
    locality: "Gachibowli",
    city: "Hyderabad",
    price: 22000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "Swimming Pool",
      "24/7 Security",
      "Power Backup",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    ownerName: "Suresh Reddy",
    ownerWhatsApp: "917654321000",
    availableFrom: "2026-04-12",
    description:
      "Excellent 2BHK in Gachibowli, the IT hub of Hyderabad. Walking distance to Microsoft, Google, and Infosys campuses. Clubhouse with gym and swimming pool.",
  },
  {
    id: "hyd-002",
    title: "3BHK near Financial District, Gachibowli",
    locality: "Gachibowli",
    city: "Hyderabad",
    price: 40000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "24/7 Security",
      "Power Backup",
      "Lift",
      "Clubhouse",
    ],
    photos: [
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80",
    ],
    ownerName: "Lakshmi Prasad",
    ownerWhatsApp: "917654321001",
    availableFrom: "2026-04-20",
    description:
      "Fully furnished 3BHK near the Financial District. Premium interiors, modular kitchen, and a large balcony. Close to Mindspace Tech Park and DLF Cyber City.",
  },
  {
    id: "hyd-003",
    title: "Budget 1BHK in Gachibowli",
    locality: "Gachibowli",
    city: "Hyderabad",
    price: 12000,
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    furnishing: "unfurnished",
    type: "apartment",
    amenities: ["24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    ],
    ownerName: "Ravi Varma",
    ownerWhatsApp: "917654321002",
    availableFrom: "2026-05-01",
    description:
      "Affordable 1BHK in Gachibowli. Close to all major tech parks. Unfurnished and move-in ready. Budget-friendly option for freshers starting their careers.",
  },
  // Hyderabad — Jubilee Hills
  {
    id: "hyd-004",
    title: "Luxury 3BHK in Jubilee Hills",
    locality: "Jubilee Hills",
    city: "Hyderabad",
    price: 75000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    furnishing: "fully-furnished",
    type: "apartment",
    amenities: [
      "Parking",
      "Gym",
      "Swimming Pool",
      "24/7 Security",
      "Power Backup",
      "Clubhouse",
      "Lift",
    ],
    photos: [
      "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=800&q=80",
    ],
    ownerName: "Rajesh Chandra",
    ownerWhatsApp: "917654321003",
    availableFrom: "2026-05-10",
    description:
      "Ultra-premium 3BHK in the most coveted address in Hyderabad — Jubilee Hills. Luxury amenities, designer interiors, and panoramic city views. Perfect for CXO-level executives.",
  },
  {
    id: "hyd-005",
    title: "2BHK with Terrace, Jubilee Hills",
    locality: "Jubilee Hills",
    city: "Hyderabad",
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    furnishing: "semi-furnished",
    type: "apartment",
    amenities: ["Parking", "Terrace", "24/7 Security", "Power Backup"],
    photos: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    ],
    ownerName: "Sunita Malhotra",
    ownerWhatsApp: "917654321004",
    availableFrom: "2026-04-25",
    description:
      "Charming 2BHK with a private rooftop terrace in upscale Jubilee Hills. Semi-furnished with wardrobes and modular kitchen. Close to Film Nagar and the best restaurants in town.",
  },
];

export const cities = Array.from(new Set(listings.map((l) => l.city)));
export const localities = Array.from(new Set(listings.map((l) => l.locality)));

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
