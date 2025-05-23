import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        I rented a car from Auto Rental Pojana for a weekend trip — the service was fast, friendly, and the car was in perfect condition. Highly recommended!
      </p>
  
      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
        <div>
          <h6 className="mb-0 mt-3">Mark T.</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>
  
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Amazing experience! Booking was easy and the staff was very helpful. I’ll definitely use Rental Pojana again for my future travels.
      </p>
  
      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
        <div>
          <h6 className="mb-0 mt-3">Sophia M.</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>
  
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Great value for money! The vehicle was clean and fuel-efficient. Auto Pojana made my trip stress-free from start to finish.
      </p>
  
      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
        <div>
          <h6 className="mb-0 mt-3">Dritan K.</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>
  
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        I was impressed by their punctuality and professionalism. Auto Rental Pojana offered top-notch service and a smooth rental process.
      </p>
  
      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
        <div>
          <h6 className="mb-0 mt-3">Emily R.</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>
  </Slider>
  
  );
};

export default Testimonial;