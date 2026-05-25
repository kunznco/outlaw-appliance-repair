import type { ServiceSlug } from "@/lib/site";

/**
 * Per-appliance service-page content. Original copy synthesized from
 * appliance-repair knowledge + competitor/Jesse-voice research. San Diego
 * local angles (salt air / hard water) are an intentional differentiator —
 * no local competitor uses them.
 */

export interface ServicePageContent {
  slug: ServiceSlug;
  urlSlug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  symptoms: { symptom: string; cause: string }[];
  lifespan: string;
  repairReplace: string;
  brands: { standard: string[]; premium: string[] };
  localAngle: string;
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "refrigerator",
    urlSlug: "refrigerator-repair",
    name: "Refrigerators & Freezers",
    h1: "Refrigerator & Freezer Repair in San Diego",
    metaTitle: "Refrigerator & Freezer Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Fridge not cooling, leaking, or icing up? Outlaw Appliance Repair fixes refrigerators and freezers across San Diego — flat-rate diagnosis, 1-year warranty. Call (858) 757-8977.",
    intro:
      "A warm refrigerator is a race against spoiling groceries. We repair the problems that put your food at risk — units that won't cool, ice makers that quit, water leaking onto the floor, and noises that signal trouble. We find the real cause, from compressors and fans to defrost systems and door seals, and explain your options before any work begins.",
    symptoms: [
      { symptom: "Fridge is warm but the freezer still works", cause: "Failed evaporator fan, a frosted-over coil, or a stuck air damper blocking cold air to the fridge section." },
      { symptom: "Neither section is getting cold", cause: "A failed compressor, refrigerant leak, or a dead start relay." },
      { symptom: "Running constantly, never shutting off", cause: "Dirty condenser coils, a failing condenser fan, or a worn door gasket letting warm air in." },
      { symptom: "Water pooling under or inside the unit", cause: "A clogged defrost drain, cracked drain pan, or leaking water-supply valve." },
      { symptom: "Ice maker stopped making ice", cause: "A frozen or kinked water line, failed inlet valve, or a faulty ice-maker module." },
      { symptom: "Frost building up in the freezer", cause: "A failed defrost heater, defrost thermostat, or control board." },
      { symptom: "Loud buzzing, knocking, or clicking", cause: "A failing compressor start relay, fan obstruction, or worn fan bearings." },
    ],
    lifespan: "10–18 years",
    repairReplace:
      "Repair usually makes sense when the unit is under about 10–12 years old and the failure is a single component — a fan, valve, sensor, gasket, or control board. Replacement is the smarter call when a sealed-system failure (compressor or refrigerant leak) hits an older unit and the repair approaches half the cost of a comparable new model. We'll give you an honest comparison before you decide.",
    brands: {
      standard: ["Whirlpool", "GE", "Samsung", "LG", "Frigidaire", "Maytag", "KitchenAid", "Kenmore", "Amana", "Bosch"],
      premium: ["Sub-Zero", "Viking", "Thermador", "Miele", "Liebherr", "Dacor"],
    },
    localAngle:
      "Near the coast — La Jolla, Point Loma, Del Mar, Coronado — salt air accelerates corrosion on condenser coils, hinges, and control boards, so we check those closely. Inland, San Diego's hard water leaves mineral scale in ice-maker valves and water lines, a common cause of poor ice production.",
    faqs: [
      { q: "Why is my fridge warm but the freezer still cold?", a: "Usually airflow — a failed evaporator fan or an iced-over coil stops cold air from reaching the fridge section. It's a common, fixable repair." },
      { q: "Is it safe to repair a refrigerator myself?", a: "We don't recommend it. Refrigerators involve sealed refrigerant systems and high-voltage components, so DIY work risks injury and further damage. Diagnosis is best left to a trained tech." },
      { q: "How long should a refrigerator last?", a: "Most last 10 to 18 years with regular maintenance, like cleaning the condenser coils once or twice a year." },
      { q: "My ice maker stopped — does the whole fridge need work?", a: "Rarely. It's usually a frozen water line, a failed inlet valve, or the ice-maker module itself — all isolated repairs." },
      { q: "Why is there water on my kitchen floor?", a: "Common causes are a clogged defrost drain or a leaking water valve. We find the source rather than just mopping up the symptom." },
      { q: "Can you service built-in and high-end refrigerators?", a: "Yes. We service premium and built-in units like Sub-Zero, Viking, and Thermador, which require specialized parts and training." },
    ],
  },
  {
    slug: "dishwasher",
    urlSlug: "dishwasher-repair",
    name: "Dishwashers",
    h1: "Dishwasher Repair in San Diego",
    metaTitle: "Dishwasher Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Dishwasher won't drain, leaking, or leaving dishes dirty? Outlaw Appliance Repair fixes all brands across San Diego — flat-rate diagnosis, 1-year warranty. Call (858) 757-8977.",
    intro:
      "When a dishwasher leaves dishes dirty or water on the floor, it's more hassle than help. We repair the full range of issues — poor cleaning, drainage failures, leaks, error codes, and units that won't start. We inspect spray arms, pumps, valves, seals, and controls to find the root cause, then walk you through the fix and the cost before we proceed.",
    symptoms: [
      { symptom: "Dishes come out dirty or filmy", cause: "Clogged spray arms, a worn wash pump, a failing detergent dispenser, or a blocked filter." },
      { symptom: "Won't drain / standing water in the bottom", cause: "A clogged drain hose or filter, a failed drain pump, or a blocked disposal knockout plug." },
      { symptom: "Leaking onto the floor", cause: "A torn door gasket, loose hose clamp, or a cracked sump or seal." },
      { symptom: "Won't fill with water", cause: "A faulty water inlet valve or a stuck float switch." },
      { symptom: "Won't start or no power", cause: "A failed door latch switch, blown thermal fuse, or a control-board fault." },
      { symptom: "Cycle takes far too long", cause: "A defective heating element or thermostat, or a control board mismanaging timing." },
      { symptom: "Dishes aren't drying", cause: "A failed heating element or vent, or a spent rinse-aid dispenser." },
    ],
    lifespan: "9–12 years",
    repairReplace:
      "Repair is usually the better value under about 8–10 years, especially for pumps, valves, latches, and heating elements. Consider replacement if an older unit needs a major control board plus a pump, or if the repair nears half the price of a new model.",
    brands: {
      standard: ["Whirlpool", "GE", "Samsung", "LG", "Maytag", "KitchenAid", "Frigidaire", "Bosch", "Amana", "Kenmore"],
      premium: ["Miele", "Thermador", "Cove", "Viking", "Gaggenau"],
    },
    localAngle:
      "San Diego's hard water is tough on dishwashers — mineral scale builds up on spray arms and heating elements, which shows up as cloudy glassware and weak cleaning. We clear the scale and check the parts it wears out, and we can recommend simple steps to slow it down.",
    faqs: [
      { q: "Why isn't my dishwasher cleaning dishes well?", a: "Most often it's clogged spray arms, a dirty filter, or a worn wash pump. Cleaning helps short-term, but recurring problems usually need a part replaced." },
      { q: "Why is there water left in the bottom after a cycle?", a: "That's a drainage issue — typically a clogged hose or filter, or a failed drain pump. It's a routine repair for our techs." },
      { q: "Is repairing a dishwasher worth it?", a: "For units under about 8 years old, repair is usually far cheaper than replacement. We'll compare the repair cost to a new unit so you can decide with confidence." },
      { q: "How long do dishwashers last?", a: "Around 9 to 12 years on average, and well-maintained units can run longer." },
      { q: "Why is my dishwasher leaking?", a: "Usually a worn door gasket or a loose hose connection. We pinpoint the exact source rather than guessing." },
      { q: "Can you fix high-end dishwashers like Bosch or Miele?", a: "Yes. We service mainstream and premium brands, including Bosch, Miele, and Thermador." },
    ],
  },
  {
    slug: "range",
    urlSlug: "oven-range-cooktop-repair",
    name: "Ovens, Ranges & Cooktops",
    h1: "Oven, Range & Cooktop Repair in San Diego",
    metaTitle: "Oven, Range & Cooktop Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Burner won't light or oven won't heat evenly? Outlaw Appliance Repair fixes gas, electric & induction ranges across San Diego — 1-year warranty. Call (858) 757-8977.",
    intro:
      "A range that won't heat evenly — or won't light at all — can stall an entire meal. We repair gas, electric, and induction ovens, ranges, and cooktops, from burners that won't ignite to ovens that run hot or cold. We test igniters, elements, sensors, valves, and control boards to find the true cause, and explain every option before any repair starts.",
    symptoms: [
      { symptom: "Gas burner won't light or clicks without igniting", cause: "Clogged burner ports, a worn spark igniter, or a faulty ignition switch." },
      { symptom: "Electric element won't heat", cause: "A burned-out element, a bad receptacle, or a faulty infinite switch." },
      { symptom: "Oven won't reach or hold temperature", cause: "A failed bake/broil element, a weak gas igniter, or a drifting temperature sensor." },
      { symptom: "Food cooks unevenly or comes out wrong", cause: "A miscalibrated thermostat or a failing oven sensor." },
      { symptom: "Induction cooktop won't recognize pans or shuts off", cause: "Non-magnetic cookware, a failed induction coil, or a control-board fault." },
      { symptom: "Control panel is unresponsive or showing errors", cause: "A failed touch control board or membrane." },
      { symptom: "Gas smell near the range", cause: "A loose connection or leaking valve — shut off the gas and treat it as urgent." },
    ],
    lifespan: "13–15 years",
    repairReplace:
      "Repair is well worth it for igniters, elements, sensors, switches, and valves — relatively inexpensive parts. Replacement is the call when a control board fails on an older unit and the cost rivals a new range, or when several major components fail together.",
    brands: {
      standard: ["Whirlpool", "GE", "Samsung", "LG", "Frigidaire", "Maytag", "KitchenAid", "Kenmore", "Amana", "Bosch"],
      premium: ["Wolf", "Viking", "Thermador", "Miele", "Gaggenau", "Dacor", "La Cornue"],
    },
    localAngle:
      "Coastal humidity and salt air are hard on ignition components and control boards, especially in beachside kitchens. We check connections and boards for corrosion as part of the diagnosis so a fix actually lasts.",
    faqs: [
      { q: "Why won't my gas burner light?", a: "Usually clogged burner ports or a worn igniter. Cleaning sometimes helps, but a clicking burner that won't catch typically needs the igniter replaced." },
      { q: "Why is my oven not heating evenly?", a: "Often a failing bake element or a temperature sensor that's drifted out of calibration. We test both to confirm." },
      { q: "My gas igniter glows but the oven won't light — why?", a: "A glow that doesn't lead to ignition usually means a weak igniter that can no longer draw enough current to open the gas valve. It's a common replacement." },
      { q: "My induction cooktop won't detect my pans — is it broken?", a: "Not necessarily. Induction needs magnetic cookware. If a magnet sticks to your pan and it still won't work, then we look at the coil or control board." },
      { q: "I smell gas near my stove — what should I do?", a: "Shut off the gas supply, avoid open flames, and call us right away. A gas leak is a safety issue we treat as urgent." },
      { q: "Can you repair high-end ranges like Wolf or Viking?", a: "Yes. We're equipped to service premium ranges and cooktops including Wolf, Viking, Thermador, and Gaggenau." },
    ],
  },
  {
    slug: "washer",
    urlSlug: "washing-machine-repair",
    name: "Washing Machines",
    h1: "Washing Machine Repair in San Diego",
    metaTitle: "Washing Machine Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Washer won't spin, drain, or leaking? Outlaw Appliance Repair fixes front- and top-load washers across San Diego — flat-rate diagnosis, 1-year warranty. Call (858) 757-8977.",
    intro:
      "A broken washer means laundry piling up fast. We repair front- and top-load machines that won't start, won't spin, leak, or shake across the floor. We test lid and door switches, pumps, belts, bearings, valves, and control boards to find the real problem — then explain the fix and cost upfront so you can get back to clean clothes without surprises.",
    symptoms: [
      { symptom: "Won't turn on / no power", cause: "A tripped breaker, a failed lid or door-lock switch, or a control-board issue." },
      { symptom: "Won't spin or agitate", cause: "A broken drive belt, worn motor coupling, failed lid switch, or a clutch problem." },
      { symptom: "Won't drain", cause: "A clogged drain hose, a failed drain pump, or debris caught in the pump." },
      { symptom: "Leaking water", cause: "A loose or cracked hose, a worn tub seal, or a failed door boot on front-loaders." },
      { symptom: "Shakes or 'walks' during spin", cause: "Worn suspension dampers, an unbalanced load, or failing drum bearings." },
      { symptom: "Clothes still soaking after the cycle", cause: "A drain or spin failure, or an unbalanced load tripping the sensor." },
      { symptom: "Musty smell (front-load)", cause: "Biofilm buildup behind the door gasket or in the detergent drawer." },
    ],
    lifespan: "8–12 years",
    repairReplace:
      "Repair is usually worth it for belts, pumps, switches, valves, and dampers. The tougher call is a failed drum bearing or transmission on an older machine — that's labor-intensive, so replacement often wins if the unit is past about 8–10 years.",
    brands: {
      standard: ["Whirlpool", "Maytag", "LG", "Samsung", "GE", "Frigidaire", "Amana", "Kenmore", "Electrolux", "Bosch"],
      premium: ["Miele", "Speed Queen", "Asko"],
    },
    localAngle:
      "Hard water inland (Ramona, Poway, Santee, El Cajon) leaves scale in inlet valves and hoses, while coastal salt air corrodes exposed metal. We check both when we diagnose so the repair holds up to San Diego conditions.",
    faqs: [
      { q: "Why won't my washer spin?", a: "Common causes are a broken drive belt, a worn motor coupling, or a failed lid/door switch. We test each to find which one." },
      { q: "Why is my washer leaking water?", a: "Usually a loose or cracked hose, or a worn door seal on front-loaders. We locate the exact leak point before repairing." },
      { q: "My washer shakes and moves during spin — what's wrong?", a: "Often worn suspension dampers or an unbalanced load. On older machines it can be the drum bearings, which we'll check." },
      { q: "Is repairing a washing machine worth it?", a: "For most repairs under about 8 years of age, yes — it's far cheaper than a new machine. Major bearing or transmission work on an old unit is where replacement may make more sense." },
      { q: "Why does my front-loader smell musty?", a: "Moisture trapped behind the door gasket breeds mildew. We clean and inspect the seal, and show you how to prevent it." },
      { q: "Can you fix both front-load and top-load washers?", a: "Yes — including high-efficiency and smart models from all major brands." },
    ],
  },
  {
    slug: "dryer",
    urlSlug: "dryer-repair",
    name: "Clothes Dryers",
    h1: "Dryer Repair in San Diego",
    metaTitle: "Dryer Repair San Diego | Gas & Electric | Outlaw Appliance Repair",
    metaDescription:
      "Dryer won't heat or takes two cycles? Outlaw Appliance Repair fixes gas & electric dryers across San Diego and checks the venting — 1-year warranty. Call (858) 757-8977.",
    intro:
      "A dryer that won't heat — or takes three cycles to dry one load — wastes time and energy, and a clogged dryer can be a fire risk. We repair gas and electric dryers that won't heat, won't tumble, or won't start. We test heating elements, igniters, thermostats, belts, and vents to fix the root cause and keep your laundry safe.",
    symptoms: [
      { symptom: "Runs but won't heat", cause: "A blown thermal fuse, a failed heating element (electric), or a bad igniter or valve coil (gas)." },
      { symptom: "Clothes take too long to dry", cause: "A clogged lint filter, a blocked vent duct, or a weak heating element." },
      { symptom: "Drum won't tumble", cause: "A broken drive belt, a failed drum roller, or a seized idler pulley." },
      { symptom: "Won't start at all", cause: "A faulty door switch, a blown thermal fuse, or a control or start-switch failure." },
      { symptom: "Shuts off mid-cycle", cause: "Overheating from a clogged vent, or a failing cycling thermostat." },
      { symptom: "Loud thumping or squealing", cause: "Worn drum rollers, glides, or a failing idler pulley." },
      { symptom: "Burning smell during operation", cause: "Lint accumulation near the heating element — stop and have it inspected." },
    ],
    lifespan: "10–13 years",
    repairReplace:
      "Repair is almost always worth it — most dryer parts (fuses, elements, igniters, belts, rollers) are inexpensive and accessible. Replacement only really makes sense when the drum or cabinet is damaged, or repairs on a very old unit stack up beyond half a new dryer's cost.",
    brands: {
      standard: ["Whirlpool", "Maytag", "LG", "Samsung", "GE", "Frigidaire", "Amana", "Kenmore", "Electrolux"],
      premium: ["Miele", "Speed Queen", "Asko"],
    },
    localAngle:
      "Coastal salt air can corrode dryer cabinets and vent hoods, and damp ocean air makes good airflow even more important. We always check the venting on a visit — a blocked vent is both the most common cause of slow drying and a real fire hazard.",
    faqs: [
      { q: "Why is my dryer running but not heating?", a: "On electric dryers it's often a blown thermal fuse or heating element; on gas, a failing igniter or valve coil. All are common, fixable parts." },
      { q: "Why does my dryer take multiple cycles to dry clothes?", a: "The most frequent cause is restricted airflow — a clogged lint filter or a blocked vent duct. This also raises fire risk, so it's worth addressing." },
      { q: "Is a dryer worth repairing?", a: "Almost always. Most dryer parts are affordable, so repair beats replacement for the great majority of failures." },
      { q: "How long should a dryer last?", a: "Typically 10 to 13 years with regular vent cleaning." },
      { q: "My dryer won't turn on at all — why?", a: "Often a faulty door switch or a blown thermal fuse. On electric models, check that both breakers are on, since they run on 240 volts." },
      { q: "I smell something burning when the dryer runs — is that dangerous?", a: "Stop using it and call us. It's usually lint buildup near the heating element, which is a genuine fire hazard." },
    ],
  },
  {
    slug: "microwave",
    urlSlug: "microwave-repair",
    name: "Microwave Ovens",
    h1: "Microwave Repair in San Diego",
    metaTitle: "Microwave Repair San Diego | Built-In & OTR | Outlaw Appliance Repair",
    metaDescription:
      "Microwave won't heat or quit mid-cycle? Outlaw Appliance Repair safely fixes over-the-range, built-in & countertop microwaves in San Diego. Call (858) 757-8977.",
    intro:
      "A microwave that won't heat or quits mid-cycle is more than an inconvenience in a busy kitchen. We repair over-the-range, built-in, and countertop units — solving no-heat problems, dead displays, broken turntables, and faulty doors. Because microwaves store high voltage even when unplugged, this is repair work best left to a trained pro. We diagnose safely and explain the fix clearly.",
    symptoms: [
      { symptom: "Runs but doesn't heat food", cause: "A failed magnetron, a faulty high-voltage diode, or a blown capacitor." },
      { symptom: "No power / dead display", cause: "A blown line fuse, a failed control board, or a tripped door interlock switch." },
      { symptom: "Turntable won't rotate", cause: "A failed turntable motor, a broken drive coupler, or a stripped roller guide." },
      { symptom: "Sparking or arcing inside", cause: "A damaged waveguide cover, burnt food residue, or metal contact in the cavity." },
      { symptom: "Buttons unresponsive", cause: "A failed membrane keypad or control board." },
      { symptom: "Won't start with the door closed", cause: "A broken door latch or a failed interlock switch." },
      { symptom: "OTR exhaust fan or light not working", cause: "A failed fan motor, light socket, or control fault." },
    ],
    lifespan: "9–10 years",
    repairReplace:
      "For inexpensive countertop units, replacement is often the practical choice since repairs can rival the price of a new one. For built-in and over-the-range models — which are pricier and fit a specific cabinet opening — repair frequently makes sense, especially for magnetrons, diodes, switches, and turntable motors.",
    brands: {
      standard: ["Whirlpool", "GE", "Samsung", "LG", "Frigidaire", "Maytag", "KitchenAid", "Panasonic", "Kenmore"],
      premium: ["Wolf", "Thermador", "Miele", "Viking", "Gaggenau"],
    },
    localAngle:
      "Built-in and over-the-range microwaves are common in San Diego kitchens, and replacing one means matching a specific cabinet cutout. That's why we focus on repairing the high-value built-in units rather than defaulting to replacement.",
    faqs: [
      { q: "Why does my microwave run but not heat?", a: "Usually a failed magnetron, diode, or capacitor — the high-voltage parts that generate the microwaves. These require professional, safe handling." },
      { q: "Is it safe to repair a microwave myself?", a: "No. Microwaves hold a high-voltage charge in the capacitor even when unplugged, which can be dangerous. This is one to leave to a trained technician." },
      { q: "Should I repair or replace my microwave?", a: "For inexpensive countertop units, replacing is often cheaper. For built-in and over-the-range models, repair usually makes more financial sense." },
      { q: "Why is my microwave sparking inside?", a: "Often a damaged waveguide cover or food residue, but it can also be metal in the cavity. Stop using it and have it inspected." },
      { q: "My turntable stopped spinning — what's wrong?", a: "Usually the turntable motor or drive coupler. It's a straightforward repair that doesn't affect heating." },
      { q: "Can you repair built-in and over-the-range microwaves?", a: "Yes. We service OTR, built-in, and countertop models, including premium built-ins." },
    ],
  },
  {
    slug: "garbage-disposal",
    urlSlug: "garbage-disposal-repair",
    name: "Garbage Disposals",
    h1: "Garbage Disposal Repair in San Diego",
    metaTitle: "Garbage Disposal Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Disposal jammed, humming, or leaking? Outlaw Appliance Repair fixes and replaces garbage disposals across San Diego — 1-year warranty. Call (858) 757-8977.",
    intro:
      "A jammed or leaking garbage disposal can bring kitchen cleanup to a halt. We fix disposals that hum without grinding, won't turn on, leak under the sink, or drain slowly. We clear jams, repair or replace failed motors and seals, and address the plumbing connections that cause leaks — restoring a clean, quiet sink without the guesswork.",
    symptoms: [
      { symptom: "Hums but won't grind", cause: "A jam in the grinding chamber from a bone, utensil, or debris, or a seized flywheel." },
      { symptom: "Won't turn on / completely dead", cause: "A tripped internal reset, a tripped breaker, or a failed switch or motor." },
      { symptom: "Leaking under the sink", cause: "A worn sink-flange seal, loose drain connections, or a cracked housing." },
      { symptom: "Drains slowly or backs up", cause: "A clog in the disposal or in the drain line just past it." },
      { symptom: "Loud rattling or grinding", cause: "A foreign object in the chamber or loosened mounting." },
      { symptom: "Trips the reset repeatedly", cause: "An overheating motor, failing windings, or chronic jamming." },
    ],
    lifespan: "8–12 years",
    repairReplace:
      "Jams, reset trips, and loose connections are quick, worthwhile repairs. But a disposal leaking from the bottom (an internal seal failure) or a dead motor usually calls for replacement, since the unit itself is relatively inexpensive compared to the labor of an internal repair. When replacement is the better value, we can swap in a new unit and handle the plumbing.",
    brands: {
      standard: ["InSinkErator", "Waste King", "Moen", "GE", "KitchenAid", "Whirlpool", "Kenmore"],
      premium: [],
    },
    localAngle:
      "San Diego's hard water leaves mineral buildup inside disposals and drain lines, which can slow draining and wear the grinding components. We clear the buildup and make sure the unit and the line past it are flowing freely.",
    faqs: [
      { q: "Why does my disposal hum but not grind?", a: "That's the classic sign of a jam — something is stopping the flywheel from turning. We clear it and check the motor for damage." },
      { q: "My disposal is completely dead — what should I do?", a: "First, try the red reset button on the bottom. If that doesn't restore power, the switch or motor may have failed, and we'll diagnose it." },
      { q: "Should I repair or replace a leaking disposal?", a: "It depends where it's leaking. Top or side connection leaks are repairable; a leak from the bottom usually means an internal seal failed, and replacement is the smarter move." },
      { q: "Why is my disposal draining slowly?", a: "Usually a clog either in the unit or the drain line just past it. We clear the blockage and check that it's grinding properly." },
      { q: "Is it safe to clear a jam myself?", a: "Never put your hand in a disposal. Calling a pro is the safe choice, and we do it routinely." },
      { q: "Can you install a new disposal too?", a: "Yes. When replacement is the better value, we can swap in a new unit and handle the plumbing connections." },
    ],
  },
  {
    slug: "ice-maker",
    urlSlug: "ice-maker-repair",
    name: "Ice Makers",
    h1: "Ice Maker Repair in San Diego",
    metaTitle: "Ice Maker Repair San Diego | Outlaw Appliance Repair",
    metaDescription:
      "Ice maker not making ice, leaking, or making hollow cubes? Outlaw Appliance Repair fixes stand-alone, built-in & in-fridge ice makers in San Diego. Call (858) 757-8977.",
    intro:
      "When the ice maker quits — or starts leaking or turning out hollow, undersized cubes — it's a small failure with a big daily impact. We repair stand-alone and built-in ice makers as well as the units inside your refrigerator, tracing the problem from water lines and inlet valves to the ice-maker module and controls, and explaining the fix before we start.",
    symptoms: [
      { symptom: "Not making any ice", cause: "A frozen or kinked water line, a failed water inlet valve, or a faulty ice-maker module." },
      { symptom: "Hollow, small, or misshapen cubes", cause: "Low water flow from a partly clogged valve or line, or low water pressure to the unit." },
      { symptom: "Leaking water", cause: "A cracked or loose water line, a stuck inlet valve, or a misaligned fill cup." },
      { symptom: "Ice tastes or smells off", cause: "Stale water in the line, an old filter, or buildup in the bin that needs cleaning." },
      { symptom: "Ice clumping together in the bin", cause: "A failing thermostat or seal letting the bin warm and refreeze." },
      { symptom: "Stand-alone unit not cooling", cause: "A condenser, fan, or sealed-system issue, similar to a small refrigerator." },
    ],
    lifespan: "5–10 years",
    repairReplace:
      "For ice makers built into a refrigerator, repairs to the inlet valve, water line, or module are almost always worthwhile. For stand-alone and built-in units, repair makes sense unless a sealed-system failure hits an older machine and approaches the cost of replacement. We'll tell you honestly which way the math points.",
    brands: {
      standard: ["Whirlpool", "GE", "Samsung", "LG", "Frigidaire", "KitchenAid", "Kenmore", "Scotsman"],
      premium: ["Sub-Zero", "Viking", "Thermador", "U-Line", "Marvel"],
    },
    localAngle:
      "San Diego's hard water is the number-one enemy of ice makers — mineral scale clogs inlet valves and water lines, which is the most common reason for no ice or small, hollow cubes. We clear the scale, replace what it's worn out, and can set you up with the right filter.",
    faqs: [
      { q: "Why did my ice maker stop making ice?", a: "Usually a frozen or kinked water line, a failed inlet valve, or the ice-maker module itself. In San Diego, hard-water scale in the valve is a frequent cause." },
      { q: "Why are my ice cubes hollow or too small?", a: "That points to low water flow — often a partly clogged inlet valve or line, or low water pressure reaching the unit." },
      { q: "Can you fix the ice maker inside my refrigerator?", a: "Yes. In-fridge ice makers are one of our most common repairs, and it's usually an isolated fix that doesn't affect the rest of the fridge." },
      { q: "My ice tastes bad — is that a repair?", a: "Often it's a stale water line or an old filter rather than a broken part. We'll check the water supply and let you know if a simple filter change solves it." },
      { q: "Do you service stand-alone and built-in ice makers?", a: "Yes — stand-alone, built-in (like U-Line and Sub-Zero), and the units inside refrigerators." },
      { q: "How long should an ice maker last?", a: "Roughly 5 to 10 years, and keeping up with water filtration in hard-water areas helps them last longer." },
    ],
  },
];

/**
 * Real photos per appliance (from Jesse's own site — safe to use).
 * Appliances without a photo fall back to the inline SVG ServiceIcon.
 */
export const serviceImages: Partial<Record<ServiceSlug, string>> = {
  refrigerator: "/images/kitchen-bright.webp",
  dishwasher: "/images/dishwasher.webp",
  range: "/images/range-kitchen.webp",
  washer: "/images/washer-dryer.webp",
  dryer: "/images/washer-dryer.webp",
  "ice-maker": "/images/ice-maker.webp",
  // microwave, garbage-disposal: kept on SVG icons (only branded stock found)
};

export function getServicePage(urlSlug: string): ServicePageContent | undefined {
  return servicePages.find((s) => s.urlSlug === urlSlug);
}
