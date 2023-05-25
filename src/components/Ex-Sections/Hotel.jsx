import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import hotel1 from "../../assets/hotel/hotel1.jpg";
import hotel2 from "../../assets/hotel/hotel2.jpg";
import hotel3 from "../../assets/hotel/hotel3.jpg";

const Hotel = () => {
  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img style={{ height: "20rem" }} variant="top" src={hotel1} />
          <Card.Body>
            <Card.Title>Hotel Tropical Daisy</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Hotel</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow my-4">
          <Card.Img style={{ height: "20rem" }} variant="top" src={hotel2} />
          <Card.Body>
            <Card.Title>Platinum Residence</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Hotel</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img style={{ height: "20rem" }} variant="top" src={hotel3} />
          <Card.Body>
            <Card.Title>Resort Atlantis</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Hotel</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Hotel;
