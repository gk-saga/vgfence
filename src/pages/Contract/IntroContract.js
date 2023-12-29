import React from "react";

export const IntroContract = () => {
  return (
    <div className="container-xxl pb-5 wow fadeInUp" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div
            class="col-lg-4 wow fadeIn"
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
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.5s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              Fence Design Services
            </h6>
            <h1 className="mb-4">
              Specialized Contract Manufacturing for Superior Fence Components
            </h1>
            <p className="mb-4">
              At Vg Fence we offer specialized contract manufacturing services
              dedicated to producing high-quality fence components and
              materials. Our extensive manufacturing capabilities are geared
              towards partnering with businesses seeking reliable and precise
              production solutions within the fence industry.
            </p>
            <p className="mb-4">
              With a commitment to excellence, our contract manufacturing
              service caters to customized production requirements. We provide a
              seamless process from design to delivery, leveraging advanced
              technology and expertise to craft top-tier fence components. Our
              quality control measures ensure each manufactured part meets
              stringent industry standards, guaranteeing durability and
              reliability.
            </p>
            <p className="">
              Partner with us for your contract manufacturing needs and benefit
              from our precision manufacturing, timely delivery, and unwavering
              dedication to producing superior fence components that elevate
              your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
