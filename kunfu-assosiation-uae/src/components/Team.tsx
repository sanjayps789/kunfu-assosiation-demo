import { memo } from "react";
import { motion } from "framer-motion";

const foundingMembers = [
  {
    name: "BASMA MOHAMMAD ABDULLA HANNAWI",
    role: "Association President",
    img: "/assets/img/team/person1.webp",
  },
  {
    name: "Frank Rao",
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
    name: "Thanveer Thachambath", // ✅ index 10 — still a founding member
    role: "Community Development Director",
    img: "/assets/img/team/person11.webp",
  },
];

const honoraryMembers = [
  {
    name: "Dr. Maryam AlMatrooshi",
    // role: "Honorary Member",
    img: "/assets/img/team/person12.webp",
  },
];

// Pyramid row structure: [1, 2, 4, 3] → indices of teamMembers
const pyramidRows = [
  [0], // Row 1 — President
  [1, 2], // Row 2 — VP, Director General
  [3, 4, 5, 6], // Row 3 — 3 Directors
  [7, 8, 9, 10], // Row 4 — 3 Directors
];

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="team_card_ref">
      <div
        className="team_card_img"
        style={{ backgroundImage: `url(${member.img})` }}
      />
      <div className="team_card_overlay">
        <h4>{member.name}</h4>
        <p>{member.role}</p>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section
      id="team_members"
      className="team pb100"
      style={{ backgroundImage: "url(assets/img/bg/team.jpg)" }}
    >
      <div className="container">
        {/* ── Founding Members ───────────────────────────── */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <span className="sub_title">Association Founding Members</span> */}
          <h2>Association Founding Members</h2>
          <img src="/assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        <div className="team_pyramid">
          {pyramidRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="team_pyramid_row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: rowIndex * 0.15 }}
            >
              {row.map((memberIndex, colIndex) => (
                <TeamCard
                  key={memberIndex}
                  member={foundingMembers[memberIndex]}
                  index={colIndex}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* ── Honorary Members ───────────────────────────── */}
        <motion.div
          className="section-heading text-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="sub_title">Honorary Members</span>
          <h2>Distinguished Honorees</h2>
          <img src="/assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        <div className="team_pyramid">
          <motion.div
            className="team_pyramid_row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {honoraryMembers.map((member, colIndex) => (
              <TeamCard key={colIndex} member={member} index={colIndex} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default memo(Team);
