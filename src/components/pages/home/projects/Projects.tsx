"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Title } from "@/components/ui/text/Title";
import LinkButton from "@/components/ui/button/LinkButton";

import light from "@/assets/images/light3.png";
import Data from "@/components/data/Data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations("Projects");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const data = Data();

  const displayedData = showAll ? data : data.slice(0, 4);

  return (
    <section id="case" className="py-[100px]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <TitleComponent
          className={`text-white ${isArabic ? "text-right" : "text-left"}`}
        >
          {t("title")}
        </TitleComponent>

        <Description
          className={`text-white w-[250px] mt-[30px] ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("description")}
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-[30px]">
          {displayedData.map((el, index) => (
            <div
              key={`${el.title}-${index}`}
              data-aos="fade-up"
              className="group flex h-[339px] relative overflow-hidden border-[0.1px] border-[#313131] rounded-[12px]"
              style={{
                backgroundImage: `url(${light.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative w-full h-full transition-opacity duration-500 md:opacity-0 group-hover:opacity-100">
                <Image
                  src={el.img}
                  alt="project image"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="flex flex-col justify-between w-full h-full absolute md:p-[30px] p-[20px]">
                <div
                  className={`flex justify-between items-center mb-4 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <Image
                    src={el.logo}
                    alt="logo"
                    className="w-[118px] md:w-[148px] h-[70px] object-contain"
                  />

                  <LinkButton
                    href={el.link}
                    target="_blank"
                    className="
                      !bg-[#2D2D2D] text-white 
                      !w-[150px] md:!w-[145px] h-[44px] !rounded-[20px]
                      group-hover:!bg-white group-hover:text-black
                      transition-colors duration-300
                    "
                  >
                    {t("button")}
                  </LinkButton>
                </div>

                <div>
                  <Title
                    className={`text-white !text-[24px] font-[600] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {el.title}
                  </Title>

                  <Description
                    className={`text-white !text-[16px] md:w-[460px] w-full mt-3 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {el.description}
                  </Description>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all / Hide */}
        <div className="w-full flex justify-center mt-[50px]">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`text-white text-[14px] flex items-center gap-3 hover:text-gray-300 transition-colors ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            {showAll ? t("show") : t("all")}
            {showAll ? (
              <IoIosArrowUp size={18} />
            ) : (
              <IoIosArrowDown size={18} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
