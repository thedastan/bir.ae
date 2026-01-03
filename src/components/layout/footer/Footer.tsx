"use client";
import { Description } from "@/components/ui/text/Description";
import Link from "next/link";
import img from "@/assets/images/footer.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101010] py-[30px] pt-[100px]">
      <div className="container">
        <div className="w-full flex text-start">
          <Description className="text-[#FFFFFF]">{t("title")}</Description>
        </div>
        <div className="flex flex-wrap justify-between text-[#FFFFFF] mt-[20px]">
          <Link
            href="mailto:birdigital@gmail.com"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
          >
            {/* Десктоп */}
            <span className="hidden md:inline">birdigital@gmail.com</span>

            {/* Мобильная версия */}
            <span className="inline md:hidden">birdigital@gmail...</span>

            {/* Иконка только на десктопе */}
            <span className="hidden md:inline">
              <GoArrowUpRight />
            </span>
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
            href="https://wa.me/996559692626"
          >
            Whatsapp
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
            href="https://www.instagram.com/dastan.mukeev/"
          >
            instagram
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
            href="https://t.me/dastan_mukeev"
          >
            telegram
            <GoArrowUpRight />
          </Link>
        </div>
        <div className="flex flex-col mt-[20px]">
          <Image className="w-full" src={img} alt="img" />
          <div className="w-full flex text-start mt-[20px]">
            <Description className="text-[#FFFFFF]">
              <Link
                target="_blank"
                href="https://www.instagram.com/dastan.mukeev/"
              >
                © {currentYear} B1R DIGITAL
              </Link>
            </Description>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
