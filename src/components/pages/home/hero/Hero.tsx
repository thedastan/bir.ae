"use client";

import React, { useEffect, useRef } from "react";
import hero_gradient from "@/assets/images/hero-gradient.png";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import Button from "@/components/ui/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Hero");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrollY = window.scrollY;
            bgRef.current.style.transform = `translate3d(0, ${
              scrollY * 0.4
            }px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="w-full h-[100vh] overflow-hidden relative">
      <video
        src="/Sahara.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <div
        className="w-full h-[100vh] bg-[#00000021] absolute top-0 left-0 flex justify-center items-center"
        style={{
          backgroundImage: `url(${hero_gradient.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="container w-full h-full flex flex-col gap-[100px] md:gap-[50px] items-center justify-center absolute">
            <div className="w-full flex justify-start text-start">
              <Description className="md:w-[400px] w-[280px] text-white md:!text-[24px] !text-[16px]">
                {t("title")}
              </Description>
            </div>
            <div className="flex flex-col items-center justify-center md:gap-[30px] gap-[100px]">
              <TitleComponent className="text-white md:!text-[147px] !text-[50px] font-[400]">
                B1R DIGITAL
              </TitleComponent>
              <div className="">
                <Button className="bg-[#ffffff49] hover:bg-white hover:text-black border-[0.1px] border-[#ffffff] duration-500 px-[20px] !h-[44px] !rounded-[30px]">
                  <Link href="#contact">{t("book")}</Link>
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-end text-end">
              <Description className="md:w-[400px] w-[250px] text-white md:!text-[24px] !text-[16px]">
                {t("title2")}
              </Description>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
