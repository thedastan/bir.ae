import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Image from "next/image";
import React from "react";
import logo_project1 from "@/assets/images/logo_project1.png";
import logo_project2 from "@/assets/images/logo_project2.png";
import logo_project3 from "@/assets/images/logo_project3.png";
import logo_project4 from "@/assets/images/logo_project4.png";
import logo_project5 from "@/assets/images/logo_project5.png";
import logo_project6 from "@/assets/images/logo_project6.png";
import logo_project7 from "@/assets/images/logo_project7.png";
import logo_project8 from "@/assets/images/logo_project8.png";
import { useTranslations } from "next-intl";

import daria from "@/assets/svg/daria.svg";
import tez_kyzmat from "@/assets/svg/tez_kyzmat.svg";
import nohomme from "@/assets/svg/nohomme.svg";
import sadygov from "@/assets/svg/sadygov.svg";
import kurak from "@/assets/svg/kurak.svg";
import mediacal from "@/assets/svg/mediacal.svg";
import baytik from "@/assets/svg/baytik.svg";
import asman from "@/assets/svg/asman.svg";

const data = [
  { img: daria },
  { img: tez_kyzmat },
  { img: nohomme },
  { img: sadygov },
];

const data2 = [
  { img: kurak },
  { img: mediacal },
  { img: baytik },
  { img: asman },
];

const Ourclients = () => {
  const t = useTranslations("Our_Clients");
  //  {t("title")}
  return (
    <section className="bg-[#101010] py-[50px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <TitleComponent className="text-white">{t("title")}</TitleComponent>

          {/* Мобильная версия — 2 в строке + линии между строками */}
          <div className="mt-[60px] w-[85%] relative md:hidden">
            <div className="flex flex-col gap-6">
              {Array.from({ length: 4 }, (_, rowIndex) => {
                const startIdx = rowIndex * 2;
                const rowLogos = [...data, ...data2].slice(
                  startIdx,
                  startIdx + 2
                );
                return (
                  <React.Fragment key={`row-${rowIndex}`}>
                    <div className="grid grid-cols-2 gap-6">
                      {rowLogos.map((el, colIndex) => (
                        <div
                          key={`mobile-${startIdx + colIndex}`}
                          className="flex justify-center items-center"
                        >
                          <Image
                            src={el.img}
                            alt={`client-logo-${startIdx + colIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    {rowIndex < 3 && (
                      <div className="w-full h-[1px] bg-[#6d6d6d7a] my-4"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          {/* Десктопная версия — сетка 4x2 с линиями */}
          <div className="mt-[60px] w-[85%] relative hidden md:block">
            {/* Горизонтальная линия по центру */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#6d6d6d7a] z-0"></div>

            {/* Сетка для логотипов */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {data.map((el, index) => (
                <div
                  key={`top-${index}`}
                  className="flex justify-end items-center"
                >
                  <Image src={el.img} alt={`client-logo-${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-6 relative z-10 mt-6">
              {data2.map((el, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex justify-start items-center"
                >
                  <Image src={el.img} alt={`client-logo-${index + 5}`} />
                </div>
              ))}
            </div>

            {/* Вертикальные линии между колонками */}
            {[1, 2, 3].map((colIndex) => (
              <div
                key={`vline-${colIndex}`}
                className="absolute top-0 bottom-0 w-[1px] bg-[#6d6d6d7a] z-0"
                style={{
                  left: `${(colIndex * 100) / 4}%`,
                  transform: "translateX(-50%)",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourclients;
