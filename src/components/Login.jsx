import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn, googleUser, gitHubUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    googleUser()
      .then((result) => {
        const googleLoggedUser = result.user;
        console.log(googleLoggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = (event) => {
    event.preventDefault();
    gitHubUser()
      .then((result) => {
        const gitHubLoggedUser = result.user;
        console.log(gitHubLoggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto">
      <h2>Please Login here</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="mb-3" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-muted">
          Dont't Have An Account ? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>

      <hr />
      <Button
        onClick={handleGoogleSignIn}
        className="mx-3"
        variant="outline-primary"
      >
        <FaGoogle /> Google Sign-in
      </Button>
      <Button onClick={handleGitHubSignIn} variant="outline-dark">
        <FaGithub></FaGithub> GitHub Sign-in
      </Button>
      <p className="text-danger">{error}</p>
    </Container>
  );
};

export default Login;
