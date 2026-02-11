import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import EventsList from "../components/EventsList";
import Footer from "../layouts/Footer";

const EventsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Events" background="assets/img/bg/banner_bg.jpg" />
    <EventsList/>
    <Footer/>
    </>
  );
};

export default memo(EventsPage);
