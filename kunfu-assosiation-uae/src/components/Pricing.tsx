import { memo } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "$29",
    duration: "/ month",
    features: [
      "Access to all classes",
      "1 personal training session",
      "Community support",
      "Monthly progress tracking",
      "Exclusive member",
      "24/7 online access",
      { text: "Free trial for 7 days", disabled: true },
      { text: "24/Hours Gym Services", disabled: true },
    ],
    active: false,
  },
  {
    name: "Premium Plan",
    price: "$49",
    duration: "/ month",
    features: [
      "Access to all classes",
      "1 personal training session",
      "Community support",
      "Monthly progress tracking",
      "Exclusive member",
      "24/7 online access",
      "Free trial for 7 days",
      "24/Hours Gym Services",
    ],
    active: true,
  },
  {
    name: "Standard Plan",
    price: "$39",
    duration: "/ month",
    features: [
      "Access to all classes",
      "1 personal training session",
      "Community support",
      "Monthly progress tracking",
      "Exclusive member",
      "24/7 online access",
      { text: "Free trial for 7 days", disabled: true },
      { text: "24/Hours Gym Services", disabled: true },
    ],
    active: false,
  },
];

const Pricing = ({sectionClass = ""}) => {
  return (
    <section className={`pricing ${sectionClass}`}>
      <div className="container">
        {/* Heading with fade-up */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="sub_title">Pricing Plans</span>
          <h2>
            Best Plan for Your <br />
            Martial Arts Programs
          </h2>
          <img src="assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        <div className="row">
          <div className="col-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing_item ${plan.active ? "active" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="row">
                  <div className="col-lg-3 text-center align-self-center">
                    <h3>{plan.name}</h3>
                  </div>

                  <div className="col-lg-6 align-items-center align-self-center">
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i} className={feature.disabled ? "opacity-50" : ""}>
                          <i className="fa-solid fa-circle-check"></i>{" "}
                          {feature.text ? feature.text : feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-lg-3 align-self-center text-center">
                    <p className="price">
                      {plan.price} <span>{plan.duration}</span>
                    </p>
                    <a href="#" className="main_btn">
                      <span>
                        Choose Plan <i className="ph ph-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Pricing);
