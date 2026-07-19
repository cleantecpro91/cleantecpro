// CleanTecPro - Service Categories, Emirates, Cities & Menu Data
// This file drives the mega menu, search, and location architecture

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  subcategories: {
    name: string;
    slug: string;
    services: {
      name: string;
      slug: string;
      price?: string;
      shortDescription?: string;
      description?: string;
      whatsIncluded?: string;
      processSteps?: string;
      priceUnit?: string;
      durationEstimate?: string;
    }[];
  }[];
}

export const BRAND = {
  shortName: "CleanTecPro",
  fullName: "CleanTech Professional Technical And Cleaning Services",
  phone: "0544410488",
  phoneFormatted: "+971 54 441 0488",
  whatsapp: "971544410488",
  email: "support@cleantecpro.com",
  address: "Cyan Centre 202, Business Bay, Dubai, UAE",
  website: "https://www.cleantecpro.com",
  currency: "AED",
} as const;

export const UAE_EMIRATES = [
  {
    name: "Dubai",
    slug: "dubai",
    description: "Premium technical and cleaning services across all Dubai neighborhoods including Business Bay, Marina, JLT, Downtown, and more.",
    isPrimary: false,
    cities: [
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Jumeirah Lake Towers", slug: "jlt" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "JBR", slug: "jbr" },
      { name: "Al Barsha", slug: "al-barsha" },
      { name: "Deira", slug: "deira" },
      { name: "Bur Dubai", slug: "bur-dubai" },
      { name: "Palm Jumeirah", slug: "palm-jumeirah" },
      { name: "JVC", slug: "jvc" },
      { name: "Al Quoz", slug: "al-quoz" },
      { name: "Motor City", slug: "motor-city" },
      { name: "Sports City", slug: "sports-city" },
      { name: "International City", slug: "international-city" },
      { name: "Al Nahda", slug: "al-nahda-dubai" },
      { name: "Mirdif", slug: "mirdif" },
    ],
  },
  {
    name: "Sharjah",
    slug: "sharjah",
    isPrimary: true,
    description: "Trusted cleaning, maintenance, and technical services throughout Sharjah. From Al Nahda to Al Khan, Muwaileh to Al Majaz — we serve every neighborhood with dedicated local teams.",
    cities: [
      { name: "Al Nahda", slug: "al-nahda-sharjah" },
      { name: "Al Majaz", slug: "al-majaz" },
      { name: "Al Khan", slug: "al-khan" },
      { name: "Muwaileh", slug: "muwaileh" },
      { name: "Al Taawun", slug: "al-taawun" },
      { name: "Al Qasimia", slug: "al-qasimia" },
      { name: "Al Nabba", slug: "al-nabba" },
      { name: "Al Rolla", slug: "al-rolla" },
      { name: "University City", slug: "university-city" },
      { name: "Aljada", slug: "aljada" },
      { name: "Tilal City", slug: "tilal-city" },
      { name: "Al Zahia", slug: "al-zahia" },
      { name: "Sharjah Industrial Area", slug: "sharjah-industrial" },
      { name: "Al Mamzar", slug: "al-mamzar" },
      { name: "Al Riqqah", slug: "al-riqqah" },
    ],
  },
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    description: "Comprehensive home and commercial services across Abu Dhabi island and mainland areas.",
    isPrimary: false,
    cities: [
      { name: "Al Reem Island", slug: "al-reem-island" },
      { name: "Khalifa City", slug: "khalifa-city" },
      { name: "Al Raha Beach", slug: "al-raha-beach" },
      { name: "Mohammed Bin Zayed City", slug: "mbz-city" },
      { name: "Tourist Club Area", slug: "tourist-club-area" },
      { name: "Corniche", slug: "corniche-abu-dhabi" },
      { name: "Saadiyat Island", slug: "saadiyat-island" },
      { name: "Yas Island", slug: "yas-island" },
    ],
  },
  {
    name: "Ajman",
    slug: "ajman",
    description: "Affordable and reliable services across Ajman's residential and commercial areas.",
    isPrimary: false,
    cities: [
      { name: "Al Rashidiya", slug: "al-rashidiya" },
      { name: "Al Nuaimiya", slug: "al-nuaimiya" },
      { name: "Emirates City", slug: "emirates-city" },
      { name: "Al Jurf", slug: "al-jurf" },
      { name: "Al Rawda", slug: "al-rawda-ajman" },
    ],
  },
  {
    name: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    description: "Professional services for Ras Al Khaimah homes and businesses.",
    isPrimary: false,
    cities: [
      { name: "Al Nakheel", slug: "al-nakheel" },
      { name: "Al Hamra Village", slug: "al-hamra-village" },
      { name: "Mina Al Arab", slug: "mina-al-arab" },
    ],
  },
  {
    name: "Fujairah",
    slug: "fujairah",
    description: "Technical and cleaning services covering Fujairah city and surrounding areas.",
    isPrimary: false,
    cities: [
      { name: "Fujairah City", slug: "fujairah-city" },
      { name: "Dibba", slug: "dibba" },
    ],
  },
  {
    name: "Umm Al Quwain",
    slug: "umm-al-quwain",
    description: "Service coverage across Umm Al Quwain's key residential and commercial zones.",
    isPrimary: false,
    cities: [
      { name: "Old Town Area", slug: "old-town-uaq" },
      { name: "Al Salamah", slug: "al-salamah" },
    ],
  },
  {
    name: "Al Ain",
    slug: "al-ain",
    description: "Dependable maintenance and cleaning services for Al Ain's residential communities.",
    isPrimary: false,
    cities: [
      { name: "Al Jimi", slug: "al-jimi" },
      { name: "Al Muwaiji", slug: "al-muwaiji" },
      { name: "Al Towayya", slug: "al-towayya" },
      { name: "Al Khabisi", slug: "al-khabisi" },
    ],
  },
] as const;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Cleaning Services",
    slug: "cleaning",
    icon: "🧹",
    description: "Professional cleaning services for homes, offices, and commercial spaces across the UAE.",
    subcategories: [
      {
        name: "Deep Cleaning",
        slug: "deep-cleaning",
        services: [
          { name: "Deep Home Cleaning", slug: "deep-home-cleaning", price: "199" },
          { name: "Move-In Move-Out Cleaning", slug: "move-in-move-out-cleaning", price: "299" },
          { name: "Post Construction Cleaning", slug: "post-construction-cleaning", price: "399" },
          { name: "Spring Cleaning", slug: "spring-cleaning", price: "249" },
        ],
      },
      {
        name: "Regular Cleaning",
        slug: "regular-cleaning",
        services: [
          { name: "House Cleaning", slug: "house-cleaning", price: "109" },
          { name: "Apartment Cleaning", slug: "apartment-cleaning", price: "99" },
          { name: "Villa Cleaning", slug: "villa-cleaning", price: "179" },
          { name: "Office Cleaning", slug: "office-cleaning", price: "149" },
          { name: "Weekly Cleaning Service", slug: "weekly-cleaning", price: "89" },
          { name: "Monthly Cleaning Service", slug: "monthly-cleaning", price: "349" },
        ],
      },
      {
        name: "Specialized Cleaning",
        slug: "specialized-cleaning",
        services: [
          { name: "Sofa Cleaning", slug: "sofa-cleaning", price: "129" },
          { name: "Carpet Cleaning", slug: "carpet-cleaning", price: "99" },
          { name: "Mattress Cleaning", slug: "mattress-cleaning", price: "89" },
          { name: "Curtain Cleaning", slug: "curtain-cleaning", price: "109" },
          { name: "Water Tank Cleaning", slug: "water-tank-cleaning", price: "299" },
          { name: "Kitchen Deep Cleaning", slug: "kitchen-deep-cleaning", price: "179" },
          { name: "Bathroom Deep Cleaning", slug: "bathroom-deep-cleaning", price: "99" },
          { name: "Window Cleaning", slug: "window-cleaning", price: "119" },
        ],
      },
      {
        name: "Facade & Exterior",
        slug: "facade-exterior",
        services: [
          { name: "Facade Cleaning", slug: "facade-cleaning", price: "499" },
          { name: "Pressure Washing", slug: "pressure-washing", price: "249" },
          { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", price: "199" },
        ],
      },
      {
        name: "Sanitization",
        slug: "sanitization",
        services: [
          { name: "Home Disinfection", slug: "home-disinfection", price: "149" },
          { name: "Office Disinfection", slug: "office-disinfection", price: "199" },
          { name: "Villa Sanitization", slug: "villa-sanitization", price: "249" },
        ],
      },
    ],
  },
  {
    name: "AC & HVAC Services",
    slug: "ac-hvac",
    icon: "❄️",
    description: "Air conditioning installation, repair, maintenance, and duct cleaning for all AC brands in the UAE.",
    subcategories: [
      {
        name: "AC Maintenance",
        slug: "ac-maintenance",
        services: [
          { name: "AC Cleaning", slug: "ac-cleaning", price: "89" },
          { name: "AC Gas Refill", slug: "ac-gas-refill", price: "149" },
          { name: "AC Filter Cleaning", slug: "ac-filter-cleaning", price: "59" },
          { name: "AC Annual Maintenance", slug: "ac-annual-maintenance", price: "599" },
        ],
      },
      {
        name: "AC Repair",
        slug: "ac-repair",
        services: [
          { name: "AC Not Cooling Repair", slug: "ac-not-cooling-repair", price: "149" },
          { name: "AC Water Leak Repair", slug: "ac-water-leak-repair", price: "129" },
          { name: "AC Thermostat Repair", slug: "ac-thermostat-repair", price: "109" },
          { name: "AC Compressor Repair", slug: "ac-compressor-repair", price: "299" },
        ],
      },
      {
        name: "AC Installation",
        slug: "ac-installation",
        services: [
          { name: "Split AC Installation", slug: "split-ac-installation", price: "349" },
          { name: "Window AC Installation", slug: "window-ac-installation", price: "199" },
          { name: "Central AC Service", slug: "central-ac-service", price: "499" },
        ],
      },
      {
        name: "Duct Cleaning",
        slug: "duct-cleaning",
        services: [
          { name: "AC Duct Cleaning", slug: "ac-duct-cleaning", price: "399" },
          { name: "Kitchen Exhaust Cleaning", slug: "kitchen-exhaust-cleaning", price: "299" },
          { name: "Dryer Vent Cleaning", slug: "dryer-vent-cleaning", price: "149" },
        ],
      },
    ],
  },
  {
    name: "Plumbing Services",
    slug: "plumbing",
    icon: "🔧",
    description: "Expert plumbing repair, installation, and emergency services across the UAE.",
    subcategories: [
      {
        name: "Plumbing Repair",
        slug: "plumbing-repair",
        services: [
          { name: "Leak Repair", slug: "leak-repair", price: "129" },
          { name: "Pipe Repair", slug: "pipe-repair", price: "149" },
          { name: "Faucet Repair", slug: "faucet-repair", price: "89" },
          { name: "Drain Cleaning", slug: "drain-cleaning", price: "149" },
          { name: "Toilet Repair", slug: "toilet-repair", price: "99" },
        ],
      },
      {
        name: "Plumbing Installation",
        slug: "plumbing-installation",
        services: [
          { name: "Water Heater Installation", slug: "water-heater-installation", price: "299" },
          { name: "Water Heater Repair", slug: "water-heater-repair", price: "149" },
          { name: "Sink Installation", slug: "sink-installation", price: "199" },
          { name: "Shower Installation", slug: "shower-installation", price: "249" },
        ],
      },
      {
        name: "Water Systems",
        slug: "water-systems",
        services: [
          { name: "Water Pump Installation", slug: "water-pump-installation", price: "349" },
          { name: "Water Pump Repair", slug: "water-pump-repair", price: "199" },
          { name: "Water Filter Installation", slug: "water-filter-installation", price: "249" },
        ],
      },
    ],
  },
  {
    name: "Electrical Services",
    slug: "electrical",
    icon: "⚡",
    description: "Licensed electrical work including installations, repairs, and safety inspections.",
    subcategories: [
      {
        name: "Electrical Repair",
        slug: "electrical-repair",
        services: [
          { name: "Power Socket Repair", slug: "power-socket-repair", price: "89" },
          { name: "Circuit Breaker Repair", slug: "circuit-breaker-repair", price: "149" },
          { name: "Electrical Fault Finding", slug: "electrical-fault-finding", price: "129" },
          { name: "DB Box Work", slug: "db-box-work", price: "249" },
        ],
      },
      {
        name: "Electrical Installation",
        slug: "electrical-installation",
        services: [
          { name: "Light Installation", slug: "light-installation", price: "79" },
          { name: "Chandelier Installation", slug: "chandelier-installation", price: "199" },
          { name: "Ceiling Fan Installation", slug: "ceiling-fan-installation", price: "129" },
          { name: "Exhaust Fan Installation", slug: "exhaust-fan-installation", price: "99" },
          { name: "Wiring & Rewiring", slug: "wiring-rewiring", price: "349" },
        ],
      },
    ],
  },
  {
    name: "Handyman Services",
    slug: "handyman",
    icon: "🔨",
    description: "Skilled handyman services for all minor and major home repair needs.",
    subcategories: [
      {
        name: "General Handyman",
        slug: "general-handyman",
        services: [
          { name: "Furniture Assembly", slug: "furniture-assembly", price: "99" },
          { name: "TV Mounting", slug: "tv-mounting", price: "89" },
          { name: "Shelf Installation", slug: "shelf-installation", price: "79" },
          { name: "Door Repair", slug: "door-repair", price: "99" },
          { name: "Lock Installation", slug: "lock-installation", price: "109" },
          { name: "Curtain Installation", slug: "curtain-installation", price: "69" },
        ],
      },
      {
        name: "Carpentry",
        slug: "carpentry",
        services: [
          { name: "Custom Carpentry", slug: "custom-carpentry", price: "199" },
          { name: "Cabinet Repair", slug: "cabinet-repair", price: "149" },
          { name: "Door Replacement", slug: "door-replacement", price: "249" },
        ],
      },
      {
        name: "Painting",
        slug: "painting",
        services: [
          { name: "Interior Painting", slug: "interior-painting", price: "399" },
          { name: "Exterior Painting", slug: "exterior-painting", price: "599" },
          { name: "Wallpaper Installation", slug: "wallpaper-installation", price: "299" },
          { name: "Touch-Up Painting", slug: "touch-up-painting", price: "149" },
        ],
      },
    ],
  },
  {
    name: "Renovation & Fit-Out",
    slug: "renovation",
    icon: "🏗️",
    description: "Complete renovation, fit-out, and construction finishing services for residential and commercial properties.",
    subcategories: [
      {
        name: "Renovation",
        slug: "renovation-work",
        services: [
          { name: "Kitchen Renovation", slug: "kitchen-renovation", price: "3999" },
          { name: "Bathroom Renovation", slug: "bathroom-renovation", price: "2999" },
          { name: "Full Apartment Renovation", slug: "full-apartment-renovation", price: "9999" },
          { name: "Villa Renovation", slug: "villa-renovation", price: "14999" },
        ],
      },
      {
        name: "Fit-Out",
        slug: "fit-out",
        services: [
          { name: "Office Fit-Out", slug: "office-fit-out", price: "7999" },
          { name: "Retail Fit-Out", slug: "retail-fit-out", price: "9999" },
          { name: "Restaurant Fit-Out", slug: "restaurant-fit-out", price: "14999" },
        ],
      },
      {
        name: "Specialty Work",
        slug: "specialty-work",
        services: [
          { name: "Gypsum Partition", slug: "gypsum-partition", price: "499" },
          { name: "Ceiling Work", slug: "ceiling-work", price: "399" },
          { name: "Tiling", slug: "tiling", price: "299" },
          { name: "Flooring", slug: "flooring", price: "349" },
          { name: "Masonry", slug: "masonry", price: "299" },
          { name: "Waterproofing", slug: "waterproofing", price: "449" },
          { name: "Glass Work", slug: "glass-work", price: "399" },
          { name: "Aluminum Work", slug: "aluminum-work", price: "349" },
        ],
      },
    ],
  },
  {
    name: "Pest Control",
    slug: "pest-control",
    icon: "🛡️",
    description: "Professional pest control and extermination services for all types of pests.",
    subcategories: [
      {
        name: "General Pest Control",
        slug: "general-pest-control",
        services: [
          { name: "Cockroach Control", slug: "cockroach-control", price: "149" },
          { name: "Ant Control", slug: "ant-control", price: "129" },
          { name: "Spider Control", slug: "spider-control", price: "129" },
          { name: "General Pest Treatment", slug: "general-pest-treatment", price: "199" },
        ],
      },
      {
        name: "Specialized Pest Control",
        slug: "specialized-pest-control",
        services: [
          { name: "Bed Bug Treatment", slug: "bed-bug-treatment", price: "299" },
          { name: "Termite Control", slug: "termite-control", price: "499" },
          { name: "Rodent Control", slug: "rodent-control", price: "249" },
          { name: "Mosquito Control", slug: "mosquito-control", price: "199" },
          { name: "Bird Control", slug: "bird-control", price: "349" },
        ],
      },
    ],
  },
  {
    name: "Appliance Repair",
    slug: "appliance-repair",
    icon: "🔌",
    description: "Expert repair services for all major home appliances and brands.",
    subcategories: [
      {
        name: "Washing Machine",
        slug: "washing-machine-repair",
        services: [
          { name: "Washing Machine Repair", slug: "washing-machine-repair", price: "149" },
          { name: "Dryer Repair", slug: "dryer-repair", price: "129" },
        ],
      },
      {
        name: "Refrigerator",
        slug: "refrigerator-repair",
        services: [
          { name: "Refrigerator Repair", slug: "refrigerator-repair", price: "179" },
          { name: "Freezer Repair", slug: "freezer-repair", price: "149" },
        ],
      },
      {
        name: "Kitchen Appliances",
        slug: "kitchen-appliance-repair",
        services: [
          { name: "Cooker Repair", slug: "cooker-repair", price: "129" },
          { name: "Oven Repair", slug: "oven-repair", price: "149" },
          { name: "Dishwasher Repair", slug: "dishwasher-repair", price: "149" },
          { name: "Microwave Repair", slug: "microwave-repair", price: "99" },
        ],
      },
      {
        name: "Water Systems",
        slug: "water-system-repair",
        services: [
          { name: "Water Dispenser Repair", slug: "water-dispenser-repair", price: "99" },
          { name: "Water Heater Repair", slug: "water-heater-repair-appliance", price: "149" },
        ],
      },
    ],
  },
  {
    name: "Moving & Relocation",
    slug: "movers",
    icon: "🚛",
    description: "Professional moving, packing, and storage services across all UAE emirates.",
    subcategories: [
      {
        name: "Residential Moving",
        slug: "residential-moving",
        services: [
          { name: "Apartment Moving", slug: "apartment-moving", price: "599" },
          { name: "Villa Moving", slug: "villa-moving", price: "999" },
          { name: "Studio Moving", slug: "studio-moving", price: "399" },
        ],
      },
      {
        name: "Commercial Moving",
        slug: "commercial-moving",
        services: [
          { name: "Office Moving", slug: "office-moving", price: "1499" },
          { name: "Warehouse Moving", slug: "warehouse-moving", price: "2999" },
        ],
      },
      {
        name: "Packing & Storage",
        slug: "packing-storage",
        services: [
          { name: "Professional Packing", slug: "professional-packing", price: "299" },
          { name: "Storage Service", slug: "storage-service", price: "499" },
          { name: "Furniture Moving", slug: "furniture-moving", price: "349" },
        ],
      },
    ],
  },
  {
    name: "Garden & Outdoor",
    slug: "garden-outdoor",
    icon: "🌿",
    description: "Complete garden maintenance, landscaping, and outdoor care services.",
    subcategories: [
      {
        name: "Garden Maintenance",
        slug: "garden-maintenance",
        services: [
          { name: "Lawn Mowing", slug: "lawn-mowing", price: "99" },
          { name: "Garden Cleanup", slug: "garden-cleanup", price: "149" },
          { name: "Hedge Trimming", slug: "hedge-trimming", price: "89" },
          { name: "Tree Trimming", slug: "tree-trimming", price: "199" },
          { name: "Plant Maintenance", slug: "plant-maintenance", price: "129" },
        ],
      },
      {
        name: "Landscaping",
        slug: "landscaping",
        services: [
          { name: "Landscape Design", slug: "landscape-design", price: "999" },
          { name: "Irrigation System", slug: "irrigation-system", price: "799" },
          { name: "Artificial Grass Installation", slug: "artificial-grass", price: "499" },
        ],
      },
      {
        name: "Pool Services",
        slug: "pool-services",
        services: [
          { name: "Pool Cleaning", slug: "pool-cleaning", price: "149" },
          { name: "Pool Maintenance", slug: "pool-maintenance", price: "299" },
          { name: "Pool Repair", slug: "pool-repair", price: "499" },
        ],
      },
    ],
  },
  {
    name: "Building Maintenance",
    slug: "building-maintenance",
    icon: "🏢",
    description: "Comprehensive building and property maintenance solutions for residential and commercial properties.",
    subcategories: [
      {
        name: "Property Maintenance",
        slug: "property-maintenance",
        services: [
          { name: "Villa Maintenance", slug: "villa-maintenance", price: "299" },
          { name: "Apartment Maintenance", slug: "apartment-maintenance", price: "199" },
          { name: "Office Maintenance", slug: "office-maintenance", price: "249" },
          { name: "Commercial Maintenance", slug: "commercial-maintenance", price: "399" },
        ],
      },
      {
        name: "Inspections",
        slug: "inspections",
        services: [
          { name: "Property Snagging", slug: "property-snagging", price: "999" },
          { name: "Annual Inspection", slug: "annual-inspection", price: "499" },
          { name: "Safety Inspection", slug: "safety-inspection", price: "349" },
          { name: "Pre-Purchase Inspection", slug: "pre-purchase-inspection", price: "799" },
        ],
      },
      {
        name: "AMC Plans",
        slug: "amc-plans",
        services: [
          { name: "Residential AMC", slug: "residential-amc", price: "1999" },
          { name: "Commercial AMC", slug: "commercial-amc", price: "4999" },
          { name: "Villa AMC", slug: "villa-amc", price: "3499" },
        ],
      },
      {
        name: "Rope Access",
        slug: "rope-access",
        services: [
          { name: "High-Rise Cleaning", slug: "high-rise-cleaning", price: "999" },
          { name: "Rope Access Maintenance", slug: "rope-access-maintenance", price: "799" },
        ],
      },
    ],
  },
  {
    name: "Lifestyle & Support",
    slug: "lifestyle-support",
    icon: "🏠",
    description: "Additional lifestyle and support services for homes and businesses.",
    subcategories: [
      {
        name: "Home Support",
        slug: "home-support",
        services: [
          { name: "Maid Service", slug: "maid-service", price: "109" },
          { name: "Ironing Service", slug: "ironing-service", price: "59" },
          { name: "Laundry Service", slug: "laundry-service", price: "79" },
        ],
      },
      {
        name: "Event Support",
        slug: "event-support",
        services: [
          { name: "Event Cleaning", slug: "event-cleaning", price: "399" },
          { name: "Event Setup Support", slug: "event-setup-support", price: "299" },
        ],
      },
      {
        name: "Commercial Support",
        slug: "commercial-support",
        services: [
          { name: "Office Support Services", slug: "office-support", price: "249" },
          { name: "Warehouse Cleaning", slug: "warehouse-cleaning", price: "499" },
          { name: "Retail Cleaning", slug: "retail-cleaning", price: "199" },
        ],
      },
    ],
  },
];

export function getAllServiceSlugs() {
  const slugs: { category: string; subcategory: string; service: string }[] = [];
  SERVICE_CATEGORIES.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.services.forEach((svc) => {
        slugs.push({ category: cat.slug, subcategory: sub.slug, service: svc.slug });
      });
    });
  });
  return slugs;
}

export function getCategoryBySlug(slug: string) {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subcategories.find((s) => s.slug === subcategorySlug);
}

export function getServiceBySlug(categorySlug: string, subcategorySlug: string, serviceSlug: string) {
  const sub = getSubcategoryBySlug(categorySlug, subcategorySlug);
  return sub?.services.find((s) => s.slug === serviceSlug);
}

export function getEmirateBySlug(slug: string) {
  return UAE_EMIRATES.find((e) => e.slug === slug);
}

export function getCityBySlug(emirateSlug: string, citySlug: string) {
  const emirate = getEmirateBySlug(emirateSlug);
  return emirate?.cities.find((c) => c.slug === citySlug);
}
