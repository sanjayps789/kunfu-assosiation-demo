// src/components/Features.jsx
import { memo , useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  { icon: "assets/img/features/icon1.svg", title: "Kickboxing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon2.svg", title: "Self Defense", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon3.svg", title: "Increase Strength", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon4.svg", title: "Legacy of Karate", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon1.svg", title: "Kickboxing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon2.svg", title: "Self Defense", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon4.svg", title: "Legacy of Karate", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
  { icon: "assets/img/features/icon1.svg", title: "Kickboxing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam venenatis imperdiet." },
];

const Features = () => {
  const paginationRef = useRef(null);

  return (
    <motion.section
      className="features pb100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          className="feature_slider"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="feature_item">
              <motion.div
                className="feature_inner"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature_icon">
                  <img src={feature.icon} alt="img" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}

          <div ref={paginationRef} className="feature-pagination"></div>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default memo(Features);
