import { memo } from "react";
import { motion } from "framer-motion";
import { mediaNews } from "../data/media";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const MediaSection = () => {
  return (
    <section className="media_section section-padding">
      <div className="container">
        <motion.div
          className="section-heading text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="sub_title">Latest Coverage</span>
          <h2>Media & News</h2>
          <img src="/assets/img/shapes/title.svg" alt="title-shape" />
        </motion.div>

        <div className="row g-4">
          {mediaNews.map((item, index) => (
            <motion.div
              key={item.id}
              className="col-lg-3 col-md-6 col-12"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card h-100 border text-decoration-none media_card"
              >
                <div className="media_card_wrapper overflow-hidden" style={{ height: "250px" }}>
                  <img
                    src={item.image}
                    alt={`Media ${item.id}`}
                    style={{ objectPosition: item?.objectPosition }}
                    className="card-img-top h-100 object-fit-cover media_card_img"
                  />

                  {/* Gradient overlay with CTA */}
                  <div className="media_card_overlay">
                    <span className="media_card_cta text-capitalize">Read More</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default memo(MediaSection);