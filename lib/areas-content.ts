/**
 * Per-city service-area content for /service-area/[city] pages.
 * Original, localized copy — coastal cities lead with salt-air corrosion,
 * inland cities with hard-water scale (a differentiator no local competitor
 * uses). Source of truth for the Service Areas nav dropdown, footer, and
 * sitemap.
 */

export type AreaType = "coastal" | "inland";

export interface AreaContent {
  slug: string;
  name: string;
  zips: string[];
  type: AreaType;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localAngle: string;
  neighborhoods: string[];
  landmark: string;
  faqs: { q: string; a: string }[];
}

export const areas: AreaContent[] = [
  {
    slug: "la-jolla",
    name: "La Jolla",
    zips: ["92037"],
    type: "coastal",
    metaTitle: "Appliance Repair in La Jolla, CA | Outlaw Appliance",
    metaDescription:
      "Fast, reliable appliance repair in La Jolla, CA. From the Village to the Shores, we fix what salt air breaks. Call Outlaw at (858) 757-8977 today.",
    intro:
      "La Jolla homes range from hillside Muirlands estates to condos steps from the Village, and every one of them runs on appliances that need to keep up. Outlaw Appliance Repair serves the whole 92037 area with honest diagnostics and same-week scheduling. Whether you're near the Cove or up in Bird Rock, we show up on time and fix it right the first time.",
    localAngle:
      "Living this close to the Pacific looks great until salt air gets into your appliances. The fine ocean mist corrodes refrigerator coils, washer drums, and exposed electrical connections faster than inland homes ever see. We inspect for early corrosion on every La Jolla call and clean or seal vulnerable components so a small rust spot doesn't become a full replacement.",
    neighborhoods: ["La Jolla Village", "Bird Rock", "The Muirlands", "La Jolla Shores", "Mount Soledad", "La Jolla Farms", "Windansea"],
    landmark: "near La Jolla Cove",
    faqs: [
      { q: "Do you repair appliances in Bird Rock and La Jolla Shores?", a: "Yes. We cover all of La Jolla, including Bird Rock, La Jolla Shores, the Muirlands, and the Village in the 92037 area." },
      { q: "How quickly can you get to La Jolla?", a: "We offer same-week and often same-day service throughout La Jolla, and we'll give you a tight arrival window so you're not waiting around all day." },
      { q: "Does ocean air really damage appliances in La Jolla?", a: "It does. Homes near the La Jolla coast see faster corrosion on coils and electrical parts, so we check for salt-air wear on every visit and treat it before it spreads." },
    ],
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    zips: ["92014"],
    type: "coastal",
    metaTitle: "Appliance Repair in Del Mar, CA | Outlaw Appliance",
    metaDescription:
      "Trusted appliance repair in Del Mar, CA, from the beach colony to the bluffs. We fix what coastal salt air breaks. Call Outlaw at (858) 757-8977.",
    intro:
      "From the beachfront cottages near the racetrack to the canyon homes up in Del Mar Heights, this small coastal town packs a lot of high-end appliances into a tight footprint. Outlaw Appliance Repair serves all of 92014 with straight-talking diagnostics and respect for your home and your time. We treat a Del Mar service call like the only job on our schedule.",
    localAngle:
      "Del Mar's bluff-top and beach-colony homes take the full brunt of the marine layer. That constant salt mist accelerates rust on washer and dryer components, dishwasher racks, and the metal behind your fridge. On every Del Mar visit we look for corrosion early, clean affected parts, and recommend simple protective steps that add years to your appliances.",
    neighborhoods: ["Del Mar Beach Colony", "Del Mar Heights", "Olde Del Mar", "Crest Canyon", "Del Mar Terrace"],
    landmark: "near the Del Mar Fairgrounds",
    faqs: [
      { q: "Do you serve Del Mar Heights and Olde Del Mar?", a: "Yes. We repair appliances across all of Del Mar, from the beach colony to Del Mar Heights and the Crest Canyon homes in 92014." },
      { q: "How fast can a technician reach Del Mar?", a: "Most Del Mar appointments are booked same-week, with same-day slots often available. We confirm a clear arrival window for every visit." },
      { q: "Why do Del Mar appliances seem to rust faster?", a: "Del Mar's oceanfront salt air is the culprit. We check for corrosion on every Del Mar call and treat it early so it doesn't shorten your appliance's life." },
    ],
  },
  {
    slug: "carmel-valley",
    name: "Carmel Valley",
    zips: ["92130"],
    type: "coastal",
    metaTitle: "Appliance Repair in Carmel Valley, CA | Outlaw",
    metaDescription:
      "Reliable appliance repair in Carmel Valley, CA. Serving Pacific Highlands Ranch to One Paseo with honest pricing. Call Outlaw at (858) 757-8977.",
    intro:
      "Carmel Valley is one of San Diego's newer master-planned communities, full of family homes around Pacific Highlands Ranch and the shops at One Paseo. These households run their kitchens and laundry rooms hard, and Outlaw Appliance Repair keeps them moving. We serve all of 92130 with clear estimates, quality parts, and the kind of follow-through that earns repeat customers.",
    localAngle:
      "Carmel Valley sits just inland of the coast, so homes here still catch the marine air drifting in off the Pacific. That salt-laden moisture can quietly corrode refrigerator coils and metal appliance components over time. We inspect for early corrosion on Carmel Valley calls and clean or protect at-risk parts so the ocean's reach doesn't cut your appliances short.",
    neighborhoods: ["Pacific Highlands Ranch", "Torrey Hills", "Carmel Country Highlands", "Del Mar Mesa", "Sorrento Hills", "Carmel Del Mar"],
    landmark: "near One Paseo",
    faqs: [
      { q: "Do you cover Pacific Highlands Ranch and Torrey Hills?", a: "Yes. We serve all of Carmel Valley, including Pacific Highlands Ranch, Torrey Hills, and Del Mar Mesa in the 92130 area." },
      { q: "How soon can you get to Carmel Valley?", a: "We typically reach Carmel Valley the same week, often same day, and always give you a defined arrival window instead of an all-day wait." },
      { q: "Does coastal air affect appliances in Carmel Valley?", a: "Some. Carmel Valley still catches marine air off the coast, so we check for early corrosion on appliances here and treat it before it causes problems." },
    ],
  },
  {
    slug: "rancho-santa-fe",
    name: "Rancho Santa Fe",
    zips: ["92067", "92091"],
    type: "inland",
    metaTitle: "Appliance Repair in Rancho Santa Fe, CA | Outlaw",
    metaDescription:
      "Premium appliance repair in Rancho Santa Fe, CA. Hard-water expertise for Covenant estates. Honest, on-time service. Call Outlaw at (858) 757-8977.",
    intro:
      "Rancho Santa Fe's gated Covenant estates and sprawling ranch properties demand appliance service that respects both the home and the homeowner. Outlaw Appliance Repair serves all of 92067 with discreet, professional repairs on high-end and built-in appliances. We diagnose honestly, source the right parts, and treat your property with the care a Ranch home deserves.",
    localAngle:
      "Rancho Santa Fe runs on hard inland water, and the mineral content shows up fast inside appliances. Scale builds in dishwasher spray arms, washing-machine valves, and water lines, choking flow and straining pumps. On every Ranch visit we check for mineral buildup, descale affected components, and advise on filtration so your appliances run clean and last longer.",
    neighborhoods: ["The Covenant", "Fairbanks Ranch", "Rancho Santa Fe Farms", "The Bridges", "Cielo", "Del Rayo Estates", "Rancho Del Lago"],
    landmark: "near the Rancho Santa Fe Golf Club",
    faqs: [
      { q: "Do you service Fairbanks Ranch and The Covenant?", a: "Yes. We provide appliance repair throughout Rancho Santa Fe, including The Covenant, Fairbanks Ranch, and The Bridges in 92067." },
      { q: "How quickly can you reach Rancho Santa Fe?", a: "We schedule Rancho Santa Fe visits within the week and provide a firm arrival window so your day isn't tied up waiting on a technician." },
      { q: "Is hard water a problem for Rancho Santa Fe appliances?", a: "Yes. Rancho Santa Fe's hard water leaves mineral scale in dishwashers and washers, so we descale and check water lines on every visit here." },
    ],
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    zips: ["92024"],
    type: "coastal",
    metaTitle: "Appliance Repair in Encinitas, CA | Outlaw Appliance",
    metaDescription:
      "Dependable appliance repair in Encinitas, CA, from Leucadia to Olivenhain. We fix what salt air breaks. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Encinitas blends laid-back beach neighborhoods like Leucadia with established inland pockets out toward Olivenhain, and Outlaw Appliance Repair serves them all. Across 92024, we deliver honest diagnostics, fair pricing, and repairs that hold up. Whether your fridge quit near Moonlight Beach or your dryer died up in the hills, we'll get it sorted quickly and correctly.",
    localAngle:
      "Encinitas homes near the coast live in the salt air, and it takes a toll on appliances. Ocean mist corrodes condenser coils, washer drums, and electrical contacts well before their time. On Encinitas calls we look for early corrosion, clean and protect vulnerable parts, and flag wear before it turns a quick fix into a costly replacement.",
    neighborhoods: ["Leucadia", "Olivenhain", "Cardiff-by-the-Sea", "Old Encinitas", "New Encinitas", "Village Park"],
    landmark: "near Moonlight Beach",
    faqs: [
      { q: "Do you serve Leucadia and Cardiff-by-the-Sea?", a: "Yes. We repair appliances throughout Encinitas, including Leucadia, Cardiff-by-the-Sea, and Olivenhain in the 92024 area." },
      { q: "How fast can you get to Encinitas?", a: "We offer same-week and frequently same-day appointments in Encinitas, with a clear arrival window so you're not stuck waiting." },
      { q: "Does salt air really shorten appliance life in Encinitas?", a: "It can. Encinitas homes near the beach see faster corrosion, so we inspect for salt-air damage on every visit and treat it early." },
    ],
  },
  {
    slug: "coronado",
    name: "Coronado",
    zips: ["92118"],
    type: "coastal",
    metaTitle: "Appliance Repair in Coronado, CA | Outlaw Appliance",
    metaDescription:
      "Trusted appliance repair in Coronado, CA. Island salt air is hard on appliances — we fix it right. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Coronado's island setting, with its historic homes near the Hotel del and tidy streets through the Village, means appliances here work in one of the most salt-heavy environments in the county. Outlaw Appliance Repair crosses the bridge to serve all of 92118 with honest, careful repairs. We respect the character of Coronado homes and get your appliances running without the hassle.",
    localAngle:
      "Surrounded by water on nearly every side, Coronado gets a heavy dose of salt air that's tough on appliances. The corrosive sea mist attacks refrigerator coils, washer and dryer parts, and exposed wiring faster than almost anywhere inland. We check Coronado appliances for corrosion on every call and clean or seal the vulnerable spots to extend their working life.",
    neighborhoods: ["The Village", "Coronado Shores", "Coronado Cays", "Country Club Estates", "Glorietta Bay", "Coronado Heights"],
    landmark: "near the Hotel del Coronado",
    faqs: [
      { q: "Do you come out to Coronado and the Coronado Cays?", a: "Yes. We serve all of Coronado, including the Village, Coronado Shores, and the Coronado Cays in 92118." },
      { q: "How fast can you reach Coronado?", a: "We schedule Coronado visits within the week, often same day, and confirm a tight arrival window even with the bridge crossing factored in." },
      { q: "Is salt air worse for appliances on Coronado island?", a: "Yes. Coronado's surrounded by water, so salt-air corrosion hits appliances hard. We inspect and treat for it on every Coronado call." },
    ],
  },
  {
    slug: "point-loma",
    name: "Point Loma",
    zips: ["92106", "92107"],
    type: "coastal",
    metaTitle: "Appliance Repair in Point Loma, CA | Outlaw Appliance",
    metaDescription:
      "Reliable appliance repair in Point Loma, CA, from Ocean Beach to Sunset Cliffs. We fix what salt air breaks. Call Outlaw at (858) 757-8977.",
    intro:
      "Point Loma stretches from the surf shacks of Ocean Beach to the view homes along Sunset Cliffs and the historic streets of Roseville. Outlaw Appliance Repair serves the whole peninsula across 92106 and 92107 with honest work and fair pricing. Whatever's gone wrong with your fridge, range, or laundry, we'll diagnose it straight and fix it to last.",
    localAngle:
      "Out on the Point Loma peninsula, the ocean is on three sides and the salt air comes with it. That coastal moisture corrodes refrigerator coils, washer and dryer components, and electrical connections ahead of schedule. On every Point Loma call we inspect for corrosion, clean affected parts, and protect what we can so the sea air doesn't cost you an appliance.",
    neighborhoods: ["Ocean Beach", "Sunset Cliffs", "Roseville", "La Playa", "Point Loma Heights", "Loma Portal", "Fleetridge"],
    landmark: "near Sunset Cliffs",
    faqs: [
      { q: "Do you serve Ocean Beach and Sunset Cliffs?", a: "Yes. We cover all of Point Loma, including Ocean Beach, Sunset Cliffs, Roseville, and La Playa across 92106 and 92107." },
      { q: "How quickly can you get to Point Loma?", a: "We offer same-week and often same-day service across Point Loma, with a defined arrival window so you're not waiting all day." },
      { q: "Does the ocean air on Point Loma damage appliances?", a: "It does. The Point Loma peninsula gets salt air from three sides, so we check for corrosion on every call and treat it early." },
    ],
  },
  {
    slug: "poway",
    name: "Poway",
    zips: ["92064"],
    type: "inland",
    metaTitle: "Appliance Repair in Poway, CA | Outlaw Appliance",
    metaDescription:
      "Honest appliance repair in Poway, CA, the City in the Country. Hard-water expertise, fast scheduling. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Known as the City in the Country, Poway mixes established neighborhoods near Old Poway Park with larger lots out toward Green Valley. Outlaw Appliance Repair serves all of 92064 with dependable diagnostics and repairs that don't cut corners. From a stalled washer to a fridge that won't cool, we get Poway households back to normal quickly and at a fair price.",
    localAngle:
      "Poway's inland water runs hard, and the dissolved minerals build up inside your appliances. Scale clogs dishwasher spray arms, coats water-heater elements, and stiffens washing-machine valves, forcing them to work harder and fail sooner. On Poway calls we check for mineral buildup, descale the affected parts, and suggest practical fixes to keep scale from coming back.",
    neighborhoods: ["Old Poway", "Green Valley", "Garden Road", "Bridlewood", "Stone Canyon", "Sycamore Canyon", "The Heritage"],
    landmark: "near Old Poway Park",
    faqs: [
      { q: "Do you service Green Valley and Old Poway?", a: "Yes. We repair appliances throughout Poway, including Green Valley, Old Poway, and the Bridlewood area in 92064." },
      { q: "How fast can you get to Poway?", a: "We typically reach Poway the same week, often same day, and always provide a clear arrival window for your appointment." },
      { q: "Does Poway's hard water hurt appliances?", a: "Yes. Poway's hard water leaves mineral scale in dishwashers, washers, and water heaters, so we descale and inspect them on every visit." },
    ],
  },
  {
    slug: "rancho-bernardo",
    name: "Rancho Bernardo",
    zips: ["92127", "92128"],
    type: "inland",
    metaTitle: "Appliance Repair in Rancho Bernardo, CA | Outlaw",
    metaDescription:
      "Dependable appliance repair in Rancho Bernardo, CA. Hard-water expertise from Westwood to 4S Ranch. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Rancho Bernardo spans quiet established neighborhoods like Westwood and the newer family communities of 4S Ranch and Del Sur. Outlaw Appliance Repair serves all of 92127 and 92128 with honest assessments and lasting repairs. Whether you're in a longtime RB home or a newer build to the north, we show up prepared and fix the problem right the first time.",
    localAngle:
      "Inland Rancho Bernardo gets hard water, and the minerals it carries settle inside your appliances. Scale builds up in dishwasher jets, washer inlet valves, and water-heater tanks, reducing efficiency and shortening their lifespan. On every RB call we look for mineral buildup, descale what's affected, and recommend simple steps to slow scale from returning.",
    neighborhoods: ["Westwood", "4S Ranch", "Del Sur", "Bernardo Heights", "The Trails", "Oaks North", "Seven Oaks"],
    landmark: "near Bernardo Winery",
    faqs: [
      { q: "Do you serve 4S Ranch and Westwood?", a: "Yes. We cover all of Rancho Bernardo, including 4S Ranch, Del Sur, Westwood, and Bernardo Heights across 92127 and 92128." },
      { q: "How soon can you reach Rancho Bernardo?", a: "We schedule Rancho Bernardo appointments within the week, often same day, with a defined arrival window so you're not left waiting." },
      { q: "Is hard water an issue for Rancho Bernardo appliances?", a: "Yes. Rancho Bernardo's hard water causes mineral scale in dishwashers and washers, so we descale and check water lines on every visit here." },
    ],
  },
  {
    slug: "scripps-ranch",
    name: "Scripps Ranch",
    zips: ["92131"],
    type: "inland",
    metaTitle: "Appliance Repair in Scripps Ranch, CA | Outlaw",
    metaDescription:
      "Reliable appliance repair in Scripps Ranch, CA. Hard-water expertise near Miramar Lake, fast scheduling. Call Outlaw at (858) 757-8977.",
    intro:
      "Scripps Ranch is the eucalyptus-lined family community tucked around Miramar Lake, full of homes that keep their kitchens and laundry rooms busy. Outlaw Appliance Repair serves all of 92131 with straightforward diagnostics, quality parts, and respect for your time. From a fridge on the fritz to a dryer that won't heat, we get Scripps Ranch back up and running fast.",
    localAngle:
      "Scripps Ranch sits well inland, where the tap water is hard and mineral-rich. Those minerals deposit inside appliances over time, clogging dishwasher spray arms, coating water-heater elements, and wearing out washer valves. On Scripps Ranch calls we check for scale buildup, descale the affected components, and advise on filtration to keep your appliances efficient.",
    neighborhoods: ["Scripps Ranch Village", "Miramar Ranch North", "The Crest", "Stonebridge Estates", "Aviara at Scripps", "Sycamore Estates"],
    landmark: "near Lake Miramar",
    faqs: [
      { q: "Do you cover Miramar Ranch North and Stonebridge?", a: "Yes. We serve all of Scripps Ranch, including Miramar Ranch North, Stonebridge Estates, and the Village in 92131." },
      { q: "How fast can you get to Scripps Ranch?", a: "We typically reach Scripps Ranch the same week, often same day, and provide a clear arrival window for every appointment." },
      { q: "Does hard water affect appliances in Scripps Ranch?", a: "Yes. Scripps Ranch's hard water builds mineral scale in dishwashers and water heaters, so we descale and inspect them on each visit." },
    ],
  },
  {
    slug: "ramona",
    name: "Ramona",
    zips: ["92065"],
    type: "inland",
    metaTitle: "Appliance Repair in Ramona, CA | Outlaw Appliance",
    metaDescription:
      "Honest appliance repair in Ramona, CA backcountry. Hard-water and well-water expertise. Fast service. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Out in San Diego's backcountry, Ramona blends a historic main-street town with ranches and rural properties spread across the valley. Outlaw Appliance Repair makes the drive to serve all of 92065 with honest diagnostics and repairs built to last. Whether you're in town or out on acreage, we come prepared so a single visit gets the job done.",
    localAngle:
      "Ramona's inland and well-fed water tends to run very hard, and the heavy mineral load is rough on appliances. Scale builds quickly in dishwasher jets, washer valves, and water heaters, while sediment can clog inlet screens. On Ramona calls we check for mineral and sediment buildup, descale and clear the affected parts, and recommend filtration that fits rural setups.",
    neighborhoods: ["Downtown Ramona", "San Diego Country Estates", "Mt. Woodson", "West End", "Ramona Valley"],
    landmark: "near Dos Picos County Park",
    faqs: [
      { q: "Do you really drive out to Ramona and the Country Estates?", a: "Yes. We serve all of Ramona, including downtown, San Diego Country Estates, and Mt. Woodson in the 92065 area." },
      { q: "How fast can you reach Ramona?", a: "Ramona is in the backcountry, so we usually schedule within the week and give you a firm arrival window so the drive doesn't leave you guessing." },
      { q: "Is well water or hard water a problem for Ramona appliances?", a: "Often, yes. Ramona's hard and well water leaves scale and sediment in appliances, so we descale, clear screens, and advise on filtration here." },
    ],
  },
  {
    slug: "fallbrook",
    name: "Fallbrook",
    zips: ["92028"],
    type: "inland",
    metaTitle: "Appliance Repair in Fallbrook, CA | Outlaw Appliance",
    metaDescription:
      "Trusted appliance repair in Fallbrook, CA, the Avocado Capital. Hard-water expertise, fair pricing. Call Outlaw at (858) 757-8977 today.",
    intro:
      "Known as the Friendly Village and the Avocado Capital, Fallbrook spreads across rolling north-county hills dotted with groves and ranch homes. Outlaw Appliance Repair serves all of 92028 with dependable diagnostics and repairs that don't cut corners. Whether you're near the village or out on grove acreage, we arrive prepared to fix your appliance right the first time.",
    localAngle:
      "Fallbrook's inland water carries a heavy mineral load, and it builds up fast inside appliances. Scale chokes dishwasher spray arms, hardens on water-heater elements, and stiffens washer valves, dragging down performance. On Fallbrook calls we inspect for mineral buildup, descale the affected components, and suggest filtration that keeps scale from coming back.",
    neighborhoods: ["Downtown Fallbrook", "Live Oak Park", "Morro Hills", "Winterwarm", "Gird Valley", "De Luz"],
    landmark: "near Live Oak Park",
    faqs: [
      { q: "Do you service Gird Valley and De Luz?", a: "Yes. We serve all of Fallbrook, including downtown, Gird Valley, Morro Hills, and De Luz in the 92028 area." },
      { q: "How fast can you get to Fallbrook?", a: "We schedule Fallbrook visits within the week, often sooner, and provide a clear arrival window so the north-county drive doesn't leave you waiting." },
      { q: "Does Fallbrook's hard water damage appliances?", a: "Yes. Fallbrook's hard water leaves mineral scale in dishwashers, washers, and water heaters, so we descale and inspect them on every visit." },
    ],
  },
  {
    slug: "bonsall",
    name: "Bonsall",
    zips: ["92003"],
    type: "inland",
    metaTitle: "Appliance Repair in Bonsall, CA | Outlaw Appliance",
    metaDescription:
      "Reliable appliance repair in Bonsall, CA. Hard-water expertise for the San Luis Rey valley. Fast service. Call Outlaw at (858) 757-8977.",
    intro:
      "Bonsall is a rural north-county community of horse properties and estates spread through the San Luis Rey River valley. Outlaw Appliance Repair makes the trip to serve all of 92003 with honest assessments and lasting repairs. Whether you're on acreage off Camino del Rey or near the village center, we come fully prepared so one visit gets your appliance working again.",
    localAngle:
      "Bonsall's inland and often well-sourced water runs hard, and the minerals it carries settle inside appliances. Scale builds in dishwasher jets, washer valves, and water heaters, while sediment can clog inlet screens. On Bonsall calls we check for mineral and sediment buildup, descale and clear the affected parts, and recommend filtration suited to rural water systems.",
    neighborhoods: ["Bonsall Village", "Camino del Rey", "Lake Vista Estates", "San Luis Rey Valley", "Hidden Glen"],
    landmark: "near the San Luis Rey River",
    faqs: [
      { q: "Do you come out to Bonsall and the San Luis Rey valley?", a: "Yes. We serve all of Bonsall, including the village, Camino del Rey, and the San Luis Rey valley in 92003." },
      { q: "How fast can you reach Bonsall?", a: "Bonsall is rural north county, so we usually schedule within the week and give you a firm arrival window so the drive doesn't leave you waiting." },
      { q: "Is hard water a problem for Bonsall appliances?", a: "Often, yes. Bonsall's hard and well water leaves scale and sediment in appliances, so we descale, clear screens, and advise on filtration here." },
    ],
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    zips: ["91910", "91911", "91913", "91914", "91915"],
    type: "inland",
    metaTitle: "Appliance Repair in Chula Vista, CA | Outlaw",
    metaDescription:
      "Dependable appliance repair in Chula Vista, CA, from the original townsite to Eastlake. Fair pricing, fast service. Call Outlaw at (858) 757-8977.",
    intro:
      "Chula Vista runs from the historic original townsite near downtown out to the master-planned hills of Eastlake and Otay Ranch. As one of the South Bay's largest cities, it keeps a lot of households humming, and Outlaw Appliance Repair serves them all with honest diagnostics and fair pricing. Wherever you are in Chula Vista, we fix it right and stand behind the work.",
    localAngle:
      "Chula Vista's South Bay water tends to run hard, and the dissolved minerals build up inside appliances over time. Scale clogs dishwasher spray arms, coats water-heater elements, and wears on washing-machine valves, sapping efficiency. On Chula Vista calls we check for mineral buildup, descale the affected components, and offer practical tips to keep scale from returning.",
    neighborhoods: ["Eastlake", "Otay Ranch", "Rancho del Rey", "Original Townsite", "Rolling Hills Ranch", "Millenia"],
    landmark: "near Otay Ranch Town Center",
    faqs: [
      { q: "Do you serve Eastlake and Otay Ranch?", a: "Yes. We repair appliances across all of Chula Vista, including Eastlake, Otay Ranch, Rancho del Rey, and the original townsite." },
      { q: "How fast can you get to Chula Vista?", a: "We offer same-week and often same-day service throughout Chula Vista, with a clear arrival window so you're not waiting around." },
      { q: "Does Chula Vista's hard water affect appliances?", a: "Yes. Chula Vista's hard water leaves mineral scale in dishwashers and water heaters, so we descale and inspect them on every visit." },
    ],
  },
];

export function getArea(slug: string): AreaContent | undefined {
  return areas.find((a) => a.slug === slug);
}
