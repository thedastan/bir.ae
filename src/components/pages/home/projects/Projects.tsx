"use client";

import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React, { useState } from "react";
import logo from "@/assets/images/logo_project4.png";
import logo2 from "@/assets/images/logo_project2.png";
import logo3 from "@/assets/images/logo_project8.png";
import logo4 from "@/assets/images/logo_project2.png";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";

import img from "@/assets/images/project_image.png";
import img2 from "@/assets/images/project_image2.png";
import img3 from "@/assets/images/project_image3.png";
import img4 from "@/assets/images/project_image4.png";

import light from "@/assets/images/light3.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const data = [
  {
    logo: logo,
    img: img,
    title: "Victor Sadygov Real Estate",
    description:
      "Victor Sadygov Real Estate — your expert in Dubai luxury properties",
  },
  {
    logo: logo2,
    img: img2,
    title: "Zusammen",
    description:
      "Victor Sadygov Real Estate — your expert in Dubai luxury properties",
  },
  {
    logo: logo3,
    img: img3,
    title: "Daria Studio",
    description:
      "Victor Sadygov Real Estate — your expert in Dubai luxury properties",
  },
  {
    logo: logo4,
    img: img4,
    title: "Tez Kyzmat",
    description:
      "Victor Sadygov Real Estate — your expert in Dubai luxury properties",
  },
  {
    logo: logo,
    img: img,
    title: "Victor Sadygov Real Estate (2)",
    description: "Another project for Dubai real estate experts",
  },
  {
    logo: logo2,
    img: img2,
    title: "Zusammen (2)",
    description: "Second Zusammen project — global marketplace",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, 4);

  return (
    <section className="py-[100px]">
      <div className="container">
        <TitleComponent className="text-white">
          Our Selected Projects
        </TitleComponent>
        <Description className="text-white w-[240px] mt-[30px]">
          A selection of our recent works built for global markets.
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-[30px]">
          {displayedData.map((el, index) => (
            <div
              key={`${el.title}-${index}`} // уникальный ключ
              className="group flex h-[339px] relative overflow-hidden border-[0.1px] border-[#313131] rounded-[12px]"
              style={{
                backgroundImage: `url(${light.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <Image
                  className="w-full h-full object-cover"
                  src={el.img}
                  alt="project image"
                />
              </div>

              <div className="flex flex-col justify-between w-full h-full absolute md:p-[30px] p-[20px]">
                <div className="flex justify-between items-center mb-4">
                  <Image src={el.logo} alt="logo" width={80} height={80} />

                  <Button
                    className="
                      !bg-[#2D2D2D] text-white 
                      !w-[130px] h-[44px] !rounded-[20px]
                      group-hover:!bg-white group-hover:text-black
                      transition-colors duration-300
                    "
                  >
                    View Project
                  </Button>
                </div>
                <div>
                  <Title className="text-white !text-[24px] font-[600]">
                    {el.title}
                  </Title>
                  <Description className="text-white !text-[16px] w-[460px] mt-3">
                    {el.description}
                  </Description>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать всё / Скрыть" */}
        <div className="w-full flex justify-center mt-[50px]">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-white text-[14px] flex items-center gap-3 hover:text-gray-300 transition-colors"
          >
            {showAll ? "Show Less" : "All Projects"}
            {showAll ? (
              <IoIosArrowUp size={18} />
            ) : (
              <IoIosArrowDown size={18} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
