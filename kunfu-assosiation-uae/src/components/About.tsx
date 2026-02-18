import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const textVariant = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      }),
    }),
    [],
  );

  return (
    <section
      className="about-us section-padding overflow-hidden"
    >
      <div className="container">
        <div className="row g-5">
          {/* Left Image */}
          <motion.div
            className="col-lg-6 col-12 align-self-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="about_image position-relative">
              <img src="assets/img/about/about.png" alt="img" />
              <img
                src="assets/img/about/shape1.svg"
                alt="shape1"
                className="abshape_1 position-absolute"
              />
              <img
                src="assets/img/about/shape2.svg"
                alt="shape2"
                className="abshape_2 position-absolute"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="col-lg-6 col-12 align-self-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="about_content">
              <motion.div
                className="section-heading"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span
                  className="sub_title"
                  variants={textVariant}
                  custom={0.2}
                >
                  About Us
                </motion.span>
                <motion.h2 variants={textVariant} custom={0.4}>
                  Accreditation & Development <br /> of Traditional Chinese <br />Martial Arts in the UAE
                </motion.h2>
                <motion.img
                  src="assets/img/shapes/title.svg"
                  alt="title-shape"
                  variants={textVariant}
                  custom={0.6}
                />
              </motion.div>

              <motion.p variants={textVariant} custom={0.8}>
                The Emirates Kung Fu, Tai Chi and Qigong Association serves as
                the official body dedicated to the development and regulation of
                traditional Chinese martial arts across the United Arab
                Emirates. We are committed to preserving the authenticity of
                Kung Fu, Tai Chi, and Qigong while supporting structured
                training and cultural exchange
              </motion.p>

              <motion.p variants={textVariant} custom={1}>
                Through organized programs, community initiatives, and
                professional standards, the Association promotes physical
                well-being, discipline, and respect for cultural heritage. Our
                mission is to create a strong foundation for martial arts
                practice that benefits individuals and communities alike.
              </motion.p>

              <motion.a
                href="about.html"
                className="main_btn"
                variants={textVariant}
                custom={1.2}
              >
                <span>
                  Discover More <i className="ph ph-arrow-right"></i>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
