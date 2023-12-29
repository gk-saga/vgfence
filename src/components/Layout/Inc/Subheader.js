import React from "react";
import { SocialLinks } from "../SocialLinks";

export const Subheader = () => {
  return (
    <div className="sub-header">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="info">
              <li>
                <i className="fa fa-envelope"></i> info@vgfenceproducts.com
              </li>
              {/* <li>
              <i className="fa fa-map"></i> 125 Earl Thompson Rd Ayr, ON N0B 1E0
            </li> */}
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <ul className="social-links">
              <SocialLinks />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
