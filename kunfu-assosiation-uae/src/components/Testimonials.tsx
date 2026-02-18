import { memo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonialImages = [
  "assets/img/team/person-1.webp",
  "assets/img/team/person-2.webp",
  "assets/img/team/person-3.webp",
  "assets/img/team/person-4.webp",
  "assets/img/team/person-5.webp",
  "assets/img/team/person-6.webp",
  "assets/img/team/person-7.webp",
];

const testimonials = [
  {
    name: "Sarah Taylor",
    role: "Student",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "Akira Nakamura",
    role: "Web Designer",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "Rina Sato",
    role: "Fitness Coach",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "David Mitchel",
    role: "Student",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "Kenji Yamamoto",
    role: "Restaurant Owner",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "David Mitchel",
    role: "Interior Designer",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
  {
    name: "Maria Lopez",
    role: "Interior Designer",
    text: "Sed rutrum leo ante, vel lobortis odio pellentesque...",
  },
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);

  useEffect(() => {
    if (thumbsSwiper && textSwiper) {
      thumbsSwiper.controller.control = textSwiper;
      textSwiper.controller.control = thumbsSwiper;
    }
  }, [thumbsSwiper, textSwiper]);

  return (
    <section
      className="testimonial section-padding"
      style={{ backgroundImage: "url(assets/img/home/our_team-bg.png)" }}
    >
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="sub_title">Our Team</span>
          <h2 className="text-white">Driven by expert leadership team</h2>
          <img src="assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        {/* Thumbnails Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Controller]}
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            slideToClickedSlide={true}
            className="testimonial_images"
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 5 },
            }}
          >
            {testimonialImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`testimonial ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Main Text Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Controller]}
            onSwiper={setTextSwiper}
            loop={true}
            autoHeight={true}
            pagination={{ el: ".testimonial-pagination", clickable: true }}
            className="testimonial_slider"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="testimonial_item text-center">
                <p>{item.text}</p>
                <div className="client_info">
                  <h4 className="text-white">{item.name}</h4>
                  <span className="text-white">{item.role}</span>
                </div>
              </SwiperSlide>
            ))}

            <div className="testimonial-pagination"></div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
