import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";
import img from "@/assets/images/what.png";
import img2 from "@/assets/images/what2.png";
import img3 from "@/assets/images/what3.png";
import { Title } from "@/components/ui/text/Title";
import Image from "next/image";

const data = [
  {
    title: "WEB DEVELOPMENT",
    description: "Custom, high-performance websites designed to convert.",
    img: img,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "iOS & Android apps with intuitive UI/UX.",
    img: img2,
  },
  {
    title: "SEO & GOOGLE ADS",
    description: "Traffic growth, conversions & measurable results.",
    img: img3,
  },
];

const Whatwedo = () => {
  return (
    <section className="py-[100px] bg-[#060405] text-white">
      <div className="container">
        <TitleComponent>What We Do</TitleComponent>
        <Description className="font-[300] !text-[24px] md:mt-6 mt-4">
          Full-cycle digital production for your business.
        </Description>

        <div className="mt-12 md:flex hidden flex-col">
          {data.map((el, index) => (
            <div
              key={index}
              className="group w-full border-t border-[#FFFFFF30] flex items-center justify-between transition-colors duration-500"
            >
              <Title className="text-[#ffffff8c] !text-[30px] w-full max-w-[480px] group-hover:text-white transition-colors duration-500">
                {el.title}
              </Title>

              <div className="relative -ml-20 overflow-hidden w-[300px] transition-all duration-500 h-[220px] scale-90 group-hover:scale-110  rotate-[-12deg] group-hover:rotate-0">
                <div className="absolute inset-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100   ">
                  <Image fill src={el.img} alt="img" className="object-cover" />
                </div>
              </div>

              <Description className="!text-[24px] text-[#ffffff8c] w-full max-w-[380px] text-start group-hover:text-white transition-colors duration-500">
                {el.description}
              </Description>
            </div>
          ))}
        </div>

        <div className="flex md:hidden flex-col">
          {data.map((el, index) => (
            <div
              key={index}
              className="w-full border-b py-14 border-[#FFFFFF30] flex flex-col gap-3  "
            >
              <div className="relative  overflow-hidden w-full h-[265px]">
                <Image fill src={el.img} alt="img" className="object-cover" />
              </div>

              <Title className="text-[#ffffff] !text-[24px] w-full max-w-[480px] ">
                {el.title}
              </Title>

              <Description className="!text-[18px] text-[#ffffff8c] text-start  ">
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
