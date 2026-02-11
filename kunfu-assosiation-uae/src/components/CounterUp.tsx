import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { memo } from "react";

const counters = [
  { value: 1500, label: "Happy Students" },
  { value: 250, label: "Expert Trainers" },
  { value: 50, label: "Martial Arts Programs" },
  { value: 100, label: "Awards Won" },
];

const CounterItem = memo(({ counter, index, inView }: any) => (
  <motion.div
    className={`col-lg-3 col-md-6 col-12`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div
      className={`counter_item text-center ${
        index === counters.length - 1 ? "border-0" : ""
      }`}
    >
      <h3>{inView ? <CountUp end={counter.value} duration={2} /> : 0}+</h3>
      <p>{counter.label}</p>
    </div>
  </motion.div>
));

const CounterUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="counterup section-padding position-relative" ref={ref}>
      <div className="container position-relative">
        <div className="row g-lg-0 g-4 counterup_inner">
          {counters.map((counter, index) => (
            <CounterItem key={index} counter={counter} index={index} inView={inView} />
          ))}
        </div>

        <img
          src="assets/img/shapes/dots.svg"
          alt="img"
          className="counter_shape position-absolute"
        />
      </div>
    </section>
  );
};

export default memo(CounterUp);
