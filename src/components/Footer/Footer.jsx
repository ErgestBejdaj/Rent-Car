import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink, Link } from 'react-router-dom';
import '../../styles/footer.css';

const quicklinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]
const Footer = () => {

  const date = new Date()
  const year = date.getFullYear
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className="logo footer__logo">
            <h1>
              <Link to="/home" className="d-flex align-items-center gap-3">
                <i className="ri-car-line"></i>
                <span>
                  Rent Car <br />Service
                </span>
              </Link>
            </h1>
          </div>
          <p className='footer__logo-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime, doloremque asperiores nostrum corrupti cumque velit
            laudantium autem quisquam impedit error voluptates consequatur
            cum modi voluptatibus dicta repellat sint a deserunt!
          </p>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className='footer__link-title'>Quick links</h5>
            <ListGroup>
              {
                quicklinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path} > {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className='footer__link-title'>Head Office</h5>
            <p className='office__info'>123 Zindabazar, Sylhet, Bangladesh</p>
            <p className='office__info'>Phone: +355688215013</p>
            <p className='office__info'>Email: rent-car@gmail.com</p>
            <p className='office__info'>Office Time: 10am - 7pm</p>
          </div>
        </Col>
        <Col lg='3' className='mb-4'>
          <div className='mb-4'>
            <h5 className='footer__link-title'>Newsletter</h5>
            <p className='section__description'>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Email'></input>
              <span><i className="ri-send-plane-fill"></i></span>
            </div>
          </div>
        </Col>
        <Col lg='12'>
          <div className="footer__bottom pt-4">
            <p className="section__description d-flex align-items-center justify-content-center gap-1">
               <i class="ri-copyright-line"></i>Copyright {year} , 
               Developed by Ergest Bejdaj. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;
