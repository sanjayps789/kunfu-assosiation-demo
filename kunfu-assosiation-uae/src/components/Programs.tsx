import { memo } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    number: "01",
    title: "Dojo Training",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    image: "assets/img/programs/1.png",
    reverse: false,
  },
  {
    number: "02",
    title: "Kata & Techniques",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    image: "assets/img/programs/2.png",
    reverse: false,
  },
  {
    number: "03",
    title: "Bushido Spirit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    image: "assets/img/programs/3.png",
    reverse: true,
  },
  {
    number: "04",
    title: "Kumite Sessions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    image: "assets/img/programs/4.png",
    reverse: true,
  },
];

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

const Programs = ({ showTitle = true}) => {
  return (
    <motion.section
      className="programs section-padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {showTitle && 
          <motion.div
            className="section-heading text-center"
            variants={fadeUp}
          >
            <span className="sub_title">Our Programs</span>
            <h2>
              Elevate your mind, body, and <br /> spirit here
            </h2>
            <img src="assets/img/shapes/title.svg" alt="img" />
          </motion.div>
        }

        <div className="row g-5">
          {programs.map((program, index) => (
            <motion.div
              className="col-lg-6 col-12"
              key={index}
              variants={fadeUp}
              custom={index}
            >
              <div className="program_item text-start">
                <div className="row g-4">
                  {!program.reverse ? (
                    <>
                      <motion.div
                        className="col-lg-6 col-md-6 col-12 align-self-center"
                        variants={fadeUp}
                        custom={index + 0.1}
                      >
                        <div className="program-image">
                          <div className="pnumber">{program.number}</div>
                          <img src={program.image} alt="img" />
                        </div>
                      </motion.div>
                      <motion.div
                        className="col-lg-6 col-md-6 col-12 align-self-center"
                        variants={fadeUp}
                        custom={index + 0.2}
                      >
                        <div className="program_content">
                          <h3>{program.title}</h3>
                          <p>{program.text}</p>
                          <a href="/program-details">Learn More</a>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="col-lg-6 col-md-6 col-12 align-self-center"
                        variants={fadeUp}
                        custom={index + 0.1}
                      >
                        <div className="program_content">
                          <h3>{program.title}</h3>
                          <p>{program.text}</p>
                          <a href="/program-details">Learn More</a>
                        </div>
                      </motion.div>
                      <motion.div
                        className="col-lg-6 col-md-6 col-12 align-self-center"
                        variants={fadeUp}
                        custom={index + 0.2}
                      >
                        <div className="program-image">
                          <div className="pnumber">{program.number}</div>
                          <img src={program.image} alt="img" />
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Programs);
