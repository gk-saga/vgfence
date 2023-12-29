import Lottie from "lottie-react";
import React from "react";
import jsonFile from '../../../json/under.json'

export const UnderConstruction = () => {
  return (
    <div className="container-xxl wow fadeInUp" data-wow-delay="0.2s">
      <div className="container ">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 mx-auto">
            {/* <img src="assets/img/page-under.jpg" alt="under" /> */}
            <Lottie animationData={jsonFile} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
