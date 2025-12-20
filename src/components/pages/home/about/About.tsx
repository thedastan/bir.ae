import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
// import light from "@/assets/images/light.png";
import light from "@/assets/images/light2.png";

const About = () => {
  return (
    <section className="bg-[#101010] py-[100px]">
      <div className="container">
        <div className="w-full flex flex-col items-center gap-5">
          <TitleComponent className="!text-[44px] md:!text-[64px] text-[#FFFFFF] text-center font-light">
            About Our Studio
          </TitleComponent>
          <Description className="!text-[32px] md:!text-[44px] text-[#FFFFFF] text-center font-light md:w-[740px] w-full">
            We are a digital studio specializing in web and mobile development,
            UX/UI design, and digital marketing.
          </Description>
        </div>
        <div className="flex flex-col items-center justify-center md:justify-between relative overflow-hidden h-[550px] mt-10 rounded-[12px] bg-black border-[0.1px] border-[#313131]">
          <div className="w-full h-full flex flex-col items-center justify-between absolute p-[50px]">
            <div className="flex flex-col md:flex-row h-[50%] md:h-0 justify-between items-center w-full">
              <div className="w-[81px] h-[44px] hidden md:flex"></div>
              <Image className="" src={logo} alt="img" />
              <Button className="!bg-[#2D2D2D] text-white !w-[81px] h-[44px] !rounded-[20px]">
                Video
              </Button>
            </div>
            <div className="flex gap-5 flex-col md:flex-row justify-center md:w-[75%] w-full border-t-[0.1px] border-[#5e5e5e]">
              <Title className="text-white text-[20px] font-[100] md:w-[400px] w-full text-center">
                Our approach combines aesthetics, technology, and strategy.
              </Title>
              <Title className="text-white text-[20px] font-[100]  md:w-[400px] w-full text-center">
                Operations in UAE, Switzerland, USA, Kyrgyzstan & more.
              </Title>
            </div>
          </div>
          <div className="w-[1200px] mt-[50px] mr-[200px]">
            <Image className="w-full h-full" src={light} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
