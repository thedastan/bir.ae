import Image from "next/image";
import React from "react";
import lattice from "@/assets/images/lattice4.png";
import map from "@/assets/svg/map.svg";
import gr from "@/assets/images/gr.png";

import country_ae from "@/assets/svg/ae.svg";
import country_ru from "@/assets/svg/ru.svg";
import country_us from "@/assets/svg/us.svg";
import country_kz from "@/assets/svg/kz.svg";

import country_kg from "@/assets/svg/KG - Kyrgyzstan.svg";
import country_ch from "@/assets/svg/ch.svg";
import country_cn from "@/assets/svg/cn.svg";
import country_it from "@/assets/svg/it.svg";
import { Description } from "@/components/ui/text/Description";

import line_usa from "@/assets/line/usa.png";
import line_italy from "@/assets/line/italy.png";
import line_shet from "@/assets/line/shet.png";
import line_ru from "@/assets/line/russia.png";
import line_ch from "@/assets/line/cha.png";

const Map = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${gr.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="container !pb-10 relative overflow-hidden w-full h-[600px] md:flex hidden justify-center items-center"
    >
      <Image className="" src={map} alt="img" />
      <div className=" z-10 -ml-20 absolute overflow-hidden left-[70px] w-full h-[600px] flex justify-center items-center">
        <div className="ml-[220px] mb-[110px] flex flex-col items-center gap-[4px] group">
          <Image
            src={country_ae}
            alt="United Arab Emirates flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            DUBAI
          </Description>
        </div>

        <div className="mb-[250px] mr-[20px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_it}
            alt="Italy flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ITALY
          </Description>
        </div>

        <div className="mb-[320px] ml-[30px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_ch}
            alt="China flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            SWIZERLAND
          </Description>
        </div>

        <div className="mb-[390px] ml-[320px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_ru}
            alt="Russia flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            RUSSIA
          </Description>
        </div>

        <div className="mb-[200px] ml-[475px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_kg}
            alt="Kazakhstan flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            KYRGYZSTAN
          </Description>
        </div>

        <div className="mb-[280px] ml-[420px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_kz}
            alt="Kazakhstan flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            KAZAKHSTAN
          </Description>
        </div>

        <div className="mb-[150px] ml-[600px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_cn}
            alt="China flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CHINA
          </Description>
        </div>

        <div className="mb-[220px] mr-[900px] absolute flex flex-col items-center gap-[4px] group">
          <Image
            src={country_us}
            alt="USA flag"
            className="transition-all duration-300 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] rounded-full"
          />
          <Description className="text-white font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            USA
          </Description>
        </div>
      </div>

      <div className="z-0 -ml-[240px] absolute overflow-hidden w-full h-[600px]">
        <Image
          className=" left-[340px] top-[160px] absolute"
          src={line_usa}
          alt="img"
        />
        <Image
          className=" left-[780px] top-[160px] absolute"
          src={line_italy}
          alt="img"
        />
        <Image
          className=" left-[790px] top-[110px] absolute"
          src={line_shet}
          alt="img"
        />
        <Image
          className=" left-[910px] top-[80px] absolute"
          src={line_ru}
          alt="img"
        />
        <Image
          className=" left-[900px] top-[185px] absolute"
          src={line_ch}
          alt="img"
        />
        <Image
          className=" left-[895px] top-[160px] absolute -rotate-[65deg]"
          src={line_italy}
          alt="img"
        />
      </div>
    </section>
  );
};

export default Map;
