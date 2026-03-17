import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import About from "../components/About";
import Features from "../components/Features";
import Team from "../components/Team";
import CounterUp from "../components/CounterUp";
import Footer from "../layouts/Footer";
import MissionVision from "../components/MissionVision";
import Clients from "../components/Clients";

const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [hash]);

  return (
    <>
      <Header />
      <Breadcrumb
        title="About Us"
        background="/assets/img/about/about_us.jpeg"
      />
      <About />
      <Features />
      <CounterUp />
      <MissionVision />
      <Team />
      <Clients showDivider={true} sliderClass="pt50" />
      <Footer />
    </>
  );
};

export default memo(AboutPage);