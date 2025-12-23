import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";
import lattice from "@/assets/images/lattice.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Impact = () => {
  const t = useTranslations("Impact");
  //  {t("title")}

  return (
    <section className="py-[100px] bg-black">
      <div className="container">
        <div className="relative flex justify-center h-[120vh] md:h-full">
          <Image src={lattice} alt="img" />
          <div className="w-full h-full absolute z-20">
            <TitleComponent className="!text-[44px] md:!text-[64px] text-[#FFFFFF] text-center font-light md:mb-12">
              {t("title")}
            </TitleComponent>

            <div className="flex h-full flex-col md:flex-row gap-3 justify-center">
              <div className="flex flex-col items-center justify-center w-full max-w-[450px] h-[258px] bg-[#101010] rounded-[12px] p-6 md:hover:translate-y-14 hover:none hover hover:border-[0.1px] border-[#313131] transition-transform duration-700">
                <Title className="text-[#FFFFFF] !text-[64px] font-light mb-2">
                  50+
                </Title>
                <Description className="text-gray-400 !text-[34px] w-[270px]  font-light text-center !leading-[100%]">
                  {t("title2")}
                </Description>
              </div>

              <div className="flex flex-col items-center justify-center w-full max-w-[450px] h-[258px] bg-[#101010] rounded-[12px] p-6 md:hover:translate-y-14 hover:none hover hover:border-[0.1px] border-[#313131] transition-transform duration-700">
                <Title className="text-[#FFFFFF] !text-[64px] font-light mb-2">
                  8+
                </Title>
                <Description className="text-gray-400 !text-[34px] font-light text-center !leading-[100%]">
                  {t("title3")}
                </Description>
              </div>

              <div className="flex flex-col items-center justify-center w-full max-w-[450px] h-[258px] bg-[#101010] rounded-[12px] p-6 md:hover:translate-y-14 hover:none hover hover:border-[0.1px] border-[#313131] transition-transform duration-700">
                <Description className="text-gray-400 !text-[34px] font-light text-center !leading-[100%]">
                  {t("title4")}
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
