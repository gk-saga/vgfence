import React from "react";

export const DesignIntro = () => {
  return (
    <div className="container-xxl wow fadeInUp" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100 rounded"
                  src="assets/img/fence2.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div> */}
          <div
            class="col-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <div class="about-img position-relative overflow-hidden p-5 pe-0">
              <img class="img-fluid w-100" src="assets/img/design.jpg" />
            </div>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
            <h6 className="section-title-alt bg-white text-start text-secondary pe-3">
              Fence Design Services
            </h6>
            <h2 className="mb-4 text-logo">
              Precision Blueprints Transform Ideas Into Impeccable Fencing
            </h2>
            <p className="mb-4">
              At VG our Fence Design Services are tailored exclusively for the
              fencing industry. We specialize in crafting precise and detailed
              blueprints that form the backbone of superior fencing projects.
            </p>
            <p className="mb-4">
              Our Fence Design team is adept at translating ideas into
              meticulous plans, ensuring every dimension and specification is
              accurately represented. Whether it's for ornamental, security, or
              industrial fencing, our designs encompass the intricacies required
              for flawless execution.
            </p>
            <p className="mb-4">
              With a focus on innovation and precision, our Fence experts employ
              cutting-edge technology to create comprehensive blueprints. Our
              commitment to excellence guarantees that our designs not only meet
              but exceed industry standards, empowering your fencing projects
              with vision and accuracy.
            </p>
            <p>Partner with us for Fence Design Services and harness the power of detailed planning to elevate the execution and success of your fencing projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
