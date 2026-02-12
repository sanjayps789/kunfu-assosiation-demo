import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // <-- Import motion
import "swiper/css";
import "swiper/css/navigation";

const events = [
  { title: "Chinese New Year", date: "February 14 2026", time: "12:00 PM", image: "/assets/img/events/1.png" },
  { title: "Tai Chi World Day", date: "April 25 2026", time: "12:00 PM", image: "/assets/img/events/2.png" },
  { title: "International Wushu Championships", date: "July 24 - 27 2026", time: "12:00 PM", image: "/assets/img/events/3.png" },
  { title: "National Wushu Competition", date: "September 26th & 27th 2026", time: "12:00 PM", image: "/assets/img/events/2.png" },
    { title: "DAKAR Youth Olympic Games", date: "31 October to 13 November 2026", time: "12:00 PM", image: "/assets/img/events/2.png" },

];

const Events = () => {
  return (
    <section className="events pb100">
      <div className="container">
        <div className="row">
          {/* Heading with motion */}
          <motion.div
            className="col-xl-4 mb-5 mb-xl-0 align-self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="section-heading text-start mb-0">
              <span className="sub_title">Events</span>
              <h2>Learn from the best martial arts instructors around</h2>
              <a href="/events" className="main_btn mt-4">
                Choose Plan <i className="ph ph-arrow-right"></i>
              </a>
            </div>
          </motion.div>

          {/* Swiper Slider with motion */}
          <motion.div
            className="col-xl-8 align-self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Swiper
              
              navigation
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="event_slider"
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="event_item">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className="event_img"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <a href="/event-details" className="evn_btn">
                        Join Now
                      </a>
                    </div>
                    <div className="event_content">
                      <h4>{event.title}</h4>
                      <div className="event_date">
                        <p>{event.date}</p>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Events);
