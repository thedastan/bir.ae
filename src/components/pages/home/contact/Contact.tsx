import Image from "next/image";
import React from "react";
import light from "@/assets/images/light2.png";
import light2 from "@/assets/images/light4.png";
import lattice1 from "@/assets/images/lattice2.png";
import lattice2 from "@/assets/images/lattice3.png";
import lattice3 from "@/assets/images/lattice.png";
import Button from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section className="relative flex justify-center items-center h-[710px] md:h-[734]">
      <div className="w-full h-full overflow-hidden flex flex-col md:flex-row justify-start md:justify-between items-center relative">
        <div className="w-full h-full flex items-center">
          <Image className="hidden md:flex" src={lattice2} alt="img" />
        </div>
        <div className="absolute md:w-full flex justify-center items-center">
          <Image className="hidden md:flex ml-[-200px]" src={light} alt="img" />
          <Image className="md:hidden flex w-[500px]" src={light2} alt="img" />
        </div>
        <div className="w-full h-full flex justify-end items-end md:items-center mt-[500px] md:mt-auto">
          <Image className="hidden md:flex" src={lattice1} alt="img" />
          <Image className="md:hidden flex" src={lattice3} alt="img" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[40px] absolute z-10">
        <TitleComponent className="text-white text-center">
          {t("title")}
        </TitleComponent>
        <div className="flex flex-col gap-[20px]">
          <input
            className="border-[0.1px] border-[#313131] w-[300px] h-[64px] rounded-[40px] bg-[#000000] p-[15px] text-white outline-none text-[16px]"
            type="text"
            placeholder={t("name")}
          />
          <input
            className="border-[0.1px] border-[#313131] w-[300px] h-[64px] rounded-[40px] bg-[#000000] p-[15px] text-white outline-none text-[16px]"
            type="number"
            placeholder={t("phone")}
          />
          <textarea
            className="w-[300px] h-[80px] bg-black rounded-[24px] outline-none p-[15px] text-white border-[0.1px] border-[#313131]"
            placeholder={t("message")}
          ></textarea>

          <button className="bg-white !text-black w-[300px] h-[44px] !rounded-[40px]">
            {t("send")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
