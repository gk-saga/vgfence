import React from "react";
import { mockdata } from "../../utils/constant";
import { WhyChoose2 } from "./WhyChoose2";
import _ from "lodash";

export const WhyChoose = () => {
  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div class="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
            <h2 class="section-title-alt bg-white text-center text-secondary px-3">
              Why Choose VG Fence For Your Fencing Supplies?
            </h2>
          </div>
          <div class="container-xxl pb-5">
            <div class="container">
              <div class="row g-4">
                <div className="col-md-4 h-100 text-start p-md-5 pb-3 px-4 px-sm-0 align-self-center ">
                  <p className="mb-0">
                    <h5>At Total Fence, </h5>We supply fence products in Canada
                    and USA following the best business ethics. Also we are
                    committed to adhere and meet our key business objectives.
                  </p>
                </div>
                {_.map(mockdata.operations, (item) => {
                  return <WhyChoose2 {...item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
