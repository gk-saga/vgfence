import React from "react";
import "./footer.css";
import { SocialLinks } from "../SocialLinks";
import { EnquireNow } from "../EnquireNow";
import { mockdata } from "../../../utils/constant";
import { concat } from "lodash";
export const Footer = () => {
  const products = [
    {
      name: "Temporary Fence Panels",
      path: "/temporary-fence",
    },
    {
      name: "Rental",
      path: "/rental",
    },
  ];

  const serviceFooter = [
    {
      name: "Blogs",
      path: "#",
    },
    {
      name: "Careers",
      path: "#",
    },
    {
      name: "Became A Vendor",
      path: "/vendor",
    },
  ];
  const combaineNavigation = concat(
    mockdata.service || [],
    mockdata.products || [],
    mockdata.Rental || []
  );

  return (
    <>
      <footer
        className="footer-section"
        style={{
          backgroundColor: "#f5f5f5",
          marginTop: "100px",
          minHeight: "100px",
        }}
      >
        <div className="container relative">
          <div className="row mb-5">
            <div className="col-lg-5">
              <div className="mb-4 footer-logo-wrap ">
                <a href="#" className="footer-logo">
                  <img
                    src="assets/img/logo/vg_logo.png"
                    alt="footer-logo"
                    style={{ width: "200px" }}
                    className="rounded"
                  />
                </a>
              </div>
              <p className="mb-4 fw-normal lh-base">
                VG Fence, a Brand Name of Aadhi International, stands as a
                premier manufacturer specializing in perimeter fencing solutions
                and bespoke security offerings.VG Fence embarked on a mission to
                revolutionize the fencing industry by introducing innovative,
                high-quality perimeter security solutions.
              </p>
            </div>

            <div className="col-lg-4" style={{ fontSize: "17px" }}>
              <h5>Products & Service</h5>
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-6">
                  {/* <div className="row">
                    {products.map((item, index) => (
                      <div class="col-sm-12" key={index}>
                        <p class="mb-0">
                          <i class="fa fa-arrow-right text-primary me-2"></i>
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div> */}
                  <ul className="list-unstyled">
                    {mockdata.products.map((item, index) => (
                      <li key={index}>
                        <a href={item.path}>{item.title}</a>
                      </li>
                    ))}
                    {mockdata.service.map((item, index) => (
                      <li key={index}>
                        <a href={item.path}>{item.title}</a>
                      </li>
                    ))} 
                    {mockdata.Rental.map((item, index) => (
                      <li key={index}>
                        <a href={item.path}>Rental</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-6">
                  <ul className="list-unstyled">
                    {serviceFooter.map((item, index) => (
                      <li key={index}>
                        <a href={item.path}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3" style={{ fontSize: "17px" }}>
              <h5 style={{ marginBottom: "35px" }}>Address</h5>
              <div className="">
                125 Earl Thompson Rd Ayr,
                <br /> ON N0B 1E0 <br />
                Phone : 226-888-7999
                <br /> Email: info@vgfenceproducts.com
              </div>
              <div className="d-flex">
                <ul
                  className="social-links d-flex mt-3 "
                  style={{ fontSize: "20px", gap: "20px" }}
                >
                  <SocialLinks />
                </ul>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start fw-normal lh-base">
                  Copyright &copy;. All Rights Reserved. &mdash; Designed by{" "}
                  <a href="https://webnox.in" target="_blank">
                    webnox.in
                  </a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <EnquireNow />
      {/* <Floating /> */}
    </>
  );
};
