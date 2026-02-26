import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

const clients = [
  {
    img: "assets/img/clients/dubai_police_partner.jpg",
    link: "https://www.dubaipolice.gov.ae/app/home",
  },
  {
    img: "assets/img/clients/dubai-muncipility.png",
    link: "https://www.dm.gov.ae/",
  },
  { img: "assets/img/clients/icp.png", link: "https://icp.gov.ae/" },
  {
    img: "assets/img/clients/fahr.jpg",
    link: "https://www.fahr.gov.ae/en/home/",
  },
  {
    img: "assets/img/clients/red_cresent.jpg",
    link: "https://www.emiratesrc.ae/",
  },
  { img: "assets/img/clients/tdra.jpg", link: "https://tdra.gov.ae/" },
];

interface ClientsProps {
  showDivider?: boolean;
  sliderClass?: string;
}

const Clients: React.FC<ClientsProps> = ({
  showDivider = true,
  sliderClass = "",
}) => {
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
        {/* {showDivider && <div className="divider"></div>} */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sub_title">Our partners</span>
          <h2>
            Strategic Partners & Collaborations
          </h2>
        </motion.div>

        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 6 }, // changed from 5 to 6
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
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  style={{ maxWidth: "140px" }}
                  src={client.img}
                  alt={`Client ${index + 1}`}
                />
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default memo(Clients)