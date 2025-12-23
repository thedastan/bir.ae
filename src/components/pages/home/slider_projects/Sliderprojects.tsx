"use client";

import img from "@/assets/images/logo_project1.png";
import img2 from "@/assets/images/logo_project2.png";
import img3 from "@/assets/images/logo_project3.png";
import img4 from "@/assets/images/logo_project4.png";
import img5 from "@/assets/images/logo_project4.png";
import img6 from "@/assets/images/logo_project4.png";
import img7 from "@/assets/images/logo_project4.png";

import lattice from "@/assets/images/lattice.png";
import bracket from "@/assets/images/bracket.png";

import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/ui/button/Button";

const data = [
  {
    img: img,
    title: "Dennis Yao Yu",
    title2: "Co-Founder & CEO",
    description:
      "“Thank you to the team for the amazing website! Everything was done carefully, thoughtfully, and exactly how we envisioned it. A pleasure to work with.”",
  },
  {
    img: img2,
    title: "Dennis Yao Yu",
    title2: "Co-Founder & CEO",
    description:
      "“Thank you to the team for the amazing website! Everything was done carefully, thoughtfully, and exactly how we envisioned it. A pleasure to work with.”",
  },
  {
    img: img3,
    title: "Dennis Yao Yu",
    title2: "Co-Founder & CEO",
    description:
      "“Thank you to the team for the amazing website! Everything was done carefully, thoughtfully, and exactly how we envisioned it. A pleasure to work with.”",
  },
  {
    img: img4,
    title: "Dennis Yao Yu",
    title2: "Co-Founder & CEO",
    description:
      "“Thank you to the team for the amazing website! Everything was done carefully, thoughtfully, and exactly how we envisioned it. A pleasure to work with.”",
  },
  {
    img: img5,
    title: "Dennis Yao Yu",
    title2: "Co-Founder & CEO",
    description:
      "“Thank you to the team for the amazing website! Everything was done carefully, thoughtfully, and exactly how we envisioned it. A pleasure to work with.”",
  },
];

const Sliderprojects = () => {
  return (
    <section className="py-[100px] relative">
      <div className="container relative">
        {/* Фоновая сетка — абсолютно позиционирована, не влияет на поток */}
        <div className="absolute inset-0 flex md:justify-center overflow-hidden justify-end md:items-center items-start pointer-events-none z-0">
          <Image
            className="mt-[-100px] md:mt-0 mr-[-100px]"
            src={lattice}
            alt="Background lattice"
          />
        </div>

        {/* Основной контент — в потоке, поверх фона */}
        <div className="flex md:flex-row flex-col justify-between relative z-10">
          <div className="md:w-[800px] w-full">
            <Image src={bracket} alt="Quote bracket" />

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-dots",
              }}
              loop={true}
            >
              {data.map((el, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="flex items-center mt-[60px] gap-2">
                      <Image src={el.img} alt="Avatar" />
                      <div className="bg-[#424242] w-[1px] h-[52px]"></div>
                      <div className="flex flex-col">
                        <Title className="!text-[24px] text-white">
                          {el.title}
                        </Title>
                        <Title className="!text-[18px] text-[#adadad] mt-1">
                          {el.title2}
                        </Title>
                      </div>
                    </div>
                    <Description className="mt-[60px] md:!text-[44px] !text-[32px] text-white">
                      {el.description}
                    </Description>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Навигация и пагинация */}
            <div className="flex w-[300px] mt-[60px] items-center justify-between gap-4">
              <button className="swiper-button-prev-custom flex justify-center items-center border border-[#313131] text-[#C99769] text-[20px] rounded-[8px] w-[52px] h-[52px]">
                <FaChevronLeft />
              </button>

              <div className="">
                <div className="swiper-pagination-dots flex justify-center w-[10px] gap-[12px]"></div>
              </div>

              <button className="swiper-button-next-custom flex justify-center items-center border border-[#313131] text-[#C99769] text-[20px] rounded-[8px] w-[52px] h-[52px]">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Правая колонка — видео */}
          <div className="flex md:w-[322px] w-full md:h-auto h-[575px] md:mt-0 mt-[60px] justify-center items-center rounded-[12px] bg-[#101010] border border-[#313131]">
            <Button className="!bg-[#2D2D2D] text-white !w-[81px] h-[44px] !rounded-[20px]">
              Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliderprojects;
