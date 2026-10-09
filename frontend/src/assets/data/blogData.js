import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

// "body" është listë paragrafësh. "slug" përdoret në URL: /blogs/<slug>
const blogData = [
  {
    id: 1,
    slug: "picking-up-at-rinas-airport",
    title: "Picking up your rental car at Rinas Airport",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    readTime: "3 min read",
    imgUrl: img01,
    excerpt:
      "What happens after you land in Tirana, from the arrivals hall to the driver's seat.",
    quote: "Send us your flight number and we'll be there when you land.",
    body: [
      "When you book with us for an airport pick-up, send your flight number along with your booking on WhatsApp. That lets us follow your arrival and adjust if the flight is early or late.",
      "We meet you in the arrivals hall at Tirana International Airport (Rinas). We walk you to the car, go through it together and hand over the keys — no queue at a rental desk.",
      "Returning at the airport works the same way. Tell us when your flight leaves and we'll agree a drop-off time that leaves you enough room for check-in.",
    ],
  },
  {
    id: 2,
    slug: "how-our-mileage-works",
    title: "How the 250 km a day mileage works",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    readTime: "2 min read",
    imgUrl: img02,
    excerpt:
      "Every rental includes 250 km per day. Here's how extra kilometres are counted.",
    quote: "250 km a day is included. Extra kilometres are €0.20 each.",
    body: [
      "Every day of your rental includes 250 km at no extra cost.",
      "Beyond the included kilometres, each extra kilometre costs €0.20. For example, 50 km over the allowance comes to €10.",
      "If you're planning a long trip, tell us when you book and we'll help you work out the cost in advance.",
    ],
  },
  {
    id: 3,
    slug: "road-trip-from-tirana",
    title: "Planning a road trip from Tirana",
    author: "Auto Rent Pojana",
    date: "2025-06-02",
    readTime: "3 min read",
    imgUrl: img03,
    excerpt:
      "A few practical things to sort out before you leave the city behind.",
    quote: "Plan your route around the daily allowance and the trip takes care of itself.",
    body: [
      "Albania is compact, and a car is the easiest way to see it — the coast, the mountains and the old towns are all within reach of Tirana.",
      "Before you go, check your route against the mileage allowance and pick a car that fits the trip: an SUV for mountain roads, a sedan or hatchback for the coast and the cities.",
      "Keep our number saved in your phone. Support is available 24/7 if you need help on the road.",
    ],
  },
];

export default blogData;
