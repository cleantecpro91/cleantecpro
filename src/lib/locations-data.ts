// Unique content for each city/area — no duplicate paragraphs
// Each area has: uniqueIntro, localFAQs, highlights, metaTitle, metaDescription

export interface CityContent {
  uniqueIntro: string;
  highlights: string[];
  localFAQs: { q: string; a: string }[];
  metaTitle?: string;
  metaDescription?: string;
}

// Key format: "emirate-slug/city-slug"
export const CITY_CONTENT: Record<string, CityContent> = {

  // ─── SHARJAH AREAS ────────────────────────────────────────────

  "sharjah/al-nahda-sharjah": {
    uniqueIntro: "Al Nahda is one of Sharjah's busiest residential neighborhoods, sitting right on the Dubai-Sharjah border. With a mix of high-rise apartments, family buildings, and small commercial blocks, Al Nahda residents regularly need AC servicing due to the dense building layout, plumbing fixes in older apartments, and deep cleaning during tenant turnovers — which happen frequently given the area's popularity with working professionals commuting to Dubai.",
    highlights: [
      "15-minute response time from our Sharjah hub",
      "Experienced with older building plumbing systems",
      "Move-in/move-out cleaning for landlords and tenants",
      "Weekend AC servicing slots available",
      "Serving apartments along Al Nahda Street and King Faisal Road",
    ],
    localFAQs: [
      { q: "Do you serve both the Sharjah and Dubai sides of Al Nahda?", a: "Yes. We have teams covering Al Nahda Sharjah and Al Nahda Dubai. When you book, specify your exact building name and we will route the nearest available team." },
      { q: "My apartment in Al Nahda has old plumbing. Can you handle it?", a: "Absolutely. Many Al Nahda buildings are 10-20 years old and our plumbers regularly work with galvanized and copper pipe systems common in this area. We carry replacement parts on our service vans." },
      { q: "How much does AC cleaning cost in Al Nahda, Sharjah?", a: "AC cleaning in Al Nahda starts from AED 89 per unit for split ACs. Window units and central AC systems are quoted separately based on the number of vents and ducts." },
    ],
  },

  "sharjah/al-majaz": {
    uniqueIntro: "Al Majaz is a premium waterfront neighborhood centered around Al Majaz Waterfront and Buhaira Corniche. The area features modern mid-rise towers and family villas, with many buildings less than 10 years old. Residents here often request scheduled maintenance contracts, regular deep cleaning for larger apartments, and AC duct cleaning — especially given the lakefront humidity that can accelerate mold growth in bathrooms and AC systems.",
    highlights: [
      "Specialized in waterfront property maintenance",
      "AMC plans popular with Al Majaz tower residents",
      "Mold prevention treatment for humid lake-facing units",
      "Serving Al Majaz 1, 2, and 3 zones",
      "Evening service slots for working families",
    ],
    localFAQs: [
      { q: "Why do Al Majaz apartments need more frequent AC cleaning?", a: "The proximity to Khalid Lake increases indoor humidity, which causes faster mold buildup inside AC ducts and drain pans. We recommend AC cleaning every 3 months for lake-facing units instead of the standard 6 months." },
      { q: "Do you offer annual maintenance plans for Al Majaz residents?", a: "Yes. Our Sharjah AMC plans are especially popular in Al Majaz. Starting from AED 1,999/year, the plan covers quarterly AC servicing, plumbing checks, and emergency callouts." },
      { q: "Can you clean my apartment while I am at work?", a: "Yes. Many Al Majaz customers hand over keys at the concierge desk. We coordinate with building security, complete the service, and lock up — then notify you by WhatsApp with photos." },
    ],
  },

  "sharjah/al-khan": {
    uniqueIntro: "Al Khan sits between the Sharjah Corniche and Al Khan Lagoon, known for its family-oriented residential towers and proximity to Sharjah Aquarium. The mix of older coral-stone villas and newer high-rises creates varied maintenance needs — from heritage property painting and repair to modern apartment deep cleaning. Pool maintenance is also common here, with several villa compounds featuring private or shared pools.",
    highlights: [
      "Experience with both older villas and modern towers",
      "Pool cleaning and maintenance available",
      "Painting and minor renovation for older properties",
      "Close to Al Khan Beach — sand and salt damage repair",
      "Pest control popular due to lagoon proximity",
    ],
    localFAQs: [
      { q: "Do you handle pool maintenance in Al Khan villas?", a: "Yes. We provide weekly and monthly pool cleaning packages for Al Khan villa compounds, including chemical balancing, filter cleaning, and skimmer maintenance. Starting from AED 149 per visit." },
      { q: "My Al Khan apartment faces the sea and gets salt buildup. Can you help?", a: "Coastal-facing units need specialized window cleaning and AC condenser washing to remove salt deposits. We use low-pressure freshwater rinsing to protect your outdoor unit from corrosion." },
      { q: "What pest control services do you offer in Al Khan?", a: "Given the lagoon environment, we see higher mosquito and ant activity in Al Khan. We offer targeted spray treatments plus gel baiting for cockroach prevention — starting from AED 149 per treatment." },
    ],
  },

  "sharjah/muwaileh": {
    uniqueIntro: "Muwaileh is Sharjah's fastest-growing residential area, home to University City, new mixed-use developments, and a rapidly expanding student and family population. The area's newer buildings mean modern plumbing and AC systems, but also frequent move-in cleaning requests as new units are handed over. With construction still active in parts of Muwaileh, post-construction cleaning and dust removal services are in high demand.",
    highlights: [
      "Specialist in new handover property cleaning",
      "Post-construction dust and debris removal",
      "Student housing and shared apartment cleaning packages",
      "Serving Muwaileh Commercial and residential zones",
      "Affordable rates for Muwaileh's younger residents",
    ],
    localFAQs: [
      { q: "I just received keys to my new apartment in Muwaileh. Do you offer handover cleaning?", a: "Yes. New handover cleaning is one of our most requested services in Muwaileh. We remove construction dust, clean all surfaces, sanitize bathrooms, and make your new unit move-in ready. Starting from AED 299." },
      { q: "Do you offer discounted cleaning for students near University City?", a: "We have competitive packages for studio and shared apartment cleaning near University City. Regular weekly cleaning starts from AED 79 per visit for studios." },
      { q: "There is construction next to my building. Can you help with the dust?", a: "Absolutely. We offer construction dust deep cleaning that targets fine cement and plaster particles in AC filters, window tracks, cabinets, and flooring. We use HEPA-filter vacuums for thorough removal." },
    ],
  },

  "sharjah/al-taawun": {
    uniqueIntro: "Al Taawun is a well-established residential and commercial area along Al Taawun Street, featuring a mix of apartment towers and office buildings. The area is known for its family-friendly environment with schools, parks, and shopping centers nearby. Residents here commonly need regular apartment maintenance, kitchen appliance repair, and seasonal AC servicing — particularly before the summer peak when older buildings' cooling systems are pushed to their limits.",
    highlights: [
      "Regular maintenance plans for apartment communities",
      "Kitchen and bathroom renovation experience",
      "Electrical panel upgrades for older buildings",
      "Serving Al Taawun Street and surrounding blocks",
      "Appliance repair for washing machines and fridges",
    ],
    localFAQs: [
      { q: "My building in Al Taawun is 15 years old. Can you upgrade the electrical panel?", a: "Yes. We regularly upgrade DB boxes and circuit breakers in older Al Taawun buildings. Our electricians carry standard UAE-approved panels and can complete most upgrades in 2-3 hours." },
      { q: "How often should I service my AC in Al Taawun?", a: "For Al Taawun apartments, we recommend full AC servicing twice a year — once before summer (March-April) and once after (October-November). Filter cleaning should be monthly during peak summer." },
      { q: "Do you handle washing machine repair in Al Taawun?", a: "Yes. We repair all major brands including Samsung, LG, Bosch, and Beko. Common issues in Al Taawun include drain pump failures and water inlet valve replacements. Starting from AED 149." },
    ],
  },

  "sharjah/al-qasimia": {
    uniqueIntro: "Al Qasimia is one of Sharjah's most densely populated neighborhoods, with a vibrant commercial atmosphere and mixed residential buildings. The area hosts a large working-class community, which means demand for affordable cleaning services, quick plumbing fixes, and budget-friendly AC maintenance. Many buildings here are older constructions that require experienced technicians familiar with legacy pipe and wiring systems.",
    highlights: [
      "Budget-friendly packages for shared apartments",
      "Quick turnaround on emergency plumbing calls",
      "Experience with older building electrical systems",
      "Same-day service for most standard requests",
      "Serving Al Qasimia, Rolla, and adjacent blocks",
    ],
    localFAQs: [
      { q: "Do you offer affordable cleaning plans for shared flats in Al Qasimia?", a: "Yes. We offer budget cleaning packages for shared accommodations starting from AED 69 per session. This covers common areas, kitchen, and bathrooms with optional bedroom add-ons." },
      { q: "My water pressure is low in Al Qasimia. Can you fix it?", a: "Low water pressure is common in older Al Qasimia buildings due to corroded pipes or failing water pumps. Our plumbers diagnose the cause on-site and provide a fix or replacement quote immediately." },
      { q: "Is same-day service available in Al Qasimia?", a: "Yes. Given our proximity and team density in central Sharjah, we can often dispatch a technician to Al Qasimia within 1-2 hours for urgent requests like leaks, electrical faults, or AC breakdowns." },
    ],
  },

  "sharjah/al-nabba": {
    uniqueIntro: "Al Nabba is a historic Sharjah neighborhood near the Heart of Sharjah heritage district. The area blends traditional low-rise buildings with newer commercial developments. Maintenance needs here include heritage-sensitive repair work, painting that respects building character, and regular pest control given the older construction styles. The tight street layout means our compact service vans are specifically assigned to Al Nabba for easier access.",
    highlights: [
      "Heritage-aware maintenance and painting",
      "Compact vans for narrow street access",
      "Regular pest control schedules available",
      "Serving Al Nabba and Souq Al Arsah area",
      "Affordable deep cleaning for smaller units",
    ],
    localFAQs: [
      { q: "Can you paint my old building in Al Nabba without damaging the original look?", a: "Yes. We use matching color palettes and appropriate paint types for older construction. Our painters in Sharjah have experience with both modern emulsion and traditional lime-wash techniques." },
      { q: "Is pest control necessary in Al Nabba?", a: "Older buildings in Al Nabba are more susceptible to cockroach and ant infestations due to construction gaps. We recommend quarterly pest treatment — starting from AED 129 per visit." },
      { q: "Do your vans fit in Al Nabba's narrow lanes?", a: "Yes. We assign smaller service vehicles to Al Nabba and nearby heritage areas specifically for this reason. Our teams also carry portable equipment to reach upper floors without elevator access." },
    ],
  },

  "sharjah/al-rolla": {
    uniqueIntro: "Al Rolla is a central Sharjah district near Rolla Square, one of the emirate's most recognizable landmarks. This commercial-residential hub has dense apartment blocks, retail shops, and restaurants, creating demand for both residential cleaning and commercial kitchen exhaust cleaning. The area's central location means our teams reach Al Rolla quickly from our Sharjah depot, often providing same-hour response for emergency plumbing and electrical issues.",
    highlights: [
      "Central location — fastest Sharjah response time",
      "Commercial kitchen hood and exhaust cleaning",
      "Restaurant and retail cleaning services",
      "Apartment deep cleaning between tenants",
      "Drain cleaning for ground-floor retail units",
    ],
    localFAQs: [
      { q: "Do you clean commercial kitchen exhausts in Al Rolla restaurants?", a: "Yes. We provide kitchen exhaust hood cleaning, grease trap servicing, and duct degreasing for Al Rolla restaurants and cafeterias. This is required by Sharjah Municipality and we provide compliance certificates." },
      { q: "How fast can you respond to a plumbing emergency in Al Rolla?", a: "Al Rolla is less than 10 minutes from our Sharjah operations hub. For emergencies like burst pipes or major leaks, we typically dispatch within 30-45 minutes during business hours." },
      { q: "I manage multiple apartments in Al Rolla. Do you offer bulk cleaning rates?", a: "Yes. Landlords and property managers managing 3 or more units in Al Rolla get discounted rates and priority scheduling. Contact us for a custom multi-unit cleaning quote." },
    ],
  },

  "sharjah/university-city": {
    uniqueIntro: "University City in Muwaileh hosts several major universities and a growing student population living in nearby apartments and shared accommodations. The area's demographics drive demand for affordable regular cleaning, quick handyman fixes, and budget AC maintenance. We offer student-friendly pricing and flexible scheduling including late-afternoon and evening slots that work around class schedules.",
    highlights: [
      "Student-friendly pricing and packages",
      "Flexible evening and weekend scheduling",
      "Shared apartment cleaning specialists",
      "Quick furniture assembly for new move-ins",
      "AC filter cleaning from AED 49 per unit",
    ],
    localFAQs: [
      { q: "Do you have special rates for students in University City?", a: "Yes. We offer student packages for studio cleaning from AED 69, shared apartment cleaning from AED 99, and AC filter cleaning from AED 49. Show your student ID for an additional 10% discount on first booking." },
      { q: "Can you assemble IKEA furniture in my University City apartment?", a: "Yes. Furniture assembly is one of our popular services near University City, especially during move-in season. We charge per item — a basic wardrobe takes about 1-2 hours at AED 99." },
      { q: "I need cleaning but I have classes until 5 PM. Do you have evening slots?", a: "Yes. We offer evening slots from 5 PM to 9 PM specifically for University City area, knowing many residents have daytime commitments. Book online and select the evening window." },
    ],
  },

  "sharjah/aljada": {
    uniqueIntro: "Aljada is Sharjah's flagship mega-development by Arada, featuring modern residential towers, townhouses, and the Madar entertainment district. As a new community, Aljada residents need handover cleaning for newly delivered units, smart home electrical setup, and premium maintenance services matching the development's high standards. Our teams are trained on Aljada's building specifications and access protocols.",
    highlights: [
      "Trained on Aljada building access protocols",
      "New unit handover and snagging inspection",
      "Smart home setup and electrical configuration",
      "Premium cleaning standards for luxury finishes",
      "Serving Aljada towers and Nasma Residences",
    ],
    localFAQs: [
      { q: "Do you offer property snagging in Aljada for new handovers?", a: "Yes. Our snagging inspectors check paint, tiling, plumbing fixtures, electrical outlets, AC commissioning, and door/window alignment in new Aljada units. Full snagging report delivered within 24 hours." },
      { q: "Can you set up smart switches and home automation in my Aljada apartment?", a: "Yes. We install smart switches, smart thermostats, automated curtain motors, and smart lighting systems. Our electricians are experienced with the wiring configurations used in Aljada towers." },
      { q: "What cleaning products do you use on Aljada's premium finishes?", a: "We use pH-neutral, non-abrasive cleaning products suitable for engineered stone countertops, porcelain tiles, and tempered glass surfaces found in Aljada units. No harsh chemicals that damage luxury finishes." },
    ],
  },

  "sharjah/tilal-city": {
    uniqueIntro: "Tilal City is an emerging residential community on the Sharjah-Dubai border, offering villas and townhouses with modern amenities. As families settle into this new development, common service requests include garden landscaping setup, irrigation installation, villa deep cleaning, and AC commissioning for newly built homes. The villa format means larger service areas compared to apartments, and our teams arrive with equipment suited for multi-room, multi-floor properties.",
    highlights: [
      "Villa-specific cleaning and maintenance teams",
      "Garden setup, landscaping, and irrigation systems",
      "Full villa deep cleaning including garage and yard",
      "Pool installation support and maintenance",
      "Multi-floor service with proper equipment",
    ],
    localFAQs: [
      { q: "Do you provide garden landscaping for new Tilal City villas?", a: "Yes. We offer complete garden setup including soil preparation, plant selection suited to UAE climate, irrigation system installation, and artificial grass laying. Custom landscaping quotes provided after site visit." },
      { q: "How much does full villa deep cleaning cost in Tilal City?", a: "Full villa deep cleaning in Tilal City ranges from AED 799 to AED 1,800 depending on the number of bedrooms, floors, and outdoor areas. We provide an exact quote after understanding your villa layout." },
      { q: "Can you maintain my pool in Tilal City on a monthly basis?", a: "Yes. Monthly pool maintenance packages include chemical balancing, filter cleaning, skimmer servicing, and water quality testing. Plans start from AED 299 per month for standard residential pools." },
    ],
  },

  "sharjah/al-zahia": {
    uniqueIntro: "Al Zahia is a master-planned community by Majid Al Futtaim, featuring contemporary villas and townhouses in a landscaped setting. Residents enjoy a community-oriented lifestyle but need reliable maintenance partners for ongoing property care. Our services here focus on villa AMC plans, seasonal AC preparation, garden upkeep, and the occasional renovation or fit-out project as families customize their homes after handover.",
    highlights: [
      "Villa AMC plans designed for Al Zahia homes",
      "Seasonal AC prep before summer and winter",
      "Community-aware scheduling (quiet hours respected)",
      "Interior painting and customization after handover",
      "Outdoor lighting and electrical additions",
    ],
    localFAQs: [
      { q: "Do you offer AMC plans specific to Al Zahia villas?", a: "Yes. Our Al Zahia villa AMC covers quarterly AC servicing, bi-annual plumbing inspection, annual electrical check, pest control, and 2 emergency callouts per month. Starting from AED 2,499/year." },
      { q: "Can you install outdoor lighting in my Al Zahia garden?", a: "Yes. We install pathway lights, garden spotlights, wall-mounted fixtures, and smart outdoor lighting with timer controls. All wiring is weatherproofed for UAE conditions." },
      { q: "I want to repaint my Al Zahia villa interior. How long does it take?", a: "A standard 3-bedroom Al Zahia villa interior repaint typically takes 3-4 days. We use low-VOC paints, cover all furniture and flooring, and clean up completely after finishing." },
    ],
  },

  "sharjah/sharjah-industrial": {
    uniqueIntro: "Sharjah Industrial Area is the emirate's commercial and warehousing hub, housing factories, workshops, warehouses, and labor accommodations. Service needs here are distinctly commercial — warehouse deep cleaning, industrial AC maintenance for large cooling units, commercial pest control, and office cleaning within industrial compounds. Our commercial teams carry heavy-duty equipment and work during off-peak hours to minimize business disruption.",
    highlights: [
      "Commercial and industrial cleaning specialists",
      "Warehouse floor scrubbing and degreasing",
      "Large-capacity AC and chiller maintenance",
      "Labor camp and accommodation cleaning",
      "Off-hours service to avoid business disruption",
    ],
    localFAQs: [
      { q: "Can you clean our warehouse floor in Sharjah Industrial Area?", a: "Yes. We use industrial floor scrubbers and degreasers for warehouse concrete floors. Service includes oil stain removal, dust extraction, and optional anti-slip coating. Quoted per square meter." },
      { q: "Do you maintain large commercial AC units in industrial buildings?", a: "Yes. Our HVAC technicians service package units, cassette units, and ducted systems commonly found in Sharjah Industrial warehouses and offices. We also service rooftop units and chillers." },
      { q: "Do you offer cleaning for staff accommodations in the industrial area?", a: "Yes. We provide regular cleaning and sanitization for labor accommodations, including room cleaning, bathroom deep cleaning, kitchen degreasing, and common area maintenance. Bulk rates available." },
    ],
  },

  "sharjah/al-mamzar": {
    uniqueIntro: "Al Mamzar in Sharjah is a coastal residential area near the Dubai border, popular with families who enjoy its beachside setting and quieter pace. The proximity to the sea means homes face salt-air corrosion on metal fixtures, higher humidity levels affecting AC performance, and sand accumulation in balconies and window tracks. Our teams in Al Mamzar carry corrosion-resistant replacement parts and use marine-grade cleaning solutions.",
    highlights: [
      "Coastal maintenance with anti-corrosion solutions",
      "Balcony and terrace sand removal service",
      "AC condenser salt wash to prevent corrosion",
      "Window track and sliding door maintenance",
      "Serving Al Mamzar residential towers and villas",
    ],
    localFAQs: [
      { q: "How do I protect my AC outdoor unit from salt air in Al Mamzar?", a: "We recommend quarterly AC condenser washing with fresh water plus an anti-corrosion spray for the coil fins. This extends your outdoor unit's lifespan significantly in coastal locations like Al Mamzar." },
      { q: "My balcony in Al Mamzar collects sand constantly. Can you help?", a: "Yes. We offer scheduled balcony cleaning including sand removal, floor scrubbing, railing wipe-down, and drain clearing. Many Al Mamzar residents book this monthly — from AED 79 per visit." },
      { q: "Do you repair corroded water pipes in Al Mamzar buildings?", a: "Yes. Salt-air exposure accelerates pipe corrosion in Al Mamzar. Our plumbers replace corroded sections with CPVC or PPR pipes that resist coastal corrosion, with full warranty." },
    ],
  },

  "sharjah/al-riqqah": {
    uniqueIntro: "Al Riqqah is a well-connected Sharjah area near the Corniche, featuring a blend of residential apartments and government offices. The neighborhood offers relatively affordable housing, attracting families and young professionals. Common service needs include regular apartment cleaning, AC maintenance before summer, plumbing repairs in medium-age buildings, and periodic pest control treatments — especially in ground-floor units near landscaped common areas.",
    highlights: [
      "Affordable maintenance for family apartments",
      "Corniche-area response within 20 minutes",
      "Regular pest control for ground-floor units",
      "Bathroom waterproofing and tile repair",
      "Flexible morning and evening booking slots",
    ],
    localFAQs: [
      { q: "How much does regular apartment cleaning cost in Al Riqqah?", a: "Regular apartment cleaning in Al Riqqah starts from AED 89 for a 1-bedroom apartment. We offer weekly and bi-weekly packages with discounted rates — weekly cleaning from AED 69 per visit." },
      { q: "My ground-floor flat in Al Riqqah has a cockroach problem. Can you help?", a: "Ground-floor units near garden areas are prone to pests. We apply gel bait treatment plus spray barrier at entry points. One treatment typically provides 2-3 months of protection — from AED 129." },
      { q: "Do you fix bathroom leaks and retile in Al Riqqah apartments?", a: "Yes. Bathroom waterproofing and retiling is common in Al Riqqah's 8-15 year old buildings. We remove damaged tiles, apply waterproof membrane, and install new tiles — quoted per square meter." },
    ],
  },
};

// Helper function to get city content
export function getCityContent(emirateSlug: string, citySlug: string): CityContent | null {
  return CITY_CONTENT[`${emirateSlug}/${citySlug}`] || null;
}
