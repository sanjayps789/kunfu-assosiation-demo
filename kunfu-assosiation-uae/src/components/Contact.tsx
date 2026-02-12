import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Memoized contact info array outside component to avoid re-creation
const contactInfo = [
  {
    icon: "ph ph-map-pin-area",
    title: "Our Location",
    content: (
      <>
        KML Business Center, Office 126, Dubai, <br /> United Arab Emirates | Registration #: 1575985 
      </>
    ),
  },
  {
    icon: "ph ph-envelope-simple",
    title: "Email Us",
    content: (
      <>
        <a href="mailto:info@UAEKungFuAssociation.ae"> info@UAEKungFuAssociation.ae</a>
        <br />
      </>
    ),
  },
  {
    icon: "ph ph-headphones",
    title: "Phone Number",
    content: (
      <>
        <a href="tel:+971525759907"> +971 52 575 9907 </a>
        <br />
      </>
    ),
  },
];

// Memoized child component for contact info item
const ContactItem = memo(
  ({ item, index }: { item: typeof contactInfo[0]; index: number }) => (
    <motion.div
      className="col-lg-4 col-md-6 col-12"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="cinfo-item">
        <i className={item.icon}></i>
        <div className="cinfo_content">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </div>
    </motion.div>
  )
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
                title="Google Map"
                height="500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50431.01496117057!2d144.9372018671769!3d-37.81441383014957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1572172541109!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
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
                    <input type="text" placeholder="Name" name="name" required />
                  </li>
                  <li>
                    <input type="email" placeholder="Email" name="email" required />
                  </li>
                  <li>
                    <input type="tel" placeholder="Phone" name="phone" />
                  </li>
                  <li>
                    <input type="text" placeholder="Address" name="address" />
                  </li>
                  <li>
                    <textarea placeholder="Message" rows={6} name="message" required></textarea>
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
