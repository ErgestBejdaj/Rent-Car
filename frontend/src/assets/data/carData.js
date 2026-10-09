// Flota e makinave. Për të shtuar një makinë: vendos foton te cars-img/fleet/,
// importoje këtu dhe shto një objekt. "slug" duhet të jetë unik (përdoret në URL).
// Nëse nuk e di karburantin/motorin, lëre bosh ("") — nuk shfaqet.
// description: { en, sq } — përshkrimi në dy gjuhë.
// imgPosition (opsionale): cila pjesë e fotos shfaqet, p.sh. "center 90%" = më poshtë.
import rangeRover from "../all-images/cars-img/fleet/range-rover-sport.jpg";
import cayenne2017 from "../all-images/cars-img/fleet/porsche-cayenne-2017.jpg";
import cayenne2013 from "../all-images/cars-img/fleet/porsche-cayenne-2013.jpg";
import q8 from "../all-images/cars-img/fleet/audi-q8-2020.jpg";
import sClass from "../all-images/cars-img/fleet/mercedes-s-class.jpg";
import sClassMatte from "../all-images/cars-img/fleet/mercedes-s-class-matte.jpg";
import eClass from "../all-images/cars-img/fleet/mercedes-e-class.jpg";
import a7 from "../all-images/cars-img/fleet/audi-a7-2016.jpg";
import a6 from "../all-images/cars-img/fleet/audi-a6-2015.jpg";
import c2016 from "../all-images/cars-img/fleet/mercedes-c-class-2016.jpg";
import c2012 from "../all-images/cars-img/fleet/mercedes-c-class-2012.jpg";
import c2010 from "../all-images/cars-img/fleet/mercedes-c-class-2010.jpg";
import a4White from "../all-images/cars-img/fleet/audi-a4-2019-white.jpg";
import a4Black from "../all-images/cars-img/fleet/audi-a4-2015-black.jpg";
import bmw6 from "../all-images/cars-img/fleet/bmw-6-series.jpg";
import a5Grey from "../all-images/cars-img/fleet/audi-a5-grey.jpg";
import a5White from "../all-images/cars-img/fleet/audi-a5-white.jpg";
import golfWhite from "../all-images/cars-img/fleet/vw-golf-7-white.jpg";
import golfGtd from "../all-images/cars-img/fleet/vw-golf-7-gtd.jpg";

export const CATEGORIES = ["SUV", "Sedan", "Coupé", "Hatchback"];

const shared = {
  gps: "GPS navigation",
  seatType: "Heated seats",
  automatic: "Automatic",
  fuel: "",
  engine: "",
};

const carData = [
  /* ---------- SUV ---------- */
  {
    id: 1,
    slug: "range-rover-sport",
    brand: "Land Rover",
    carName: "Range Rover Sport",
    category: "SUV",
    year: "2020 look",
    price: 150,
    imgUrl: rangeRover,
    description: {
      en: "A Range Rover Sport with the 2020 styling: commanding, comfortable and at home on any road in Albania.",
      sq: "Range Rover Sport me pamjen e 2020: imponues, i rehatshëm dhe në shtëpinë e vet në çdo rrugë të Shqipërisë.",
    },
  },
  {
    id: 2,
    slug: "audi-q8-2020",
    brand: "Audi",
    carName: "Audi Q8",
    category: "SUV",
    year: 2020,
    fuel: "Petrol",
    price: 200,
    imgUrl: q8,
    imgPosition: "center 92%", // makina është poshtë në foto
    description: {
      en: "The Audi Q8 is a premium SUV combining bold design with strong performance. Perfect for both city driving and long-distance travel.",
      sq: "Audi Q8 është një SUV premium që bashkon dizajn të guximshëm me performancë të fortë. Perfekt si për qytetin, ashtu edhe për udhëtime të gjata.",
    },
  },
  {
    id: 3,
    slug: "porsche-cayenne-2017",
    brand: "Porsche",
    carName: "Porsche Cayenne",
    category: "SUV",
    year: 2017,
    price: 100,
    imgUrl: cayenne2017,
    description: {
      en: "The Porsche Cayenne blends luxury and sportiness in a powerful SUV, offering both performance and comfort.",
      sq: "Porsche Cayenne bashkon luksin dhe sportivitetin në një SUV të fuqishëm, me performancë dhe komoditet njëkohësisht.",
    },
  },
  {
    id: 4,
    slug: "porsche-cayenne-2013",
    brand: "Porsche",
    carName: "Porsche Cayenne",
    category: "SUV",
    year: 2013,
    fuel: "Diesel",
    engine: "3.0",
    price: 80,
    imgUrl: cayenne2013,
    description: {
      en: "A spacious, powerful Porsche Cayenne — a great choice for families and mountain roads.",
      sq: "Një Porsche Cayenne i gjerë dhe i fuqishëm — zgjedhje e shkëlqyer për familje dhe rrugë malore.",
    },
  },

  /* ---------- Sedan ---------- */
  {
    id: 5,
    slug: "mercedes-s-class",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz S-Class",
    category: "Sedan",
    year: "2020 look",
    engine: "5.5",
    price: 150,
    imgUrl: sClass,
    description: {
      en: "The Mercedes-Benz S-Class with the 2020 styling and a 5.5 engine: top-class comfort for business trips and special occasions.",
      sq: "Mercedes-Benz S-Class me pamjen e 2020 dhe motor 5.5: komoditet i klasit të parë për udhëtime pune dhe raste të veçanta.",
    },
  },
  {
    id: 18,
    slug: "mercedes-s-class-matte",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz S-Class",
    category: "Sedan",
    year: "2020 look",
    engine: "5.5",
    price: 150,
    imgUrl: sClassMatte,
    description: {
      en: "A matte black Mercedes-Benz S-Class with the 2020 styling and a 5.5 engine: top-class comfort that stands out wherever you arrive.",
      sq: "Mercedes-Benz S-Class i zi mat, me pamjen e 2020 dhe motor 5.5: komoditet i klasit të parë që bie në sy kudo që të mbërrini.",
    },
  },
  {
    id: 6,
    slug: "audi-a7-2016",
    brand: "Audi",
    carName: "Audi A7",
    category: "Sedan",
    year: 2016,
    fuel: "Diesel",
    engine: "3.0 Bi-TDI",
    price: 90,
    imgUrl: a7,
    description: {
      en: "The Audi A7 is a luxury car offering top performance, advanced technology, and elegant design.",
      sq: "Audi A7 është një makinë luksoze me performancë të lartë, teknologji të avancuar dhe dizajn elegant.",
    },
  },
  {
    id: 7,
    slug: "mercedes-c-class-2016",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz C-Class",
    category: "Sedan",
    year: 2016,
    fuel: "Diesel",
    engine: "2.2",
    price: 60,
    imgUrl: c2016,
    description: {
      en: "A modern Mercedes-Benz C-Class with improved comfort and driving performance.",
      sq: "Një Mercedes-Benz C-Class modern, me komoditet dhe drejtim të përmirësuar.",
    },
  },
  {
    id: 19,
    slug: "mercedes-e-class",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz E-Class",
    category: "Sedan",
    year: "",
    price: 55,
    imgUrl: eClass,
    description: {
      en: "An elegant, comfortable Mercedes-Benz E-Class — a great choice for business trips and long drives.",
      sq: "Një Mercedes-Benz E-Class elegant dhe i rehatshëm — zgjedhje e shkëlqyer për udhëtime pune dhe rrugë të gjata.",
    },
  },
  {
    id: 8,
    slug: "audi-a6-2015",
    brand: "Audi",
    carName: "Audi A6",
    category: "Sedan",
    year: 2015,
    price: 55,
    imgUrl: a6,
    description: {
      en: "A comfortable, well-equipped Audi A6 — roomy for long trips and refined in the city.",
      sq: "Një Audi A6 i rehatshëm dhe i pajisur mirë — i gjerë për udhëtime të gjata dhe elegant në qytet.",
    },
  },
  {
    id: 9,
    slug: "audi-a4-2019",
    brand: "Audi",
    carName: "Audi A4",
    category: "Sedan",
    year: 2019,
    fuel: "Petrol",
    price: 55,
    imgUrl: a4White,
    description: {
      en: "A modern Audi A4 offering excellent comfort, efficiency, and a smooth driving experience.",
      sq: "Një Audi A4 modern me komoditet të shkëlqyer, konsum të ulët dhe drejtim të butë.",
    },
  },
  {
    id: 10,
    slug: "audi-a4-2015",
    brand: "Audi",
    carName: "Audi A4",
    category: "Sedan",
    year: 2015,
    price: 45,
    imgUrl: a4Black,
    description: {
      en: "The Audi A4 is a reliable and comfortable sedan, ideal for both city driving and long trips.",
      sq: "Audi A4 është një sedan i besueshëm dhe i rehatshëm, ideal si për qytetin, ashtu edhe për udhëtime të gjata.",
    },
  },
  {
    id: 11,
    slug: "mercedes-c-class-2012",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz C-Class",
    category: "Sedan",
    year: 2012,
    price: 45,
    imgUrl: c2012,
    description: {
      en: "The Mercedes-Benz C-Class is a stylish and reliable sedan known for comfort and efficiency. Ideal for both business and daily use.",
      sq: "Mercedes-Benz C-Class është një sedan elegant dhe i besueshëm, i njohur për komoditetin dhe konsumin e ulët. Ideal për punë dhe për përdorim të përditshëm.",
    },
  },
  {
    id: 12,
    slug: "mercedes-c-class-2010",
    brand: "Mercedes-Benz",
    carName: "Mercedes-Benz C-Class",
    category: "Sedan",
    year: 2010,
    price: 35,
    imgUrl: c2010,
    description: {
      en: "Our most affordable Mercedes-Benz: a sporty-looking C-Class that is easy to drive around Tirana.",
      sq: "Mercedes-Benz-i ynë më i përballueshëm: një C-Class me pamje sportive, i lehtë për t'u drejtuar nëpër Tiranë.",
    },
  },

  /* ---------- Coupé ---------- */
  {
    id: 13,
    slug: "bmw-6-series",
    brand: "BMW",
    carName: "BMW 6 Series Gran Coupé",
    category: "Coupé",
    year: 2015,
    fuel: "Diesel",
    engine: "3.0",
    price: 80,
    imgUrl: bmw6,
    description: {
      en: "The BMW 6 Series delivers a luxurious driving experience with powerful performance.",
      sq: "BMW 6 Series ofron një përvojë drejtimi luksoze me performancë të fuqishme.",
    },
  },
  {
    id: 14,
    slug: "audi-a5-sportback-grey",
    brand: "Audi",
    carName: "Audi A5 Sportback",
    category: "Coupé",
    year: 2014,
    fuel: "Diesel",
    price: 50,
    imgUrl: a5Grey,
    description: {
      en: "The Audi A5 Sportback is a stylish coupé offering a balance of performance and comfort.",
      sq: "Audi A5 Sportback është një kupe elegante me ekuilibër mes performancës dhe komoditetit.",
    },
  },
  {
    id: 15,
    slug: "audi-a5-sportback-white",
    brand: "Audi",
    carName: "Audi A5 Sportback",
    category: "Coupé",
    year: 2013,
    fuel: "Diesel",
    engine: "2.0",
    price: 50,
    imgUrl: a5White,
    description: {
      en: "A refined Audi A5 Sportback with an efficient diesel engine and premium interior.",
      sq: "Një Audi A5 Sportback i rafinuar, me motor nafte ekonomik dhe interier premium.",
    },
  },

  /* ---------- Hatchback ---------- */
  {
    id: 16,
    slug: "vw-golf-7-gtd-2015",
    brand: "Volkswagen",
    carName: "Volkswagen Golf 7 GTD",
    category: "Hatchback",
    year: 2015,
    fuel: "Diesel",
    engine: "2.0",
    price: 50,
    imgUrl: golfGtd,
    description: {
      en: "The Golf 7 GTD offers sporty performance combined with fuel efficiency.",
      sq: "Golf 7 GTD ofron performancë sportive bashkë me konsum të ulët karburanti.",
    },
  },
  {
    id: 17,
    slug: "vw-golf-7-2014",
    brand: "Volkswagen",
    carName: "Volkswagen Golf 7",
    category: "Hatchback",
    year: 2014,
    fuel: "Diesel",
    engine: "2.0",
    price: 45,
    imgUrl: golfWhite,
    description: {
      en: "Volkswagen Golf 7 is a practical and efficient car, perfect for everyday driving.",
      sq: "Volkswagen Golf 7 është një makinë praktike dhe ekonomike, perfekte për përdorim të përditshëm.",
    },
  },
].map((car) => ({ ...shared, ...car }));

export default carData;
