import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "./Brands";
import { Aboutus } from "./Aboutus";
import { WhatWe } from "./WhatWe";
import { Header } from "../../components/Layout/Inc/Header";
import { Footer } from "../../components/Layout/Inc/Footer";
import _ from "lodash";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { CoreValues } from "./CoreValues";

export const AboutPage = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <Aboutus />
      <WhatWe />
      {/* <CoreValues/> */}
      {/* <Brands /> */}
      <Footer />
    </>
  );
};
