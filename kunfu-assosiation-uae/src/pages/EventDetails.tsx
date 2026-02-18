import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import EventDetails from "../components/EventDetails";
import Footer from "../layouts/Footer";

const EventDetailsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Event Details" background="assets/img/events/events-banner.webp" />
    <EventDetails/>
    <Footer/>
    </>
  );
};

export default memo(EventDetailsPage);
