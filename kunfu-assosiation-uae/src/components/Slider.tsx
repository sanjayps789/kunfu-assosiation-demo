// src/components/Slider.jsx
"use client";

import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VideoPopup from "./VideoPopup";
import DOMPurify from "dompurify";

const slides = [
  {
    type: "image",
    title:
      "<span>Accreditation of the Emirates</span> Kung Fu, Tai Chi and Qigong Association",
    text: "The Emirates Kung Fu, Tai Chi and Qigong Association is the official body dedicated to promoting authentic Chinese <br> martial arts across the UAE through structured training, cultural heritage, and professional standards.",
    background: "assets/img/slider/slider1.png",
    image: "assets/img/slider/slider1.png",
  },

  {
    type: "bg-video",
    video: "assets/videos/hero-video.mp4",
  },

  {
    type: "image",
    title:
      "<span>Promoting Authentic</span> Kung Fu, Tai Chi and Qigong Across the UAE",
    text: "We work to preserve traditional Chinese martial arts while supporting structured programs for <br> individuals, communities, and institutions across the United Arab Emirates.",
    background: "assets/img/slider/slider2.png",
    image: "assets/img/slider/slider2.png",
  },
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const videoRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentSlide = slides[swiper.realIndex];

    // 🔥 If Video Slide
    if (currentSlide.type === "bg-video") {
      swiper.autoplay.stop();

      const video = videoRef.current;

      if (video) {
        video.currentTime = 0;
        video.play();

        video.onended = () => {
          swiper.slideNext();
        };
      }
    } else {
      // 🔥 Normal Slide
      swiper.params.autoplay = {
        delay: 5000,
        disableOnInteraction: false,
      };
      swiper.autoplay.start();

      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="mar_slider_wrap text-left ">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mar_slider position-relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "bg-video" ? (
              // 🔥 VIDEO SLIDE
              <div
                className="slider_item position-relative overflow-hidden border-0"
                style={{ height: "100vh" }}
              >
                <video
                  ref={videoRef}
                  playsInline
                  muted
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ objectFit: "cover" }}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
            ) : (
              //  NORMAL IMAGE SLIDE
              <div
                className="slider_item relative"
                style={{
                  backgroundImage: `url(${slide.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    opacity: "50%",
                    right: "0",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    position: "absolute",
                  }}
                  className="w-100 h-100"
                ></div>
                <div className="container h-100 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-lg-8">
                      <h1
                        className="heading"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(slide.title),
                        }}
                      />

                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(slide.text),
                        }}
                      />

                      <a href="/about" className="main_btn">
                        <span>
                          Explore Our Programs
                          <i className="ph ph-arrow-right"></i>
                        </span>
                      </a>

                      <ul className="slider_social">
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
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="slider_image ">
                  <img src={slide.image} alt="main" className="main_img" />

                  <img
                    src="assets/img/slider/shape1.png"
                    alt="shape"
                    className="sshape_1"
                  />

                  <img
                    src="assets/img/slider/shape2.png"
                    alt="shape"
                    className="sshape_2"
                  />

                  <VideoPopup
                    videoId="c4PQfgq2NsQ"
                    triggerImage="assets/img/slider/vbtn.png"
                  />
                </div> */}
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
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
