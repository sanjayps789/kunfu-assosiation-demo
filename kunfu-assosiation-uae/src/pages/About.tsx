import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import About from '../components/About';
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CounterUp from "../components/CounterUp";
import Clients from "../components/Clients";
import Footer from "../layouts/Footer";
import MissionVision from "../components/MissionVision";

const AboutPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="About Us" background="assets/img/bg/banner_bg.jpg" />
    <About/>
    <Features/>
    <MissionVision/>
    {/* <Pricing sectionClass="pb100"/> */}
    <Team/>
    <Testimonials/>  
    <CounterUp/>
    <Clients showDivider={false} />
    <Footer/>
    </>
  );
};

export default memo(AboutPage);
