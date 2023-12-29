import React from "react";

export const RentalTemporary = () => {
  const ListItem = [
    "Perimeter and security panels",
    "Fencing gate assemblies",
    "Privacy fence screens",
    "Temporary protection fence",
    "Commercial Fence Rental",
    "Industrial Fence Rental  ",
    "Residential Fence Rental",
    "Special Events & Crowd Control",
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.2s">
      <div className="container pt-5">
        <div className="row g-5 pb-5">
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
            <h6 className="section-title-alt bg-white text-start text-secondary pe-3 mb-2 text-uppercase">
              VG Fence
            </h6>
            <h2 className="mb-4 text-logo">Temporary Fence Rentals</h2>
            <p className="mb-4">
              Temporary fence rentals play a crucial role in various industries
              and events where crowd management and security are paramount. If
              you are seeking to acquire temporary fences or rentals for your
              long-term projects, VG Fence Products is your go-to solution.
              Specializing in a diverse range of temporary fencing solutions, VG
              Fence Products offers:
            </p>
           
            <div className="row gy-2 gx-4 mb-4">
              {ListItem.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-5 py-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            {/* <h6 className="section-title-alt bg-white text-start text-secondary pe-3">
              EMERGENCY AND DISASTER RESTORATION
            </h6> */}
            <h3 className="mb-3 text-logo">Emergency and Disaster Restoration</h3>
            <p className="mb-4">
              All temporary fence sale and rentals that we sell are made of high
              quality materials making them more durable and reliable. You can
              buy fence rentals from VG fence at more affordable rates. We
              install tailored temporary fences in your site to meet all of your
              custom requirements. No matter even if you decided to set up
              fencing only at the last moment, our experts can deliver and
              assemble lightweight yet durable fences anytime, anywhere. 
            </p>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className=" h-100">
              <img
                className="img-fluid rounded w-100 h-100"
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
