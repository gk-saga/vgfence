import { Carousel } from "antd";
import React, { useRef } from "react";

const slides = [
  {
    id: 1,
    imageUrl: 'assets/img/banner/vg_banner.jpg',
    // content:'VG Fence Products a Premier Manufacture'
  },
  {
    id: 2,
    imageUrl: "assets/img/banner/banner_2.jpg",
  },
  {
    id: 3,
    imageUrl: "assets/img/banner/banner_3.jpg",
  },
];

const Slider = () => {
  const carouselRef = useRef(null);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // const handleNext = () => {
  //   carouselRef.current.next();
  // };

  // const handlePrev = () => {
  //   carouselRef.current.prev();
  // };

  return (
    <>
      <Carousel
        afterChange={onChange}
        autoplay
        ref={carouselRef}
        // prevArrow={<div className="prevArrow" onClick={handlePrev}></div>}
        // nextArrow={<div className="nextArrow" onClick={handleNext}></div>}
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              {slide.content}
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

const contentStyle = {
  margin: 0,
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
};

export default Slider;
