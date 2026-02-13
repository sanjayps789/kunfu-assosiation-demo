import { memo } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    number: "01",
    title: "Youth Development Program",
    text: " Structured martial arts programs delivered in schools to support youth development, confidence building, self-discipline, emotional development, and participation through inter-school activities.",
    image: "assets/img/programs/youth-development-program.webp",
    reverse: false,
  },
  {
    number: "02",
    title: "Community Wellness Program",
    text: "  Tai Chi and Qigong sessions promote fitness, mobility, stress management, and healthy lifestyles for all ages.",
    image: "assets/img/programs/community-wellness.webp",
    reverse: false,
  },
  {
    number: "03",
    title: " Safety, Discipline & Mental Resilience Program",
    text: "  Personal safety education with focus, discipline, emotional regulation, and behavioural development.",
    image: "assets/img/programs/saftey-discipline.webp",
    reverse: true,
  },
  {
    number: "04",
    title: "National Coaches Development Pathway",
    text: "  National certification and advanced training for UAE-based martial arts instructors with standardised methods.",
    image: "assets/img/programs/national-coaches.webp",
    reverse: true,
  },
  {
    number: "05",
    title: "Strategic Partnerships & Cross-Sector Collaboration",
    text: " Joint initiatives with government and private sector partners to maximise community impact and national outcomes.",
    image: "assets/img/programs/partnership-and-cross-sector.webp",
    reverse: false,
  },
  {
    number: "06",
    title: "Female Empowerment Initiative",
    text: " Female-only Kung Fu and self-defence programs supporting confidence, personal safety, and leadership development.",
    image: "assets/img/programs/female-empowerment.webp",
    reverse: false,
  },
  {
    number: "07",
    title: " UAE–China Cultural & Sports Exchange Program",
    text: " Youth exchange camps, international festivals, and cultural initiatives highlighting Chinese heritage through sport.",
    image: "assets/img/programs/cultural-and-sports.webp",
    reverse: true,
  },
  {
    number: "08",
    title: "Annual National & International Martial Arts Championship",
    text: " Inclusive competitions for youth and adults with a recognised national competitive pathway.",
    image: "assets/img/programs/annual-national-and-international.webp",
    reverse: true,
  },
  {
    number: "09",
    title: "Community Development Program (Research & Impact)",
    text: "  Measurement of focus, behaviour, academic performance, and health outcomes linked to regular training.",
    image: "assets/img/programs/community-development.webp",
    reverse: false,
  },
  {
    number: "10",
    title: "Public Awareness & Outreach Initiative",
    text: "   National campaigns, public demonstrations, open days, and community engagement activities.",
    image: "assets/img/programs/public-awareness.webp",
    reverse: false,
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
      className="programs section-padding overflow-hidden"
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
            <span className="sub_title">Our initiatives</span>
            <h2>
              Official Development Programs of the UAE  <br /> Kung Fu, Tai Chi & Qigong Association
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
