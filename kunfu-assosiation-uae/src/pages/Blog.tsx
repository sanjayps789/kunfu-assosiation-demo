import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import BlogList from "../components/BlogList";
import Footer from "../layouts/Footer";

const EventsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Latest Posts" background="/assets/img/blog/blog-banner.webp" />
    <BlogList/>
    <Footer/>
    </>
  );
};

export default memo(EventsPage);
