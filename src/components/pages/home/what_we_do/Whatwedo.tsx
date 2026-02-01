"use client";

import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";
import img from "@/assets/images/what.png";
import img2 from "@/assets/images/what2.png";
import img3 from "@/assets/images/what3.png";
import { Title } from "@/components/ui/text/Title";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Whatwedo = () => {
  const t = useTranslations("What");
  const locale = useLocale();
  const isRTL = locale === "ar"; // арабский язык

  const data = [
    { title: t("web"), description: t("web_description"), img: img },
    { title: t("mobile"), description: t("mobile_description"), img: img2 },
    {
      title: t("seo_google"),
      description: t("seo_google_descrioption"),
      img: img3,
    },
    {
      title: t("chatbot"),
      description: t("chatbot_desc"),
      img: img,
    },
    {
      title: t("ai"),
      description: t("ai_desc"),
      img: img2,
    },
  ];

  return (
    <section
      id="service"
      className="py-[100px] bg-[#060405] text-white"
      dir={isRTL ? "rtl" : "ltr"} // направление текста
    >
      <div className="container">
        {/* Заголовок */}
        <TitleComponent className={isRTL ? "text-right" : "text-left"}>
          {t("title")}
        </TitleComponent>

        <Description
          className={`font-[300] !text-[24px] md:mt-6 mt-4 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("description")}
        </Description>

        {/* Desktop */}
        <div className="mt-12 md:flex hidden flex-col gap-8">
          {data.map((el, index) => (
            <div
              key={index}
              className={`group w-full border-t border-[#FFFFFF30] flex items-center justify-between transition-colors duration-500 ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Title
                className={`text-[#ffffff8c] !text-[30px] w-full max-w-[480px] group-hover:text-white transition-colors duration-500 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {el.title}
              </Title>

              <div className="relative overflow-hidden w-[300px] h-[220px] -ml-20 transition-all duration-500 scale-90 group-hover:scale-110 rotate-[-12deg] group-hover:rotate-0">
                <div className="absolute inset-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                  <Image fill src={el.img} alt="img" className="object-cover" />
                </div>
              </div>

              <Description
                className={`!text-[24px] text-[#ffffff8c] w-full max-w-[380px] group-hover:text-white transition-colors duration-500 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {el.description}
              </Description>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-8">
          {data.map((el, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="w-full border-b py-14 border-[#FFFFFF30] flex flex-col gap-3"
            >
              <div className="relative overflow-hidden w-full h-[265px]">
                <Image fill src={el.img} alt="img" className="object-cover" />
              </div>

              <Title
                className={`${
                  isRTL ? "text-right" : "text-left"
                } text-[#ffffff] !text-[24px] w-full max-w-[480px]`}
              >
                {el.title}
              </Title>

              <Description
                className={`${
                  isRTL ? "text-right" : "text-left"
                } !text-[18px] text-[#ffffff8c]`}
              >
                {el.description}
              </Description>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
