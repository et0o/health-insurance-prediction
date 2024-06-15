import React from "react";

const About = () => {
  return (
    <>
      <div className="font-inter">
        <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
              Predict Your <span className="text-indigo-600">Well Being</span>
            </h1>
            <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
              Our vision with this project is to revolutionize the way
              individuals approach health insurance by leveraging advanced
              machine learning and user-friendly technology.
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <img
                  src="https://pagedone.io/asset/uploads/1702034769.png"
                  alt="About Us tailwind page"
                  className="max-lg:mx-auto"
                />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    About Us{" "}
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    This project is a comprehensive solution for individuals
                    navigating the complexities of health insurance. Leveraging
                    cutting-edge machine learning algorithms, it offers accurate
                    premium predictions and personalized policy recommendations
                    tailored to each user's unique health profile and financial
                    circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034785.png"
                    alt="About Us tailwind page"
                    className="block lg:hidden mb-9 mx-auto"
                  />
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                    Area we Target
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    We target a diverse range of individuals and demographics,
                    encompassing both seasoned insurance shoppers and those new
                    to the world of health coverage. Our platform caters to
                    individuals seeking clarity and confidence in their
                    insurance decisions, whether they are looking to renew
                    existing policies, explore new coverage options, or
                    understand the intricacies of health insurance for the first
                    time. We aim to reach users across urban and rural areas,
                    ensuring accessibility to essential insurance services for
                    everyone, regardless of their location or background.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="hidden lg:block "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Our results in numbers
            </h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    30+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Customer joined
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      Company's remarkable growth journey as we continually
                      innovate and drive towards new heights of success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    25+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Suggested Insurance
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      Our very talented team members are the powerhouse of
                      pagedone and pillars of our success.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    25+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Successfull Prediction
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      We have accomplished more than 625 projects worldwide and
                      we are still counting many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
