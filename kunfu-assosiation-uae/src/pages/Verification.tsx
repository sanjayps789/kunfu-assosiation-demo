import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../layouts/Footer";

const Verification = () => {
  const images = [
    "/assets/img/verification/img1.webp",
    "/assets/img/verification/img2.webp",
    "/assets/img/verification/img3.webp",
    "/assets/img/verification/img4.webp",
  ];
  return (
    <>
      <Header />
      <Breadcrumb
        title="Verification"
        background="/assets/img/verification/verification_bg.webp"
      />
      <div
        style={{ textAlign: "justify" }}
        className="container text-black md:py-5 py-4"
      >
        <p>
          The UAE Kung Fu Tai Chi Qigong Association is officially licensed,
          recognized, and authorized by leading governing bodies in China,
          including the Shaolin Wushu Association and the China Wenxian Tai Chi
          Chuan Heritage Practitioners Federation. These authorizations grant
          the Association the formal authority to assess, certify, and verify
          practitioners in Kung Fu, Tai Chi, and Qigong within its jurisdiction.
        </p>
        <p>
          This recognition has been issued following formal review and is
          supported by official certification documents, institutional seals,
          and registered authorization numbers. In addition, the Association has
          been acknowledged through an official ceremony, further reinforcing
          its standing as a legitimate and internationally connected body
          dedicated to preserving and promoting authentic Chinese martial arts.
          Through these partnerships, the Association operates in alignment with
          traditional lineages and recognized standards, ensuring authenticity,
          quality, and credibility in all its programs, certifications, and
          activities.
        </p>
        <p>
          In addition, the Association works in strategic alignment with the
          DataFlow Group, a globally recognized provider of primary source
          verification (PSV) solutions, and in coordination with the Dubai
          Sports Council. Through these collaborations, the Association plays a
          central role in the verification and validation of professional
          qualifications for individuals seeking to provide courses in Kung Fu,
          Tai Chi, and Qigong or to establish institutions within the United
          Arab Emirates.
        </p>
        <div className="row mt-lg-5">
          {images.map((img, index) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ height: "250px" }} className="mb-3 rounded-3 overflow-hidden">
                <img
                  src={img}
                  alt={`Verification Image ${index + 1}`}
                  className="img-fluid verification_img w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default memo(Verification);
