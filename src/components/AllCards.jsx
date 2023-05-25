import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const AllCards = ({ chef }) => {
  const { image, id, name, years_of_experience, likes, num_of_recipes } = chef;
  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }} className="shadow">
          <LazyLoad height={200} once>
            <Card.Img style={{ height: "20rem" }} variant="top" src={image} />
          </LazyLoad>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>Years of Experience: {years_of_experience}Years</p>
            <Card.Text>Numbers of recipes: {num_of_recipes}</Card.Text>
            <p>
              Likes: {likes} <FaHeart />
            </p>
            <Link to={`/chefCard/${id}`}>
              <Button variant="danger">View Recipes</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AllCards;
