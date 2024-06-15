import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/login.css";

import loginImg from "../assets/login.png";
import userIcon from "../assets/user.png";
import { useAuth0 } from "@auth0/auth0-react";

const Loging = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loginWithRedirect } = useAuth0();

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
                <img src={loginImg} />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>LogIn</h2>
                <Form onSubmit={handleChange}>
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
                  <button
                    className="ml-24 px-10"
                    type="submit"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </button>
                </Form>
                <p className="text-black">
                  Don't have an account ? <Link to={"/register"}>Sign UP</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Loging;
