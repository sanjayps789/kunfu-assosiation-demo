import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const initiatives = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Youth Development",
    subtitle: "(Schools)",
    img: "/assets/img/initiatives/youth-development.webp",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Safety, Discipline &",
    subtitle: "Mental Resilience",
    img: "/assets/img/initiatives/safety-discipline.webp",
  },
  {
    icon: "fa-solid fa-venus",
    title: "Female",
    subtitle: "Empowerment",
    img: "/assets/img/initiatives/female-empowerment.webp",
  },
  {
    icon: "fa-solid fa-medal",
    title: "National",
    subtitle: "Recognition",
    img: "/assets/img/initiatives/national-recognition.webp",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Cultural & International",
    subtitle: "Exchange",
    img: "/assets/img/initiatives/cultural-international-exchange.webp",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Initiatives = () => {
  return (
    <section className="initiatives section-padding">
      <div className="container">
        <motion.div className="section-heading text-center" variants={fadeUp}>
          <span className="sub_title">Our Initiatives</span>
          <h2>
            Official Development Programs of the UAE <br />
            Kung Fu, Tai Chi & Qigong Association
          </h2>
          <img src="/assets/img/shapes/title.svg" alt="title-shape" />
        </motion.div>
        <div className="initiatives_grid">
          {initiatives.map((item, i) => (
            <motion.div
              className="initiative_card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
            >
              {/* ── Red Diamond Tab ── */}
              <div className="initiative_tab">
                <i className={item.icon}></i>
                <h4>
                  {item.title}
                  {item.subtitle && <span>{item.subtitle}</span>}
                </h4>
                <Link style={{fontSize:"14px"}} to="/initiatives" className="d-flex align-items-center justify-content-center gap-2 text-white">
                  Read More <i className="ph ph-arrow-right fs-6"></i>
                </Link>
              </div>

              {/* ── Photo ── */}
              <div
                className="initiative_img"
                style={{ backgroundImage: `url(${item.img})` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Initiatives);
