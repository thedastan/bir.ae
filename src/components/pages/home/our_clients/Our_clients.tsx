import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Image from "next/image";
import React from "react";
import logo1 from "@/assets/logo_images/logo_image1.png";
import logo2 from "@/assets/logo_images/logo_image2.png";
import logo3 from "@/assets/logo_images/logo_image3.png";
import logo4 from "@/assets/logo_images/logo_image4.png";
import logo5 from "@/assets/logo_images/logo_image5.webp";
import logo6 from "@/assets/logo_images/logo_image6.webp";
import logo7 from "@/assets/logo_images/logo_image7.webp";
import logo8 from "@/assets/logo_images/logo_image8.png";
import logo9 from "@/assets/logo_images/logo_image9.webp";
import logo10 from "@/assets/logo_images/logo_image10.webp";
import logo11 from "@/assets/logo_images/logo_image11.svg";
import logo12 from "@/assets/logo_images/logo_image12.webp";
import logo13 from "@/assets/logo_images/logo_image13.webp";
import logo14 from "@/assets/logo_images/logo_image14.webp";
import logo15 from "@/assets/logo_images/logo_image15.webp";
import logo16 from "@/assets/logo_images/logo_image16.png";
import logo17 from "@/assets/logo_images/logo_image17.webp";
import logo18 from "@/assets/logo_images/logo_image18.png";
import logo19 from "@/assets/logo_images/logo_image19.svg";
import logo20 from "@/assets/logo_images/logo_image20.png";
import logo21 from "@/assets/logo_images/logo_image21.png";

import { useTranslations } from "next-intl";
const Ourclients = () => {
  const t = useTranslations("Our_Clients");

  return (
    <section className="bg-[#101010] py-[50px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <TitleComponent className="text-white mb-[50px]">
            {t("title")}
          </TitleComponent>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 border-[#75757571]">
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image className="filter grayscale" src={logo1} alt="img" />
            </div>
            <div className="w-full h-[100px] flex   items-center   justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image className="filter grayscale" src={logo2} alt="img" />
            </div>
            <div className="w-full h-[100px] flex   items-center  justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image className="filter grayscale" src={logo3} alt="img" />
            </div>
            <div className="w-full h-[100px] flex   items-center   justify-center p-5 border-b-[2px] border-[#75757571]">
              <Image className="filter grayscale" src={logo4} alt="img" />
            </div>
          </div>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 border-[#75757571]">
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[50px] filter grayscale"
                src={logo5}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[150px] filter grayscale"
                src={logo6}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[110px] filter grayscale"
                src={logo7}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] border-[#75757571]">
              <Image className="filter grayscale" src={logo8} alt="img" />
            </div>
          </div>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 border-[#75757571]">
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[60px] filter grayscale"
                src={logo9}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[60px] filter grayscale"
                src={logo10}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[150px] filter grayscale"
                src={logo11}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] border-[#75757571]">
              <Image
                className="w-[150px] filter grayscale"
                src={logo12}
                alt="img"
              />
            </div>
          </div>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 border-[#75757571]">
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[60px] filter grayscale"
                src={logo13}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[110px] filter grayscale"
                src={logo14}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[80px] filter grayscale"
                src={logo15}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 border-b-[2px] border-[#75757571]">
              <Image
                className="w-[80px] filter grayscale"
                src={logo16}
                alt="img"
              />
            </div>
          </div>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 border-[#75757571]">
            <div className="w-full h-[100px] flex  items-center justify-center p-5  border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[110px] filter grayscale"
                src={logo17}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex  items-center justify-center p-5   border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[110px] filter grayscale"
                src={logo18}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex   items-center justify-center p-5   border-b-[2px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <Image
                className="w-[50px] filter grayscale"
                src={logo19}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex   items-center   justify-center p-5 border-b-[2px] border-[#75757571]">
              <Image
                className="w-[50px] filter grayscale"
                src={logo20}
                alt="img"
              />
            </div>
          </div>

          <div className="md:w-[85%] w-full grid grid-cols-2 md:grid-cols-4 justify-center border-[#75757571]">
            <div className="w-full h-[100px] md:flex hidden items-center justify-center p-5 md:border-r-[2px] border-r-[0px] border-[#75757571]"></div>

            <div className="w-full h-[100px] flex items-center justify-center p-5 border-[#75757571] md:border-r-[2px]">
              <Image
                className="w-[110px] filter grayscale"
                src={logo21}
                alt="img"
              />
            </div>
            <div className="w-full h-[100px] flex items-center justify-center p-5 md:border-l-[0px] md:border-r-[2px] border-r-[0px] border-[#75757571]">
              <h2 className="flex items-center md:text-[22px] text-[16px] text-white font-[600]">
                <span className="text-[#2c2c2c]">medical</span>switzerland
              </h2>
            </div>

            <div className="w-full h-[100px] md:flex hidden items-center justify-center p-5 border-[#75757571]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourclients;
