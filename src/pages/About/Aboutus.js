import React from "react";
export const Aboutus = () => {
  return (
    <>
      <div className="container-xxl pb-5 wow fadeInUp" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              class="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div class="about-img position-relative overflow-hidden p-5 pe-0">
                <img class="img-fluid w-100" src="assets/img/fence2.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h6 className="section-title-alt bg-white text-start text-secondary pe-3">
                About Us
              </h6>
              <h1 className="mb-4 text-logo">Welcome to VG Fence</h1>
              <p className="mb-4">
                VG Fence, a registered trademark of Aadhi International, a
                subsidiary of Total Fence Products, stands as a premier
                manufacturer specializing in perimeter fencing solutions and
                bespoke security offerings. VG Fence embarked on a mission to
                revolutionize the fencing industry by introducing innovative,
                high-quality perimeter security solutions.
              </p>
              <p className="mb-4">
                Headquartered in Ontario, Canada, our strategically located
                warehouse enables efficient operations, catering to customers in
                both Canada and America. VG Fence Products prioritizes prompt
                delivery and exceptional service, ensuring clients across these
                regions experience unparalleled quality and support
              </p>

              {/* <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Fence Installation
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Solar/Electric fence
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Fence material supply
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Fence Repairs /AMC
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Gates
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Fabrication
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
