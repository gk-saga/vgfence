import React from "react";
export const IntroTemporary = () => {
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
              <h1 className="mb-4 text-logo">Temporary Fence Sales</h1>
              <p className="mb-4">
                All temporary fence sale that we sell are made of
                high quality materials making them more durable and reliable.
                You can buy fence from VG fence at more affordable
                rates. We install tailored temporary fences in your site to meet
                all of your custom requirements. We mainly focus on temporary fence options for sale
                and we do provide temporary fences for rent based on demand and
                enquiry.
              </p>
              <h5 className="mb-2">Panel specification</h5>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-12">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Fence panel, one steel feet and one top pin Height:
                    1800mm[72"]
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Width: 2900mm[114"]
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Vertical Frame: 30*30*1.6mm
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Horizontal Frame: 25*25*1.6mm
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Horizontal Bracing: 20*20*1.2mm 
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Wire diameter: 3.8mm
                  </p>
                </div><div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Mesh opening: 50*200mm
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Steel feet: 800 *100 *8mm
                  </p>
                </div>
              </div>
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
