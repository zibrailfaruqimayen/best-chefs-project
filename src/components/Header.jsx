import React, { useContext } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import "./header/Header.css";
import "react-tooltip/dist/react-tooltip.css";
import logo1 from "../assets/logo1.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ActiveLink from "./activlink/ActiveLink";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-lg-3 px-lg-5 py-lg-3  "
        >
          <Container fluid>
            <img style={{ width: "60px", height: "50px" }} src={logo1} alt="" />
            <Navbar.Brand href="" className="fw-bold">
              Best Chef
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Manu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="">
                <Nav className=" justify-content-lg-center flex-grow-1 pe-lg-3 ">
                  <ActiveLink
                    to="/"
                    className="link-dark text-decoration-none "
                  >
                    Home
                  </ActiveLink>
                  <ActiveLink to="/blog">Blog</ActiveLink>
                  <ActiveLink to="/about">About</ActiveLink>
                </Nav>
                <Form className="d-lg-flex">
                  {user && (
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      style={{ height: "40px", borderRadius: "10px" }}
                      src={user?.photoURL}
                      alt=""
                    />
                  )}
                  <Tooltip id="my-tooltip" />

                  {user ? (
                    <Link to="/">
                      <Button
                        className="ms-3"
                        onClick={handleLogOut}
                        variant="outline-danger"
                      >
                        Logout
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button variant="outline-danger">Login</Button>
                      </Link>
                      <Link to="/register">
                        <Button variant="outline-danger">SignUp</Button>
                      </Link>
                    </>
                  )}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
