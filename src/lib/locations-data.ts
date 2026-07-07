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

  // ─── ABU DHABI AREAS ──────────────────────────────────────────

  "abu-dhabi/al-reem-island": {
    uniqueIntro: "Al Reem Island is Abu Dhabi's premier residential island, connected to the mainland by two bridges and featuring luxury towers like Sun and Sky, Marina Square, and Gate Towers. The island's waterfront setting creates humidity challenges for AC systems, while the modern high-rise construction means residents expect premium-grade maintenance services. Our Abu Dhabi teams service Al Reem regularly, handling everything from tower apartment deep cleaning to marina-view unit mold prevention.",
    highlights: [
      "Premium tower apartment cleaning specialists",
      "Marina-side humidity and mold management",
      "Familiar with Gate Towers and Sun & Sky access",
      "High-rise AC duct cleaning up to 50+ floors",
      "Concierge-coordinated entry for absentee owners",
    ],
    localFAQs: [
      { q: "How much does apartment cleaning cost on Al Reem Island?", a: "Standard apartment cleaning on Al Reem starts from AED 109 for 1-bedroom and AED 149 for 2-bedroom units. Deep cleaning is AED 299-499 depending on apartment size. Premium products used for marble and engineered stone floors." },
      { q: "My Al Reem apartment bathroom has mold. Can you treat it?", a: "Yes. Waterfront towers on Al Reem get higher humidity. We remove visible mold, apply anti-fungal treatment to grout and silicone seals, and clean AC drain pans that often harbor mold growth — from AED 199 per bathroom." },
      { q: "Do you service AC in Gate Towers on Al Reem?", a: "Yes. We regularly service AC units in Gate Towers 1, 2, and 3. Our technicians carry building access cards and coordinate with facility management. Full split AC service from AED 89 per unit." },
    ],
  },

  "abu-dhabi/khalifa-city": {
    uniqueIntro: "Khalifa City is a sprawling villa community in Abu Dhabi's mainland, popular with families who prefer spacious living close to schools, parks, and Khalifa University. The area is divided into Khalifa City A, B, and C, with a mix of standalone villas and compound-style communities. Villa maintenance dominates here — garden upkeep, pool cleaning, full-property AMC plans, and the frequent painting jobs needed to combat the sun's harsh UV damage on exterior walls.",
    highlights: [
      "Villa maintenance hub for Khalifa City A, B, and C",
      "Garden landscaping and pool cleaning services",
      "Exterior painting with UV-resistant coatings",
      "Full-property AMC plans for villa owners",
      "School and nursery cleaning services available",
    ],
    localFAQs: [
      { q: "Do you offer villa AMC plans in Khalifa City?", a: "Yes. Our Khalifa City villa AMC covers quarterly AC servicing for all units, bi-annual plumbing check, annual electrical inspection, monthly garden maintenance, and pest control. Starting from AED 2,999/year for 3-bedroom villas." },
      { q: "How often should I repaint my Khalifa City villa exterior?", a: "Abu Dhabi's intense sun degrades exterior paint faster than cooler climates. We recommend repainting every 3-4 years using UV-resistant exterior paint. Standard 4-bedroom villa exterior from AED 3,499." },
      { q: "Do you maintain pools in Khalifa City compounds?", a: "Yes. We service both private villa pools and shared compound pools in Khalifa City. Weekly maintenance including chemical balancing, skimmer cleaning, and filter service from AED 149/visit." },
    ],
  },

  "abu-dhabi/al-raha-beach": {
    uniqueIntro: "Al Raha Beach is a waterfront community near Abu Dhabi International Airport, offering a mix of apartments, townhouses, and villas along a landscaped coastline. The development by Aldar includes communities like Al Bandar, Al Muneera, and Al Zeina, each with distinct property types. Coastal salt air, sand from beach proximity, and the ongoing need for premium finish maintenance keep our teams busy here year-round with cleaning, AC care, and minor repair services.",
    highlights: [
      "Serving Al Bandar, Al Muneera, and Al Zeina",
      "Coastal property anti-corrosion treatments",
      "Townhouse and villa garden maintenance",
      "Beach-side sand management for balconies",
      "Airport-adjacent — flexible scheduling for travelers",
    ],
    localFAQs: [
      { q: "Do you serve all Al Raha Beach sub-communities?", a: "Yes. We cover Al Bandar (apartments), Al Muneera (townhouses and apartments), and Al Zeina (villas and apartments). Each community has different access protocols and our teams are registered with all three." },
      { q: "Salt air is damaging my outdoor AC unit at Al Raha Beach. What can you do?", a: "We provide quarterly condenser wash with freshwater and apply anti-corrosion spray on coil fins. This prevents salt damage and maintains cooling efficiency. Included in our coastal AC maintenance package from AED 149/unit." },
      { q: "Can you clean my apartment while I'm traveling?", a: "Yes. Many Al Raha Beach residents travel frequently given the airport proximity. We coordinate key handover with your building concierge, complete the service, and send WhatsApp confirmation with photos." },
    ],
  },

  "abu-dhabi/mbz-city": {
    uniqueIntro: "Mohammed Bin Zayed City (MBZ City) is one of Abu Dhabi's largest and most populated residential areas, offering affordable villas and apartments across a vast grid of numbered zones. The area's scale means high demand for budget-friendly cleaning services, practical AC maintenance, and quick plumbing fixes. Many MBZ buildings are 8-15 years old, creating steady need for water heater replacements, bathroom retiling, and electrical panel upgrades that our technicians handle daily.",
    highlights: [
      "Budget-friendly rates for MBZ residents",
      "Covering all MBZ zones (1-40+)",
      "Experienced with mid-age building systems",
      "Water heater replacement and repair specialists",
      "High-volume apartment cleaning services",
    ],
    localFAQs: [
      { q: "What are your cheapest services in MBZ City?", a: "Studio cleaning from AED 69, AC filter cleaning from AED 49, basic pest treatment from AED 99. We keep MBZ pricing affordable while maintaining quality service standards." },
      { q: "My water heater in MBZ City is leaking. Can you replace it?", a: "Yes. Water heater replacement is one of our most common jobs in MBZ City. We supply and install standard 50-80 liter units from AED 449 including removal of the old unit. Same-day service usually available." },
      { q: "Do you cover all zones in MBZ City?", a: "Yes. We serve the entire MBZ City grid from Zone 1 through Zone 40+. Our Abu Dhabi dispatch routes technicians based on zone proximity for fastest response." },
    ],
  },

  "abu-dhabi/tourist-club-area": {
    uniqueIntro: "Tourist Club Area (TCA) is a central Abu Dhabi district near the Corniche, known for its mix of commercial towers, hotels, and residential apartments. The area hosts many offices, retail shops, and hospitality venues that require regular commercial cleaning. Residential buildings here are older construction, often needing experienced plumbers and electricians who can work with legacy systems. Our TCA team handles both commercial contracts and residential maintenance efficiently.",
    highlights: [
      "Commercial and residential cleaning coverage",
      "Hotel and hospitality support services",
      "Central Abu Dhabi — fastest island response",
      "Legacy building plumbing and electrical expertise",
      "Office cleaning contracts for TCA businesses",
    ],
    localFAQs: [
      { q: "Do you offer office cleaning in Tourist Club Area?", a: "Yes. We provide daily and weekly office cleaning for TCA businesses from AED 599/month for standard offices. Early morning and after-hours cleaning available to avoid business disruption." },
      { q: "My TCA apartment has old wiring. Can you check it?", a: "Yes. We perform electrical safety inspections including DB box assessment, wire insulation check, and outlet testing. Older TCA buildings often need circuit breaker upgrades — inspection from AED 149, upgrades quoted separately." },
      { q: "How quickly can you reach Tourist Club Area?", a: "TCA is centrally located on Abu Dhabi island. Our Abu Dhabi team typically reaches TCA within 30-45 minutes for standard bookings and within 1 hour for emergency calls during business hours." },
    ],
  },

  "abu-dhabi/corniche-abu-dhabi": {
    uniqueIntro: "The Corniche is Abu Dhabi's iconic waterfront boulevard stretching 8 kilometers along the island's northwest edge. Residential towers along the Corniche offer premium sea views but face unique maintenance challenges — intense afternoon sun exposure fading curtains and furniture, salt-laden sea breeze affecting outdoor fixtures, and the constant need for window cleaning to maintain those prized views. Our Corniche teams deliver white-glove service matching the area's prestigious address.",
    highlights: [
      "Premium service for Corniche tower residents",
      "Sea-view window cleaning specialists",
      "UV damage protection for curtains and furniture",
      "Salt-air fixture maintenance and replacement",
      "Serving Corniche towers from Nation Towers to Etihad Towers area",
    ],
    localFAQs: [
      { q: "How often should I clean windows in my Corniche apartment?", a: "Sea-facing Corniche apartments accumulate salt film on windows quickly. We recommend monthly window cleaning for clear views. Internal and external window cleaning from AED 149 for standard 2-bedroom apartments." },
      { q: "Sun damage is fading my curtains in my Corniche flat. Any solution?", a: "We install UV-protective window film that blocks 99% of UV rays while maintaining your sea view. This protects curtains, furniture, and flooring from fading. Installation from AED 45 per square meter." },
      { q: "Do you clean apartments in Nation Towers and Etihad Towers area?", a: "Yes. We service apartments in and around Nation Towers, Etihad Towers, and all major Corniche residential buildings. Our teams carry building-specific access credentials for smooth entry." },
    ],
  },

  "abu-dhabi/saadiyat-island": {
    uniqueIntro: "Saadiyat Island is Abu Dhabi's cultural and luxury living destination, home to Louvre Abu Dhabi, upcoming Guggenheim, and exclusive residential communities like Saadiyat Beach Residences and Mamsha Al Saadiyat. Properties here are ultra-premium and demand the highest service standards — museum-quality careful cleaning for luxury interiors, specialized care for natural stone and imported finishes, and discreet service teams who respect the privacy of high-net-worth residents.",
    highlights: [
      "Ultra-premium property maintenance",
      "Specialized care for imported luxury finishes",
      "Discreet, vetted teams for HNWI residences",
      "Beach villa pool and outdoor maintenance",
      "Serving Saadiyat Beach, Mamsha, and Hidd communities",
    ],
    localFAQs: [
      { q: "Do you use special cleaning methods for Saadiyat luxury homes?", a: "Yes. Saadiyat properties often feature imported marble, custom woodwork, and designer fixtures. We use pH-neutral, non-abrasive products and microfiber techniques. Our team leads undergo luxury property care training." },
      { q: "How much does villa deep cleaning cost on Saadiyat Island?", a: "Saadiyat villa deep cleaning ranges from AED 1,800 to AED 4,500 depending on property size, number of bedrooms, and inclusion of outdoor areas. We provide exact quotes after a brief walkthrough." },
      { q: "Can you maintain my Saadiyat Beach villa pool and garden?", a: "Yes. We offer comprehensive packages combining weekly pool maintenance and bi-weekly garden care. Saadiyat packages from AED 899/month covering pool chemicals, filter service, lawn care, and irrigation check." },
    ],
  },

  "abu-dhabi/yas-island": {
    uniqueIntro: "Yas Island is Abu Dhabi's entertainment and lifestyle hub, home to Ferrari World, Yas Waterworld, Warner Bros World, and the Yas Marina F1 circuit. The residential side features Yas Acres villas and West Yas apartments, attracting families and young professionals. Common maintenance needs include villa garden setup for new handovers, AC commissioning, regular cleaning for entertainment-industry staff housing, and commercial cleaning for the island's hospitality venues.",
    highlights: [
      "New villa handover cleaning and snagging",
      "Garden setup and landscaping for Yas Acres",
      "Hospitality venue cleaning support",
      "AC commissioning for new properties",
      "Serving Yas Acres, West Yas, and Yas Bay",
    ],
    localFAQs: [
      { q: "I just got my Yas Acres villa keys. Do you do handover cleaning?", a: "Yes. New handover cleaning removes construction dust, cleans all surfaces, sanitizes bathrooms and kitchen, and makes your villa move-in ready. Yas Acres villa handover cleaning from AED 599 for 3-bedroom units." },
      { q: "Can you set up the garden for my new Yas Acres villa?", a: "Yes. We offer complete garden landscaping including soil preparation, grass laying (natural or artificial), plant selection, irrigation installation, and decorative stone work. Custom quotes after site visit." },
      { q: "Do you provide cleaning for hotels and entertainment venues on Yas?", a: "Yes. We support hospitality venues on Yas Island with deep cleaning, kitchen exhaust service, event cleanup, and regular maintenance contracts. Scaled team deployment for large venue requirements." },
    ],
  },

  // ─── AJMAN AREAS ──────────────────────────────────────────────

  "ajman/al-rashidiya": {
    uniqueIntro: "Al Rashidiya is Ajman's most established residential neighborhood, featuring a mix of older villas, apartment buildings, and new towers along Sheikh Khalifa Bin Zayed Road. The area's proximity to the Ajman Corniche and local markets makes it one of the emirate's most populated districts. Maintenance needs range from affordable apartment cleaning for the working-class community to villa upkeep for longer-term residents, with older buildings requiring experienced plumbers who can handle aging pipe systems.",
    highlights: [
      "Ajman's primary service hub — fastest response",
      "Affordable apartment cleaning packages",
      "Older building plumbing and electrical expertise",
      "Villa maintenance including garden and exterior",
      "Serving Corniche-adjacent blocks and inner Rashidiya",
    ],
    localFAQs: [
      { q: "What are your rates for apartment cleaning in Al Rashidiya, Ajman?", a: "Apartment cleaning in Al Rashidiya starts from AED 69 for studios and AED 89 for 1-bedroom units. We offer weekly packages from AED 55/visit — among the most affordable in Ajman." },
      { q: "Do you fix water pump issues in Al Rashidiya buildings?", a: "Yes. Water pump failures are common in older Rashidiya buildings. We repair and replace booster pumps, pressure tanks, and float valves. Emergency pump repair available same-day from AED 199." },
      { q: "How quickly can you reach Al Rashidiya?", a: "Al Rashidiya is our primary Ajman service zone. We typically dispatch within 45-60 minutes for standard bookings and prioritize emergency calls for same-hour response when possible." },
    ],
  },

  "ajman/al-nuaimiya": {
    uniqueIntro: "Al Nuaimiya is a central Ajman area with dense residential and commercial activity, featuring numerous apartment towers, small offices, and retail shops. The neighborhood is one of Ajman's most affordable, attracting bachelor workers and small families who need cost-effective maintenance services. Our Al Nuaimiya packages focus on value — budget cleaning, basic AC servicing, and quick-fix plumbing at rates that suit the area's price-conscious residents without compromising on service quality.",
    highlights: [
      "Budget-optimized service packages",
      "High-density apartment quick-clean service",
      "Retail shop and small office cleaning",
      "Basic AC service from AED 69",
      "Same-day availability for most services",
    ],
    localFAQs: [
      { q: "What is the cheapest cleaning available in Al Nuaimiya?", a: "Studio apartment cleaning from AED 55, AC filter cleaning from AED 39, basic pest spray from AED 89. We design Al Nuaimiya packages to be the most affordable in Ajman without cutting corners on quality." },
      { q: "Can you clean my small shop in Al Nuaimiya?", a: "Yes. Retail shop cleaning in Al Nuaimiya starts from AED 99 per visit. We offer early morning cleaning before shop opening. Weekly packages available from AED 79/visit." },
      { q: "Do you offer same-day AC repair in Al Nuaimiya?", a: "Yes. For AC not cooling, water leaks, or strange noises, we dispatch technicians same-day in Al Nuaimiya. Diagnostic visit from AED 79, with repair costs quoted transparently before any work begins." },
    ],
  },

  "ajman/emirates-city": {
    uniqueIntro: "Emirates City is a large residential cluster of towers on the E311 highway in Ajman, known for its affordable apartment pricing and high tenant turnover. The towers — including Goldcrest, Paradise Lakes, and Lavender — house thousands of residents who need regular cleaning between tenancies, basic AC maintenance, and quick plumbing repairs. Landlords managing multiple units in Emirates City are among our most active clients, using bulk cleaning and turnover packages.",
    highlights: [
      "Bulk turnover cleaning for Emirates City landlords",
      "Affordable rates for tower apartment maintenance",
      "Serving Goldcrest, Paradise Lakes, and Lavender towers",
      "Move-in/move-out cleaning specialists",
      "AC cleaning from AED 69 per unit",
    ],
    localFAQs: [
      { q: "I own 6 apartments in Emirates City Ajman. Do you offer landlord rates?", a: "Yes. Landlords with 3+ units get bulk pricing from AED 45 per studio for turnover cleaning. We also offer annual maintenance packages covering AC servicing, pest control, and emergency repairs for all your units." },
      { q: "How much does move-out cleaning cost in Emirates City?", a: "Move-out cleaning in Emirates City starts from AED 149 for studios, AED 199 for 1-bedroom, and AED 249 for 2-bedroom apartments. Includes kitchen degreasing, bathroom descaling, and balcony cleaning." },
      { q: "The AC in my Emirates City apartment is leaking water. Can you fix it today?", a: "Yes. AC water leaks are usually caused by clogged drain lines — our most common repair in Emirates City towers. Same-day fix available from AED 99. We carry drain cleaning equipment on all our service vans." },
    ],
  },

  "ajman/al-jurf": {
    uniqueIntro: "Al Jurf is Ajman's industrial and commercial zone, housing warehouses, workshops, factories, and labor accommodations alongside some residential areas. Service needs here lean heavily commercial — warehouse cleaning, industrial AC and ventilation maintenance, labor camp sanitization, and pest control for storage facilities. Our Al Jurf commercial teams carry industrial-grade equipment and schedule work during off-peak hours to avoid disrupting business operations.",
    highlights: [
      "Industrial and warehouse cleaning capabilities",
      "Labor accommodation sanitization services",
      "Commercial pest control for storage facilities",
      "Large-capacity AC and ventilation maintenance",
      "Off-hours scheduling for zero business disruption",
    ],
    localFAQs: [
      { q: "Can you sanitize our labor accommodation in Al Jurf?", a: "Yes. We provide full sanitization including room cleaning, bathroom deep clean, kitchen degreasing, and common area disinfection. Bulk rates for camps with 50+ rooms. Compliant with Ajman Municipality health standards." },
      { q: "Do you handle warehouse pest control in Al Jurf?", a: "Yes. Warehouses attract rodents and stored-product insects. We deploy bait stations, seal entry points, and apply residual spray treatments. Monthly monitoring plans from AED 299/month for standard warehouses." },
      { q: "Can you clean our factory floor in Al Jurf?", a: "Yes. Industrial floor cleaning using ride-on scrubbers and degreasers. We handle concrete, epoxy, and tiled industrial floors. Quoted per square meter — standard 1,000 sqm facility from AED 1,499." },
    ],
  },

  "ajman/al-rawda-ajman": {
    uniqueIntro: "Al Rawda is a quiet residential area in Ajman, popular with families who prefer a less commercial environment. The neighborhood features a mix of newer apartment buildings and smaller villa compounds, with community parks and schools nearby. Residents here commonly request regular weekly cleaning, seasonal AC maintenance, small handyman jobs like shelf and curtain installation, and occasional pest control — practical home services at Ajman's characteristically affordable pricing.",
    highlights: [
      "Family-focused residential service area",
      "Weekly cleaning packages from AED 55",
      "Small handyman jobs and furniture assembly",
      "Seasonal AC prep before summer",
      "Pest control for villa compounds",
    ],
    localFAQs: [
      { q: "Do you offer weekly cleaning in Al Rawda, Ajman?", a: "Yes. Weekly apartment cleaning in Al Rawda from AED 55/visit for 1-bedroom units. Includes floor mopping, bathroom cleaning, kitchen wipe-down, and dusting. No long-term contract required." },
      { q: "Can you hang shelves and install curtain rods in Al Rawda?", a: "Yes. Our handyman service covers shelf mounting, curtain rod installation, TV wall mounting, picture hanging, and furniture assembly. Small jobs from AED 69. Multiple items in one visit get discounted rates." },
      { q: "Is pest control needed in Al Rawda villas?", a: "Villas with gardens in Al Rawda can attract ants, cockroaches, and occasionally scorpions. We recommend quarterly perimeter treatment. Starting from AED 129 per visit with 90-day guarantee." },
    ],
  },

  // ─── RAS AL KHAIMAH AREAS ─────────────────────────────────────

  "ras-al-khaimah/al-nakheel": {
    uniqueIntro: "Al Nakheel is the urban center of Ras Al Khaimah city, featuring the main commercial district, older residential neighborhoods, and the RAK Corniche waterfront. As the emirate's most populated area, Al Nakheel has a mix of older and newer buildings creating diverse maintenance needs — from legacy plumbing repair in established buildings to modern apartment cleaning in newer tower developments. Our RAK team is headquartered near Al Nakheel for the fastest emirate-wide response.",
    highlights: [
      "RAK primary service hub — fastest local response",
      "Mixed building age expertise (old and new)",
      "Corniche-area waterfront maintenance",
      "Commercial cleaning for RAK city center shops",
      "Affordable rates matching RAK market pricing",
    ],
    localFAQs: [
      { q: "How much does apartment cleaning cost in Al Nakheel, RAK?", a: "Apartment cleaning in Al Nakheel starts from AED 79 for 1-bedroom units. RAK pricing is generally 10-20% lower than Dubai for equivalent services. Weekly packages from AED 59/visit." },
      { q: "Do you cover all of Ras Al Khaimah from Al Nakheel?", a: "Yes. Our RAK operations hub is near Al Nakheel, allowing us to serve Al Hamra, Mina Al Arab, and other RAK areas within 20-30 minutes. Al Nakheel itself gets fastest response." },
      { q: "Can you fix plumbing in older Al Nakheel buildings?", a: "Yes. Many Al Nakheel buildings are 15-25 years old. Our plumbers carry fittings for older pipe systems and can handle everything from faucet replacement to full bathroom replumbing." },
    ],
  },

  "ras-al-khaimah/al-hamra-village": {
    uniqueIntro: "Al Hamra Village is a premium resort-style community in RAK, featuring beachfront villas, townhouses, golf course residences, and the Al Hamra Mall. Many properties here are vacation homes or short-term rental units, creating demand for turnover cleaning, property management maintenance, and villa upkeep for absentee owners. The community's high standards and beachfront location require experienced teams who can deliver resort-quality service.",
    highlights: [
      "Resort-quality cleaning for Al Hamra properties",
      "Vacation home turnover and management cleaning",
      "Beachfront villa salt-air maintenance",
      "Golf course residence garden and pool care",
      "Absentee owner property management support",
    ],
    localFAQs: [
      { q: "I rent my Al Hamra villa on Airbnb. Do you do turnover cleaning?", a: "Yes. We provide same-day turnover cleaning between guests — linen change support, full clean, bathroom sanitization, and kitchen reset. Fast 3-4 hour turnaround for standard villas from AED 349." },
      { q: "Can you maintain my Al Hamra property while I'm overseas?", a: "Yes. We offer absentee owner packages including monthly inspection, AC run-check, pest prevention, cleaning, and garden/pool maintenance. You receive photo reports after each visit. From AED 499/month." },
      { q: "Do you clean around the golf course residences in Al Hamra?", a: "Yes. We service villas and townhouses throughout Al Hamra including Golf Apartments, Bayti Townhouses, and beachfront villas. Garden maintenance for golf-view properties from AED 249/month." },
    ],
  },

  "ras-al-khaimah/mina-al-arab": {
    uniqueIntro: "Mina Al Arab is a waterfront destination development on RAK's coast, offering apartments and villas with sea views and private beach access. As a newer development, properties here have modern AC and plumbing systems but need regular maintenance to keep them performing optimally in the coastal environment. Our Mina Al Arab service includes anti-corrosion treatment for outdoor fixtures, regular AC maintenance to combat sea-air humidity, and premium cleaning for the development's quality finishes.",
    highlights: [
      "Modern waterfront property specialists",
      "Coastal anti-corrosion maintenance programs",
      "New unit handover and snagging available",
      "Premium finish care for contemporary interiors",
      "Serving apartments, villas, and Hayat Island",
    ],
    localFAQs: [
      { q: "Do you offer property snagging in Mina Al Arab for new handovers?", a: "Yes. Our inspectors check all aspects of new units — AC performance, plumbing pressure, electrical function, paint quality, tile alignment, and fixture installation. Full snagging report from AED 799." },
      { q: "Sea air is affecting metal fixtures on my Mina Al Arab balcony. What can you do?", a: "We clean corroded fixtures, apply marine-grade anti-corrosion coating, and recommend stainless steel replacements where damage is severe. Balcony fixture maintenance from AED 149 per visit." },
      { q: "How often should I service my AC in Mina Al Arab?", a: "Coastal RAK properties should have AC serviced every 3 months during summer and every 6 months in winter. The sea air accelerates coil corrosion. Our quarterly coastal AC package from AED 129/unit per visit." },
    ],
  },

  // ─── FUJAIRAH AREAS ───────────────────────────────────────────

  "fujairah/fujairah-city": {
    uniqueIntro: "Fujairah City is the capital and main urban center of the emirate, nestled between the Hajar Mountains and the Gulf of Oman. The city has a growing residential and commercial sector with apartment buildings, government offices, and a developing tourism infrastructure. Maintenance services here need to account for Fujairah's higher humidity compared to western UAE emirates, as the Gulf of Oman coast brings more moisture — affecting AC loads, increasing mold risk, and accelerating exterior paint degradation.",
    highlights: [
      "Fujairah's primary service coverage area",
      "East coast humidity management specialists",
      "Government and commercial building maintenance",
      "Exterior painting with moisture-resistant coatings",
      "Serving Fujairah city center and surrounding areas",
    ],
    localFAQs: [
      { q: "Is Fujairah more humid than Dubai? Does that affect maintenance?", a: "Yes. Fujairah's east coast location makes it more humid year-round. This means AC systems work harder, mold grows faster in bathrooms, and exterior paint degrades quicker. We adjust our maintenance schedules and products for Fujairah's climate." },
      { q: "Do you cover all of Fujairah emirate?", a: "Yes. We serve Fujairah City, Dibba Al Fujairah, and surrounding areas. Response times in Fujairah City are same-day for most services. Dibba is covered with 24-hour advance booking." },
      { q: "How much does AC cleaning cost in Fujairah?", a: "AC cleaning in Fujairah starts from AED 89 per split unit. Given the higher humidity, we recommend cleaning every 3 months rather than the standard 6 months. Quarterly packages from AED 79/unit per visit." },
    ],
  },

  "fujairah/dibba": {
    uniqueIntro: "Dibba Al Fujairah is a coastal town at the northernmost tip of the east coast, known for its fishing harbor, mountain backdrop, and growing tourism sector with diving and adventure activities. Residential maintenance here includes apartment cleaning for the local community, hospitality support for dive resorts and hotels, and boat/marina facility cleaning. The remote location means our Dibba visits are pre-scheduled — we typically serve Dibba on dedicated routing days for maximum efficiency.",
    highlights: [
      "Scheduled service days for Dibba coverage",
      "Tourism and hospitality cleaning support",
      "Mountain and coastal property maintenance",
      "Boat and marina facility cleaning available",
      "Pre-booking recommended for guaranteed availability",
    ],
    localFAQs: [
      { q: "How do I book a service in Dibba Al Fujairah?", a: "Dibba services are available on our scheduled routing days (typically 2-3 days per week). Book at least 48 hours in advance to guarantee your preferred date. Call or WhatsApp to check the next available Dibba service day." },
      { q: "Do you provide cleaning for dive resorts and hotels in Dibba?", a: "Yes. We support Dibba hospitality venues with room turnover cleaning, kitchen maintenance, and facility deep cleaning. Seasonal contracts available for peak diving season (October-April)." },
      { q: "Can you maintain a property in Dibba that I visit on weekends only?", a: "Yes. We offer fortnightly or monthly property check-and-clean packages for weekend homes in Dibba. Includes AC run-check, dust cleaning, bathroom sanitization, and pest check from AED 249/visit." },
    ],
  },

  // ─── UMM AL QUWAIN AREAS ──────────────────────────────────────

  "umm-al-quwain/old-town-uaq": {
    uniqueIntro: "Old Town UAQ is the historic center of Umm Al Quwain, featuring traditional architecture, the corniche waterfront, and a close-knit residential community. Properties here are a mix of older coral-stone houses, mid-age apartment blocks, and some newer developments. Maintenance in Old Town requires technicians who respect the area's heritage character while providing modern service quality — from careful painting that matches original aesthetics to plumbing upgrades in buildings with decades-old pipe systems.",
    highlights: [
      "Heritage-aware maintenance approach",
      "UAQ primary service area",
      "Older building plumbing and electrical upgrades",
      "Corniche-area property maintenance",
      "Affordable pricing matching UAQ market",
    ],
    localFAQs: [
      { q: "Do you service the whole of Umm Al Quwain?", a: "Yes. We cover Old Town UAQ, Al Salamah, and surrounding residential areas. UAQ services are available 5 days a week with same-day availability for most requests." },
      { q: "Can you upgrade plumbing in old UAQ buildings?", a: "Yes. Many Old Town buildings have 20+ year old plumbing. We replace old galvanized pipes with modern PPR or CPVC systems, upgrade water heaters, and fix chronic leak issues. Free assessment before quoting." },
      { q: "How much does cleaning cost in Umm Al Quwain?", a: "UAQ has the most affordable rates in our network. Apartment cleaning from AED 59, AC service from AED 79, pest control from AED 99. We price UAQ services to match the local market." },
    ],
  },

  "umm-al-quwain/al-salamah": {
    uniqueIntro: "Al Salamah is a newer residential area in Umm Al Quwain, developed to accommodate the emirate's growing population with modern apartment buildings and villa plots. The area offers more contemporary living compared to the Old Town, with newer construction that has standard modern plumbing and AC systems. Residents here request regular cleaning, seasonal AC maintenance, and the occasional fit-out or renovation as they personalize newly built properties.",
    highlights: [
      "Modern residential area maintenance",
      "New property customization and fit-out support",
      "Regular cleaning packages for families",
      "AC commissioning for new installations",
      "Competitive UAQ pricing",
    ],
    localFAQs: [
      { q: "Do you help with interior customization for new Al Salamah properties?", a: "Yes. We support painting, curtain installation, shelf mounting, kitchen cabinet adjustments, and small renovation work for new Al Salamah units. Free consultation visit to discuss your requirements." },
      { q: "What cleaning packages do you offer in Al Salamah?", a: "Weekly cleaning from AED 55/visit, bi-weekly from AED 69/visit, and deep cleaning from AED 149 for 1-bedroom apartments. Family villas quoted based on size — typically AED 199-399 for regular cleaning." },
      { q: "Can you install and commission a new AC unit in Al Salamah?", a: "Yes. We supply and install split AC units from all major brands. Installation includes bracket mounting, pipe routing, drainage setup, and gas charging. Standard installation from AED 349 plus unit cost." },
    ],
  },

  // ─── AL AIN AREAS ─────────────────────────────────────────────

  "al-ain/al-jimi": {
    uniqueIntro: "Al Jimi is one of Al Ain's oldest and most established residential areas, centered around the historic Al Jimi Oasis and featuring a mix of traditional villas, newer apartment blocks, and the Al Jimi Mall commercial area. The neighborhood houses many Emirati and long-term resident families who value reliable, recurring maintenance services. Villa upkeep dominates here — from falaj-adjacent garden maintenance to comprehensive property AMC plans that cover AC, plumbing, and electrical year-round.",
    highlights: [
      "Al Ain's primary service hub — fastest response",
      "Villa AMC plans for Al Jimi family homes",
      "Garden maintenance near Al Jimi Oasis",
      "Older villa renovation and upgrade support",
      "Trusted by long-term Al Ain residents",
    ],
    localFAQs: [
      { q: "Do you offer villa AMC plans in Al Jimi, Al Ain?", a: "Yes. Our Al Jimi villa AMC covers quarterly AC servicing, plumbing inspection, electrical check, monthly garden care, and pest control. Starting from AED 2,499/year for 3-bedroom villas." },
      { q: "Can you maintain gardens near Al Jimi Oasis?", a: "Yes. We handle garden maintenance for properties near the oasis including lawn care, palm tree trimming, irrigation repair, and seasonal planting suited to Al Ain's inland climate. Monthly garden plans from AED 249." },
      { q: "How quickly can you reach Al Jimi?", a: "Al Jimi is our Al Ain hub area. Standard bookings are served same-day or next-day. Emergency plumbing and electrical calls are prioritized for 1-2 hour response during business hours." },
    ],
  },

  "al-ain/al-muwaiji": {
    uniqueIntro: "Al Muwaiji is a residential area in central Al Ain, known for its family-friendly environment and proximity to Al Ain University. The neighborhood features compound-style villa communities and newer apartment developments catering to university staff, students, and families. Common service requests include regular home cleaning, AC maintenance in Al Ain's extreme summer heat (often 50°C+), and pest control to manage the desert insects that are more prevalent in inland locations compared to coastal emirates.",
    highlights: [
      "University area — student-friendly pricing available",
      "Extreme heat AC maintenance specialists",
      "Desert pest control expertise",
      "Compound villa cleaning and maintenance",
      "Serving Al Muwaiji and University district",
    ],
    localFAQs: [
      { q: "Al Ain gets over 50°C in summer. How often should I service my AC?", a: "In Al Ain's extreme heat, we recommend AC servicing every 2-3 months during summer (May-September) instead of the standard 6 months. Filters should be cleaned monthly. Our Al Ain summer AC package covers this." },
      { q: "Desert insects keep entering my Al Muwaiji villa. What can you do?", a: "Al Ain's inland desert location brings more insect activity — especially ants, beetles, and occasionally scorpions. We apply perimeter barrier treatment plus interior gel bait. Quarterly plans from AED 149/visit." },
      { q: "Do you have discounts for university staff in Al Muwaiji?", a: "We offer competitive rates for the Al Muwaiji university community. Studio cleaning from AED 59, apartment cleaning from AED 79. University ID holders get 10% off first booking." },
    ],
  },

  "al-ain/al-towayya": {
    uniqueIntro: "Al Towayya is a well-established residential neighborhood in Al Ain, situated near the Al Ain-Dubai highway and close to commercial areas. The district features a blend of government housing, private villas, and apartment buildings, serving a mix of Emirati families and long-term expat residents. Maintenance focus here is on villa painting and renovation to combat the harsh inland sun, garden irrigation repairs common in Al Ain's dry climate, and reliable AC servicing that keeps homes comfortable through the extreme summer months.",
    highlights: [
      "Villa painting with extreme-UV-resistant coatings",
      "Garden irrigation repair and upgrade",
      "Government housing maintenance experience",
      "Summer AC emergency response capability",
      "Affordable rates for Al Ain families",
    ],
    localFAQs: [
      { q: "How often should I repaint my villa exterior in Al Towayya?", a: "Al Ain's intense sun and dust storms degrade exterior paint faster — we recommend repainting every 2-3 years with UV-resistant paint. Standard 3-bedroom villa exterior from AED 2,999. Color consultation included." },
      { q: "My garden irrigation system in Al Towayya keeps breaking. Can you fix it?", a: "Yes. Al Ain's hard water and extreme heat stress irrigation pipes and sprinkler heads. We repair leaks, replace damaged sprinklers, and upgrade timer controllers. Full irrigation system check from AED 149." },
      { q: "Do you handle AC emergencies in Al Towayya during summer?", a: "Yes. Summer AC breakdowns in Al Ain are genuine emergencies at 50°C. We prioritize emergency AC calls in Al Towayya and all Al Ain areas for same-day response. Emergency diagnostic from AED 99." },
    ],
  },

  "al-ain/al-khabisi": {
    uniqueIntro: "Al Khabisi is a primarily residential area in Al Ain with a quieter, suburban character. The neighborhood is popular with families seeking a calmer environment away from the city center, with schools, mosques, and small retail clusters serving daily needs. Home maintenance here is straightforward and practical — regular cleaning, bi-annual AC servicing, minor plumbing and electrical fixes, and annual pest prevention treatments. Our Al Khabisi customers value reliability and fair pricing above all else.",
    highlights: [
      "Practical, no-frills maintenance services",
      "Family-oriented scheduling and approach",
      "Annual pest prevention programs",
      "Minor repair and handyman services",
      "Consistent quality at Al Ain-friendly pricing",
    ],
    localFAQs: [
      { q: "What is the most popular service in Al Khabisi?", a: "Regular apartment and villa cleaning is our top service in Al Khabisi, followed by AC servicing and pest control. Most families book bi-weekly cleaning from AED 65/visit and quarterly AC service from AED 89/unit." },
      { q: "Do you offer annual pest prevention in Al Khabisi?", a: "Yes. Our annual pest plan includes 4 quarterly treatments covering cockroaches, ants, and general crawling insects. Includes perimeter barrier and interior gel bait. Annual plan from AED 449 (4 visits)." },
      { q: "Can you do small handyman jobs in Al Khabisi?", a: "Yes. We handle shelf installation, curtain rods, door handle replacement, tap washer change, light bulb replacement, and furniture assembly. Small jobs from AED 69 with no call-out fee in Al Khabisi." },
    ],
  },
};

// Helper function to get city content
export function getCityContent(emirateSlug: string, citySlug: string): CityContent | null {
  return CITY_CONTENT[`${emirateSlug}/${citySlug}`] || null;
}
