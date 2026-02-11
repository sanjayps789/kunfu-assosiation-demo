
import { memo } from "react";
import { motion } from "framer-motion";

const events = [
  {
    img: "assets/img/events/1.jpg",
    title: "Spirit of the Dojo: Karate Championship",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
  {
    img: "assets/img/events/2.jpg",
    title: "Warriors’ Way: National Karate Tournament",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
  {
    img: "assets/img/events/3.jpg",
    title: "Kick for Glory: Karate Open Cup",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
  {
    img: "assets/img/events/2.jpg",
    title: "Samurai Spirit: International Karate Challenge",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
  {
    img: "assets/img/events/1.jpg",
    title: "Karate Warriors: Regional Open",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
  {
    img: "assets/img/events/3.jpg",
    title: "The Ultimate Dojo Clash",
    date: "Thu Jan, 2025",
    time: "12:00 PM",

  },
  {
    img: "assets/img/events/1.jpg",
    title: "Karate Power Cup: Fight for Honor",
    date: "Thu Jan, 2025",
    time: "12:00 PM",

  },
  {
    img: "assets/img/events/1.jpg",
    title: "Path of Strength: Karate Masters Event",
    date: "Thu Jan, 2025",
    time: "12:00 PM",
  },
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
                  style={{ backgroundImage: `url(${event.img})` }}
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
