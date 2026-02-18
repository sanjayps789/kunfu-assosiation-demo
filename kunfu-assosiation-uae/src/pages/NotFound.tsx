import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const NotFound = () => {
  return (
    <>
      <Header />

      <section
        style={{ minHeight: "100vh" }}
        className="page_not_found d-flex align-items-center justify-content-center py-5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              {/* Error Code */}
              <h1
                style={{
                  fontSize: "80px",
                  fontWeight: "700",
                  color: "#B49754",
                }}
              >
                404
              </h1>

              {/* Title */}
              <h2 className="mb-3" style={{ fontWeight: "600" }}>
                Page Not Found
              </h2>

              {/* Description */}
              <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
                The page you are trying to access could not be found. It may
                have been moved, removed, or the URL may have been entered
                incorrectly. Please verify the web address or navigate using the
                options below.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/about" className="main_btn active_animation">
                  <span>
                    Go to Homepage<i className="ph ph-arrow-right"></i>
                  </span>
                </Link>

             
              </div>

              {/* Additional Help */}
              <div className="mt-5">
                <p className="small text-muted mb-1">
                  If you believe this is an error, please report the issue to
                  the website administrator.
                </p>
                <p className="small text-muted">
                  © {new Date().getFullYear()}Kunfu Assosiation UAE.
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default memo(NotFound);
