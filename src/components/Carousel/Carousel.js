import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "../Card/Card";

import classes from "./carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  const swiperLeftArrowRef = useRef(null);
  const swiperRightArrowRef = useRef(null);
  const [arrowClass, setArrowClass] = useState([]);

  useEffect(() => {
    swiperRightArrowRef.current.classList.contains("swiper-button-disabled")
      ? (swiperRightArrowRef.current.style.backgroundImage =
          "url(http://localhost:3000/Images/carouselRightArrowDisabled.svg)")
      : (swiperRightArrowRef.current.style.backgroundImage =
          "url(http://localhost:3000/Images/carouselRightArrow.svg)");

    swiperLeftArrowRef.current.classList.contains("swiper-button-disabled")
      ? (swiperLeftArrowRef.current.style.backgroundImage =
          "url(http://localhost:3000/Images/carouselLeftArrowDisabled.svg)")
      : (swiperLeftArrowRef.current.style.backgroundImage =
          "url(http://localhost:3000/Images/carouselLeftArrow.svg)");
  }, [arrowClass]);

  const leftArrowClick = () => {
    setArrowClass(() => ({
      class: swiperLeftArrowRef.current.classList,
    }));
  };

  const rightArrowClick = () => {
    setArrowClass(() => ({
      class: swiperRightArrowRef.current.classList,
    }));
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: swiperLeftArrowRef.current,
        nextEl: swiperRightArrowRef.current,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperLeftArrowRef.current;
        swiper.params.navigation.nextEl = swiperRightArrowRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      allowTouchMove={false}
      speed={800}
      spaceBetween={10}
      slidesPerView={3}
      className={classes.carouselSwiper}
    >
      <SwiperSlide className={classes.swiperSlide}>
        <Card />
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Card />
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Card />
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Card />
      </SwiperSlide>
      <div className={classes.leftArrowBehind}>
        <div
          className={classes.swiperLeftArrow}
          ref={swiperLeftArrowRef}
          onClick={leftArrowClick}
        ></div>
      </div>
      <div className={classes.rightArrowBehind}>
        <div
          className={classes.swiperRightArrow}
          ref={swiperRightArrowRef}
          onClick={rightArrowClick}
        ></div>
      </div>
    </Swiper>
  );
}

export default Carousel;
