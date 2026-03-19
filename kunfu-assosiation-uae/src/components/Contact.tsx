import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Memoized contact info array outside component to avoid re-creation
const contactInfo = [
  {
    icon: "ph ph-map-pin-area",
    title: "Our Location",
    content: (
      <>
       <Link to="https://maps.app.goo.gl/iF5eQqZZmqNFm4HN7" target="_blank" rel="noopener noreferrer" title="address">
          KML Business Center, Office 126, Dubai, <br /> United Arab Emirates |
          Registration #: 1575985
       </Link>
      </>
    ),
  },
  {
    icon: "ph ph-envelope-simple",
    title: "Email Us",
    content: (
      <>
        <Link to="mailto:info@UAEKungFuAssociation.ae" target="_blank" rel="noopener noreferrer" title="email" >
          {" "}
          info@UAEKungFuAssociation.ae
        </Link>
        <br />
      </>
    ),
  },
  {
    icon: "ph ph-headphones",
    title: "Phone Number",
    content: (
      <>
        <Link to="tel:+971525759907" target="_blank" rel="noopener noreferrer" title="phone"> +971 52 575 9907 </Link>
        <br />
      </>
    ),
  },
];

// Memoized child component for contact info item
const ContactItem = memo(
  ({ item, index }: { item: (typeof contactInfo)[0]; index: number }) => (
    <motion.div
      className="col-lg-4 col-md-6 col-12"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="cinfo-item h-100 d-flex align-items-center justify-content-md-center justify-content-start">
        <i className={item.icon}></i>
        <div className="cinfo_content">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </div>
    </motion.div>
  ),
);

const Contact = () => {
  // Memoized submit handler
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! ");
  }, []);

  // Memoized motion props for the button
  const hover = useMemo(() => ({ scale: 1.05 }), []);
  const tap = useMemo(() => ({ scale: 0.95 }), []);

  return (
    <section className="contact-area section-padding">
      <div className="container">
        {/* Contact Info */}
        <div className="row g-4">
          {contactInfo.map((item, index) => (
            <ContactItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Map + Form */}
        <div className="row pt-70">
          {/* Google Map */}
          <motion.div
            className="col-lg-6 col-12 mb-4 mb-lg-0 align-self-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="contact_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.9060951981364!2d55.25721457461025!3d25.172648432696043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699caca15b37%3A0x8834ad188009aab2!2sKML%20Building!5e0!3m2!1sen!2sin!4v1773757321028!5m2!1sen!2sin"
                title="Google Map"
                height="500"
                width="600"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                // loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-lg-6 col-12 align-self-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="contact-form">
              <div className="section-heading mb-4">
                <span>Get In Touch</span>
                <h2>Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input type="tel" placeholder="Phone" name="phone" />
                  </li>
                  <li>
                    <input type="text" placeholder="Address" name="address" />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      name="message"
                      required
                    ></textarea>
                  </li>
                </ul>
                <motion.button
                  type="submit"
                  className="main_btn"
                  whileHover={hover}
                  whileTap={tap}
                >
                  <span>
                    Send Message <i className="ph ph-arrow-right"></i>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
