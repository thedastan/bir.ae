import React from "react";
import Hero from "./hero/Hero";
import Inpact from "./impact/Impact";
import Whatwedo from "./what_we_do/Whatwedo";
import About from "./about/About";
import Ourclients from "./our_clients/Our_clients";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

const HomeComponents = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Whatwedo />
      <About />
      <Inpact />
      <Ourclients />
      <Contact />
    </>
  );
};

export default HomeComponents;
