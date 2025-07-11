import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"
import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
               Exclusive Deal – Only for a Short Time!
            </h2>

            <button className="btn reserve__btn">
              <Link to='/cars'>Reserve Now</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;