import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "../Card/Card";

import classes from "./carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  const swiperLeftArrowRef = useRef(null);
  const swiperRightArrowRef = useRef(null);

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
        <div className={classes.swiperLeftArrow} ref={swiperLeftArrowRef}></div>
      </div>
      <div className={classes.rightArrowBehind}>
        <div
          className={classes.swiperRightArrow}
          ref={swiperRightArrowRef}
        ></div>
      </div>
    </Swiper>
  );
}

export default Carousel;
