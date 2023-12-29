import React from "react";
import OwlCarousel from "react-owl-carousel";
import { TestimonailsData } from "./TestimonailsData";
import _ from "lodash";
import { mockdata } from "../../utils/constant";

export const Testimonial = () => {
  const carouselOptions = {
    items: 3,
    autoplay: true,
    loop: true,
    nav: true, // Enable navigation arrows
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ], // Customize navigation arrow icons
    // Add more configuration options as needed
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,   
      },
    },
  };
 
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 class="mb-5">Our Clients</h1>
          </div>
          <div
            className="owl-carousel project-carousel wow fadeInUp owl-loaded owl-drag"
            data-wow-delay="0.3s"
          >
            <OwlCarousel {...carouselOptions}>
            {_.map(mockdata.testmonials, (item) => {
                  return <TestimonailsData {...item} />;
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};
