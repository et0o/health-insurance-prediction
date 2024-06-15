import React from "react";
import "./service.css";
const Service = () => {
  return (
    <div className="wrapper py-10">
      <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
        Our Services
      </h1>

      <div className="content-box">
        <div className="card">
          <i className="bx bx-bar-chart-alt bx-md"></i>
          <h2>Marketing Services</h2>
          <p>
            Marketing services can include advertising, public relations, market
            research, and more.{" "}
          </p>
        </div>
        <div className="card">
          <i className="bx bx-laptop bx-md"></i>
          <h2>Website Development</h2>
          <p>
            Web development refers to the creating, building, and maintaining of
            websites.
          </p>
        </div>
        <div className="card">
          <i className="bx bx-user bx-md"></i>

          <h2>24/7 Call Center Services</h2>
          <p>
            A BPO call center is a team of outsourced agents who handle incoming
            and outgoing.
          </p>
        </div>
        <div className="card">
          <i className="bx bx-mail-send bx-md"></i>
          <h2>Social Media Marketing</h2>
          <p>
            {" "}
            Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi.
            Expedita deleniti molestias hic numquam delectus!
          </p>
        </div>
        <div className="card">
          <i className="bx bx-bar-chart-alt bx-md"></i>
          <h2>Corporate Bussiness</h2>
          <p>
            {" "}
            Helps Business to keep eye on their employees health for the
            betterment of the employees and business as well.
          </p>
        </div>
        <div className="card">
          <i className="bx bx-paint bx-md"></i>
          <h2>Creative Consultancy</h2>
          <p>
            {" "}
            Give Creative consultance to the user about their lifestyle and
            changes they needed to make it better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
