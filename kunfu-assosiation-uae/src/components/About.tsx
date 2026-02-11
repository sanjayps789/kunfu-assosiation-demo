import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const textVariant = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay }
    })
  }), []);

  return (
    <section
      className="about-us section-padding"
      style={{ backgroundImage: "url(assets/img/bg/about.png)" }}
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
                <motion.span className="sub_title" variants={textVariant} custom={0.2}>
                  About Us
                </motion.span>
                <motion.h2 variants={textVariant} custom={0.4}>
                  Bodies Strengthening &amp; Balancing <br /> Minds
                </motion.h2>
                <motion.img
                  src="assets/img/shapes/title.svg"
                  alt="title-shape"
                  variants={textVariant}
                  custom={0.6}
                />
              </motion.div>

              <motion.p variants={textVariant} custom={0.8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                venenatis imperdiet tortor sodales vulputate. Phasellus in enim
                euismod, efficitur felis a, facilisis ligula. Suspendisse
                potenti. Sed at libero nec nisi tincidunt facilisis.
              </motion.p>

              <motion.p variants={textVariant} custom={1}>
                Quisque euismod, nisi vel consectetur interdum, nisl nisi
                aliquet nunc, quis facilisis enim erat in est. Sed at libero nec
                nisi tincidunt facilisis. Suspendisse potenti. Phasellus in enim
                euismod, efficitur felis a, facilisis ligula.
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
