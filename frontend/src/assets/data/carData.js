// import all images from assets/images directory
import img01 from "../all-images/cars-img/A4.jpeg";
import img02 from "../all-images/cars-img/audi-q8.jpg";
import img04 from "../all-images/cars-img/C class.jpeg";
import img05 from "../all-images/cars-img/Porche.jpeg";
import img06 from "../all-images/cars-img/audi-a6.jpg";
import img07 from "../all-images/cars-img/cls.PNG";
import img08 from "../all-images/cars-img/A5.PNG";
import img09 from "../all-images/cars-img/Audi a5 Bardh.PNG";
import img10 from "../all-images/cars-img/Bmw.PNG";
import img11 from "../all-images/cars-img/Golf 7.PNG";
import img12 from "../all-images/cars-img/Golf 7 GTD.jpg";
import img13 from "../all-images/cars-img/C Class.PNG";
import img14 from "../all-images/cars-img/A7.PNG";

const carData = [
  {
    id: 1,
    brand: "Audi",
    rating: 112,
    carName: "Audi A4",
    imgUrl: img01,
    model: "Model-2013",
    price: 200,
    speed: "Petrol",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Audi A4 is a reliable and comfortable sedan, ideal for both city driving and long trips. It features heated seats, GPS navigation, and automatic transmission.",
  },
  {
    id: 2,
    brand: "Audi",
    rating: 102,
    carName: "Audi Q8",
    imgUrl: img02,
    model: "Model-2020",
    price: 250,
    speed: "Petrol",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Audi Q8 is a premium SUV combining bold design with strong performance. Perfect for both city driving and long-distance travel.",
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    rating: 102,
    carName: "Mercedes C-Class",
    imgUrl: img04,
    model: "Model-2014",
    price: 45,
    speed: "Diesel",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz C-Class is a stylish and reliable sedan known for comfort and efficiency. Ideal for both business and daily use.",
  },
  {
    id: 4,
    brand: "Porsche",
    rating: 94,
    carName: "Porsche Cayenne",
    imgUrl: img05,
    model: "Model-2014",
    price: 80,
    speed: "Diesel 3.0",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Porsche Cayenne blends luxury and sportiness in a powerful SUV, offering both performance and comfort.",
  },
  {
    id: 5,
    brand: "Audi",
    rating: 119,
    carName: "Audi A4",
    imgUrl: img06,
    model: "Model-2019",
    price: 60,
    speed: "Petrol",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A modern Audi A4 offering excellent comfort, efficiency, and smooth driving experience.",
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    rating: 119,
    carName: "CLS 350",
    imgUrl: img07,
    model: "Model-2016",
    price: 90,
    speed: "Diesel",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz CLS 350 combines sporty elegance with luxury and advanced features.",
  },
  {
    id: 7,
    brand: "Audi",
    rating: 26,
    carName: "A5",
    imgUrl: img08,
    model: "Model-2014",
    price: 50,
    speed: "Diesel",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Audi A5 is a stylish coupe offering a balance of performance and comfort.",
  },
  {
    id: 8,
    brand: "Audi",
    rating: 26,
    carName: "A5",
    imgUrl: img09,
    model: "Model-2013",
    price: 50,
    speed: "2.0 Nafte",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A refined Audi A5 coupe with efficient diesel engine and premium interior.",
  },
  {
    id: 9,
    brand: "BMW",
    rating: 26,
    carName: "Seria 6",
    imgUrl: img10,
    model: "Model-2015",
    price: 70,
    speed: "3.0 Nafte",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW 6 Series delivers a luxurious driving experience with powerful performance.",
  },
  {
    id: 10,
    brand: "Volkswagen",
    rating: 26,
    carName: "Golf 7",
    imgUrl: img11,
    model: "Model-2014",
    price: 45,
    speed: "2.0 Nafte",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Volkswagen Golf 7 is a practical and efficient car, perfect for everyday driving.",
  },
  {
    id: 11,
    brand: "Volkswagen",
    rating: 26,
    carName: "Golf 7 GTD",
    imgUrl: img12,
    model: "2015 GTD",
    price: 50,
    speed: "2.0 Nafte",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Golf 7 GTD offers sporty performance combined with fuel efficiency.",
  },
  {
    id: 12,
    brand: "Mercedes-Benz",
    rating: 26,
    carName: "C Class",
    imgUrl: img13,
    model: "2016",
    price: 65,
    speed: "2.2 Nafte",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A modern Mercedes-Benz C-Class with improved comfort and driving performance.",
  },
  {
    id: 13,
    brand: "Audi",
    rating: 26,
    carName: "Audi A7",
    imgUrl: img14,
    model: "2016",
    price: 90,
    speed: "3.0 Nafte Bi-TDI",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Audi A7 is a luxury car offering top performance, advanced technology, and elegant design.",
  },
];

export default carData;