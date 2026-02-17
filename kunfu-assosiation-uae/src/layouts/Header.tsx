import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Detect if at top
      setIsAtTop(currentY === 0);

      // Hide nav when scrolling down
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`custom-header fixed-top w-100 pb- ${
        isAtTop
          ? "header-top"
          : showNav
            ? "header-scrolled"
            : "header-transparent"
      }`}
    >
      {/* TOP LOGO BAR */}
      <div className="top-bar container d-flex justify-content-between align-items-center">
        <div className="logo-left">
          <Link to="/">
            <img
              src="/assets/img/main_logo.webp"
              className="main_logo"
              alt="Government Logo"
            />
          </Link>
        </div>

        <div className="logo-right">
          <img src="/assets/img/community_logo.webp" alt="Community Logo" />
        </div>
      </div>

      {/* NAV BAR */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="nav-bar"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="container d-flex align-items-center justify-content-between">
              <nav className="main-menu">
                <ul className="d-flex gap-4 mb-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
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
                </ul>
              </nav>

              <div className="social_link">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
