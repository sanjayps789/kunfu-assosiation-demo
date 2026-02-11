import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import BlogDetails from "../components/BlogDetails";
import Footer from "../layouts/Footer";

const BlogDetailsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb title="Blog Details" background="assets/img/bg/banner_bg.jpg" />
    <BlogDetails/>
    <Footer/>
    </>
  );
};

export default memo(BlogDetailsPage);
