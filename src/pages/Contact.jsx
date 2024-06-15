import React from "react";
import bg from "../assets/contact-bg.jpg";
import bg2 from "../assets/contact-png.png";
import "../style/contact.css";
const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          iste facilis quos impedit fuga nobis modi debitis laboriosam velit
          reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
          sequi qui.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <span>Phone No.</span>
            <span className="text">1-2392-23928-2</span>
          </div>
          <div>
            <span>
              <i className="fas fa-envelope-open"></i>
            </span>
            <span>E-mail</span>
            <span className="text">mail@company.com</span>
          </div>
          <div>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Address</span>
            <span className="text">
              2939 Patrick Street, Vicotria TX, United States
            </span>
          </div>
          <div>
            <span>
              <i className="fas fa-clock"></i>
            </span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input type="email" className="form-control" placeholder="E-mail" />
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <textarea
            rows="5"
            placeholder="Message"
            className="form-control"
          ></textarea>
          <input type="submit" className="send-btn" value="send message" />
        </form>
      </div>

      <img src={bg} alt="" />

      <div className="container2">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src="/images/location.png" />
                </span>
                <span>
                  HNBGU <br />
                  Chauras Campus
                </span>
              </li>
              <li>
                <span>
                  <img src={bg2} />
                </span>
                <span>iryanraushan@gmail.com</span>
                <span>
                  <a href="mailto: iryanraushan@gmail.com">
                    iryanraushan@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/call.png" />
                </span>
                <span>702-279-3488</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/nassosanagn/">
                <img src="/images/1.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nassosanagn_/?hl=el">
                <img src="/images/3.png" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/nassosanagn">
                <img src="/images/2.png" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nassos-anagnostopoulos-2b9631196/">
                <img src="/images/5.png" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox2">
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameBorder="0"
          style="border:0;"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div> */}

      <div className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-youtube"></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
