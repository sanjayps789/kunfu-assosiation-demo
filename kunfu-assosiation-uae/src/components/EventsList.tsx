
import { memo } from "react";
import { motion } from "framer-motion";

const events = [
   { title: "Chinese New Year", date: "February 14 2026", time: "12:00 PM", image: "/assets/img/events/chinese-new-year.webp" },
  { title: "Tai Chi World Day", date: "April 25 2026", time: "12:00 PM", image: "/assets/img/events/tai-chi-world-day.webp" },
  { title: "International Wushu Championships", date: "July 24 - 27 2026", time: "12:00 PM", image: "/assets/img/events/international-wushu-championships.webp" },
  { title: "National Wushu Competition", date: "September 26th & 27th 2026", time: "12:00 PM", image: "/assets/img/events/national-wushu-competition.webp" },
    { title: "DAKAR Youth Olympic Games", date: "31 October to 13 November 2026", time: "12:00 PM", image: "/assets/img/events/darker-youth-olympic-games.webp" },

];

const EventsList = () => {
  return (
    <section className="events section-padding">
      <div className="container">
        <div className="row g-5">
          {events.map((event, index) => (
            <motion.div
              className="col-xl-3 align-self-center"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="event_item">
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
              </div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="col-12 text-center">
            <div className="mart-pagination">
              <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#" className="current">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EventsList);
