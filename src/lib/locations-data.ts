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

  // ─── DUBAI AREAS ──────────────────────────────────────────────

  "dubai/business-bay": {
    uniqueIntro: "Business Bay is Dubai's central commercial district, home to thousands of offices, co-working spaces, serviced apartments, and luxury residential towers along the Dubai Canal. The mix of corporate offices and high-end residences means we handle everything from daily office cleaning contracts to executive apartment deep cleaning. Building management companies in Business Bay frequently engage us for common area maintenance, parking garage cleaning, and emergency plumbing repairs in high-rise towers reaching 40+ floors.",
    highlights: [
      "CleanTecPro headquarters — fastest response time in Dubai",
      "Office cleaning contracts for Business Bay towers",
      "High-rise plumbing and AC specialists (40+ floors)",
      "Serviced apartment turnover cleaning",
      "Dubai Canal-facing unit humidity management",
    ],
    localFAQs: [
      { q: "Do you offer regular office cleaning contracts in Business Bay?", a: "Yes. We provide daily, weekly, and bi-weekly office cleaning for Business Bay companies. Our teams work early mornings or after hours to avoid disrupting your operations. Contracts start from AED 1,200/month for standard office suites." },
      { q: "My apartment faces the Dubai Canal and gets humid. What do you recommend?", a: "Canal-facing units need quarterly AC duct cleaning and anti-mold treatment in bathrooms. We also recommend a dehumidifier setup check. Our humidity prevention package covers all this from AED 349." },
      { q: "Can you handle maintenance for an entire Business Bay tower?", a: "Yes. We work with several building management companies in Business Bay for full-building maintenance including lobby cleaning, corridor maintenance, chiller servicing, and tenant unit repairs." },
    ],
  },

  "dubai/dubai-marina": {
    uniqueIntro: "Dubai Marina is one of the city's most iconic waterfront neighborhoods, featuring over 200 high-rise towers housing a cosmopolitan mix of residents. The marina's coastal location creates specific maintenance challenges — salt air corrosion on balcony fixtures, high humidity affecting AC efficiency, and sand accumulation from the nearby JBR beach. Our Marina teams carry marine-grade cleaning solutions and corrosion-resistant spare parts, and are experienced with the strict access protocols of Marina towers.",
    highlights: [
      "Coastal maintenance specialists for Marina towers",
      "Anti-corrosion treatment for balcony and outdoor units",
      "Familiar with Marina tower security and access procedures",
      "Weekend and evening slots for working professionals",
      "Serving Marina Walk, Marina Promenade, and JBR-adjacent towers",
    ],
    localFAQs: [
      { q: "Why does my AC in Dubai Marina use more electricity in summer?", a: "Marina towers face high humidity from the waterfront, making ACs work harder to dehumidify. We recommend quarterly coil cleaning and annual gas top-up to maintain efficiency. This alone can reduce bills by 15-20%." },
      { q: "My Marina apartment balcony railing is corroding. Can you fix it?", a: "Salt air corrosion is common in Dubai Marina. We clean corroded surfaces, apply rust converter, and finish with marine-grade protective coating. For severely damaged railings, we coordinate replacement with approved contractors." },
      { q: "Do you clean apartments in Marina towers like Princess Tower and Cayan?", a: "Yes. We regularly service apartments in Princess Tower, Cayan Tower, Marina Heights, Iris Blue, and all major Marina buildings. Our teams carry building access cards and coordinate with reception for smooth entry." },
    ],
  },

  "dubai/jlt": {
    uniqueIntro: "Jumeirah Lake Towers is a large mixed-use development of 87 towers arranged around artificial lakes, housing offices, retail, and residential apartments. JLT's compact tower clusters create high demand for move-in/move-out cleaning as the area sees frequent tenant turnover, regular AC maintenance in densely packed buildings, and office cleaning for the thousands of SMEs headquartered here. Our JLT teams understand the cluster numbering system and can navigate quickly between towers.",
    highlights: [
      "Serving all JLT clusters (A through Z)",
      "High volume move-in/move-out cleaning specialists",
      "SME office cleaning from AED 499/month",
      "Lake-facing unit maintenance and mold prevention",
      "Quick inter-cluster response times",
    ],
    localFAQs: [
      { q: "I'm moving out of my JLT apartment next week. Can you do the cleaning?", a: "Yes. Move-out cleaning is our most booked service in JLT. We handle full apartment cleaning including kitchen degreasing, bathroom descaling, balcony cleaning, and wardrobe wipe-down. Book at least 3 days in advance for guaranteed availability." },
      { q: "Do you offer cleaning for small offices in JLT?", a: "Yes. JLT is home to many SMEs and we offer affordable office cleaning starting from AED 499/month for studios and small offices up to AED 1,500/month for larger suites. Daily, weekly, and bi-weekly options available." },
      { q: "Lake-facing JLT apartments get mold easily. How do you handle it?", a: "We apply professional anti-mold treatment in bathrooms, kitchen backsplash, and AC ducts. For recurring cases, we install exhaust fan upgrades and recommend quarterly preventive treatment — from AED 199." },
    ],
  },

  "dubai/downtown-dubai": {
    uniqueIntro: "Downtown Dubai is the emirate's flagship district, home to Burj Khalifa, Dubai Mall, and some of the most prestigious residential addresses in the city. Properties here demand premium service standards — luxury apartment deep cleaning with high-end product lines, careful handling of designer finishes, and maintenance teams that understand the access protocols of ultra-premium buildings like Burj Khalifa Residences, The Address, and Boulevard Point.",
    highlights: [
      "Premium cleaning for luxury Downtown residences",
      "Experience with Burj Khalifa and Address tower protocols",
      "pH-neutral products for marble and designer surfaces",
      "Discreet, uniformed teams for high-end properties",
      "Concierge-coordinated service entry available",
    ],
    localFAQs: [
      { q: "Do you use special products for marble floors in Downtown apartments?", a: "Yes. Downtown apartments often have Italian marble, engineered stone, and premium wood flooring. We use pH-neutral, non-abrasive cleaners specifically formulated for natural stone — never acidic or bleach-based products that damage marble." },
      { q: "Can you clean my Burj Khalifa apartment?", a: "Yes. We service multiple units in Burj Khalifa Residences. Our teams are registered with building management, carry Emaar-approved access cards, and follow the specific service provider protocols required for Burj Khalifa entry." },
      { q: "How much does deep cleaning cost in Downtown Dubai?", a: "Premium deep cleaning in Downtown starts from AED 349 for a 1-bedroom apartment. The price reflects premium cleaning products, experienced teams, and the careful handling required for luxury finishes. 2-bedroom apartments from AED 549." },
    ],
  },

  "dubai/jbr": {
    uniqueIntro: "Jumeirah Beach Residence is a beachfront community of 40 towers stretching along the Arabian Gulf coast, with ground-level retail and The Walk promenade. JBR's beach-adjacent location means apartments deal with constant sand ingress, salt air on balconies, and higher humidity that pushes AC systems harder. Our JBR teams specialize in beach-property maintenance — from balcony sand removal and window salt wash to heavy-duty AC cleaning that addresses the coastal air factor.",
    highlights: [
      "Beach-property maintenance specialists",
      "Sand removal from balconies and window tracks",
      "Salt-air AC condenser wash and protection",
      "Retail and restaurant cleaning on The Walk",
      "Serving all JBR towers (Rimal, Bahar, Amwaj, Sadaf, Shams, Murjan)",
    ],
    localFAQs: [
      { q: "Sand keeps getting into my JBR apartment. How do you clean it?", a: "We do thorough sand extraction from window tracks, sliding door rails, balcony tiles, and carpets using HEPA vacuums. We also install brush-type door seals that reduce sand ingress by up to 70%. Full sand-clean from AED 149." },
      { q: "Do you clean restaurants on JBR The Walk?", a: "Yes. We provide daily kitchen cleaning, exhaust hood degreasing, dining area sanitization, and restroom maintenance for several restaurants on The Walk and Bluewaters Island. Compliant with Dubai Municipality food safety standards." },
      { q: "How often should I wash my AC outdoor unit in JBR?", a: "In JBR, we recommend monthly outdoor condenser rinsing during summer due to salt spray from the sea. Without this, salt corrodes the aluminum fins and reduces cooling capacity by up to 30%. Our quarterly AC package includes this." },
    ],
  },

  "dubai/al-barsha": {
    uniqueIntro: "Al Barsha is a large residential district south of Sheikh Zayed Road, popular with families due to its villa compounds, affordable apartments, and proximity to Mall of the Emirates. The area's mix of standalone villas, low-rise apartment blocks, and newer towers creates varied maintenance needs — from villa garden upkeep and pool cleaning to apartment AC servicing and pest control. Al Barsha's mature landscaping also means more pest activity, making regular pest treatment a common request.",
    highlights: [
      "Villa and apartment maintenance specialists",
      "Garden landscaping and pool cleaning services",
      "Popular area for pest control treatments",
      "Close to MOE — quick access for Al Barsha 1, 2, and 3",
      "Family-friendly scheduling with morning and weekend slots",
    ],
    localFAQs: [
      { q: "Do you maintain gardens and pools in Al Barsha villas?", a: "Yes. We provide weekly garden maintenance (mowing, trimming, irrigation check) from AED 299/month and pool cleaning from AED 149/visit. Many Al Barsha villa owners combine both services in a discounted AMC package." },
      { q: "Cockroaches keep appearing in my Al Barsha apartment. Help?", a: "Al Barsha's mature landscaping and older construction make it prone to cockroach and ant activity. We apply gel bait plus spray barrier treatment that provides 2-3 months protection. First treatment from AED 149, quarterly plans from AED 99/visit." },
      { q: "Do you cover Al Barsha 1, 2, and 3?", a: "Yes. We serve all Al Barsha sub-communities including Al Barsha 1 near MOE, Al Barsha 2 and 3 with villa compounds, and Al Barsha South. Our Al Barsha team is stationed nearby for fast response." },
    ],
  },

  "dubai/deira": {
    uniqueIntro: "Deira is Dubai's historic commercial heart on the eastern side of the Creek, packed with souks, trading offices, hotels, and dense residential blocks. The area's older building stock means our technicians regularly handle legacy plumbing systems, aging electrical panels, and AC units that need more frequent servicing. Commercial cleaning is a major service line in Deira — hotel housekeeping support, restaurant kitchen exhaust cleaning, and retail shop maintenance keep our teams busy throughout this vibrant district.",
    highlights: [
      "Experienced with Deira's older building infrastructure",
      "Hotel and hospitality cleaning support",
      "Commercial kitchen and restaurant cleaning",
      "Souk-area retail shop maintenance",
      "Legacy plumbing and electrical system expertise",
    ],
    localFAQs: [
      { q: "Can you fix old plumbing in Deira buildings?", a: "Yes. Many Deira buildings have 20-30 year old plumbing. Our plumbers work with galvanized, copper, and PPR pipes and carry a range of fittings for older systems. We also do full pipe replacement when repair is no longer viable." },
      { q: "Do you provide cleaning for Deira hotels?", a: "Yes. We support several Deira hotels with deep cleaning, laundry area maintenance, kitchen exhaust cleaning, and room turnover cleaning during peak seasons. We scale teams up or down based on occupancy." },
      { q: "My shop in Deira needs regular cleaning. What do you offer?", a: "Retail shop cleaning in Deira starts from AED 199/visit. We offer daily, weekly, or bi-weekly schedules covering floor mopping, glass cleaning, shelving dusting, and washroom sanitization." },
    ],
  },

  "dubai/bur-dubai": {
    uniqueIntro: "Bur Dubai spans the western bank of Dubai Creek, encompassing a mix of historic areas like Al Fahidi, busy commercial zones like Meena Bazaar, and residential neighborhoods with medium-density apartment blocks. The area is one of Dubai's most densely populated districts, which means high demand for apartment cleaning between tenant changes, affordable AC maintenance, and commercial space upkeep for the countless shops and offices lining its busy streets.",
    highlights: [
      "High-volume tenant turnover cleaning",
      "Affordable rates for Bur Dubai's compact apartments",
      "Commercial shop and office cleaning",
      "Al Fahidi heritage area — careful maintenance approach",
      "Serving Mankhool, Karama adjacent, and Creek-side blocks",
    ],
    localFAQs: [
      { q: "How much does apartment cleaning cost in Bur Dubai?", a: "Studio and 1-bedroom apartment cleaning in Bur Dubai starts from AED 79. Given the area's compact unit sizes, most jobs are completed in 2-3 hours. We offer weekly packages from AED 59/visit for regular customers." },
      { q: "Do you clean offices and shops in Meena Bazaar area?", a: "Yes. We service many retail shops and small offices in and around Meena Bazaar. Early morning cleaning before shop opening is our most popular slot. Starting from AED 149 per visit for standard retail units." },
      { q: "Can you handle pest control in older Bur Dubai buildings?", a: "Yes. Older construction in Bur Dubai creates entry points for cockroaches and rodents. We apply targeted treatment at pipe openings, door gaps, and kitchen areas. Includes a 90-day follow-up guarantee — from AED 149." },
    ],
  },

  "dubai/palm-jumeirah": {
    uniqueIntro: "Palm Jumeirah is Dubai's world-famous artificial island, featuring luxury villas on the fronds, premium apartment towers on the trunk, and five-star hotels at the crescent. Properties here require the highest maintenance standards — villa deep cleaning covering 4,000-10,000 sq ft layouts, private beach maintenance, infinity pool care, and premium AC systems serving large, multi-zone homes. Our Palm teams are trained in luxury property care and carry premium, non-toxic cleaning products suitable for high-end interiors.",
    highlights: [
      "Luxury villa cleaning for frond properties",
      "Private pool and beach area maintenance",
      "Premium products for marble, granite, and designer finishes",
      "Multi-zone AC system servicing for large villas",
      "Trusted by Palm villa owners and property managers",
    ],
    localFAQs: [
      { q: "How much does villa deep cleaning cost on Palm Jumeirah?", a: "Palm villa deep cleaning ranges from AED 1,500 to AED 3,500 depending on villa size (3-6 bedrooms), number of floors, and inclusion of outdoor areas like garden, pool deck, and garage. We provide exact quotes after a brief property assessment." },
      { q: "Do you maintain private pools on the Palm?", a: "Yes. We provide weekly or bi-weekly pool maintenance for Palm frond villas including chemical balancing, filter cleaning, tile brushing, and equipment checks. Monthly pool packages start from AED 499." },
      { q: "Can your team handle the large AC systems in Palm villas?", a: "Yes. Palm villas typically have multi-zone ducted AC systems with 4-8 indoor units. Our HVAC technicians service all major brands including Carrier, Daikin, and Trane. Full villa AC servicing from AED 599." },
    ],
  },

  "dubai/jvc": {
    uniqueIntro: "Jumeirah Village Circle is one of Dubai's most popular mid-market residential communities, offering affordable apartments and townhouses in a family-friendly setting. JVC's rapid growth means many buildings are relatively new (5-10 years old), but the community's dense layout and shared parking structures create specific needs — regular apartment cleaning, AC maintenance for units without proper cross-ventilation, and pest control in ground-floor units near landscaped common areas.",
    highlights: [
      "Affordable rates matching JVC's mid-market positioning",
      "High volume apartment cleaning and turnover service",
      "Ground-floor pest control specialists",
      "Townhouse maintenance including small gardens",
      "Serving JVC Districts 10-18 and Circle Mall area",
    ],
    localFAQs: [
      { q: "What is the cheapest cleaning service available in JVC?", a: "Regular apartment cleaning in JVC starts from AED 79 for studios and AED 99 for 1-bedroom apartments. We offer weekly packages from AED 59/visit — the most affordable option for regular cleaning in JVC." },
      { q: "My JVC townhouse has a small garden. Do you maintain it?", a: "Yes. JVC townhouse gardens are typically 20-50 sqm. We offer monthly garden maintenance including mowing, hedge trimming, plant care, and irrigation check from AED 199/month." },
      { q: "Ants keep coming into my ground-floor JVC apartment. What should I do?", a: "Ground-floor JVC units near landscaped areas are prone to ant invasion. We apply gel bait inside and granular barrier outside along the foundation line. This provides 2-3 months protection — from AED 129 per treatment." },
    ],
  },

  "dubai/al-quoz": {
    uniqueIntro: "Al Quoz is Dubai's industrial and creative district, home to warehouses, art galleries in Alserkal Avenue, auto workshops, and light manufacturing facilities. Service needs here are distinctly commercial — warehouse floor scrubbing, industrial AC and ventilation maintenance, office cleaning within industrial compounds, and heavy-duty pest control for storage facilities. Our Al Quoz commercial teams operate during off-hours and carry industrial-grade equipment for large-scale cleaning jobs.",
    highlights: [
      "Industrial and commercial cleaning specialists",
      "Warehouse and factory floor maintenance",
      "Alserkal Avenue gallery and studio cleaning",
      "Heavy-duty pest control for storage facilities",
      "Off-hours service to avoid business disruption",
    ],
    localFAQs: [
      { q: "Can you clean our Al Quoz warehouse floor?", a: "Yes. We use industrial floor scrubbers and degreasers for warehouse concrete and epoxy floors. Including oil stain removal and dust extraction. Quoted per square meter — typical 500 sqm warehouse from AED 999." },
      { q: "Do you clean art galleries in Alserkal Avenue?", a: "Yes. We provide careful cleaning for gallery spaces — dust-free floor mopping, wall dusting without touching artwork, and HVAC filter cleaning to maintain air quality for art preservation. Starting from AED 299 per session." },
      { q: "Our Al Quoz workshop has a rodent problem. Can you help?", a: "Industrial areas attract rodents due to food waste and storage materials. We install bait stations, seal entry points, and provide monthly monitoring. Industrial pest control plans from AED 399/month." },
    ],
  },

  "dubai/motor-city": {
    uniqueIntro: "Motor City is a compact residential community themed around motorsports, featuring apartment buildings and townhouses alongside the Dubai Autodrome. The community's self-contained nature means residents prefer local service providers who understand the area's layout. Common requests include regular apartment cleaning, AC servicing in the moderately-sized units, and balcony cleaning to manage the dust from the nearby desert edge. Townhouse owners often need garden maintenance and exterior painting.",
    highlights: [
      "Familiar with Motor City community layout",
      "Apartment and townhouse cleaning specialists",
      "Desert-edge dust management services",
      "Exterior painting and facade maintenance",
      "Serving Motor City apartments and Green Community adjacent",
    ],
    localFAQs: [
      { q: "My Motor City apartment gets very dusty. How often should I clean?", a: "Motor City sits near the desert fringe, so dust accumulation is higher than central Dubai. We recommend weekly surface cleaning and monthly deep cleaning. Weekly packages from AED 69/visit keep dust under control." },
      { q: "Do you paint Motor City townhouse exteriors?", a: "Yes. Townhouse exterior painting in Motor City typically takes 2-3 days depending on size. We use weather-resistant exterior paint rated for UAE sun exposure. Standard townhouse exterior from AED 2,499." },
      { q: "Is garden maintenance available for Motor City townhouses?", a: "Yes. Monthly garden packages include lawn mowing, hedge trimming, flower bed care, and irrigation system check. Starting from AED 249/month for standard Motor City garden sizes." },
    ],
  },

  "dubai/sports-city": {
    uniqueIntro: "Dubai Sports City is a master-planned community centered around cricket, football, and golf facilities, attracting sports enthusiasts and families. The community features high-rise towers like the Elite Residences cluster and mid-rise buildings, with many units rented by young professionals and small families. Regular cleaning, AC maintenance before summer, and move-in/move-out cleaning during peak rental seasons are the most requested services here.",
    highlights: [
      "Popular with young professionals and families",
      "High-rise apartment cleaning in Elite Residences",
      "Seasonal AC prep before summer rush",
      "Move-in cleaning for new tenants",
      "Serving Sports City, Gallery Villas, and Victory Heights adjacent",
    ],
    localFAQs: [
      { q: "Do you clean apartments in Sports City Elite Residences?", a: "Yes. We service all Elite Residence towers in Sports City. Our teams are familiar with the building access system and parking arrangements. Standard apartment cleaning from AED 89 for 1-bedroom units." },
      { q: "When should I service my AC in Sports City before summer?", a: "We recommend booking AC servicing in March or early April before the summer rush. During May-June, wait times can extend to 3-5 days. Early booking ensures same-day or next-day service availability." },
      { q: "I'm a landlord with 3 apartments in Sports City. Do you offer bulk rates?", a: "Yes. Multi-unit landlords get 15-20% discount on cleaning and maintenance services. We also offer a landlord AMC that covers all units with priority scheduling and a dedicated account coordinator." },
    ],
  },

  "dubai/international-city": {
    uniqueIntro: "International City is Dubai's most affordable residential community, with themed clusters (China, England, France, etc.) housing a diverse expat population. The area's budget-friendly positioning means residents need cost-effective maintenance solutions — affordable apartment cleaning, basic AC servicing at competitive rates, and quick plumbing fixes without premium pricing. Our International City packages are specifically designed to deliver quality service at price points that work for this community.",
    highlights: [
      "Most affordable service packages in Dubai",
      "Budget-friendly AC cleaning from AED 69",
      "Quick turnaround for compact apartments",
      "Serving all IC clusters and Dragon Mart area",
      "Bulk rates for landlords with multiple units",
    ],
    localFAQs: [
      { q: "What is your cheapest service in International City?", a: "AC filter cleaning starts from AED 49. Studio apartment cleaning from AED 59. Basic pest treatment from AED 99. We keep International City prices competitive because we understand the community's budget priorities." },
      { q: "I own 5 apartments in International City. Do you offer landlord packages?", a: "Yes. Landlords with 3+ units in International City get bulk cleaning rates starting from AED 49 per studio for turnover cleaning. We also offer annual property management maintenance packages." },
      { q: "Dragon Mart shop cleaning — do you cover that?", a: "Yes. We clean retail shops in Dragon Mart 1 and 2 including floor mopping, glass front cleaning, storage area organization, and restroom sanitization. Early morning slots before shop opening available from AED 149." },
    ],
  },

  "dubai/al-nahda-dubai": {
    uniqueIntro: "Al Nahda Dubai sits on the Dubai-Sharjah border, making it a popular residential choice for professionals working in both emirates. The area features mid-rise apartment buildings, with many units occupied by families and sharing tenants. Common service needs include affordable regular cleaning, AC maintenance in the summer-heavy usage period, and plumbing repairs in buildings that are 10-15 years old. Our Al Nahda Dubai team coordinates with our Sharjah hub for maximum coverage across both sides of the border.",
    highlights: [
      "Cross-border coverage with Sharjah Al Nahda team",
      "Affordable family apartment cleaning packages",
      "Experienced with 10-15 year old building systems",
      "Weekend cleaning slots for working families",
      "Serving Al Nahda 1 and Al Nahda 2 Dubai",
    ],
    localFAQs: [
      { q: "Do you cover both Al Nahda Dubai and Al Nahda Sharjah?", a: "Yes. Our teams work across both Al Nahda Dubai and Al Nahda Sharjah seamlessly. Specify your building name during booking and we route the nearest available team regardless of which side of the border you are on." },
      { q: "My building in Al Nahda Dubai is 12 years old. Can you handle older AC systems?", a: "Yes. We service all AC brands and models including older systems common in Al Nahda. If parts are needed, we source compatible replacements. Full AC servicing from AED 89 per unit." },
      { q: "How much is regular weekly cleaning in Al Nahda Dubai?", a: "Weekly apartment cleaning in Al Nahda Dubai starts from AED 69 per visit for 1-bedroom apartments and AED 89 for 2-bedroom units. Monthly billing with no long-term contract required." },
    ],
  },

  "dubai/mirdif": {
    uniqueIntro: "Mirdif is a family-oriented residential area in eastern Dubai, known for its spacious villas, compound living, and proximity to Mushrif Park. The area attracts Emirati and long-term expat families who value community living and larger property sizes. Villa maintenance is the dominant service category here — from full property AMC plans covering AC, plumbing, and electrical, to garden landscaping, swimming pool care, and periodic painting. Mirdif's older villa stock also means regular waterproofing and roof maintenance.",
    highlights: [
      "Villa AMC plans tailored for Mirdif properties",
      "Large property deep cleaning (3-5 bedroom villas)",
      "Garden landscaping and irrigation maintenance",
      "Waterproofing and roof repair for older villas",
      "Serving Mirdif, Uptown Mirdif, and Shorooq compounds",
    ],
    localFAQs: [
      { q: "Do you offer annual maintenance contracts for Mirdif villas?", a: "Yes. Our Mirdif villa AMC covers quarterly AC servicing (all units), bi-annual plumbing inspection, annual electrical check, monthly garden maintenance, and unlimited emergency callouts. Plans from AED 3,499/year for 3-bedroom villas." },
      { q: "My Mirdif villa roof leaks during rain. Can you fix it?", a: "Yes. Roof waterproofing is common in older Mirdif villas. We identify the leak source, apply bituminous or polyurethane waterproof membrane, and provide a 5-year warranty on the repair. Assessment visit is free." },
      { q: "How much does deep cleaning a 4-bedroom Mirdif villa cost?", a: "Full deep cleaning for a 4-bedroom Mirdif villa including kitchen, bathrooms, bedrooms, living areas, and maid's room ranges from AED 899 to AED 1,299 depending on villa size and condition. Garden and garage available as add-ons." },
    ],
  },
};

// Helper function to get city content
export function getCityContent(emirateSlug: string, citySlug: string): CityContent | null {
  return CITY_CONTENT[`${emirateSlug}/${citySlug}`] || null;
}
