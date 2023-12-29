import React from "react";

export const RentalProduct = () => {
  const SafeGuard = [
    "6'x10' panels are available in galvanized and yellow finishes.",
    "Yellow 6’x10’ panels",
    "Can be tailored to your specific needs.",
    "Large Gauge Fence Made of Welded Wire",
    "High visibility safety yellow paint",
    "Installation does not require any drilling or pinning.",
    "External connectors are used to secure the weights, and extra weights are available.",
    "360 (degree) configuration",
  ];
  const Accessories = [
    "Tee Bars",
    "Sand Bags",
    "Silt Fencing",
    "Privacy Screening ",
    "Warning Signs",
    "Anchors/Pins",
    "Wind Bracing/Supports",
    "Gates",
  ];
  const Gate = [
    "Fence panel Dimensions :  6ft x 10ft (Can be customized to your needs)",
    "Welded steel fence with a heavy gauge",
    "High visibility safety Yellow paint",
    "Internal hook connector (no clamps, bolts, drilling, or pinning needed)",
    "Wide base plates to support temporary fence panels.",
    "Available colors: Yellow.",
  ];
  const AddOns = [
    "Sand Bags",
    "Shovels",
    "Spray Paint – Marking",
    "T-Bars ",
    "Zip Ties",
  ];
  return (
    <div
      className="container-fluid px-0 wow fadeInUp mt-5"
      data-wow-delay="0.2s"
    >
      <div className="sectioncontainer">
        <div className="container pt-5">
          {/* Safeguard  */}
          <div className="row g-5 pb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="">
                <img
                  className="img-fluid "
                  src="assets/img/products/temporary.jpeg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <h5 className="mb-2 mt-3">Temporary Fence Accessories</h5>
                <div className="row">
                  {Accessories.map((item, index) => (
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h1 className="mb-4">Safeguard Barriers</h1>
              <p className="mb-4">
                They are a great way to reduce exposure to your site and avoid
                unauthorized access to safeguard places, property and people.
                These panels are designed specially to secure borders, critical
                infrastructure, and various types of facilities. Just provide us
                the name and logo of your company to display as a signage on the
                security panels.
              </p>
              <h4 className="">Specification</h4>
              <p className="mb-2">
                {" "}
                We have the perimeter panels available in the following sizes
                and colors.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                {SafeGuard.map((item, index) => (
                  <div className="col-sm-12" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-logo me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectioncontainer">
        <div className="container pt-5">
          {/* Gate  */}
          <div className="row g-5 pb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="">
                <img
                  className="img-fluid "
                  src="assets/img/products/temporary.jpeg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h1 className="mb-4">Fence Gate Assemblies</h1>
              <p className="mb-4">
                A fence gate assembly consists of various components like gate
                frames and hinges put together to create a secure entry point in
                a fence.
              </p>
              <h4 className="">Specification</h4>
              <p className="mb-2">
                {" "}
                We have the perimeter panels available in the following sizes
                and colors.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                {Gate.map((item, index) => (
                  <div className="col-sm-12" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-logo me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectioncontainer">
        <div className="container pt-5">
          {/* Screens */}
          <div className="row g-5 pb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="">
                <img
                  className="img-fluid "
                  src="assets/img/products/temporary.jpeg"
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h1 className="mb-4">Privacy Fence Screens </h1>
              <p className="mb-4">
                Privacy Fence Screens create a physical barrier that limits the
                view of the surrounding area, which is highly advantageous for
                gardens in homes especially during events. They are also good
                for properties located in densely populated neighborhoods or on
                busy streets. We provide privacy fence screens made out of high
                quality material that reduces the speed of wind and controls
                dust and debris from entering into your area.
              </p>
              <h4 className="">Specification</h4>

              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-12">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Panel size : 6’x10′ or 4’x10′
                  </p>
                </div>
                <div className="col-sm-12">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-logo me-2"></i>
                    Available colors : Black
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
