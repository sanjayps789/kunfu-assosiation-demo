import React from "react";

export default function MissionVision() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center fw-semibold mb-5">
          Our Mission & Vision
        </h2>

        {/* ================= MISSION ================= */}
        {/* Image LEFT | Content RIGHT */}
        <div className="row align-items-center mb-5">
          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/assets/img/about/about.png"
              alt="Our Mission"
              className="img-fluid rounded-4 w-100 object-fit-cover"
              style={{ height: "420px" }}
            />
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <h3 className="fw-semibold mb-4" style={{ fontSize: "28px" }}>
              Our Mission
            </h3>
            <p
              className="text-muted"
              style={{ fontSize: "17px", lineHeight: "1.8" }}
            >
             The Mission of the UAE Kung Fu Tai Chi Qigong Association is to
oversee, regulate, and implement structured Chinese martial arts
programs across schools, communities, and public institutions,
promoting physical fitness, mental well-being, emotional balance,
and character development, while embedding values of respect,
discipline, responsibility, and national belonging, supporting the
UAE’s position as a global benchmark for excellence in martial arts
education. Through collaboration with educational bodies and
international partners, the Association ensures high standards of
training, instructor development, and long-term sustainability of
martial arts practice across the nation.

            </p>
          </div>
        </div>

        {/* ================= VISION ================= */}
        {/* Content LEFT | Image RIGHT */}
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
            <h3 className="fw-semibold mb-4" style={{ fontSize: "28px" }}>
              Our Vision
            </h3>
            <p
              className="text-muted"
              style={{ fontSize: "17px", lineHeight: "1.8" }}
            >
              The Vision of the UAE Kung Fu Tai Chi Qigong Association is to build
a stronger, safer, and more resilient generation through Chinese
martial arts to cultivate discipline, confidence, physical
strength, character development, mental well-being, and emotional
control, while positioning the UAE as a world-leading hub and
benchmark for excellence in martial arts education and
development. By fostering innovation, cultural exchange, and
international collaboration, the Association aspires to inspire
lifelong learning and elevate the global recognition of traditional
Chinese martial arts from the UAE to the world.

            </p>
          </div>

          {/* Image */}
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="/assets/img/about/about.png"
              alt="Our Vision"
              className="img-fluid rounded-4 w-100 object-fit-cover"
              style={{ height: "420px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
