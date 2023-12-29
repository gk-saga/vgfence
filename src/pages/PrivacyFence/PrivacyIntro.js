import React from "react";

export const PrivacyIntro = () => {
  return (
    <div className="container-xxl  wow fadeInUp" data-wow-delay="0.2s">
      <div className="container pt-5">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className=" h-100 ">
              <img
                className="img-fluid rounded"
                src="assets/img/products/temporary.jpeg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h6 className="section-title-alt bg-white text-start text-secondary pe-3">
              VG Fence
            </h6>
            <h1 className="mb-4 text-logo">Privacy Fence Screens</h1>
            <p className="mb-4">
              They are an excellent solution to create a physical barrier that
              limits the view of the surrounding area, which is highly
              advantageous for gardens in homes especially during events. They
              are also good for properties located in densely populated
              neighborhoods or on busy streets. They are made with tightly woven
              polyethylene fabric to prevent your property from being visible to
              trespassers.
            </p>
            <p className="mb-4">
              We provide privacy screens in different sizes made out of high
              quality mesh that reduces the speed of wind and controls dust and
              debris from entering into your area. Also privacy screens are
              completely UV resistant and safeguard your property from harsh
              ultraviolet rays from the sun. Speak with us to install privacy
              screens for your property.
            </p>
            <h5 className="mb-2">Specifications</h5>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Panel size : 6’x10′ or 4’x10′
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Available colors : Black
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Fabric : Specify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
