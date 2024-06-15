import React from "react";
import "./footer.css";

import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer flex items-center justify-center">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo flex items-center mt-9 mr-20">
              <img src={logo} className="ml-20" />
              <p className="text-white text-pretty">
                Our project creates a website that uses machine learning to
                provide personalized health insurance recommendations based on
                user information.
              </p>
            </div>
          </Col>

          <Col lg="5">
            <section
              id="contact"
              className="flex justify-center items-center text-gray-200"
            >
              <form
                className="bg-[#262626] p-6 w-full max-w-2xl"
                action="https://formspree.io/f/mqkrvvwv"
                method="POST"
              >
                <h2 className="text-2xl  font-bold  text-center  mb-2">
                  Contact Us
                </h2>

                <div className="mb-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline bg-[#262626]"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div className="mb-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-[#262626]"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-6  px-3  leading-tight focus:outline-none focus:shadow-outline bg-[#262626]"
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Message..."
                    required
                  />
                </div>
                <button className="bg-gray-700 text-white px-5 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </section>
          </Col>
          <Col lg="12" className="text-center">
            <p className="copyright text-yellow-600">
              Copyright {year}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
