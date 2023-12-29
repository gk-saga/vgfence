import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { REACT_APP_SITE_KEY } from "../../utils/config";

export const VendorForm = () => {
  const captchaRef = useRef(null);
  return (
    <div className="container vendor-page ">
      <div className="row">
        <div className="col-lg-10 mx-auto shadow rounded px-5 py-5">
          <h3 className="text-center" style={{ marginBottom: "40px" }}>
            Vendor, Supplier, Contractor, and Outsource Agent Information Form
            {/* Get A <span style={{ color: "var(--bs-primary)" }}>Quote</span> */}
          </h3>
          <div className="row">
            <div className="col-lg-12">
              <form id="vendor-form" action="" method="post">
                <div className="row">
                  <div className="col-12 mb-4">
                    <p className="test-dark fw-600 fw-bold">
                      Contact Information:{" "}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Company Name..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Website (if applicable):"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>

                  {/* <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <select name="cars" id="cars">
                        <option value="Nature Of Business" selected disabled>
                          Nature Of Business
                        </option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Job Work">Job Work </option>
                        <option value="Trader">Trader</option>
                        <option value="Contractor">Contractor</option>
                      </select>
                    </fieldset>
                  </div>
                </div> */}
                  <div className="col-12 mb-4">
                    <p className="test-dark fw-600 fw-bold">
                      Product/Service Details:{" "}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Type of Fence Products/Services Offered:"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Brief description of Your Product/Services"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Unique Selling Proposition"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12 mb-4">
                    <p className="test-dark fw-600 fw-bold">
                      Business Details:{" "}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="year in Business"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Geographic Area Served"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Certifications or Accreditations (if Any)"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12 mb-4">
                    <p className="test-dark fw-600 fw-bold">
                      Collaboration Interest{" "}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="What makes your Products/services stand out?"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Any Specific goals or expectations from this collaboration?"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="How do you envision partnering with [Your Company Name] to benefit both parties?"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12 mb-4">
                    <p className="test-dark fw-600 fw-bold">
                      Additional information:
                    </p>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="description"
                        id="description"
                        placeholder="Any Other details you'd like to share..."
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 align-items-center" style={{display: 'inline-flex'}}>
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                      required
                      className="w-auto h-auto me-2 mb-0"
                    />
                    <label for="vehicle3" className="c-pointer pt-0">
                      {" "}
                      By submitting this form, you acknowledge that the
                      information provided is accurate and complete to the best
                      of your knowledge.
                    </label>
                  </div>
                  <div className="col-lg-12 mt-5">
                  <ReCAPTCHA sitekey={REACT_APP_SITE_KEY} ref={captchaRef} />
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <fieldset style={{ textAlign: "right" }}>
                        <button
                          type="submit"
                          id="form-submit"
                          class="orange-button btn btn-primary"
                        >
                          Submit
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
