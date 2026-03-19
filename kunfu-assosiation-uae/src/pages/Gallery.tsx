import { memo } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../layouts/Footer";
import GalleryCollection from "../components/GalleryCollection";
import "../../public/assets/css/gallery.css";

const Gallery = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title="Gallery"
        background="/assets/img/gallery/gallery_banner_bg.webp"
      />
      <GalleryCollection />
      <Footer />
    </>
  );
};

export default memo(Gallery);
