import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

// Çdo tekst është në dy gjuhë: { en, sq }. "body" është listë paragrafësh.
// "slug" përdoret në URL: /blogs/<slug>
const blogData = [
  {
    id: 1,
    slug: "picking-up-at-rinas-airport",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    imgUrl: img01,
    title: {
      en: "Picking up your rental car at Rinas Airport",
      sq: "Marrja e makinës me qira në Aeroportin e Rinasit",
    },
    readTime: { en: "3 min read", sq: "3 min lexim" },
    excerpt: {
      en: "What happens after you land in Tirana, from the arrivals hall to the driver's seat.",
      sq: "Çfarë ndodh pasi uleni në Tiranë, nga salla e mbërritjeve deri te timoni.",
    },
    quote: {
      en: "Send us your flight number and we'll be there when you land.",
      sq: "Na dërgoni numrin e fluturimit dhe do të jemi aty kur të uleni.",
    },
    body: {
      en: [
        "When you book with us for an airport pick-up, send your flight number along with your booking on WhatsApp. That lets us follow your arrival and adjust if the flight is early or late.",
        "We meet you in the arrivals hall at Tirana International Airport (Rinas). We walk you to the car, go through it together and hand over the keys — no queue at a rental desk.",
        "Returning at the airport works the same way. Tell us when your flight leaves and we'll agree a drop-off time that leaves you enough room for check-in.",
      ],
      sq: [
        "Kur rezervoni me ne marrjen në aeroport, dërgoni numrin e fluturimit bashkë me rezervimin në WhatsApp. Kështu e ndjekim mbërritjen tuaj dhe përshtatemi nëse fluturimi vjen më herët ose vonohet.",
        "Ju presim në sallën e mbërritjeve të Aeroportit Ndërkombëtar të Tiranës (Rinas). Ju shoqërojmë te makina, e kontrollojmë bashkë dhe ju dorëzojmë çelësat — pa radhë në sportel.",
        "Kthimi në aeroport funksionon njësoj. Na tregoni kur niset fluturimi dhe caktojmë një orë dorëzimi që ju lë kohë të mjaftueshme për check-in.",
      ],
    },
  },
  {
    id: 2,
    slug: "how-our-mileage-works",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    imgUrl: img02,
    title: {
      en: "How the 250 km a day mileage works",
      sq: "Si funksionojnë 250 km në ditë",
    },
    readTime: { en: "2 min read", sq: "2 min lexim" },
    excerpt: {
      en: "Every rental includes 250 km per day. Here's how extra kilometres are counted.",
      sq: "Çdo qira përfshin 250 km në ditë. Ja si llogariten kilometrat shtesë.",
    },
    quote: {
      en: "250 km a day is included. Extra kilometres are €0.20 each.",
      sq: "250 km në ditë janë të përfshira. Çdo kilometër shtesë kushton €0.20.",
    },
    body: {
      en: [
        "Every day of your rental includes 250 km at no extra cost.",
        "Beyond the included kilometres, each extra kilometre costs €0.20. For example, 50 km over the allowance comes to €10.",
        "If you're planning a long trip, tell us when you book and we'll help you work out the cost in advance.",
      ],
      sq: [
        "Çdo ditë qiraje përfshin 250 km pa kosto shtesë.",
        "Përtej kilometrave të përfshira, çdo kilometër shtesë kushton €0.20. Për shembull, 50 km mbi limitin bëjnë €10.",
        "Nëse planifikoni një udhëtim të gjatë, na tregoni kur rezervoni dhe ju ndihmojmë ta llogaritni koston paraprakisht.",
      ],
    },
  },
  {
    id: 3,
    slug: "road-trip-from-tirana",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    imgUrl: img03,
    title: {
      en: "Planning a road trip from Tirana",
      sq: "Planifikimi i një udhëtimi me makinë nga Tirana",
    },
    readTime: { en: "3 min read", sq: "3 min lexim" },
    excerpt: {
      en: "A few practical things to sort out before you leave the city behind.",
      sq: "Disa gjëra praktike për t'u rregulluar para se të largoheni nga qyteti.",
    },
    quote: {
      en: "Plan your route around the daily allowance and the trip takes care of itself.",
      sq: "Planifikoni rrugën sipas limitit ditor dhe pjesa tjetër vjen vetë.",
    },
    body: {
      en: [
        "Albania is compact, and a car is the easiest way to see it — the coast, the mountains and the old towns are all within reach of Tirana.",
        "Before you go, check your route against the mileage allowance and pick a car that fits the trip: an SUV for mountain roads, a sedan or hatchback for the coast and the cities.",
        "Keep our number saved in your phone. Support is available 24/7 if you need help on the road.",
      ],
      sq: [
        "Shqipëria është e vogël dhe makina është mënyra më e lehtë për ta parë — bregdeti, malet dhe qytetet e vjetra janë të gjitha të arritshme nga Tirana.",
        "Para nisjes, krahasoni rrugën me limitin e kilometrave dhe zgjidhni makinën që i përshtatet udhëtimit: një SUV për rrugët malore, një sedan ose hatchback për bregdetin dhe qytetet.",
        "Ruajeni numrin tonë në telefon. Mbështetja është e disponueshme 24/7 nëse ju duhet ndihmë gjatë rrugës.",
      ],
    },
  },
];

export default blogData;
