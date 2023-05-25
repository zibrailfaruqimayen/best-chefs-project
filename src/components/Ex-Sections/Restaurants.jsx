import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDollarSign, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import restaurants1 from "../../assets/restaurants/restaurants1.jpeg";
import restaurants2 from "../../assets/restaurants/restaurants2.jpg";
import restaurants3 from "../../assets/restaurants/restaurants3.jpg";

const Restaurants = () => {
  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img
            style={{ height: "20rem" }}
            variant="top"
            src={restaurants1}
          />
          <Card.Body>
            <Card.Title>Global Dining at InterContinental Dhaka</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaDollarSign className="text-secondary" /> -
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <br />
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Restaurants</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow my-4">
          <Card.Img
            style={{ height: "20rem" }}
            variant="top"
            src={restaurants2}
          />
          <Card.Body>
            <Card.Title>Aqua Deck at InterContinental Dhaka</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaDollarSign className="text-secondary" /> -
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <br />
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Restaurants</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img
            style={{ height: "20rem" }}
            variant="top"
            src={restaurants3}
          />
          <Card.Body>
            <Card.Title>The Garden Kitchen at Sheraton Dhaka</Card.Title>
            <Card.Text>
              restaurant is situated in Gulshan Avenue, Dhaka Bangladesh. It is
              a very large restaurant that covering 10500 sq. areas of Gulshan
              Avenue. They provide multi-specialty food services such as
              continentals, deserts, and Pan-Asian around the whole of Dhaka
              city
            </Card.Text>
            <FaDollarSign className="text-secondary" /> -
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <FaDollarSign className="text-secondary" />
            <br />
            <FaMapMarkerAlt className="text-secondary" /> Dhaka,Bangladesh
            <p>
              Star: <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <Link>
              <Button variant="danger">View Restaurants</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Restaurants;
