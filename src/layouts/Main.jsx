import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <Container fluid className="flex-grow-1">
        <Outlet></Outlet>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
