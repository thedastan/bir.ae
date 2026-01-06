"use client";
import { Description } from "@/components/ui/text/Description";
import Link from "next/link";
import img from "@/assets/images/footer.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslations } from "next-intl";
import {
  EMAIL_ADDRESS,
  EMAIL_ADDRESS_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/constants/admin";

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
            href={EMAIL_ADDRESS_LINK}
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
          >
            {/* Десктоп */}
            <span className="hidden md:inline">{EMAIL_ADDRESS}</span>

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
            href={WHATSAPP_LINK}
          >
            Whatsapp
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
            href={INSTAGRAM_LINK}
          >
            instagram
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[38px] hover:text-[#C99769]"
            href={TELEGRAM_LINK}
          >
            telegram
            <GoArrowUpRight />
          </Link>
        </div>
        <div className="flex flex-col mt-[20px]">
          <Image className="w-full" src={img} alt="img" />
          <div className="w-full flex text-start mt-[20px]">
            <Description className="text-[#FFFFFF]">
              <Link target="_blank" href={INSTAGRAM_LINK}>
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
