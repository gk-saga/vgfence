import React from "react";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { Header } from "../../components/Layout/Inc/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { UnderConstruction } from "../../components/Layout/UnderConstruction";
import { Footer } from "../../components/Layout/Inc/Footer";
import { VendorForm } from "./VendorForm";

export const Vendor = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <VendorForm/>
      <Footer />
    </>
  );
};
