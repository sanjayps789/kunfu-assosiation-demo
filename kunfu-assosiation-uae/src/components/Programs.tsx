import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    slug: "youth-development-program",
    title: "Youth Development Program",
    text: "Structured martial arts programs delivered in schools to support youth development, confidence building, self-discipline, emotional development, and participation through inter-school activities.",
    image: "assets/img/programs/youth-development-program.webp",
    reverse: false,
  },
  {
    number: "02",
    slug: "community-wellness-program",
    title: "Community Wellness Program",
    text: "Tai Chi and Qigong sessions promote fitness, mobility, stress management, and healthy lifestyles for all ages.",
    image: "assets/img/programs/community-wellness.webp",
    reverse: false,
  },
  {
    number: "03",
    slug: "safety-discipline-mental-resilience-program",
    title: "Safety, Discipline & Mental Resilience Program",
    text: "Personal safety education with focus, discipline, emotional regulation, and behavioural development.",
    image: "assets/img/programs/saftey-discipline.webp",
    reverse: true,
  },
  {
    number: "04",
    slug: "national-coaches-development-pathway",
    title: "National Coaches Development Pathway",
    text: "National certification and advanced training for UAE-based martial arts instructors with standardised methods.",
    image: "assets/img/programs/national-coaches.webp",
    reverse: true,
  },
  {
    number: "05",
    slug: "strategic-partnerships-cross-sector-collaboration-initiative",
    title: "Strategic Partnerships & Cross-Sector Collaboration",
    text: "Joint initiatives with government and private sector partners to maximise community impact and national outcomes.",
    image: "assets/img/programs/partnership-and-cross-sector.webp",
    reverse: false,
  },
  {
    number: "06",
    slug: "female-empowerment-initiative",
    title: "Female Empowerment Initiative",
    text: "Female-only Kung Fu and self-defence programs supporting confidence, personal safety, and leadership development.",
    image: "assets/img/programs/female-empowerment.webp",
    reverse: false,
  },
  {
    number: "07",
    slug: "uae-china-cultural-sports-exchange-program",
    title: "UAE-China Cultural & Sports Exchange Program",
    text: "Youth exchange camps, international festivals, and cultural initiatives highlighting Chinese heritage through sport.",
    image: "assets/img/programs/cultural-and-sports.webp",
    reverse: true,
  },
  {
    number: "08",
    slug: "annual-national-international-martial-arts-championship",
    title: "Annual National & International Martial Arts Championship",
    text: "Inclusive competitions for youth and adults with a recognised national competitive pathway.",
    image: "assets/img/programs/annual-national-and-international.webp",
    reverse: true,
  },
  {
    number: "09",
    slug: "community-impact-research-development-program",
    title: "Community Development Program (Research & Impact)",
    text: "Measurement of focus, behaviour, academic performance, and health outcomes linked to regular training.",
    image: "assets/img/programs/community-development.webp",
    reverse: false,
  },
  {
    number: "10",
    slug: "public-awareness-outreach-initiative",
    title: "Public Awareness & Outreach Initiative",
    text: "National campaigns, public demonstrations, open days, and community engagement activities.",
    image: "assets/img/programs/public-awareness.webp",
    reverse: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

/**
 * Props:
 * showTitle → show section title
 * limit → number of items to show
 * showViewMore → show "View More" button
 */
const Programs = ({ limit = programs.length, showViewMore = false }) => {
  const displayedPrograms = programs.slice(0, limit);

  return (
    <motion.section
      className="programs section-padding overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.09 }}
    >
      <div className="container">
        <motion.div className="section-heading text-center" variants={fadeUp}>
          <span className="sub_title">Our Initiatives</span>
          <h2>
            Official Development Programs of the UAE <br />
            Kung Fu, Tai Chi & Qigong Association
          </h2>
          <img src="assets/img/shapes/title.svg" alt="title-shape" />
        </motion.div>

        <div className="row g-5">
          {displayedPrograms.map((program, index) => (
            <motion.div
              className="col-lg-6 col-12"
              key={program.slug}
              variants={fadeUp}
              custom={index}
            >
              <div className="program_item text-start">
                <div className="row g-4 align-items-center">
                  {/* IMAGE */}
                  <div
                    className={`
                      col-lg-6 col-md-6 col-12 
                      ${program.reverse ? "order-lg-2" : "order-lg-1"} 
                      order-1
                    `}
                  >
                    <div className="program-image">
                      <div className="pnumber">{program.number}</div>
                      <img
                        src={program.image}
                        alt={program.title}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`
                      col-lg-6 col-md-6 col-12 
                      ${program.reverse ? "order-lg-1" : "order-lg-2"} 
                      order-2
                    `}
                  >
                    <div className="program_content">
                      <h3>{program.title}</h3>
                      <p>{program.text}</p>
                      <Link to={`/programs/${program.slug}`}>Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 View More Button */}
        {showViewMore && (
          <div className="text-center mt-5">
            <Link to="/programs" className="main_btn active_animation">
              <span>
                View All Programs <i className="ph ph-arrow-right"></i>
              </span>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default memo(Programs);
