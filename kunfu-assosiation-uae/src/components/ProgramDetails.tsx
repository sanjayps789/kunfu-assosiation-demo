import { memo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { programs } from "../../public/assets/data/programs.js";

const EventDetails = () => {
  const { slug } = useParams();
  const program = programs.find((item) => item.slug === slug);
  const currentIndex = programs.findIndex((p) => p.slug === slug);
  const prevProgram = programs[currentIndex - 1];
  const nextProgram = programs[currentIndex + 1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) {
    return (
      <section className="section-padding text-center">
        <div className="container">
          <h2>Program Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="our_event section-padding">
      <div className="container">
        <div className="col-md-10 mx-auto">
          <h2 className="mb-4">{program.title}</h2>
          <motion.div
            className="event_details"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
            style={{maxWidth:"700px",width:"100%"}}
              className="mb-4 evd_img img-fluid rounded"
              src={program.image}
              alt={program.title}
            />

            <p style={{ color: "black", fontSize: "16px" }}>{program.about}</p>

            <h4 className="mt-4">Program Focus Areas</h4>

            <ul className="program-list">
              {program.focus.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <div className="text-start mt-4">
            <a className="main_btn" href="/contact">
              Contact Us
            </a>
          </div>

          {/* Previous / Next */}
          <div className="row mt-5">
            <div className="col-6 text-start">
              {prevProgram && (
                <Link to={`/programs/${prevProgram.slug}`}>← Previous</Link>
              )}
            </div>
            <div className="col-6 text-end">
              {nextProgram && (
                <Link to={`/programs/${nextProgram.slug}`}>Next →</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EventDetails);
