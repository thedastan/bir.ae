"use client";
import React from "react";
import Hero from "./hero/Hero";
import Whatwedo from "./what_we_do/Whatwedo";
import About from "./about/About";
import Ourclients from "./our_clients/Our_clients";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Map from "./map/Map";
// import Sliderprojects from "./slider_projects/Sliderprojects";
import Impact from "./impact/Impact";

import "aos/dist/aos.css";
import Aos from "aos";
import MapMabile from "./map/MapMobile";

const HomeComponents = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Whatwedo />
      <About />
      <Impact />
      <Map />
      <MapMabile />
      <Ourclients />
      {/* <Sliderprojects /> */}
      <Contact />
    </>
  );
};

export default HomeComponents;
