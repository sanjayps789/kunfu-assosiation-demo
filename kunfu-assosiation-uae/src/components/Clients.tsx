import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const clients = [
  { img: "/assets/img/clients/logo1.webp", link: "#" },
  { img: "/assets/img/clients/logo2.webp", link: "#" },
  { img: "/assets/img/clients/logo3.webp", link: "#" },
  { img: "/assets/img/clients/logo4.webp", link: "#" },
  { img: "/assets/img/clients/logo5.webp", link: "#" },
  { img: "/assets/img/clients/logo6.webp", link: "#" },
  { img: "/assets/img/clients/logo7.webp", link: "#" },
  { img: "/assets/img/clients/logo8.webp", link: "#" },
  { img: "/assets/img/clients/logo9.webp", link: "#" },
  { img: "/assets/img/clients/logo10.webp", link: "#" },
];

const duplicated = [...clients, ...clients];

interface ClientsProps {
  showDivider?: boolean;
  sliderClass?: string;
}

const Clients: React.FC<ClientsProps> = ({ sliderClass = "" }) => {
  return (
    <motion.div
      className="clients pt50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sub_title">Partners & Affiliates</span>
          <h2>One Goal, One Team, One Family</h2>
        </motion.div>

        <div className={`marquee_wrapper ${sliderClass}`}>
          <div className="marquee_track">
            {duplicated.map((client, index) => (
              <Link
                key={index}
                to={client.link}
                className="marquee_item"
              >
                <img
                  src={client.img}
                  alt={`Client ${(index % clients.length) + 1}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Clients);