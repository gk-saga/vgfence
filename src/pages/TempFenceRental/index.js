import React from "react";
import { Header } from "../../components/Layout/Inc/Header";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Layout/Inc/Footer";
import _ from "lodash";
import { mockdata } from "../../utils/constant";
import { KeyFeature } from "../Home/KeyFeature";
import { RentalTemporary } from "./RentalTemporary";
import { RentalProduct } from "./RentalProduct";

export const TempFenceRental = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <RentalTemporary/>
      <section id="product">
        <div className="container px-3 mb-5">
          <div className="row mb-4 tempKey">
            <div className="col-md-4 h-100 text-center text-md-start p-0 p-md-5 pb-3 align-self-center">
              <h6 className="section-title-alt bg-white text-start text-secondary pe-3 text-uppercase">
                key features
              </h6>
              <h2 className="mt-3 text-logo">Temporary Fence</h2>
              <p className="mb-0">
                where our temporary fence solutions are designed with your
                diverse needs in mind. Explore the key features that set our
                temporary fences apart:{" "}
              </p>
            </div>

            {_.map(mockdata.keyFeatures, (item) => {
              return <KeyFeature {...item} />;
            })}
          </div>
        </div>
      </section>
      <RentalProduct/>
      <Footer />
    </>
  );
};
