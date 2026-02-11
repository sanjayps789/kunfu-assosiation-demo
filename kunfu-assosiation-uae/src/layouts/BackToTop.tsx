import { memo, useEffect, useState } from "react";


const BackToTop = () => {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);

      // Activate when scrolled more than 100px
      setActive(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`progress-wrap ${active ? "active-progress" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: 308, // circumference ~ 2πr (r=49)
            strokeDashoffset: 308 - (308 * scroll) / 100,
          }}
        />
      </svg>
    </div>
  );
};

export default memo(BackToTop);
