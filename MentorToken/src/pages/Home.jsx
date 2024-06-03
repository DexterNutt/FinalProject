import React from "react";
import { Hero } from "../components/hero/Hero";
import { Partners } from "../components/partners/Partners";
import { Features } from "../components/features/Features";
import { Demo } from "../components/demo/Demo";

export const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Demo />
    </>
  );
};
