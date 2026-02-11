import { memo } from "react";
import { motion } from "framer-motion";

const EventDetails = () => {
  return (
    <section className="our_event section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-xs-12 mx-auto">
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

              <h3>About the Program</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque mollis volutpat mauris, a convallis dolor posuere
                condimentum. Integer volutpat leo eget lacus ornare, nec congue
                nisl tristique. Integer id felis eget magna pellentesque
                condimentum et in sem. Nunc et magna ac mi lacinia elementum nec
                eget ex. Quisque hendrerit, dui scelerisque suscipit commodo,
                felis justo sodales sem, vitae dignissim felis mauris at neque.
                Vestibulum lacinia at risus at dapibus. Donec sagittis lobortis
                est, eu tempus arcu iaculis id. Suspendisse finibus odio feugiat
                dui suscipit luctus. Nunc ut nibh id eros cursus mattis et eget
                lorem. In feugiat turpis arcu, ut elementum turpis maximus non.
                Praesent vulputate bibendum tincidunt.
              </p>
              <p>
                Ut dignissim leo et ante elementum finibus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Curabitur bibendum sed leo eget faucibus. Aliquam
                ac sagittis tortor. Proin eu nisi vitae dolor pretium congue et
                interdum dui. Quisque fringilla turpis a elementum congue. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor
                dui eu turpis condimentum, a mollis purus luctus. Mauris euismod
                mi et purus vulputate viverra. Morbi vel luctus mi. In nec turpis
                id augue pretium suscipit sed ut dui.
              </p>

              <h3>During this event, we’ll cover</h3>
              <ul>
                <li>How to get started learning JavaScript the right way</li>
                <li>JavaScript for Beginners &amp; CS Prep curriculum details</li>
                <li>What the experience of learning in an online classroom is like</li>
                <li>
                  How do these programs prepare you for Coders and other top
                  coding programs?
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="event_info_register mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a className="main_btn" href="#">
                <span>
                  Apply Now <i className="ph ph-arrow-right"></i>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EventDetails);
