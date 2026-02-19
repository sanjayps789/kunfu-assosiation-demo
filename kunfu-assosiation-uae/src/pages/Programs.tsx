import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Programs from "../components/Programs";
import Pricing from "../components/Pricing";
import CounterUp from "../components/CounterUp";
import Clients from "../components/Clients";
import Footer from "../layouts/Footer";

const ProgramsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Our Programs" background="/assets/img/programs/programs-banner.webp" />
    <Programs/>
    {/* <Pricing sectionClass="pt100"/> */}
    <CounterUp/>
    {/* <Clients showDivider={false} /> */}
    <Footer/>
    </>
  );
};

export default memo(ProgramsPage);
