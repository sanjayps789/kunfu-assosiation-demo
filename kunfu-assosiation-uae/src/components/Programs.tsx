import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Programs = ({ limit = programs.length }) => {
  const displayedPrograms = programs.slice(0, limit);

  return (
    <motion.section
      className="programs section-padding overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container">

        {/* ── Section Heading ── */}
        <motion.div className="section-heading text-center" variants={fadeUp}>
          <span className="sub_title">Our Initiatives</span>
          <h2>
            Official Development Programs of the UAE <br />
            Kung Fu, Tai Chi & Qigong Association
          </h2>
          <img src="/assets/img/shapes/title.svg" alt="title-shape" />
        </motion.div>

        {/* ── Program Rows ── */}
        <div className="programs_list">
          {displayedPrograms.map((program, index) => {
            const isEven = index % 2 !== 0;

            return (
              <motion.div
                className={`program_row ${isEven ? "program_row--reverse" : ""}`}
                key={program.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* ── Image ── */}
                <motion.div
                  className="program_row_img"
                  variants={isEven ? fadeRight : fadeLeft}
                >
                  <div className="program_img_wrap">
                    <img
                      src={program.image}
                      alt={program.title}
                      style={{objectPosition:program?.img_position}}
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* ── Content ── */}
                <motion.div
                  className="program_row_content"
                  variants={isEven ? fadeLeft : fadeRight}
                >
                  <span className="program_label">Initiative</span>
                  <h3>{program.title}</h3>
                  <p>{program.about}</p>

                  {/* Focus Areas */}
                  <ul className="program_focus">
                    {program.focus.map((point, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-circle-check"></i>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/initiatives/${program.slug}`}
                    className="main_btn active_animation mt-3 d-inline-flex"
                  >
                    <span>
                      {program.cta} <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};

export default memo(Programs);