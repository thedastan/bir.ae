"use client";

import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { useTranslations, useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-[#101010] py-[100px]"
    >
      <div className="container">
        <div
          className={`w-full flex flex-col items-center gap-5`}
          data-aos="fade-up"
        >
          <TitleComponent
            className={`!text-[44px] md:!text-[64px] text-white text-center font-light`}
          >
            {t("title")}
          </TitleComponent>

          <Description
            className={`!text-[28px] md:!text-[44px] text-white text-center font-light md:w-[740px] w-full`}
          >
            {t("description")}
          </Description>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center md:justify-between relative overflow-hidden h-[550px] mt-10 rounded-[12px] bg-black border-[0.1px] border-[#313131]"
        >
          <div className="w-full h-full flex flex-col items-center justify-between absolute md:p-[50px] p-[10px]">
            <div className="flex justify-center items-center w-full">
              <Image
                className="w-[89px] mt-[40px] md:mt-auto"
                src={logo}
                alt="logo"
              />
            </div>

            <div
              className={`flex gap-5 flex-col md:flex-row justify-center md:w-[75%] w-full py-[10px] border-t-[0.1px] border-[#acacac]`}
            >
              <Title
                className={`text-white md:text-[20px] text-[18px] font-[100] md:w-[400px] w-full text-center`}
              >
                {t("video_description")}
              </Title>

              <Title
                className={`text-white md:text-[20px] text-[18px] font-[100] md:w-[400px] w-full text-center`}
              >
                {t("video_description2")}
              </Title>
            </div>
          </div>

          <video
            src="/Sahara.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
