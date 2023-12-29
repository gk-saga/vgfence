import React from "react";
import { Header } from "../../components/Layout/Inc/Header";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Layout/Inc/Footer";
import { UnderConstruction } from "../../components/Layout/UnderConstruction";

export const Blogs = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <UnderConstruction/>
      <Footer/>
    </>
  );
};
