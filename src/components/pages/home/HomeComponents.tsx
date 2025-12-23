import React from "react";
import Hero from "./hero/Hero";
import Whatwedo from "./what_we_do/Whatwedo";
import About from "./about/About";
import Ourclients from "./our_clients/Our_clients";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Map from "./map/Map";
import Sliderprojects from "./slider_projects/Sliderprojects";
import Impact from "./impact/Impact";

const HomeComponents = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Whatwedo />
      <About />
      <Impact />
      <Map />
      <Ourclients />
      <Sliderprojects />
      <Contact />
    </>
  );
};

export default HomeComponents;
