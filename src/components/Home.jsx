import React from "react";
import banner from "../assets/banner1.jpg";
import AllCards from "./AllCards";
import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Hotel from "./Ex-Sections/Hotel";
import Restaurants from "./Ex-Sections/Restaurants";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <div className="d-lg-flex  justify-content-lg-around align-items-center mb-5">
        <div className="px-lg-5 ">
          <h2 style={{ fontSize: "90px" }} className="">
            <span className="text-secondary">We Make</span> <br />
            <span className="text-danger">Delicious Food</span>
          </h2>
          <p className="text-secondary">
            This is one of those go-to sites, with everything you’ll ever need
            to prepare varied and delicious meals. In depth sections cover
            different meal types, dishes from around the world, and even special
            diets for example, there are 361 ideas for keto dishes. Or you can
            just type in the name of a dish a search for mac n cheese will yield
            over 8,000 results!
          </p>
        </div>

        <img className="img-fluid" src={banner} alt="" />
      </div>
      <div className="container mx-auto mb-5">
        <Row xs={1} md={2} lg={3} className="gap-4">
          {chefData.map((chef) => (
            <AllCards key={chef.id} chef={chef}></AllCards>
          ))}
        </Row>
      </div>
      <hr />
      <h2 className="text-center mb-4">Best Hotels in Dhaka</h2>
      <div className="container mx-lg-auto mb-5">
        <Row className="gap-5">
          <Hotel></Hotel>
        </Row>
      </div>
      <hr />
      <h2 className="text-center mb-5">Best Restaurants in Dhaka</h2>
      <div className="container mx-lg-auto mb-5">
        <Row className="gap-5">
          <Restaurants></Restaurants>
        </Row>
      </div>
    </div>
  );
};

export default Home;
