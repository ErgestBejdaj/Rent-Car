import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/cars',
    display: 'Cars'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/autorental_pojana",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.tiktok.com/@autorental.pojana",
    icon: "ri-tiktok-line",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* =============== Header Top =============== */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                <a href="https://wa.me/355683214444" className="phone-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <i className="ri-phone-fill"></i>
                </a>
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="social__link-icon-header"
                    aria-label={item.icon.replace('ri-', '').replace('-line', '')}
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ============ header middle ============== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i className="ri-car-line"></i>
                    <span>Auto Rental <br />Pojana</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-earth-line"></i></span>
                <div className="header__location-content">
                  <h4>Albania</h4>
                  <h6>Tirana City, Albania</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Support</h4>
                  <h6>24 Hour</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-whatsapp-line"></i> Chat on Whatsapp
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ============= main navigation =============== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <i className="ri-menu-line"></i> : <i className="ri-menu-line"></i>}
            </span>
            <div className="logo-menu">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3 text-decoration-none">
                    <i className="ri-car-line"></i>
                    <span>Auto Rental <br />Pojana</span>
                  </Link>
                </h1>
              </div>


            <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
              <div className="menu">
                 {navLinks.map((item, index) => (
                   <NavLink
                     to={item.path}
                     className={({ isActive }) => isActive ? 'nav__active nav__item' : 'nav__item'}
                     key={index}
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Responsive Menu */}
      
    </header>
  );
};

export default Header;
