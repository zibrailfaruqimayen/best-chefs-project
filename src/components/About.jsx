import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to our food and travel website! We are a team of food and
            travel enthusiasts who are <br /> passionate about exploring the
            culinary and cultural delights of Dhaka, Bangladesh. <br /> Our
            mission is to share our love for food and travel with others and to{" "}
            <br />
            provide useful information and recommendations for those who are
            planning a trip to Dhaka.
          </p>
          <p>
            Our website features a curated selection of the best chefs, hotels,
            and restaurants in Dhaka, <br /> along with reviews, ratings, and
            other useful information to help <br /> you make informed decisions
            about where to stay and eat. Whether you're a foodie, a traveler, or
            simply looking to explore a new city, <br /> we hope that our
            website will inspire you to discover the rich flavors and vibrant
            culture of Dhaka.
          </p>
          <p>
            Thank you for visiting our website, and please feel free to reach
            out to us with any questions, comments, or feedback. We would love
            to hear from you!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
