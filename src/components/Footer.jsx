import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5 ">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h4>About Us</h4>
            <p>We are a company that provides solutions for...</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mb-0">
              © 2023 Best Chef Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
