import { memo, useState } from "react";
import { Link } from "react-router-dom";

const MobileOffcanvas = ({ isOpen, toggleOffcanvas }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      style={{ maxWidth: "150px" }}
                      src="/assets/img/community_logo.webp"
                      alt="edutec"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleOffcanvas}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-menu fix mb-3">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/programs">Programs</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>

                  {/* Dropdown */}
                  {/* <li className="has-child-items">
                    <button
                      type="button"
                      className="dropdown-toggle-btn"
                      onClick={() => toggleDropdown("pages")}
                    >
                      Pages <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    <ul
                      className="sub-menu"
                      style={{
                        display: openDropdown === "pages" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/programs">Programs</Link>
                      </li>
                      <li>
                        <Link to="/program-details">Program Details</Link>
                      </li>
                      <li>
                        <Link to="/events">Events</Link>
                      </li>
                      <li>
                        <Link to="/event-details">Event Details</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                      <li>
                        <Link to="/404">404</Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="offcanvas__overlay overlay-open"
          onClick={toggleOffcanvas}
        ></div>
      )}
    </>
  );
};

export default memo(MobileOffcanvas);
