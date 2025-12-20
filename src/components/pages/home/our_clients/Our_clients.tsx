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

const data = [
  { img: logo_project1 },
  { img: logo_project2 },
  { img: logo_project3 },
  { img: logo_project4 },
];

const data2 = [
  { img: logo_project5 },
  { img: logo_project6 },
  { img: logo_project7 },
  { img: logo_project8 },
];

const Ourclients = () => {
  return (
    <section className="bg-[#101010] py-[50px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <TitleComponent className="text-white">Our Clients</TitleComponent>

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
