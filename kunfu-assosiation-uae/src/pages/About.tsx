import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import About from "../components/About";
import Features from "../components/Features";
import Team from "../components/Team";
import CounterUp from "../components/CounterUp";
import Footer from "../layouts/Footer";
import MissionVision from "../components/MissionVision";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title="About Us"
        background="assets/img/about/about-banner.webp"
      />
      <About />
      <Features />
      <MissionVision />
      {/* <Pricing sectionClass="pb100"/> */}
      <Team />
      {/* <Testimonials /> */}
      <CounterUp />
      {/* <Clients showDivider={false} /> */}
      <Footer />
    </>
  );
};

export default memo(AboutPage);
