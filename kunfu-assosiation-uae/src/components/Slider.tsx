// src/components/Slider.jsx
import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const slides = [
  {
    type: "bg-video",
    video: "/assets/videos/hero-video.mp4",
    title:
      "<span>Accreditation of the Emirates</span><br> Kung Fu, Tai Chi and Qigong Association",
    text: "The Emirates Association of Kung Fu, Tai Chi and Qigong is the official body dedicated to promoting authentic Chinese martial arts across the UAE through structured training, cultural heritage, and professional standards.",
    image: "/assets/img/slider/image1.png",
  },
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mar_slider_wrap text-left">
      <Swiper
        className="mar_slider position-relative"
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider_item position-relative">
              {/* Background Video */}
              <video
                className="slider_bg_video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="slider_overlay"></div>

              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-8">
                    <h1
                      className="heading active_animation"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(slide.title),
                      }}
                    ></h1>

                    <p
                      style={{textAlign:"justify"}}
                      className="active_animation"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(slide.text),
                      }}
                    ></p>

                    <Link to="/about" className="main_btn active_animation">
                      <span>
                        Explore More <i className="ph ph-arrow-right"></i>
                      </span>
                    </Link>

                    {/* <ul className="slider_social active_animation">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>

              {/* Right Side Image */}
              {slide.image && (
                <div className="slider_image active_animation position-absolute end-0 bottom-0 text-end">
                  <img src={slide.image} alt="img" />
                  <img
                    src="/assets/img/slider/shape1.png"
                    alt="shape"
                    className="sshape_1 position-absolute"
                  />
                  <img
                    src="/assets/img/slider/shape2.png"
                    alt="shape"
                    className="sshape_2 position-absolute"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="harrows">
          <div ref={prevRef} className="hs_prev_arrow">
            <img src="/assets/img/shapes/left-arrow.svg" alt="prev" />
          </div>
          <div ref={nextRef} className="hs_next_arrow">
            <img src="/assets/img/shapes/right-arrow.svg" alt="next" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default memo(Slider);