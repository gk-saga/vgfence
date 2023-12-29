import React from "react";
import { Header } from "../../components/Layout/Inc/Header";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Layout/Inc/Footer";
import { UnderConstruction } from "../../components/Layout/UnderConstruction";
import { IntroTemporary } from "./IntroTemporary";
import { mockdata } from "../../utils/constant";
import { KeyFeature } from "../Home/KeyFeature";
import _ from "lodash";



export const TemporaryFence = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <IntroTemporary/>
      <Footer/>
    </>
  );
};
