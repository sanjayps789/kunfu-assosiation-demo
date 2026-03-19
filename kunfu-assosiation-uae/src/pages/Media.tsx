import Breadcrumb from "../components/Breadcrumb.js";
import Header from "../layouts/Header.js";
import Footer from "../layouts/Footer.js";
import MediaSection from "../components/MediaSection.js";

const Media = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title="Media"
        background="/assets/img/media/media_bg.webp"
      />
      <MediaSection/>
      <Footer/>
    </>
  );
};

export default Media;
