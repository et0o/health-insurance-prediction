import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import "./newsletter.css";

import { Container, Row, Col, Button } from "reactstrap";
import maleTourist from "../../assets/images/male-tourist.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setEmail("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
    } else {
      setError("");
      setSubmitted(true);
      open();
    }
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now for getting up-to-date information</h2>

              <form className="newsletter__input">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="py-2"
                  placeholder="Enter Your Email"
                />
                {error && (
                  <p style={{ color: "red" }} className="px-3 ">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="duration-300 hover:opacity-30 hover:text-black bg-yellow-600 px-4 py-2 rounded-md"
                >
                  Subscribe
                </button>
                <Transition appear show={isOpen}>
                  <Dialog
                    as="div"
                    className="relative z-10 focus:outline-none"
                    onClose={close}
                  >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 transform-[scale(95%)]"
                          enterTo="opacity-100 transform-[scale(100%)]"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 transform-[scale(100%)]"
                          leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                          <DialogPanel className="w-full max-w-md rounded-xl text-black bg-yellow-500/90 p-6 backdrop-blur-2xl">
                            <DialogTitle
                              as="h3"
                              className="text-base/7 font-medium text-black"
                            >
                              Hello {email},
                            </DialogTitle>
                            <p className="mt-2 text-sm text-black">
                              Thank you for subscribing to our newsletter! Each
                              month, we'll bring you the latest updates,
                              insights, and special offers right to your inbox.
                              Here's what you can expect from our newsletters:
                            </p>
                            <div className="mt-4">
                              <Button
                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                onClick={close}
                              >
                                Got it, thanks!
                              </Button>
                            </div>
                          </DialogPanel>
                        </TransitionChild>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </form>

              <p>
                Insure smart made understanding and choosing my health insurance
                so much easier! The premium prediction feature is spot-on and
                helped me save money. Highly recommend it for anyone looking to
                make informed insurance decisions!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
