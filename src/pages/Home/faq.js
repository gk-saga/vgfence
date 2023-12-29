import _ from "lodash";
import React from "react";
import { Collapse } from "antd";


// import illustration__box from "../../img/svg/bg-pattern-desktop.svg";
// import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
// import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const { Panel } = Collapse;

export const FenceFaq = () => {
  const fenceInstallFaq = [
    {
      question:
        "Can you create custom designs or tailor fences to specific needs? ",
      answer: `Absolutely, we offer customization options to tailor fences according to specific measurements, designs, or materials based on client requirements.`,
    },
    {
      question: "What types of fences does your company manufacture?",
      answer: `We specialize in manufacturing a wide array of fences, including chain link fittings, ornamental iron fittings, and temporary fences. `,
    },
    {
      question: "What materials are typically used in your fence production? ",
      answer:
        "Our fences are crafted using high-quality materials such as galvanized steel, and aluminum",
    },
    {
      question: "What is the typical lead time for ordering and delivery?",
      answer: `Lead times vary based on customization and volume, but we strive for efficient delivery within reasonable timelines.`,
    },
    {
      question:
        "Can you accommodate custom packaging requests or branding for large orders?",
      answer:
        "For large orders or specific requests, we can accommodate custom packaging solutions, including branding or labeling requirements. ",
    },
    {
      question:
        "Do you provide rental services for temporary fence accessories such as augers, tools, or other installation equipment? ",
      answer:
        "Yes, we specialize in offering rental services for temporary fence accessories such as augers and tools exclusively within Ontario, ensuring accessibility for local customers in the region. ",
    },
  ];
  return (
    <>
      <div
        className="container-fluid  wow fadeInUp "
        data-wow-delay="0.1s"
        style={{ visibility: "visible" }}
      >
        <div className="container">
          <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
            <h2 class="section-title-alt bg-white text-center text-secondary px-3">
              Common Questions People Ask Us
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row g-5 justify-content-center align-items-center">
            <div className="col-lg-4">
              <div className="illustration">
                <img
                  className="illustration__woman-desktop"
                  src="assets/img/faq-alter.png"
                  alt="illustration with woman"
                />
                {/* <img
                className="illustration__woman-mobile"
                src={illustration__woman_mobile}
                alt="illustration with woman"
              /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <Collapse accordion size="large" defaultActiveKey={["1"]} expandIconPosition="left" >
                {fenceInstallFaq.map((item, index) => (
                  <Panel header={item.question} key={index + 1}>
                    {item.answer}
                  </Panel>
                ))}  
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
