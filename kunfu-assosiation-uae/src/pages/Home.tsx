import { memo } from "react";
import Header from "../layouts/Header";
import Slider from "../components/Slider";
import About from '../components/About';
import Features from "../components/Features";
import Programs from "../components/Programs";
import Pricing from "../components/Pricing";
import Events from "../components/Events";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CounterUp from "../components/CounterUp";
import Blog from "../components/Blog";
import Clients from "../components/Clients";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <About/>
      <Features/>
      <Programs/>
      {/* <Pricing sectionClass="section-padding"/> */}
      <Events/>
      <Team/>
      {/* <Testimonials/> */}
      <CounterUp/>
      <Blog/>
      {/* <Clients showDivider={true} sliderClass="pt50" /> */}
      <Footer/>
    </>
  );
};

export default memo(Home);