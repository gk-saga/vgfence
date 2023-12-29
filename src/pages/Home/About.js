import React from "react";
import "./index.css";
export const About = () => {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.2s">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/world map.jpg"
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              {/* <h6 className="section-title bg-white text-start text-primary pe-3">
                VG Fence
              </h6> */}
              <h1 className="mb-4 text-secondary">About the Company</h1>
              <p className="mb-4">
                VG Fence, a premier manufacturer renowned for its expertise in
                perimeter fencing solutions and specialized offerings in
                customized fencing and top-notch security solutions. VG Fence
                Products embarked on a mission to revolutionize the fencing
                industry by introducing innovative and high-quality perimeter
                security solutions.
              </p>
              <p>
                {" "}
                Operating from a strategically located warehouse in Ontario,
                Canada, VG Fence Products efficiently serves customers in both
                Canada and America, ensuring prompt delivery and exceptional
                service to clients across these regions.
              </p>

              {/* <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Perimeter and Security Panels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Fencing gate assemblies
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Privacy fence screens
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Temporary tree protection fence
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Temporary Fence Add ons
                  </p>
                </div>
              </div> */}
              {/* <a className="btn btn-primary py-2 px-4 mt-2 btn-sm" href="">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
