import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import Footerpanel from "./Footer";
import About from "./About";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default HomePage;
