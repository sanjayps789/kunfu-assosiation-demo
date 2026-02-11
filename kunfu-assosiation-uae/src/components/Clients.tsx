import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

const clients = [
  { img: "assets/img/clients/1.png", link: "#" },
  { img: "assets/img/clients/2.png", link: "#" },
  { img: "assets/img/clients/3.png", link: "#" },
  { img: "assets/img/clients/4.png", link: "#" },
  { img: "assets/img/clients/5.png", link: "#" },
  { img: "assets/img/clients/3.png", link: "#" },
];

interface ClientsProps {
  showDivider?: boolean;
  sliderClass?: string;
}

const Clients: React.FC<ClientsProps> = ({ showDivider = true, sliderClass = "" }) => {
  return (
    <motion.div
      className="clients"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Divider toggle */}
        {showDivider && <div className="divider"></div>}

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className={`client_slider ${sliderClass}`}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={client.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={client.img} alt={`Client ${index + 1}`} />
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default memo(Clients);
