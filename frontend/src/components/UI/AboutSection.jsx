import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/q8.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "100px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="about__section-content">
  <h4 className="section__subtitle">About Us</h4>
  <h2 className="section__title">Auto Rental Pojana – Car Rental in Albania</h2>
  <p className="section__description">
    Your trusted choice for car rentals in Tirana and Tirana International Airport (Rinas)! With a modern fleet and competitive prices, Auto Rental Pojana guarantees safe, comfortable, and flexible travel across Albania.
  </p>

  <div className="about__section-item d-flex align-items-center">
    <p className="section__description d-flex align-items-center gap-2">
      <i className="ri-checkbox-circle-line"></i> Daily pickup & return in Tirana and Rinas Airport
    </p>

    <p className="section__description d-flex align-items-center gap-2">
      <i className="ri-checkbox-circle-line"></i> Modern and well-maintained vehicles
    </p>
  </div>

  <div className="about__section-item d-flex align-items-center">
    <p className="section__description d-flex align-items-center gap-2">
      <i className="ri-checkbox-circle-line"></i> 250 km/day included – only €0.20/km extra
    </p>

    <p className="section__description d-flex align-items-center gap-2">
      <i className="ri-checkbox-circle-line"></i> Quick booking – online or by phone
    </p>
  </div>
</div>

          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;