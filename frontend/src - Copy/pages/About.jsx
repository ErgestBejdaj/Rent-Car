import React from "react";

import CommonSection from "../components/UI/Commonsection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
  <div className="about__page-content">
    <h2 className="section__title">
      We Are Committed To Provide Safe Ride Solutions
    </h2>

    <p className="section__description">
      At Auto Rental Pojana, we focus on providing reliable and safe transportation across Albania. Whether you're arriving at Tirana International Airport or need a ride within the city, our rental service is here to make your journey smooth and stress-free.
    </p>

    <p className="section__description">
      All our vehicles are well-maintained and regularly inspected to ensure comfort and security. With easy booking, transparent pricing, and flexible pickup options, your satisfaction is our top priority.
    </p>

    <div className=" d-flex align-items-center gap-3 mt-4">
      <span className="fs-4">
        <i className="ri-phone-line"></i>
      </span>

      <div>
        <h6 className="section__subtitle">Need Any Help?</h6>
        <h4>+355 68 321 4444</h4>
      </div>
    </div>
  </div>
</Col>

          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;