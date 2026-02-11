import { memo } from "react";
import { motion } from "framer-motion";

const EventDetails: React.FC = () => {
  return (
    <section className="our_event section-padding">
      <div className="container">
        <div className="row">
          {/* Main Event Details */}
          <div className="col-md-8 col-sm-12 col-xs-12">
            <motion.div
              className="event_details"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                className="mb-4 evd_img"
                src="assets/img/events/event-details.jpg"
                alt="Event"
              />
              <h3>About the event</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis volutpat mauris, a convallis dolor posuere condimentum. Integer volutpat leo eget lacus ornare, nec congue nisl tristique. Integer id felis eget magna pellentesque condimentum et in sem. Nunc et magna ac mi lacinia elementum nec eget ex. Quisque hendrerit, dui scelerisque suscipit commodo, felis justo sodales sem, vitae dignissim felis mauris at neque. Vestibulum lacinia at risus at dapibus. Donec sagittis lobortis est, eu tempus arcu iaculis id. Suspendisse finibus odio feugiat dui suscipit luctus. Nunc ut nibh id eros cursus mattis et eget lorem. In feugiat turpis arcu, ut elementum turpis maximus non. Praesent vulputate bibendum tincidunt.</p>
              <p>
                Ut dignissim leo et ante elementum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...
              </p>
              <h3>During this event, we’ll cover</h3>
              <ul>
                <li>How to get started learning JavaScript the right way</li>
                <li>JavaScript for Beginners & CS Prep curriculum details</li>
                <li>What the experience of learning in an online classroom is like</li>
                <li>How do these programs prepare you for Coders and other top coding programs?</li>
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4 col-sm-12 col-xs-12">
            <motion.div
              className="event_sidebar"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Event Info */}
              <div className="event_info">
                <h3>Event Information</h3>
                <ul>
                  <li className="evd d-flex align-items-center justify-content-between">
                    <span>
                      <i className="fa fa-calendar"></i>
                      <h5>Start Date</h5>
                    </span>
                    <p>July 20, 2025</p>
                  </li>
                  <li className="evd d-flex align-items-center justify-content-between">
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      <h5>End Date</h5>
                    </span>
                    <p>July 25, 2029</p>
                  </li>
                  <li className="evd d-flex align-items-center justify-content-between">
                    <span>
                      <i className="fa-regular fa-clock"></i>
                      <h5>End Time</h5>
                    </span>
                    <p>8:00 PM</p>
                  </li>
                  <li className="evd d-flex align-items-center justify-content-between">
                    <span>
                      <i className="fa-solid fa-map-location"></i>
                      <h5>Location</h5>
                    </span>
                    <p>Jeddah</p>
                  </li>
                </ul>
                <div className="event_info_register">
                  <a className="main_btn" href="#">
                    <span>
                      Register Now <i className="ph ph-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

               {/* Speaker Info */}
              <div className="event_speaker mt-4">
                <h3>Speakers</h3>
                <motion.div
                  className="single_speaker text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="speaker_img mb-3"
                    style={{
                      backgroundImage: "url(assets/img/team/3.jpg)",
                      width: "150px",
                      height: "150px",
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      margin: "0 auto",
                    }}
                  />
                  <h4>Mike Johnson</h4>
                  <span>Self Defense Expert</span>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EventDetails);
