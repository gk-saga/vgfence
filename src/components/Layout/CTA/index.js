import React from "react";

export const CTA = () => {
  return (
    <>
      <div className="container-fluid py-5 wow fadeInUp mb-5 bg-light mt-5" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5 align-itmes-center">
            <div className="col-lg-8">
                <div className="">
                    <h1 className="">Contact <br/>Full Range Fence Supplies & Fencing Rentals</h1>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="">
                <a class="d-inline-flex align-items-center rounded overflow-hidden border border-primary" href="/contact-us">
                        <span class="btn-lg-square bg-primary" style={{width: '55px', height: '55px', padding: '20px'}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </span>
                        <span class="fs-5 fw-medium mx-4 text-primary">Enquire Now</span>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
