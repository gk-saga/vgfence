import { Modal } from "antd";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { REACT_APP_SITE_KEY } from "../../../utils/config";
import { MailTwoTone } from "@ant-design/icons";

export const EnquireNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const captchaRef = useRef(null);
  return (
    <>
      <div className="fixed-btn">
        <button
          className="btn btn-primary rounded-0"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "1.3px",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Enquire Now
          <i class="fa fa-envelope  ps-2" aria-hidden="true"></i>
        </button>
      </div>
      <Modal
        style={{ color: "#ffffff" }}
        open={isModalOpen}
        titleFontSize="20"
        centered
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <form className="custom-form" id="contact-form" action="" method="post">
          <h2
            style={{
              marginBottom: "20px",
              fontFamily: "League Spartan, sans-serif",
            }}
          >
            Enquire <span style={{ color: "var(--vg-primary)" }}>Now</span>
          </h2>

          <div class="row">
            <div class="col-lg-12">
              <fieldset className="text-right">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="text"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Your E-mail..."
                  required=""
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="number"
                  name="name"
                  id="name"
                  placeholder="Phone Number..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                {/* <label for="message">Message</label> */}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Share your needs with us..."
                ></textarea>
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <div className="mb-2">
                  <ReCAPTCHA sitekey={REACT_APP_SITE_KEY} ref={captchaRef} />
                </div>
                <button
                  type="submit"
                  id="form-submit"
                  class="orange-button btn btn-primary"
                >
                  Send Message
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
