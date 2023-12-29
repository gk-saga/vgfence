import React from "react";
import { Carousel } from "antd";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


export const Brands = () => {
    
  const images = [
    "assets/img/brand/brand (1).jpg",
    "assets/img/brand/brand (2).jpg",
    "assets/img/brand/brand (3).jpg",
    "assets/img/brand/brand (4).jpg",
    "assets/img/brand/brand (5).jpg",
    "assets/img/brand/brand (6).jpg",
    "assets/img/brand/brand (7).jpg",
    "assets/img/brand/brand (8).jpg",
  ];

  return (
    <div className="container-fluid  wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible" }}>
      <div className="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
            Quality, Service, Integrity - Our Brand Promise
            </h6>
            <h1 class="mb-5">We Supply the Best Brands</h1>
          </div>
        <div className="bg-white">
          <Carousel
            autoplay
            dots={true}
            arrows={true}
            infinite
            speed={500}
            slidesToShow={6}
            responsive={[
              {
                breakpoint: 1024,  
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
            ]}
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
          >
            {images.map((image, index) => (
              <div key={index} className="focus-alt bg-white">
                <img className="shadow-alt py-2" src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          {/* <Slider {...settings}>
          {images.map((image, index) => (
              <div key={index} className="focus-alt bg-white">
                <img className="shadow-alt py-2" src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </div>
  );
};
