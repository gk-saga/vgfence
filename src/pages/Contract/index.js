import React from "react";
import { Header } from "../../components/Layout/Inc/Header";
import { Footer } from "../../components/Layout/Inc/Footer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { IntroContract } from "./IntroContract";

export const Contract = () => {
  return (
    <>
      <Header />
      <Breadcrumbs/>
      <IntroContract/>
      <Footer />
    </>
  );
};
