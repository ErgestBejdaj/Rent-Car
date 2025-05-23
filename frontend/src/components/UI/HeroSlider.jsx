import React from "react"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import '../../styles/hero-slider.css';

const HeroSlider = () => {

    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
    };
    return ( 
    <Slider {...settings} className='hero__slider'>
    
        <div className="slider__item slider__item-01 mt-0">
            <Container>
                <div className="slider__content">
                <h6 className="text-light mb-3">From Only $60/Day</h6>
                <h1 className="text-light mb-3">Drive in Style — Book Your Ride Today!</h1>
                    <button className="btn reserve__btn">
                         <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider__item slider__item-02 mt-0">
            <Container>
                <div className="slider__content">
                <h6 className="text-light mb-3">Limited-Time Offer</h6>
                <h1 className="text-light mb-3">Rent Now & Save 50% Instantly!</h1>
                    <button className="btn reserve__btn">
                         <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider__item slider__item-03 mt-0">
            <Container>
                <div className="slider__content">
                <h6 className="text-light mb-3">Your Perfect Trip Starts Here</h6>
                <h1 className="text-light mb-3">Affordable. Reliable. Unforgettable.</h1>
                    <button className="btn reserve__btn">
                         <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>

    </Slider>
    )
}

export default HeroSlider;