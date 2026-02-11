import { memo } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sara Lee",
    role: "Sr. Martial Arts",
    image: "assets/img/team/1.jpg",
    social: [
      { icon: "fa-facebook-f", link: "#" },
      { icon: "fa-x-twitter", link: "#" },
      { icon: "fa-youtube", link: "#" },
    ],
  },
  {
    name: "Savanna Hahn",
    role: "Strength Trainers",
    image: "assets/img/team/2.jpg",
    social: [
      { icon: "fa-facebook-f", link: "#" },
      { icon: "fa-x-twitter", link: "#" },
      { icon: "fa-youtube", link: "#" },
    ],
  },
  {
    name: "Mike Johnson",
    role: "Self Defense Expert",
    image: "assets/img/team/3.jpg",
    social: [
      { icon: "fa-facebook-f", link: "#" },
      { icon: "fa-x-twitter", link: "#" },
      { icon: "fa-youtube", link: "#" },
    ],
  },
  {
    name: "Leilani Smitham",
    role: "Punching Experts",
    image: "assets/img/team/4.jpg",
    social: [
      { icon: "fa-facebook-f", link: "#" },
      { icon: "fa-x-twitter", link: "#" },
      { icon: "fa-youtube", link: "#" },
    ],
  },
];

const Team = () => {
  return (
    <section
      className="team pb100"
      style={{ backgroundImage: "url(assets/img/bg/team.jpg)" }}
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
          <h2>Learn from expert martial <br /> arts masters</h2>
          <img src="assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <motion.div
              className="col-xl-3 col-md-6 col-12"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="team_item text-center">
                <div
                  className="team_img"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <ul>
                    {member.social.map((s, i) => (
                      <li key={i}>
                        <a href={s.link}>
                          <i className={`fa-brands ${s.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Team);
