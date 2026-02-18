import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackToTop from "../layouts/BackToTop";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    console.log("Subscribed Email:", email);
    setMessage("✅ Thank you for subscribing!");
    setEmail("");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 },
    }),
  };

  return (
    <>
      <motion.footer
        className="mar_footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row mb-4 g-4">
            {/* About */}
            <motion.div
              className="col-lg-3 col-md-4 col-12"
              custom={0}
              variants={fadeUp}
            >
              <div className="footer_about mb-md-0 mb-5">
                <Link to="/" className="foot_logo">
                  <img
                    style={{ maxWidth: "200px" }}
                    src="assets/img/logo-white.svg"
                    alt="logo"
                  />
                </Link>
              <p>
                  UAE Kung Fu Tai Chi Qigong Association Registered with the
                  Community Development Authority (CDA), UAE Registration No.:
                  1575985
                </p>
                <span>Connect with us</span>
                <ul className="social_link">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* About Links */}
            <motion.div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              custom={1}
              variants={fadeUp}
            >
              <div className="footer_widget">
                <h3 className="footer-title">Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              custom={2}
              variants={fadeUp}
            >
              <div className="footer_widget">
                <h3 className="footer-title">Quick Contact</h3>
                <div className="footer_contact">
                  <p>
                    <i className="ph ph-map-pin-area"></i>
                    <span>
                      {" "}
                      KML Business Center, Office 126, Dubai, <br /> United Arab
                      Emirates | Registration #: 1575985{" "}
                    </span>
                  </p>
                  <p>
                    <i className="ph ph-phone-call"></i>
                    <span>
                      {" "}
                      <a href="tel:+971525759907"> +971 52 575 9907 </a>
                    </span>
                  </p>
                  <p>
                    <i className="ph ph-envelope-simple"></i>
                    <span>
                      {" "}
                      <a href="mailto:info@UAEKungFuAssociation.ae">
                        {" "}
                        info@UAEKungFuAssociation.ae
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              custom={3}
              variants={fadeUp}
            >
              <div className="footer_widget">
                <h3 className="footer-title">Subscribe To Newsletter</h3>
                <div id="newsletter_form">
                  <form className="newsletter_form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      required
                    />
                    <button type="submit">Subscribe Now</button>
                  </form>
                  {message && (
                    <div id="form-messages" className="mt-3">
                      {message}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div className="row" custom={4} variants={fadeUp}>
            <div className="col-12">
              <div className="divider dwhite mb-4"></div>
              <div className="mar_copyright text-center">
                <p>
                  Copyright © {new Date().getFullYear()} <Link to="/">Kungfu Assosiation UAE.</Link> All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      <BackToTop />
    </>
  );
};

export default memo(Footer);
