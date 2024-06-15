import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/register.css";

import registerImg from "../assets/register.png";
import userIcon from "../assets/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDeafult();
  };

  return (
    <section className="login__section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__continer d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleChange}>
                  <FormGroup>
                    <input
                      type="User name"
                      placeholder="Username"
                      required
                      id="userName"
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-6  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-6  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-6  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    />
                  </FormGroup>
                  <Button className="ml-20" type="submit">
                    Create an account
                  </Button>
                </Form>
                <p className="text-black">
                  Already have an account ? <Link to={"/login"}>Log In</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
