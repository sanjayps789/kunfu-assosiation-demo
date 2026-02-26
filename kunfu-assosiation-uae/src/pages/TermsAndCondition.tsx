import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions: React.FC = () => {
  const sectionStyle: CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "white",
    color: "black",
    padding: "80px 20px",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const headingStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const blockStyle: CSSProperties = {
    marginBottom: "50px",
  };

  const h2Style: CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    marginBottom: "15px",
  };

  const pStyle: CSSProperties = {
    lineHeight: "1.7",
    color: "black",
  };

  const contactStyle: CSSProperties = {
    textAlign: "center",
    borderTop: "1px solid black",
    paddingTop: "40px",
  };

  const buttonStyle: CSSProperties = {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#fff",
    color: "#000",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 500,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Heading */}
        <div style={headingStyle}>
          <h1 style={{ fontSize: "42px", fontWeight: 700 }}>
            Terms & Conditions
          </h1>
          <p style={{ marginTop: "10px", fontSize: "18px", color: "#9ca3af" }}>
            Emirates Kung Fu, Tai Chi & Qigong Association
          </p>
        </div>

        {/* Introduction */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Introduction</h2>
          <p style={pStyle}>
            By using this website, you agree to comply with and be bound by the
            following Terms and Conditions.
          </p>
        </div>

        {/* Use of Website */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Use of Website</h2>
          <p style={pStyle}>
            You agree to use this website only for lawful purposes and in a
            responsible manner that does not violate any applicable laws or
            regulations.
          </p>
        </div>

        {/* Content */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Content</h2>
          <p style={pStyle}>
            All content, materials, and information on this website belong to
            the Association and may not be copied, reproduced, distributed, or
            used without prior written permission.
          </p>
        </div>

        {/* Programs & Events */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Programs & Events</h2>
          <p style={pStyle}>
            Participation in programs, classes, or events is subject to proper
            registration and compliance with the applicable rules and guidelines
            set by the Association.
          </p>
        </div>

        {/* External Links */}
        <div style={blockStyle}>
          <h2 style={h2Style}>External Links</h2>
          <p style={pStyle}>
            We may provide links to third-party websites for convenience. We are
            not responsible for the content, policies, or practices of these
            external websites.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Limitation of Liability</h2>
          <p style={pStyle}>
            The Association shall not be held responsible for any direct,
            indirect, incidental, or consequential loss or damage resulting from
            the use of this website.
          </p>
        </div>

        {/* Changes */}
        <div style={blockStyle}>
          <h2 style={h2Style}>Changes</h2>
          <p style={pStyle}>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Continued use of the website after changes are posted
            means you accept those changes.
          </p>
        </div>

        {/* Contact */}
        <div style={contactStyle}>
          <h2 style={{ fontSize: "24px", fontWeight: 600 }}>Contact</h2>
          <p style={pStyle}>
            For any questions regarding these Terms & Conditions, please contact
            us.
          </p>

          <Link to="/contact" style={buttonStyle}>
            👉 Contact the Association for more information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
