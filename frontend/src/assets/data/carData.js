// import all images from assets/images directory
import img01 from "../all-images/cars-img/s-class.jpg";
import img02 from "../all-images/cars-img/audi-q8.jpg";
import img04 from "../all-images/cars-img/e-class.jpg";
import img05 from "../all-images/cars-img/porche-cayenne.jpg";
import img06 from "../all-images/cars-img/audi-a6.jpg";
import img07 from "../all-images/cars-img/cls.PNG";

const carData = [
  {
    id: 1,
    brand: "Mercedez-Benz",
    rating: 112,
    carName: "Mercedez S-Class",
    imgUrl: img01,
    model: "Model 2015",
    price: 200,
    speed: "Petrol",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
  "The Mercedez S-Class offers an exceptional experience of luxury and comfort. Equipped with heated seats, built-in GPS navigation, and an automatic transmission system, this car is perfect for long trips or special occasions. The 2015 model is fuel-efficient and runs on petrol.",
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
    "The Audi Q8 is a premium SUV that combines bold design with powerful performance. Featuring heated seats, GPS navigation, and an automatic transmission, it ensures a smooth and comfortable driving experience. The 2020 model runs on petrol and is perfect for both city drives and long-distance travel.",
  },
  {
    id: 4,
    brand: "Mercedez-Benz",
    rating: 102,
    carName: "Mercedez E-Class",
    imgUrl: img04,
    model: "Model-2014",
    price: 60,
    speed: "Diesel",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
  "The Mercedez E-Class is a stylish and reliable sedan known for its smooth ride and advanced features. Equipped with heated seats, GPS navigation, and an automatic transmission, it offers comfort and convenience at an affordable price. The 2014 model runs on diesel and is ideal for both business and leisure trips.",
  },

  {
    id: 5,
    brand: "Porche",
    rating: 94,
    carName: "Porche Cayenne",
    imgUrl: img05,
    model: "Model-2012",
    price: 80,
    speed: "Diesel",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Porsche Cayenne blends luxury and sportiness in a powerful SUV package. With heated seats, GPS navigation, and automatic transmission, it delivers both comfort and performance. The 2012 diesel model is a great choice for those looking for a premium driving experience at a reasonable price.",  
  },

  {
    id: 6,
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
    "The Audi A4 is a sleek and refined sedan that offers excellent performance and comfort. This 2019 petrol model features heated seats, GPS navigation, and automatic transmission—making it perfect for daily commutes or weekend getaways. Experience premium quality at an affordable price.",
  
  },
  {
    id: 7,
    brand: "Mercedez-Benz",
    rating: 119,
    carName: "CLS 350",
    imgUrl: img07,
    model: "Model-2016",
    price: 60,
    speed: "Petrol",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Audi A4 is a sleek and refined sedan that offers excellent performance and comfort. This 2019 petrol model features heated seats, GPS navigation, and automatic transmission—making it perfect for daily commutes or weekend getaways. Experience premium quality at an affordable price.",
  
  },



];

export default carData;