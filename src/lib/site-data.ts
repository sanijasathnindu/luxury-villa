export const villa = {
  name: "Villa Aurelia",
  location: "Uluwatu Coast, Bali",
  email: "reservations@villaaurelia.com",
  phone: "+62 361 888 2046",
  coordinates: "-8.8232, 115.0870",
};

export const imageLibrary = {
  hero:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2600&q=88",
  pool:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=86",
  lounge:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=86",
  suite:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=86",
  ocean:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=86",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=86",
  spa:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2200&q=86",
  villaNight:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=86",
  terrace:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2200&q=86",
};

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Suites", href: "#suites" },
  { label: "Location", href: "#location" },
];

export const heroStats = [
  { value: "6", label: "Private suites" },
  { value: "32m", label: "Infinity edge" },
  { value: "24/7", label: "Villa host" },
];

export const experienceBlocks = [
  {
    title: "Cinematic Arrival",
    copy: "A stone-lined arrival court opens to ocean air, still water, and a view corridor designed to slow the room before the first welcome drink is poured.",
    image: imageLibrary.pool,
  },
  {
    title: "Indoor Outdoor Living",
    copy: "Oversized sliding walls connect the sunken lounge, chef kitchen, terrace bar, and pool deck into one effortless coastal residence.",
    image: imageLibrary.lounge,
  },
  {
    title: "Private Rituals",
    copy: "From sunrise breathwork to moonlit tasting menus, the villa team choreographs every day around your rhythm and privacy.",
    image: imageLibrary.spa,
  },
];

export const features = [
  {
    icon: "Waves",
    title: "Infinity Pool",
    copy: "A heated 32 meter edge pool floats above limestone cliffs with submerged loungers and a private sunset bar.",
  },
  {
    icon: "Telescope",
    title: "Ocean View",
    copy: "Every primary living space is aligned to uninterrupted Indian Ocean views and dramatic evening light.",
  },
  {
    icon: "ChefHat",
    title: "Private Chef",
    copy: "Daily breakfast, market-led tasting menus, dietary planning, and late-night in-villa dining on request.",
  },
  {
    icon: "PlaneLanding",
    title: "Airport Transfer",
    copy: "VIP airport reception, luxury SUV transfer, luggage handling, and discreet arrival coordination.",
  },
  {
    icon: "HouseWifi",
    title: "Smart Home",
    copy: "Scene lighting, climate, audio, security, and blackout control from every suite and lounge zone.",
  },
  {
    icon: "BedDouble",
    title: "Luxury Suites",
    copy: "Six ensuite sanctuaries with stone baths, ocean balconies, dressing rooms, and evening turndown.",
  },
];

export const galleryImages = [
  {
    src: imageLibrary.hero,
    alt: "Luxury tropical villa with pool and palm trees",
    label: "Cliffside exterior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: imageLibrary.suite,
    alt: "Elegant resort bedroom suite with warm neutral finishes",
    label: "Ocean master suite",
    span: "",
  },
  {
    src: imageLibrary.terrace,
    alt: "Luxury resort terrace and pool at sunset",
    label: "Sunset terrace",
    span: "",
  },
  {
    src: imageLibrary.lounge,
    alt: "Modern luxury living room with natural light",
    label: "Great room",
    span: "md:col-span-2",
  },
  {
    src: imageLibrary.dining,
    alt: "Premium private dining setup",
    label: "Chef dining",
    span: "",
  },
  {
    src: imageLibrary.ocean,
    alt: "Tropical ocean shoreline near the villa",
    label: "Private coastline",
    span: "",
  },
  {
    src: imageLibrary.villaNight,
    alt: "Modern villa architecture at evening",
    label: "Evening architecture",
    span: "md:col-span-2",
  },
];

export const amenities = [
  { icon: "Sparkles", label: "Daily housekeeping" },
  { icon: "Car", label: "Chauffeur ready" },
  { icon: "Utensils", label: "Chef kitchen" },
  { icon: "Wine", label: "Cellar curation" },
  { icon: "Wifi", label: "Fiber internet" },
  { icon: "ShieldCheck", label: "Private security" },
  { icon: "Dumbbell", label: "Wellness studio" },
  { icon: "Baby", label: "Family concierge" },
  { icon: "Music2", label: "Zoned audio" },
  { icon: "Bath", label: "Stone spa baths" },
  { icon: "Sailboat", label: "Yacht access" },
  { icon: "Flower2", label: "Garden cinema" },
];

export const rooms = [
  {
    name: "Aurelia Master Pavilion",
    price: "$2,950",
    eyebrow: "Ocean front",
    image: imageLibrary.suite,
    description:
      "A private king pavilion with wraparound balcony, floating stone bath, rain shower garden, and dedicated butler station.",
    details: ["104 sqm", "King bed", "Private terrace", "Ocean bath"],
  },
  {
    name: "Horizon Pool Suite",
    price: "$1,850",
    eyebrow: "Pool level",
    image: imageLibrary.pool,
    description:
      "Direct pool deck access, indoor lounge, oversized wardrobe, and sunrise views across the full length of the infinity edge.",
    details: ["82 sqm", "King bed", "Pool access", "Sunrise deck"],
  },
  {
    name: "Garden Spa Residence",
    price: "$1,420",
    eyebrow: "Wellness wing",
    image: imageLibrary.spa,
    description:
      "A quiet garden-facing suite with treatment terrace, soaking tub, aromatherapy menu, and seamless access to the wellness studio.",
    details: ["76 sqm", "King or twin", "Spa terrace", "Garden view"],
  },
];

export const testimonials = [
  {
    quote:
      "The villa felt less like a stay and more like a private resort built around our family. Every meal, transfer, and sunset moment was handled before we asked.",
    guest: "Amelia Hart",
    context: "London, family residence stay",
  },
  {
    quote:
      "Architecture, service, and privacy were all at the level we usually only see from ultra luxury island resorts. The chef's seafood dinner was unforgettable.",
    guest: "Marcus Chen",
    context: "Singapore, anniversary retreat",
  },
  {
    quote:
      "We hosted a small leadership retreat here and the staff balanced discretion with precision. The property is cinematic without ever feeling staged.",
    guest: "Elena Moretti",
    context: "Milan, executive retreat",
  },
];

export const attractionGroups = [
  {
    value: "coast",
    label: "Coast",
    items: [
      { place: "Nyang Nyang Beach", time: "7 min", note: "White sand descent and quiet morning surf." },
      { place: "Uluwatu Temple", time: "12 min", note: "Clifftop sunset ceremony and ocean amphitheater." },
      { place: "Padang Padang", time: "18 min", note: "Iconic reef break with concierge beach setup." },
    ],
  },
  {
    value: "culture",
    label: "Culture",
    items: [
      { place: "Garuda Wisnu Kencana", time: "22 min", note: "Monumental sculpture park and cultural performances." },
      { place: "Jimbaran Market", time: "28 min", note: "Chef-led seafood sourcing before a private dinner." },
      { place: "Bingin Village", time: "20 min", note: "Boutiques, surf cafes, and coastal galleries." },
    ],
  },
  {
    value: "wellness",
    label: "Wellness",
    items: [
      { place: "Cliff Yoga Deck", time: "On site", note: "Private sunrise sessions with breathwork and sound." },
      { place: "Thermal Spa Circuit", time: "9 min", note: "Salt room, contrast therapy, and massage suites." },
      { place: "Yacht Day Charter", time: "35 min", note: "Nusa Penida route with lunch and snorkeling crew." },
    ],
  },
];

export const villaStructuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: villa.name,
  description:
    "Villa Aurelia is a private luxury villa on Bali's Uluwatu coast with six suites, an infinity pool, private chef, concierge service, ocean views, and resort-level amenities.",
  image: Object.values(imageLibrary),
  telephone: villa.phone,
  email: villa.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Uluwatu",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  amenityFeature: amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    name: amenity.label,
    value: true,
  })),
  priceRange: "$$$$",
};
