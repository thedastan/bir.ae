import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
// import light from "@/assets/images/light.png";
import light from "@/assets/images/light2.png";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section className="bg-[#101010] py-[100px]">
      <div className="container">
        <div
          className="w-full flex flex-col items-center gap-5"
          data-aos="fade-up"
        >
          <TitleComponent className="!text-[44px] md:!text-[64px] text-[#FFFFFF] text-center font-light">
            {t("title")}
          </TitleComponent>
          <Description className="!text-[28px] md:!text-[44px] text-[#FFFFFF] text-center font-light md:w-[740px] w-full">
            {t("description")}
          </Description>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center md:justify-between relative overflow-hidden h-[550px] mt-10 rounded-[12px] bg-black border-[0.1px] border-[#313131]"
        >
          <div className="w-full h-full flex flex-col items-center justify-between absolute md:p-[50px] p-[10px]">
            <div className="flex flex-col md:flex-row  justify-center items-center w-full">
              {/* <div className="w-[81px] h-[44px] hidden md:flex"></div> */}
              <Image
                className="w-[89px] mt-[40px] md:mt-auto"
                src={logo}
                alt="img"
              />
            </div>
            <div className="flex gap-5 flex-col md:flex-row justify-center md:w-[75%] w-full py-[10px] border-t-[0.1px] border-[#acacac]">
              <Title className="text-white md:text-[20px] text-[18px] font-[100] md:w-[400px] w-full text-center">
                {t("video_description")}
              </Title>
              <Title className="text-white md:text-[20px] text-[18px] font-[100] md:w-[400px] w-full text-center">
                {t("video_description2")}
              </Title>
            </div>
          </div>
          {/* <div className="w-[1200px] mt-[50px] mr-[200px]">
            <Image className="w-full h-full" src={light} alt="img" />
          </div> */}
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
