import React from "react";
import { Header } from "../../components/Layout/Inc/Header";
import Slider from "./Carousel";
import { Footer } from "../../components/Layout/Inc/Footer";
import { About } from "./About";
import { Clients } from "./Clients";
import { Testimonial } from "./Testimonials";
import { Counter } from "../../components/Layout/Counter";
import { Advantage } from "./Advantage";
import { FenceFaq } from "./faq";
import { HelmetComponent } from "../../components/Layout/HelmetComponent";
import _ from "lodash";
import { HomeProduct } from "./HomeProduct";
import { CTA } from "../../components/Layout/CTA";
import { WhyChoose } from "./WhyChoose";
import { Cursor } from "../../components/Layout/Cursor";
import { TestHeader } from "../../components/Layout/Inc/TestHeader";

export const Home = () => {
  return (
    <>
      <HelmetComponent />
      <Header />
      {/* <TestHeader/> */}
      <Slider />
      <About />
     
      <HomeProduct/>
      {/* <Feature /> */}
      {/* <CTA /> */}
      {/* <Portfolio /> */}
      <Advantage />
      {/* <CTA/> */}
     {/* <WhyChoose/> */}
      {/* <Counter /> */}
      {/* <Testimonial /> */}
      {/* <Clients /> */}
      <FenceFaq />
      <Footer />
    </>
  );
};
