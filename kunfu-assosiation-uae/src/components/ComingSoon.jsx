import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../layouts/Footer";

const ComingSoon = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title="Coming Soon"
        background="/assets/img/events/events-banner.webp"
      />

      <section className="page_not_found section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 wow fadeIn text-center mx-auto">
              <div className="pnf_content">
                <h2>We’re Launching Soon</h2>
                <p>
                  Something new is on the way. We’re working behind the scenes
                  to bring you a better experience. Please check back shortly.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  <Link to="/" className="main_btn align-self-center">
                    <span>
                      Back to Home <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>

                  <Link to="/contact" className="main_btn align-self-center">
                    <span>
                      Contact Us <i className="ph ph-envelope"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default memo(ComingSoon);
