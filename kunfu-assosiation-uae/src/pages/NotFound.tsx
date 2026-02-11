import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../layouts/Footer";


const NotFound = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="404" background="assets/img/bg/banner_bg.jpg" />
    <section className="page_not_found section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 wow fadeIn text-center mx-auto">
            <div className="pnf_content">
              <h2>Oops! Page Not Found</h2>
              <p>
                We are sorry, but the page you are looking for does not exist.
                It might have been removed, had its name changed, or is
                temporarily unavailable.
              </p>
              <Link to="/" className="main_btn align-self-center">
                <span>
                  Back to Home <i className="ph ph-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default memo(NotFound);
