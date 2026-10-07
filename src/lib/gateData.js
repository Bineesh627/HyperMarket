export const BRAND = {
  logo: "/images/logo.png",
  whatsapp: "971500000000",
  phone: "+971 4 000 0000",
  email: "hello@gatehypermarket.ae",
};

export const stores = [
  {
    slug: "al-barsha",
    name: "Gate — Al Barsha",
    city: "Dubai",
    address: "Al Barsha 1, Sheikh Zayed Road Service Rd, Dubai, UAE",
    phone: "+971 4 399 1100",
    hours: "Daily · 8:00 AM – 12:00 AM",
    open: 8,
    close: 24,
    highlights: ["Largest fresh produce hall", "In-house bakery", "Free 2-hour parking"],
    coords: [25.1121, 55.1965],
    image: "/images/store-barsha.jpg",
    tagline: "Our flagship store — the widest seasonal range in Dubai.",
  },
  {
    slug: "al-quoz",
    name: "Gate — Al Quoz",
    city: "Dubai",
    address: "Al Quoz Industrial Area 3, Al Khail Road, Dubai, UAE",
    phone: "+971 4 338 2200",
    hours: "Daily · 7:00 AM – 11:00 PM",
    open: 7,
    close: 23,
    highlights: ["Bulk & family packs", "Early opening at 7 AM", "Ample truck-side parking"],
    coords: [25.1385, 55.2335],
    image: "/images/store-alquoz.jpg",
    tagline: "Built for big baskets and bulk savings.",
  },
  {
    slug: "sabkha",
    name: "Gate — Sabkha",
    city: "Dubai",
    address: "Al Sabkha Road, Deira, Dubai, UAE",
    phone: "+971 4 226 3300",
    hours: "Daily · 8:00 AM – 1:00 AM",
    open: 8,
    close: 25,
    highlights: ["Spices & world foods", "Open till 1 AM", "Steps from Sabkha bus station"],
    coords: [25.2685, 55.3035],
    image: "/images/store-sabkha.jpg",
    tagline: "The heart of old Deira — world flavours in every aisle.",
  },
  {
    slug: "ajman",
    name: "Gate — Ajman",
    city: "Ajman",
    address: "Sheikh Khalifa Bin Zayed Street, Al Nuaimiya, Ajman, UAE",
    phone: "+971 6 745 4400",
    hours: "Daily · 8:00 AM – 12:00 AM",
    open: 8,
    close: 24,
    highlights: ["Family value zone", "Fresh fish counter", "Kids play corner"],
    coords: [25.3925, 55.4695],
    image: "/images/store-ajman.jpg",
    tagline: "Neighbourhood value for every Ajman family.",
  },
];

export const getStore = (slug) => stores.find((s) => s.slug === slug);

export const mapEmbed = (store) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&z=15&output=embed`;

export const directionsUrl = (store) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`;

const page = (kicker, title, blurb, cats, accent) => ({ kicker, title, blurb, cats, accent });

export const campaigns = [
  {
    id: "super-summer",
    title: "Gate Super Summer Sale",
    season: "Running now · until 30 September",
    blurb:
      "Six weeks of deep seasonal savings across fresh produce, chilled drinks, summer essentials and home cooling.",
    cover: "/images/flyer-ramadan.jpg",
    branches: ["al-barsha", "al-quoz", "sabkha", "ajman"],
    pages: [
      page("Cover", "Super Summer Sale", "Unbeatable seasonal savings, in-store only.", ["Fresh Halls", "Chilled & Frozen", "Summer Home"], "azure"),
      page("Chapter 01", "Fresh Produce Festival", "Seasonal fruit and vegetable feature bays, refreshed every morning.", ["Stone Fruit", "Melon Bar", "Leafy Greens"], "green"),
      page("Chapter 02", "Cool Down Corner", "Chilled beverages, ice cream and frozen family favourites in feature aisles.", ["Beverages", "Ice Cream", "Frozen Meals"], "azure"),
      page("Chapter 03", "Summer Home Essentials", "Cooling, cleaning and outdoor living displays across the store.", ["Home Cooling", "Outdoor", "Cleaning"], "ember"),
      page("Back Cover", "Visit Us This Weekend", "Four stores across Dubai & Ajman. Offers valid in-store while stocks last.", ["Al Barsha", "Al Quoz", "Sabkha", "Ajman"], "ember"),
    ],
  },
  {
    id: "back-to-school",
    title: "Back to School Mega Offers",
    season: "From 20 August · 4 weeks",
    blurb:
      "Everything the new term needs — stationery bays, lunchbox stations and uniform care, all under one roof.",
    cover: "/images/flyer-weekend.jpg",
    branches: ["al-barsha", "al-quoz", "ajman"],
    pages: [
      page("Cover", "Back to School Mega Offers", "Term-ready in one trip.", ["Stationery", "Lunchboxes", "Uniform Care"], "ember"),
      page("Chapter 01", "The Stationery Hall", "A dedicated seasonal bay for notebooks, art supplies and school kit.", ["Notebooks", "Art & Craft", "School Bags"], "azure"),
      page("Chapter 02", "Lunchbox Station", "Fresh ideas and family-pack bays for five days of school lunches.", ["Bakery", "Fresh Snacks", "Juices"], "green"),
      page("Back Cover", "Shop Early, Save More", "Offers available in-store at Al Barsha, Al Quoz and Ajman.", ["Al Barsha", "Al Quoz", "Ajman"], "azure"),
    ],
  },
  {
    id: "eid-special",
    title: "Eid Special Offers",
    season: "Seasonal · announced before Eid",
    blurb:
      "A festive celebration of dates, gifting hampers, premium meats and the family table.",
    cover: "/images/flyer-fresh.jpg",
    branches: ["al-barsha", "sabkha", "ajman"],
    pages: [
      page("Cover", "Eid Special Offers", "Celebrate together, save together.", ["Dates & Gifting", "Festive Table", "Sweets"], "ember"),
      page("Chapter 01", "Dates & Gifting Hall", "Premium date varieties and ready-to-give hampers, assembled in store.", ["Premium Dates", "Hampers", "Nuts"], "ember"),
      page("Chapter 02", "The Festive Table", "Butchery, bakery and world-food features for the family gathering.", ["Butchery", "Bakery", "World Foods"], "green"),
      page("Back Cover", "Eid Mubarak from Gate", "Extended hours across Al Barsha, Sabkha and Ajman.", ["Al Barsha", "Sabkha", "Ajman"], "azure"),
    ],
  },
];

export const posts = [
  {
    slug: "five-summer-salads-uae-families",
    title: "Five Summer Salads Every UAE Family Should Try",
    category: "Seasonal Recipes",
    date: "2026-08-18",
    read: "5 min read",
    image: "/images/blog-ramadan.jpg",
    excerpt:
      "Cool, quick and made from what's freshest in our produce halls right now — five salads built for Dubai and Ajman summers.",
    body: [
      "When the temperature climbs past forty, nobody wants to stand over a stove. The good news is that summer in the UAE is also when our produce halls are at their most colourful — and a great salad needs little more than good ingredients and cold water.",
      "Start with a classic fattoush. Crisp cos lettuce, tomatoes, cucumber, radish and plenty of mint, dressed with lemon, olive oil and sumac. Toast your bread in the oven rather than frying it and the whole thing feels lighter.",
      "Next, a watermelon and feta plate. Cube chilled watermelon, crumble salty white cheese over it, scatter mint and finish with a crack of black pepper. It takes four minutes and disappears in two.",
      "Third, a chickpea and herb salad — an excellent lunchbox companion. Fourth, a chilled soba-style noodle bowl with cucumber ribbons. And fifth, a simple tomato salad, sliced thick, salted early and left to sit for ten minutes so the juices become the dressing.",
      "Everything here is available across all four Gate stores. Our teams refresh the produce feature bays every morning, so come early for the best pick of the day.",
    ],
  },
  {
    slug: "family-shopping-guide-one-trip",
    title: "The One-Trip Family Shopping Guide",
    category: "Family Shopping Guides",
    date: "2026-08-02",
    read: "6 min read",
    image: "/images/blog-produce.jpg",
    excerpt:
      "How to plan a full week of family meals in a single, calm visit — with a simple aisle-order that saves twenty minutes.",
    body: [
      "The secret to a fast shop is not walking faster. It is walking the store in the right order. At Gate, we lay out our halls so that a full week can be gathered in one loop, and knowing that loop is most of the battle.",
      "Begin with the dry and household aisles while your trolley is empty and stackable. Move next to bakery and world foods, then chilled and frozen, and finish in the fresh produce hall so the delicate items sit on top and stay cool on the drive home.",
      "Plan meals in threes rather than sevens. Three dinner bases — a rice dish, a pasta or noodle dish, and a grill — can carry a whole week with small variations, which means fewer items and far less waste.",
      "Bring the kids into it. Give each child one aisle to be responsible for; it turns a chore into a small mission and keeps everyone moving.",
      "Finally, check the current Gate flyer before you leave home. Our seasonal campaigns run in-store for weeks at a time, so a quick glance tells you which halls are worth a second look this visit.",
    ],
  },
  {
    slug: "meet-the-teams-behind-gate",
    title: "Meet the Teams Behind Your Gate Store",
    category: "Community Tips",
    date: "2026-07-21",
    read: "4 min read",
    image: "/images/blog-budget.jpg",
    excerpt:
      "From the 5 AM produce sort in Al Quoz to the late shift in Sabkha — the people who keep four neighbourhoods stocked.",
    body: [
      "Long before the doors open at Al Quoz, the produce team is already three hours into their day. Crates arrive, are opened, sorted and inspected leaf by leaf. Anything that will not be excellent by lunchtime does not reach the shelf.",
      "In Sabkha, the rhythm is different. Our Deira store serves a neighbourhood that shops late, so the team there works towards a 1 AM close and a spice hall that has to be restocked twice a day.",
      "Al Barsha carries the widest seasonal range, which makes it our testing ground. New feature bays usually appear there first, and if shoppers respond, they roll out to the other three stores within a fortnight.",
      "Ajman is the most family-heavy of our stores. The team knows the school run timings by heart and staffs the checkouts accordingly.",
      "If you have a request — a product you cannot find, a size you would like stocked — speak to the team on the floor. Almost every new line we carry started as a customer asking for it.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);