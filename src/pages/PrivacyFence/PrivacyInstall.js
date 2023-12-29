import React from "react";

export const PrivacyInstall = () => {
  return (
    <div className="container-xxl pt-5 wow fadeInUp" data-wow-delay="0.2s">
      <div className="container pt-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            {/* <h6 className="section-title-alt bg-white text-start text-secondary pe-3">
              VG Fence
            </h6> */}
            <h1 className="mb-4 text-logo">Installation and Applications</h1>
            <p className="mb-4">
              Privacy fence screens are normally installed on chain link fences
              to prevent strangers from entering into your property. Plastic
              tie-downs are used to keep the screen attached firmly to the
              fence. In some circumstances, privacy fence screens are tied to
              temporary wood or steel stakes buried into the ground when you
              need to ensure that there is a support to anchor the post firmly
              into the ground.
            </p>
            <h5 className="mb-2">Applications </h5>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Balconies
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Backyards
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-logo me-2"></i>
                  Patios
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
