import Image from "next/image";
import React from "react";
import lattice from "@/assets/images/lattice4.png";
import map from "@/assets/svg/map.svg";
import map2 from "@/assets/images/map4.png";

import country_ae from "@/assets/images/country_ae.png";
import country_ru from "@/assets/images/country_ru.png";
import country_us from "@/assets/images/country_us.png";
import country_kz from "@/assets/images/country_kz.png";
import country_kg from "@/assets/svg/KG - Kyrgyzstan.svg";
import country_ch from "@/assets/images/country_ch.png";
import country_cn from "@/assets/images/country_cn.png";
import country_it from "@/assets/images/country_it.png";
import { Description } from "@/components/ui/text/Description";

import gr from "@/assets/images/gr.png";

const MapMabile = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${gr.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" relative pt-[100px] mt-[200px] overflow-hidden w-full h-[350px] md:hidden flex justify-center items-center"
    >
      <Image className="" src={map} alt="img" />
      <div className=" z-10 absolute overflow-hidden   w-full h-[300px] flex justify-center items-center">
        <div className="  mb-[40px] ml-[60px] flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_ae}
            alt="United Arab Emirates flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            DUBAI
          </Description>
        </div>

        <div className="mb-[70px] ml-[-10px]  absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_it}
            alt="Italy flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            ITALY
          </Description>
        </div>

        <div className="mb-[120px] ml-[-20px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_ch}
            alt="China flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            SWIZERLAND
          </Description>
        </div>

        <div className="mb-[130px] ml-[80px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_ru}
            alt="Russia flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            RUSSIA
          </Description>
        </div>

        <div className="mb-[60px] ml-[190px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_kg}
            alt="Kazakhstan flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            KYRGYZSTAN
          </Description>
        </div>

        <div className="mb-[100px] ml-[150px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_kz}
            alt="Kazakhstan flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            KAZAKHSTAN
          </Description>
        </div>

        <div className="mb-[50px] ml-[250px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_cn}
            alt="China flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            CHINA
          </Description>
        </div>

        <div className="mb-[70px] ml-[-300px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            width={20}
            height={20}
            src={country_us}
            alt="USA flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white !text-[8px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            USA
          </Description>
        </div>
      </div>

      <div className="z-0 absolute overflow-hidden w-full h-[300px] flex justify-center items-center">
        <div className="w-[25px] mb-[70px] ml-[20px] h-[1px] rotate-[30deg] border-t border-dashed absolute z-20" />
        <div className="w-[50px] mb-[100px] ml-[20px] h-[1px] rotate-[45deg] border-t border-dashed absolute z-20" />
        <div className="w-[50px] mb-[100px] ml-[70px] h-[1px] rotate-[100deg] border-t border-dashed absolute z-20" />
        <div className="w-[50px] mb-[90px] ml-[110px] h-[1px] rotate-[150deg] border-t border-dashed absolute z-20" />
        <div className="w-[70px] mb-[65px] ml-[110px] h-[1px] rotate-[170deg] border-t border-dashed absolute z-20" />
        <div className="w-[90px] mb-[55px] ml-[160px] h-[1px] rotate-[178deg] border-t border-dashed absolute z-20" />
        <div className="w-[170px] mb-[65px] -ml-[130px] h-[1px] -rotate-[175deg] border-t border-dashed absolute z-20" />
      </div>
    </section>
  );
};

export default MapMabile;
