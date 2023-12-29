import Item from "antd/es/list/Item";
import React from "react";

export const WhatWe = () => {
  const Accessories = [
    "Quality Craftsmanship",
    "Innovation",
    "Integrity and Reliability",
    "Customer-Centric Approach",
    "Continuous Improvement:",
  ];
  return (
    <>
      <div
        className="container-fluid wow fadeInUp pb-5 mb-5"
        data-wow-delay="0.1s"
        style={{ visibility: "visible" }}
      >
        <div className="container">
          <div className="text-center wow fadeInUp pb-5" data-wow-delay="0.1s">
            <h2 className="section-title-alt bg-white text-center text-secondary px-3">
              Our Core Values
            </h2>
          </div>

          <div className="row g-5 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "bounceInUp",
              }}
            >
              <div className="bg-white rounded service-item shadow-alt w-100 h-100">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon">
                    {/* <i className="fas fa-hotdog fa-3x text-primary mb-4"></i> */}
                    <div class="unit-4 d-flex position-relative pb-4">
                      <div class="unit-4-icon ms-4 mt-3">
                        <img
                          src="assets/img/icon/core3.svg"
                          alt="assets/img/icon/core1.svg"
                          style={{ width: "40px" }}
                        />
                      </div>
                    </div>
                    <h4 className="mb-3">Purpose & Mission</h4>
                    <p className="mb-4">
                      At VG Fence Products, our purpose is to redefine security
                      by engineering innovative fencing solutions. Our mission
                      is to safeguard properties and elevate safety standards
                      through cutting-edge perimeter security, catering to
                      diverse needs with quality and precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "bounceInUp",
              }}
            >
              <div className="bg-white rounded service-item shadow-alt w-100 h-100">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon">
                    <div class="unit-4 d-flex position-relative pb-5">
                      <div class="unit-4-icon ms-4">
                        <img
                          src="assets/img/icon/core1.svg"
                          alt="assets/img/icon/core1.svg"
                          style={{ width: "40px" }}
                        />
                      </div>
                    </div>

                    <h4 className="mb-3">Vision</h4>
                    <p className="mb-4">
                      Our vision is to be the forefront innovators in the
                      fencing industry, setting benchmarks through
                      groundbreaking technology, sustainable practices, and
                      unparalleled customer-centric solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "bounceInUp",
              }}
            >
              <div className="bg-white rounded service-item shadow-alt w-100 h-100">
                <div className="service-content d-flex align-items-center p-4">
                  <div className="service-content-icon">
                    {/* <i className="fas fa-hotdog fa-3x text-primary mb-4"></i> */}
                    <div class="unit-4 d-flex position-relative pb-5">
                      <div class="unit-4-icon ms-4">
                        <img
                          src="assets/img/icon/quality.svg"
                          alt="assets/img/icon/core1.svg"
                          style={{ width: "40px" }}
                        />
                      </div>
                    </div>
                    <h4 className="mb-3">Core Values</h4>

                    {Accessories.map((Item, index) => (
                      <div className="" key={index}>
                        <i class="fa fa-arrow-right text-logo me-2"></i>
                        <span style={{ fontSize: "18px" }}>{Item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
