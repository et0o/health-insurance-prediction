import React from "react";
import heal from "../assets/health.avif";
import { Link } from "react-router-dom";

import Testimonial from "../testimonial/Testimonial";
import NewsLetter from "../components/newsletter/NewsLetter";
import Service from "../components/services/Service";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <>
      <section id="home" className="pt-24 pb-10">
        <div className="w-screen">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2 className="text-5xl font-bold typewriter py-4">
                Do you really need health insurance?
              </h2>
              <h2 className="text-4xl pb-10 font-bold">Let's find out!</h2>
              <div className="text-center mb-10">
                {isAuthenticated ? (
                  <button className="border-2 border-black p-3 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 ">
                    <Link to="insurance-query" rel="nofollow">
                      Click Here to know
                    </Link>
                  </button>
                ) : (
                  <button
                    className="border-2 border-black p-3 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 "
                    onClick={() => loginWithRedirect()}
                  >
                    <Link to="login" rel="nofollow">
                      Click Here to know
                    </Link>
                  </button>
                )}
              </div>
              <div className="text-center">
                <img className="img-fluid mx-auto" src={heal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />

      {/* <section id="services">
        <div>
          <div className="flex justify-center">
            <div className="mb-8 head1 text-5xl font-bold p-2">
              Our Services
            </div>
          </div>
          <div className="flex mx-32 justify-center gap-16">
            <div className="my-12 w-3/4">
              <img src="assets/check.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Insurance Needs Assessment
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Offer a personalized assessment to help users determine if they
                actually need any health insurance.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/map.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Lifestyle Improvement Programs
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Offer information and resources for lifestyle modification
                programs aimed at improving health and reducing the need for
                health insurance, including exercise routines, diet plans, and
                wellness tips.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/health.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Customized Recommendations
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Provide personalized recommendations for health insurance plans
                that best suit each user's individual needs.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/support.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">Customer Support</h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Highlight your customer support services, including helpline
                numbers, live chat support, and FAQs to assist users with any
                queries or issues related to health insurance and wellness.
              </h4>
            </div>
          </div>
        </div>
      </section> */}

      <Testimonial />

      <section id="about">
        <div className="w-screen">
          <div className="flex justify-center">
            <div className="mb-12 text-5xl head1 font-bold p-2">About Us</div>
          </div>
          <div className="px-40">
            <ul className="text-3xl font-bold list-disc">
              <li>Why is Health Insurance Important?</li>
              <p className="text-lg dark-c font-normal py-5 text-justify">
                Health insurance is essential for several reasons. Firstly, it
                offers financial protection by covering the high costs of
                medical care, which can otherwise lead to significant financial
                strain or debt. Secondly, it ensures timely access to quality
                healthcare services, allowing individuals to receive necessary
                treatments without delay. Additionally, health insurance
                promotes preventive care and encourages individuals to
                prioritize their health and well-being.
              </p>
              <li>How We Can Help?</li>
              <p className="text-lg dark-c font-normal py-5 text-justify">
                At Insure smart, we are committed to helping you navigate the
                complex world of health insurance and make informed decisions
                about your healthcare needs. Our team of experts is dedicated to
                providing personalized assistance and guidance to ensure that
                you find the right health insurance plan tailored to your unique
                requirements and budget. We offer comprehensive assessments to
                evaluate your current health status, lifestyle habits, and
                financial situation, helping you determine whether obtaining
                health insurance is the right choice for you at this time.
                Additionally, we provide valuable resources and support to
                empower you to adopt a healthy lifestyle and minimize the need
                for extensive medical care.
              </p>
              <li>What information de we need to provide assessment? </li>
              <p className="text-lg dark-c font-normal py-5 text-justify">
                To provide an accurate assessment, you'll need to supply
                detailed information about your current health status, including
                any pre-existing conditions and regular medications.
                Additionally, we'll require insights into your lifestyle habits
                such as diet, exercise, and smoking or drinking patterns.
                Financial details, including your budget for health insurance,
                are also crucial to tailor our recommendations to your unique
                needs and circumstances.
              </p>
            </ul>
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Home;
