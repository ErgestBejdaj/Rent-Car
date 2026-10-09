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

// Emrat janë në dy gjuhë: { en, sq }
export const LOCATIONS = [
  {
    id: "airport",
    name: { en: "Tirana Airport (Rinas)", sq: "Aeroporti i Tiranës (Rinas)" },
    detail: {
      en: "We meet you in the arrivals hall with the car ready.",
      sq: "Ju presim në sallën e mbërritjeve me makinën gati.",
    },
  },
  {
    id: "city",
    name: { en: "Tirana city centre", sq: "Qendra e Tiranës" },
    detail: { en: "Kompleksi Delijorgji, Tiranë.", sq: "Kompleksi Delijorgji, Tiranë." },
  },
];

// Kthen { en, sq } — përdore me tr() nga useLang()
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

// Emrat shqip i shkruajmë vetë — jo të gjithë shfletuesit i kanë
const SQ_DAYS = ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"];
const SQ_MONTHS_SHORT = ["jan", "shk", "mar", "pri", "maj", "qer", "kor", "gus", "sht", "tet", "nën", "dhj"];
const SQ_MONTHS = ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"];

// "Thu, 22 Oct" / "Enj, 22 tet"
export const formatDate = (iso, locale = "en-GB") => {
  const d = new Date(`${iso}T00:00`);
  if (isNaN(d)) return iso;
  if (locale.startsWith("sq")) {
    return `${SQ_DAYS[d.getDay()]}, ${d.getDate()} ${SQ_MONTHS_SHORT[d.getMonth()]}`;
  }
  return d.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
};

// "2 June 2025" / "2 qershor 2025"
export const formatLongDate = (iso, locale = "en-GB") => {
  const d = new Date(`${iso}T00:00`);
  if (isNaN(d)) return iso;
  if (locale.startsWith("sq")) {
    return `${d.getDate()} ${SQ_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }
  return d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
};

/* ---------- WhatsApp ---------- */

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Mesazhi i rezervimit, në gjuhën që ka zgjedhur klienti.
// i18n = { t, tr, locale } nga useLang()
export const bookingMessage = (car, trip, { t, tr, locale }) => {
  const days = rentalDays(trip);
  const c = SITE.currency;
  const carText = `${car.carName}${car.year ? ` (${car.year})` : ""}`;
  return [
    t("msg.hello", { name: SITE.name, car: carText }),
    t("msg.pickup", { loc: tr(locationName(trip.pickup)), date: formatDate(trip.from, locale), time: trip.fromTime }),
    t("msg.return", { loc: tr(locationName(trip.dropoff)), date: formatDate(trip.to, locale), time: trip.toTime }),
    t("msg.price", { n: days, price: `${c}${car.price}`, total: `${c}${days * car.price}` }),
    t("msg.available"),
  ].join("\n");
};

// Motori + karburanti, p.sh. "3.0 Diesel" / "3.0 Naftë" — bosh nëse nuk dihet
export const engineLabel = (car, t) =>
  [car.engine, car.fuel ? t(`val.${car.fuel}`) : ""].filter(Boolean).join(" ");

// "Model 2016" / "2016 model", ose "2020 look" ashtu siç është
export const yearLabel = (year, t) =>
  typeof year === "number" ? t("year.model", { year }) : year;

export const yearNumber = (year) => parseInt(year, 10) || 0;
