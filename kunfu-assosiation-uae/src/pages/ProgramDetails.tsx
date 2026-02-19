import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProgramDetails from "../components/ProgramDetails";
import Footer from "../layouts/Footer";

const ProgramDetailsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Program Details" background="/assets/img/programs/programs-banner.png" />
    <ProgramDetails/>
    <Footer/>
    </>
  );
};

export default memo(ProgramDetailsPage);
