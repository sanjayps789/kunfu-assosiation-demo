import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Contact from '../components/Contact';
import Clients from "../components/Clients";
import Footer from "../layouts/Footer";

const AboutPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Contact Us" background="assets/img/bg/banner_bg.jpg" />
    <Contact/>
    <Clients showDivider={true} sliderClass = "pt50" />
    <Footer/>
    </>
  );
};

export default memo(AboutPage);
