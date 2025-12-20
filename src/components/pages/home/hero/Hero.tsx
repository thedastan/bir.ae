"use client";

import React from "react";
import hero from "@/assets/images/hero.png";
import hero_gradient from "@/assets/images/hero-gradient.png";
import Image from "next/image";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import Button from "@/components/ui/button/Button";

import lattice from "@/assets/images/lattice.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Фоновое изображение */}
      <Image
        src={hero}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0">
        <Image
          src={hero_gradient}
          alt="Gradient overlay"
          fill
          className="object-cover"
        />
      </div>

      {/* Контент (заголовок, кнопки и т.д.) можно добавить сюда */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="">
            <Image src={lattice} alt="img" />
          </div>
          <div className="w-full h-full flex flex-col gap-[100px] md:gap-[50px] items-center justify-center absolute">
            <div className="w-full flex justify-start text-start">
              <Description className="md:w-[400px] w-[280px] text-white md:!text-[24px] !text-[16px]">
                Your Digital Partner for Premium Web & App Experiences
              </Description>
            </div>
            <div className="flex flex-col items-center md:gap-[30px] gap-[100px]">
              <TitleComponent className="text-white md:!text-[147px] !text-[50px] font-[400]">
                B1R DIGITAL
              </TitleComponent>
              <Button className="bg-[#ffffff49] hover:bg-white hover:text-black border-[0.1px] border-[#ffffff] duration-500 !w-[170px] !h-[44px] !rounded-[30px]">
                Book Consultation
              </Button>
            </div>
            <div className="w-full flex justify-end text-end">
              <Description className="md:w-[400px] w-[250px] text-white md:!text-[24px] !text-[16px]">
                We create digital legacies for ambitious brands
              </Description>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
