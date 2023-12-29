import React from "react";

export const CoreValues = () => {
  const coreValueList = [
    {
      title: "Quality Craftsmanship",
      icon: "assets/img/icon/quality.svg",
      description: `Our fencing team is highly skilled to construct and install durable
         fences to help you meet all your fencing needs. We deliver perfect 
         fences irrespective of whether it is commercial or residential projects.`,
    },
    {
      title: "Innovation",
      icon: "assets/img/icon/core4.svg",
      description: `We deploy cutting edge technologies as well as implement novel
       ideas to combine security & style. All fences we design and manufacture comprise the latest technologies to ensure higher security.`,
    },
    {
      title: "Integrity and Reliability",
      icon: "assets/img/icon/core3.svg",
      description: `We perceive that quality lays a strong foundation for any business.
       So we cherry pick the top quality materials to manufacture all types of fences`,
    },
    {
      title: "Customer-Centric Approach",
      icon: "assets/img/icon/core2.svg",
      description: `Customer satisfaction remains to be our constant objective. So,
       we have a strong support team available round the clock and sort out your fence related queries.`,
    },
    {
      title: "Continuous Improvement",
      icon: "assets/img/icon/core1.svg",
      description: `We are open to hear what you say because we believe you mold us every
       single day. Your feedbacks and opinions are significant inputs for our betterment leading us to dominate the fencing industry`,
    },
  ];
  return (
    <div
      className="container-fluid wow fadeInUp pb-5 mb-5"
      data-wow-delay="0.1s"
      style={{ visibility: "visible" }}
    >
      <div className="container">
        {/* <div className="text-center wow fadeInUp pb-5" data-wow-delay="0.1s">
          <h2 className="section-title-alt bg-white text-center text-secondary px-3">
            Our Core Values
          </h2>
        </div> */}
        <div className="row row align-items-stretch">
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate px-5"
            data-aos="fade-up"
          >
            <div className="px-5 py-5  ">
              <h2 className="text-secondary">
                Our Core <br />{" "}
                <span className="section-title-alt bg-white text-start text-secondary pe-3">
                  Values
                </span>
              </h2>
            </div>
          </div>
          {coreValueList.map((item, index) => (
            <div
              class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div class="unit-4 d-flex position-relative">
                <div class="unit-4-icon me-4">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    style={{ width: "40px" }}
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
