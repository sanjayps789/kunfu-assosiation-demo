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
                <ul className="mb-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/initiatives">Initiatives</Link>
                  </li>
                  {/* <li>
                    <Link to="/events">Events</Link>
                  </li> */}
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/media">Media</Link>
                  </li>
                  <li>
                    <Link to="/verification">Verification</Link>
                  </li>
                  <li>
                    <Link to="/membership">MemberShip</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>

                  {/* <li
                className={`has-child-items ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Link to="#">
                  Pages <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li> */}
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
