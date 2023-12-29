import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


export const Clients = () => {
  const images = [
    "assets/img/client/client (1).jpg",
    "assets/img/client/client (2).jpg",
    "assets/img/client/client (3).jpg",
    "assets/img/client/client (4).jpg",
    "assets/img/client/client (5).jpg",
    "assets/img/client/client (6).jpg",
    "assets/img/client/client (7).jpg",
    "assets/img/client/client (8).jpg",
    "assets/img/client/client (9).jpg",
    "assets/img/client/client (10).jpg",
    "assets/img/client/client (11).jpg",
    "assets/img/client/client (12).jpg",
    "assets/img/client/client (13).jpg",
    "assets/img/client/client (14).jpg",
    "assets/img/client/client (15).jpg",
    "assets/img/client/client (16).jpg",
    "assets/img/client/client (17).jpg",
    "assets/img/client/client (18).jpg",
  ];

  return (
    <div className="container-fluid  wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible" }}>
      <div className="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Valuable
            </h6>
            <h1 class="mb-5">Our Clients</h1>
          </div>
        <div className="bg-white">
          <Carousel
            autoplay
            dots={false}
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
        </div>
      </div>
    </div>
  );
};
