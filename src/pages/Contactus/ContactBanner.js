import React from "react";
import { navigationDetails } from "../../utils/config";
import _ from "lodash";

export const ContactBanner = () => {
  const currentPath = window.location.pathname;
  const bannerImage = _.first(
    _.filter(navigationDetails, (item) => item.path === currentPath)
  )?.image;
  return (
    <div
      class="container-fluid bg-primary contact-page align-items-center justify-content-center"
      style={{
        background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)),url("${bannerImage}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div
          class="row justify-content-center align-items-center"
          style={{ minHeight: "600px" }}
        >
          <div class="col-lg-12 text-left py-5 animated slideInLeft">
            {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb ">
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">
                    Home
                  </a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  contact us
                </li>
              </ol>
            </nav> */}
            <h1 class="text-white  mb-3">
              {" "}
              <span className="text-logo">|</span> Lets Connect, Lets Create
            </h1>
            {/* <p
              className="text-white mb-0"
              style={{ fontSize: "20px", lineHeight: "2" }}
            >
              For all your temporary fencing needs, feel free to get in touch
              with us. Our team at VG Fence is dedicated to providing
              high-quality temporary fencing solutions. Whether you have
              questions, need a quote, or want to discuss your specific project
              requirements, we are here to help.
            </p> */}
            <div class="row">
              <div class="col-lg-4">
                <div class="item email">
                  <img
                    src="assets/img/svg/email.svg"
                    alt=""
                    style={{ maxWidth: "52px" }}
                  />
                  <h6 className="d-inline-block">
                    info@vgfenceproducts.com
                    <br />
                    <span>Business Email</span>
                  </h6>
                </div>
              </div>

              <div class="col-lg-4 mt-0">
                <div class="item phone mb-0">
                  <img
                    src="assets/img/svg/call.svg"
                    alt=""
                    style={{ maxWidth: "52px" }}
                  />
                  <h6>
                    +1 226-888-7999
                    <br />
                    <span>Phone Number</span>
                  </h6>
                </div>
              </div>
              <div class="col-lg-4 ">
                <div class="item phone mb-0">
                  <img
                    src="assets/img/svg/approved.svg"
                    alt=""
                    style={{ maxWidth: "52px" }}
                  />
                  <h6>
                    We're Available
                    <br />
                    <span>(Mon-Fri, 8AM – 4PM)</span> -
                    <span>(Sat-Sun, By Appoinment Only)</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
