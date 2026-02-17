import { memo, useState } from "react";
import { Link } from "react-router-dom";
import MobileOffcanvas from "../layouts/MobileOffcanvas";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // shared state
  const toggleOffcanvas = () => setIsOpen(!isOpen);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      
      {/* Pass state + toggle to MobileOffcanvas */}
      <MobileOffcanvas isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />

      <header
        id="mar_header"
        className="navbar position-absolute top-0 start-0 w-100 z-3" 
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="site_logo d-inline-block my-auto">
            <Link to="/">
              <img src="assets/img/logo-white.svg" alt="Kungfu Association UAE" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav
            className={`main-menu align-self-center  ${
              isMenuOpen ? "active" : ""
            }`}
          >
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/events">Events</Link></li>

              {/* Dropdown */}
              {/* <li
                className={`has-child-items ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Link to="#">
                  Pages <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/programs">Programs</Link></li>
                  <li><Link to="/program-details">Program Details</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/event-details">Event Details</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/blog-details">Blog Details</Link></li>
                  <li><Link to="/404">404</Link></li>
                </ul>
              </li> */}

              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

            {/* Toggle Button (for small screens) */}
            <div className="header__hamburger d-xl-none my-auto">
              <button className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="ph ph-list"></i>
              </button>
            </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
