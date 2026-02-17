import { memo, useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay OR wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // hide when not loading

  return (
    <div className="preloader_wrap">
      <img src="assets/img/main_logo.webp" className="pre_logo" alt="Loading..." />
      <span className="preloader"></span>
    </div>
  );
};

export default memo(Preloader);
