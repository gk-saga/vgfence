import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "../../components/Layout/Inc/Header";
import { Footer } from "../../components/Layout/Inc/Footer";
import { Helmet } from "react-helmet";
import _ from "lodash";
import { mockdata } from "../../utils/constant";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { ContactForm } from "./ContactForm";
import { ContactBanner } from "./ContactBanner";
import { FenceFaq } from "../Home/faq";

export const Contactus = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <ContactBanner />
      <div class="contact-page section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="">
               <img src="assets/img/contactform.png" alt="" />
              </div>
              {/* <div className="">
                <p
                  className="mb-3"
                  style={{ fontSize: "20px", lineHeight: "2" }}
                >
                  Contact us today with questions or if you would like a quote
                  for a temporary fence rental project.
                </p>
                <p
                  className="mb-3"
                  style={{ fontSize: "20px", lineHeight: "2" }}
                >
                  If you are contacting us between regular business hours (M-F,
                  7am – 6pm), one of our team members will get back to you
                  within 2-3 hours. If you are contacting us outside of these
                  hours we will respond first thing the next business day.
                </p>
                <p
                  className="mb-3"
                  style={{ fontSize: "20px", lineHeight: "2" }}
                >
                  If this is an emergency, please call us 24 hours a day, 7 days
                  a week at: 226-888-7999.
                </p>
              </div> */}
              {/* <div class="row">
                <div class="col-lg-12">
                  <div class="item phone">
                    <img
                      src="assets/img/icon/phone-icon.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      226-888-7999
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="item email">
                    <img
                      src="assets/img/icon/email-icon.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      info@vgfenceproducts.com
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div> */}
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="container-fluid">
          <div class="col-lg-12">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.185404708238!2d-80.43182!3d43.3281611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c7495e4a80ca1%3A0xf1a993319915b442!2s125%20Earl%20Thompson%20Rd%2C%20Ayr%2C%20ON%20N0B%201E0%2C%20Canada!5e1!3m2!1sen!2sin!4v1702040432401!5m2!1sen!2sin"
                width="100%"
                height="500px"
                frameborder="0"
                style={{
                  border: "0",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
                }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};
