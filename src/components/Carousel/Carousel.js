import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Card from "../Card/Card";
import { Projects } from "../Projects";
import RightArrow from "../../assets/Images/carouselRightArrow.svg";
import RightArrowDisabled from "../../assets/Images/carouselRightArrowDisabled.svg";
import LeftArrow from "../../assets/Images/carouselLeftArrow.svg";
import LeftArrowDisabled from "../../assets/Images/carouselLeftArrowDisabled.svg";
import WindowWidthContext from "../../context/WindowWidthContext";

import classes from "./carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel() {
  const { windowWidth } = useContext(WindowWidthContext);
  const swiperLeftArrowRef = useRef(null);
  const swiperRightArrowRef = useRef(null);
  const [arrowClass, setArrowClass] = useState([]);
  const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState(false);
  const [isHoveringRightArrow, setIsHoveringRightArrow] = useState(false);

  useEffect(() => {
    if (windowWidth >= 768) {
      if (
        swiperLeftArrowRef.current.classList.contains("swiper-button-disabled")
      ) {
        swiperLeftArrowRef.current.style.backgroundImage = `url(${LeftArrowDisabled})`;
        swiperLeftArrowRef.current.style.border = "1px solid #b2b3ba";
      } else {
        swiperLeftArrowRef.current.style.backgroundImage = `url(${LeftArrow})`;
        swiperLeftArrowRef.current.style.border = "1px solid #0a1128";
        if (isHoveringLeftArrow)
          swiperLeftArrowRef.current.style.transform = "translateX(-3px)";
      }

      if (!isHoveringLeftArrow)
        swiperLeftArrowRef.current.style.transform = "translateX(3px)";

      if (
        swiperRightArrowRef.current.classList.contains("swiper-button-disabled")
      ) {
        swiperRightArrowRef.current.style.backgroundImage = `url(${RightArrowDisabled})`;
        swiperRightArrowRef.current.style.border = "1px solid #b2b3ba";
      } else {
        swiperRightArrowRef.current.style.backgroundImage = `url(${RightArrow})`;
        swiperRightArrowRef.current.style.border = "1px solid #0a1128";
        if (isHoveringRightArrow)
          swiperRightArrowRef.current.style.transform = "translateX(3px)";
      }

      if (!isHoveringRightArrow)
        swiperRightArrowRef.current.style.transform = "translateX(-3px)";
    }
  }, [arrowClass, isHoveringRightArrow, isHoveringLeftArrow, windowWidth]);

  const handleMouseEnterLeftArrow = () => {
    setIsHoveringLeftArrow(true);
  };

  const handleMouseLeaveLeftArrow = () => {
    setIsHoveringLeftArrow(false);
  };

  const handleMouseEnterRightArrow = () => {
    setIsHoveringRightArrow(true);
  };

  const handleMouseLeaveRightArrow = () => {
    setIsHoveringRightArrow(false);
  };

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
    <div className={classes.carouselWrapper}>
      <Swiper
        modules={windowWidth > 768 ? [Navigation] : [Navigation, Pagination]}
        navigation={{
          prevEl: swiperLeftArrowRef.current,
          nextEl: swiperRightArrowRef.current,
        }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperLeftArrowRef.current;
          swiper.params.navigation.nextEl = swiperRightArrowRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        allowTouchMove={true}
        speed={800}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            allowTouchMove: false,
            modules: [Navigation],
          },
        }}
        className={classes.carouselSwiper}
      >
        {Projects.map((project) => {
          return (
            <SwiperSlide className={classes.swiperSlide} key={project.id}>
              <Card
                title={project.title}
                description={project.description}
                extendedDescription={project.extendedDescription}
                image={project.image}
                categories={project.categories}
                links={project.links}
                comingSoon={project.comingSoon}
              />
            </SwiperSlide>
          );
        })}
        {windowWidth >= 768 ? (
          <>
            <div className={classes.leftArrowBehind}>
              <div
                className={classes.swiperLeftArrow}
                ref={swiperLeftArrowRef}
                onClick={leftArrowClick}
                onMouseEnter={handleMouseEnterLeftArrow}
                onMouseLeave={handleMouseLeaveLeftArrow}
              ></div>
            </div>
            <div className={classes.rightArrowBehind}>
              <div
                className={classes.swiperRightArrow}
                ref={swiperRightArrowRef}
                onClick={rightArrowClick}
                onMouseEnter={handleMouseEnterRightArrow}
                onMouseLeave={handleMouseLeaveRightArrow}
              ></div>
            </div>
          </>
        ) : null}
      </Swiper>
    </div>
  );
}

export default Carousel;
