// Të dhënat kryesore të biznesit — ndrysho këtu dhe përditësohet gjithë faqja.

export const SITE = {
  name: "Auto Rent Pojana",
  phoneDisplay: "+355 68 321 4444",
  phoneHref: "tel:+355683214444",
  whatsapp: "355683214444", // pa +, pa hapësira
  email: "rentalpojana@gmail.com",
  address: "Kompleksi Delijorgji, Tiranë, Albania",
  instagram: "https://www.instagram.com/autorental_pojana",
  tiktok: "https://www.tiktok.com/@autorental.pojana",
  facebook: "#",
  currency: "€",
  kmPerDay: 250,
  extraKmPrice: "0.20",
};

export const LOCATIONS = [
  {
    id: "airport",
    name: "Tirana Airport (Rinas)",
    short: "Rinas Airport",
    detail: "We meet you in the arrivals hall with the car ready.",
  },
  {
    id: "city",
    name: "Tirana city centre",
    short: "Tirana centre",
    detail: "Kompleksi Delijorgji, Tiranë.",
  },
];

export const locationName = (id) =>
  (LOCATIONS.find((l) => l.id === id) || LOCATIONS[0]).name;

/* ---------- datat ---------- */

const pad = (n) => String(n).padStart(2, "0");
export const toISODate = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export const defaultTrip = () => {
  const from = new Date();
  from.setDate(from.getDate() + 1);
  const to = new Date(from);
  to.setDate(to.getDate() + 3);
  return {
    pickup: "airport",
    dropoff: "airport",
    from: toISODate(from),
    fromTime: "10:00",
    to: toISODate(to),
    toTime: "10:00",
  };
};

// Lexon udhëtimin nga URL (?pickup=..&from=..) me vlera default
export const tripFromParams = (params) => {
  const d = defaultTrip();
  const get = (k) => params.get(k) || d[k];
  return {
    pickup: get("pickup"),
    dropoff: get("dropoff"),
    from: get("from"),
    fromTime: get("fromTime"),
    to: get("to"),
    toTime: get("toTime"),
  };
};

export const tripToQuery = (t) => new URLSearchParams(t).toString();

// Çdo 24 orë fillim = 1 ditë qiraje (minimumi 1)
export const rentalDays = (t) => {
  const a = new Date(`${t.from}T${t.fromTime || "10:00"}`);
  const b = new Date(`${t.to}T${t.toTime || "10:00"}`);
  const hours = (b - a) / 36e5;
  if (!isFinite(hours) || hours <= 0) return 1;
  return Math.max(1, Math.ceil(hours / 24));
};

export const formatDate = (iso) => {
  const d = new Date(`${iso}T00:00`);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

/* ---------- WhatsApp ---------- */

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const bookingMessage = (car, trip) => {
  const days = rentalDays(trip);
  return [
    `Hello ${SITE.name}, I'd like to book the ${car.carName}${car.year ? ` (${car.year})` : ""}.`,
    `Pick-up: ${locationName(trip.pickup)}, ${formatDate(trip.from)} at ${trip.fromTime}`,
    `Return: ${locationName(trip.dropoff)}, ${formatDate(trip.to)} at ${trip.toTime}`,
    `${days} day${days > 1 ? "s" : ""} × ${SITE.currency}${car.price} = ${SITE.currency}${days * car.price}`,
    `Is it available?`,
  ].join("\n");
};

// "SUV" mbetet me shkronja të mëdha, të tjerat me të vogla
export const categoryLabel = (c) => (c === "SUV" ? "SUV" : c.toLowerCase());

// Motori + karburanti, p.sh. "3.0 Diesel" — bosh nëse nuk dihet
export const engineLabel = (car) => [car.engine, car.fuel].filter(Boolean).join(" ");

// "2016 model" ose "2020 look"
export const yearLabel = (year) => (typeof year === "number" ? `${year} model` : year);

export const yearNumber = (year) => parseInt(year, 10) || 0;
