import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../layouts/Footer";

const Membership = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title="Membership"
        background="/assets/img/membership/membership_bg.webp"
      />
      <div
        style={{ textAlign: "justify" }}
        className="container text-black md:py-5 py-4"
      >
        <div className="md:w-75 w-100">
          <p>
            The UAE Kung Fu Tai Chi Qigong Association offers an official
            membership platform for qualified individuals, instructors, and
            martial arts schools seeking formal recognition under a reputable
            and internationally connected body. All membership applications
            undergo a structured verification process to ensure authenticity,
            qualifications, lineage, and professional standards are aligned with
            the Association’s requirements and internationally recognized
            practices.
          </p>
          <p>
            Upon successful approval, members are formally registered and listed
            on the Association’s official platform as verified, legitimate, and
            qualified practitioners or institutions. This recognition enhances
            credibility, provides public trust, and connects members to a wider
            network dedicated to preserving and promoting authentic Kung Fu, Tai
            Chi, and Qigong. Membership reflects a commitment to excellence,
            integrity, and the continuation of genuine martial arts traditions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Membership);
