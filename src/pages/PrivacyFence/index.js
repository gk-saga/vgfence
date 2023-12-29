import React from "react";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import { Header } from "../../components/Layout/Inc/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Layout/Inc/Footer";
import { PrivacyIntro } from "./PrivacyIntro";
import { PrivacyInstall } from "./PrivacyInstall";

export const PrivacyFence = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      <Breadcrumbs />
      <PrivacyIntro/>
      <PrivacyInstall/>
      <Footer/>
    </>
  );
};
