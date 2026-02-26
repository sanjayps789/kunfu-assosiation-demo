import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
    marginBottom: "15px",
  };

  const pStyle: CSSProperties = {
    lineHeight: "1.7",
    color: "black",
  };

  const ulStyle: CSSProperties = {
    marginTop: "10px",
    paddingLeft: "20px",
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
        <div style={headingStyle}>
          <h1 style={{ fontSize: "42px",  fontWeight: 700 }}>
            Privacy Policy
          </h1>
          <p style={{ marginTop: "10px", fontSize: "18px", color: "#9ca3af" }}>
            Emirates Kung Fu, Tai Chi & Qigong Association
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>Introduction</h2>
          <p style={pStyle}>
            The Emirates Kung Fu, Tai Chi & Qigong Association is committed to
            protecting your privacy and ensuring that your personal information
            is handled responsibly and securely.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>Information We Collect</h2>
          <p style={pStyle}>We may collect basic information such as:</p>
          <ul style={ulStyle}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any details submitted through contact forms</li>
          </ul>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>How We Use Information</h2>
          <p style={pStyle}>Your information is used to:</p>
          <ul style={ulStyle}>
            <li>Respond to your inquiries</li>
            <li>Manage programs and events</li>
            <li>Improve our website and services</li>
            <li>Share relevant updates</li>
          </ul>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>Data Protection</h2>
          <p style={pStyle}>
            We take reasonable technical and organizational steps to protect
            your personal information from unauthorized access, misuse, or
            disclosure.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>Third-Party Links</h2>
          <p style={pStyle}>
            Our website may contain links to external websites. We are not
            responsible for their content or privacy practices.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>Updates</h2>
          <p style={pStyle}>
            This Privacy Policy may be updated from time to time. Please review
            this page periodically.
          </p>
        </div>

        <div style={contactStyle}>
          <h2 style={{ fontSize: "24px", fontWeight: 600 }}>
            Contact Us
          </h2>
          <p style={pStyle}>
            If you have any questions regarding this Privacy Policy, please contact us.
          </p>

          <Link to="/contact" style={buttonStyle}>
            👉 Get in touch with the Association
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;