"use client";

import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations, useLocale } from "next-intl";

import lattice from "@/assets/images/lattice.png";
import bracket from "@/assets/images/bracket.png";

import Data from "@/components/data/Data";

const Sliderprojects = () => {
  const t = useTranslations("Slider");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const data = Data();

  return (
    <section className="py-[100px] relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container relative">
        {/* Фон */}
        <div className="absolute inset-0 flex md:justify-center overflow-hidden justify-end md:items-center items-start pointer-events-none z-0">
          <Image
            className="mt-[-100px] md:mt-0 mr-[-100px]"
            src={lattice}
            alt="Background lattice"
          />
        </div>

        <div
          className={`flex ${
            isRTL ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col justify-between relative z-10`}
        >
          {/* Слайдер */}
          <div data-aos="fade-up" className="md:w-[800px] w-full">
            <Image src={bracket} alt="Quote" />

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              loop
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                el: ".swiper-pagination-dots",
                clickable: true,
                renderBullet: (index, className) => {
                  if (index < 6) {
                    return `<span class="${className} custom-bullet"></span>`;
                  }
                  return "";
                },
              }}
            >
              {data.map((el) => (
                <SwiperSlide key={el.id}>
                  <div
                    className={`flex flex-col ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Лого + текст */}
                    <div
                      className={`flex items-center mt-[60px] gap-2 ${
                        isRTL
                          ? "flex-row-reverse justify-end"
                          : "flex-row justify-start"
                      }`}
                    >
                      <Image className="w-[120px]" src={el.logo} alt="Logo" />

                      <div
                        className={`flex flex-col ${
                          isRTL ? "items-end" : "items-start"
                        } md:w-[200px] w-[180px]`}
                      >
                        <Title className="!text-[24px] text-white">
                          Dennis Yao Yu
                        </Title>
                        <Title className="!text-[18px] mt-1 text-gray-400">
                          Co-Founder & CEO
                        </Title>
                      </div>
                    </div>

                    {/* Описание */}
                    <Description className="mt-[60px] md:!text-[44px] !text-[28px] text-white">
                      {el.description}
                    </Description>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Навигация + точки */}
            <div className="flex w-[300px] mt-[60px] items-center justify-between gap-4">
              <button className="swiper-button-prev-custom shrink-0 flex justify-center items-center border border-[#313131] text-[#C99769] text-[20px] rounded-[8px] w-[52px] h-[52px]">
                {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
              </button>

              <div className="swiper-pagination-dots flex justify-center gap-[12px]" />

              <button className="swiper-button-next-custom shrink-0 flex justify-center items-center border border-[#313131] text-[#C99769] text-[20px] rounded-[8px] w-[52px] h-[52px]">
                {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
              </button>
            </div>
          </div>

          {/* Видео */}
          <div
            data-aos="fade-up"
            className="flex md:w-[322px] overflow-hidden w-full md:h-auto h-[570px] md:mt-0 mt-[60px] justify-center items-center rounded-[12px] bg-[#101010] md:border border-[#313131]"
          >
            <video
              src="/Sahara.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Стили точек */}
      <style jsx global>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #313131;
          opacity: 1;
        }

        .swiper-pagination-bullet-active.custom-bullet {
          background-color: #c99769;
        }
      `}</style>
    </section>
  );
};

export default Sliderprojects;
