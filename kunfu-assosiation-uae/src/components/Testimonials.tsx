import { memo, useState, useRef, useCallback, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "BASMA MOHAMMAD ABDULLA HANNAWI",
    role: "Association President",
    img: "/assets/img/team/person1.webp",
  },
  {
    name: "FRANK RAO",
    role: "Association Vice President",
    img: "/assets/img/team/person2.webp",
  },
  {
    name: "John Duval",
    role: "Association Director General",
    img: "/assets/img/team/person3.webp",
  },
  {
    name: "BASSAM MOHAMMAD ABDULLA SALEH HANNAWI",
    role: "Events & Competitions Director",
    img: "/assets/img/team/person4.webp",
  },
  {
    name: "Zainab Malik",
    role: "Women Empowerment Director",
    img: "/assets/img/team/person5.webp",
  },
  {
    name: "Mohamed Nashat",
    role: "Strategic Planning Director",
    img: "/assets/img/team/person6.webp",
  },
  {
    name: "Micheal Stuwart JUDD",
    role: "International Relations Director",
    img: "/assets/img/team/person7.webp",
  },
  {
    name: "SHAIKHA MOHAMMAD OBAID ALTAWILA ALSUWAIDI",
    role: "Community Development Director",
    img: "/assets/img/team/person8.webp",
  },
  {
    name: "PAUL ROBERTSON",
    role: "Education & Certification Director",
    img: "/assets/img/team/person9.webp",
  },
  {
    name: "BADRIA NOOR ALDIN HASSAN",
    role: "Media & Communications Director",
    img: "/assets/img/team/person10.webp",
  },
  {
    name: "Thanveer Thachambath",
    role: "Community Development Director",
    img: "/assets/img/team/person11.webp",
  },
];

const SLIDE_SPEED = 800;

const Testimonials = () => {
  const thumbsSwiperRef = useRef(null);
  const textSwiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section visible aayaal — index 0-il reset
            setActiveIndex(0);

            if (textSwiperRef.current && !textSwiperRef.current.destroyed) {
              textSwiperRef.current.slideToLoop(0, SLIDE_SPEED);
              textSwiperRef.current.autoplay.start();
            }

            if (thumbsSwiperRef.current && !thumbsSwiperRef.current.destroyed) {
              thumbsSwiperRef.current.slideToLoop(0, SLIDE_SPEED);
            }
          } else {
            // Section screen-il ninnuu poyaal — autoplay stop
            if (textSwiperRef.current && !textSwiperRef.current.destroyed) {
              textSwiperRef.current.autoplay.stop();
            }
          }
        });
      },
      {
        threshold: 0.2, // 20% visible aayaal trigger aavum
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
    if (thumbsSwiperRef.current && !thumbsSwiperRef.current.destroyed) {
      thumbsSwiperRef.current.slideToLoop(realIndex, SLIDE_SPEED);
    }
  }, []);

  const handleThumbClick = useCallback((index) => {
    if (textSwiperRef.current && !textSwiperRef.current.destroyed) {
      textSwiperRef.current.autoplay.stop();
      textSwiperRef.current.slideToLoop(index, SLIDE_SPEED);
      setTimeout(() => {
        if (textSwiperRef.current && !textSwiperRef.current.destroyed) {
          textSwiperRef.current.autoplay.start();
        }
      }, SLIDE_SPEED + 100);
    }
  }, []);

  const textVariant = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      }),
    }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="testimonial"
      style={{ backgroundImage: "url(assets/img/home/our_team-bg.png)", padding: "40px 0" }}
    >
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="sub_title">Association Founding Members</span>
          <h2 className="text-white">Driven by expert leadership team</h2>
          <img src="/assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        {/* Thumbnails Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[]}
            onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            speed={SLIDE_SPEED}
            allowTouchMove={false}
            className="testimonial_images"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={activeIndex === index ? "active-thumb" : ""}
                  onClick={() => handleThumbClick(index)}
                  style={{
                    cursor: "pointer",
                    opacity: activeIndex === index ? 1 : 0.45,
                    transform: activeIndex === index ? "scale(1)" : "scale(1)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    borderRadius: "50%",
                    willChange: "transform, opacity",
                    zIndex: 1,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Main Text Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => (textSwiperRef.current = swiper)}
            loop={true}
            autoHeight={true}
            speed={SLIDE_SPEED}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            pagination={{ el: ".testimonial-pagination", clickable: true }}
            className="testimonial_slider"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="testimonial_item text-center">
                <div className="client_info">
                  <h4 className="text-white text-uppercase">{item.name}</h4>
                  <span style={{ color: "#d4af6e" }}>{item.role}</span>
                </div>
              </SwiperSlide>
            ))}
            <div className="testimonial-pagination"></div>
          </Swiper>

          {/* Button */}
          <div
            style={{ marginTop: "20px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <motion.a
              href="/about/#team_members"
              className="main_btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span>
                View All Members <i className="ph ph-arrow-right"></i>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Testimonials);