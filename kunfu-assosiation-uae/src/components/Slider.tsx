// src/components/Slider.jsx
import { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VideoPopup from "./VideoPopup";
import DOMPurify from "dompurify";

const slides = [
  {
    title: "<span>Empowering Mind, Body</span><br> And Spirit Through<br> Martial Arts",
    text: "Join our expert instructors and transform your life with professional martial <br> arts training. Suitable for all ages and skill levels, our programs focus",
    image: "assets/img/slider/slider1.png",
  },
  {
    title: "<span>Unleash Your Strength</span><br> Master the Art of<br> Self-Discipline",
    text: "Join our expert instructors and transform your life with professional martial <br> arts  training.  Suitable for all ages and skill levels, our programs focus",
    image: "assets/img/slider/slider2.png",
  },
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Video modal state
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="mar_slider_wrap text-left">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        className="mar_slider position-relative"
        style={{ backgroundImage: "url(assets/img/slider/bg.jpg)" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider_item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h1
                      className="heading active_animation"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(slide.title),
                      }}
                    >
                      
                    </h1>
                    <p
                      className="active_animation"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(slide.text),
                      }}
                     
                    ></p>
                    <a href="/about" className="main_btn active_animation">
                      <span>
                        Explore More <i className="ph ph-arrow-right"></i>
                      </span>
                    </a>
                    <ul className="slider_social active_animation">
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="slider_image active_animation position-absolute end-0 bottom-0 text-end">
                <img src={slide.image} alt="img" />
                <img
                  src="assets/img/slider/shape1.png"
                  alt="img"
                  className="sshape_1 position-absolute"
                />
                <img
                  src="assets/img/slider/shape2.png"
                  alt="img"
                  className="sshape_2 position-absolute"
                />

                {/* Video Button */}
                <VideoPopup
                  videoId="c4PQfgq2NsQ"
                  triggerImage="assets/img/slider/vbtn.png"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="harrows">
          <div ref={prevRef} className="hs_prev_arrow">
            <img src="assets/img/shapes/left-arrow.svg" alt="prev" />
          </div>
          <div ref={nextRef} className="hs_next_arrow">
            <img src="assets/img/shapes/right-arrow.svg" alt="next" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default memo(Slider);
