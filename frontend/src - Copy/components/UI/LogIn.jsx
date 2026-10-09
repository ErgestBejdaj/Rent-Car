import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogInForm = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col lg="4" md="6" sm="8" xs="12">
          <Form className="p-5 bg-white rounded shadow-lg">
            <h2 className="text-center mb-4">Log In</h2>
            <FormGroup>
              <input type="text" className="form-control form-control-lg" placeholder="Username" required />
            </FormGroup>
            <FormGroup>
              <input type="password" className="form-control form-control-lg" placeholder="Password" required />
            </FormGroup>
            <Button type="submit" className="btn btn-primary btn-lg w-100">Log In</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LogInForm;
