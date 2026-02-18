import { memo, useState } from "react";
import { Link } from "react-router-dom";
import MobileOffcanvas from "../layouts/MobileOffcanvas";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOffcanvas = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <MobileOffcanvas isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />

      <header
        id="mar_header"
        className="navbar position-absolute top-0 start-0 w-100 z-3"
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* LEFT LOGO (All screens) */}
          <div>
            <Link to="/">
              <img
                style={{ maxWidth: "50px" }}
                src="assets/img/main_logo.webp"
                alt="Logo"
              />
            </Link>
          </div>

          {/* DESKTOP MENU (Only xl and above) */}
          <nav className="main-menu d-none d-xl-block">
            <ul className="d-flex align-items-center gap-4 mb-0">
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
              <li>
                <Link to="/blog">Blog</Link>
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
          </nav>

          {/* RIGHT SECTION */}
          <div className="d-flex align-items-center">
            {/* Desktop Right Logo */}
            <div className="d-none d-xl-block me-3">
              <Link to="/">
                <img
                  style={{ maxWidth: "200px" }}
                  src="assets/img/community_logo.svg"
                  alt="Community Logo"
                />
              </Link>
            </div>

            {/* Hamburger (Mobile + MD only) */}
            <div className="d-xl-none">
              <button className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="ph ph-list"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
