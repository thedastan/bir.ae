"use client";

import img from "@/assets/images/logo_project1.png";
import img2 from "@/assets/images/logo_project2.png";
import img3 from "@/assets/images/logo_project3.png";
import img4 from "@/assets/images/logo_project4.png";
import img5 from "@/assets/images/logo_project4.png";
import img6 from "@/assets/images/logo_project4.png";

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
import { useTranslations, useLocale } from "next-intl";

const Sliderprojects = () => {
  const t = useTranslations("Slider");
  const locale = useLocale();
  const isRTL = locale === "ar"; // Если арабский — включаем RTL

  const data = [
    { img: img, description: t("description") },
    { img: img2, description: t("description") },
    { img: img3, description: t("description") },
    { img: img4, description: t("description") },
    { img: img5, description: t("description") },
    { img: img6, description: t("description") },
  ];

  return (
    <section className="py-[100px] relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container relative">
        {/* Фоновая сетка */}
        <div className="absolute inset-0 flex md:justify-center overflow-hidden justify-end md:items-center items-start pointer-events-none z-0">
          <Image
            className="mt-[-100px] md:mt-0 mr-[-100px]"
            src={lattice}
            alt="Background lattice"
          />
        </div>

        {/* Основной контент */}
        <div
          className={`flex ${
            isRTL ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col justify-between relative z-10`}
        >
          {/* Слайдер */}
          <div data-aos="fade-up" className="md:w-[800px] w-full">
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
                  <div
                    className={`flex flex-col ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Аватар + Имя */}
                    <div
                      className={`flex items-center mt-[60px] gap-2 ${
                        isRTL
                          ? "flex-row-reverse justify-end"
                          : "flex-row justify-start"
                      }`}
                    >
                      <Image src={el.img} alt="Avatar" />
                      <div
                        className={`flex flex-col ${
                          isRTL ? "items-end" : "items-start"
                        } md:w-[200px] w-[180px]`}
                      >
                        <Title
                          className={`!text-[24px] ${
                            isRTL ? "text-right" : "text-left"
                          } text-white`}
                        >
                          Dennis Yao Yu
                        </Title>
                        <Title
                          className={`!text-[18px] mt-1 ${
                            isRTL ? "text-right" : "text-left"
                          } text-gray-400`}
                        >
                          Co-Founder & CEO
                        </Title>
                      </div>
                    </div>

                    {/* Описание */}
                    <Description
                      className={`mt-[60px] md:!text-[44px] !text-[28px] text-white ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
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
              <div>
                <div className="swiper-pagination-dots flex justify-center w-[10px] gap-[12px]"></div>
              </div>
              <button className="swiper-button-next-custom flex justify-center items-center border border-[#313131] text-[#C99769] text-[20px] rounded-[8px] w-[52px] h-[52px]">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Правая колонка — видео */}
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
    </section>
  );
};

export default Sliderprojects;
