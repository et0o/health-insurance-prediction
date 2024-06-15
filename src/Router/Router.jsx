import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Loging from "../pages/Loging";
import Register from "../pages/Register";
import About from "../pages/About";
import InsuranceQuery from "../pages/InsuranceQuery";
import Service from "../components/services/Service";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/insurance-query" element={<InsuranceQuery />} />
      {/* <Route path="/account-info" element={<Profile />} /> */}
      <Route path="/Services" element={<Service />} />
      {/* <Route path="/contact-us" element={<Contact />} /> */}
      {/* <Route path="/login" element={<Loging />} />
      <Route path="/signup" element={<Register />} /> */}
    </Routes>
  );
};

export default Router;
