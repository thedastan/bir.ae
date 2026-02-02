"use client";
import { Description } from "@/components/ui/text/Description";
import Link from "next/link";
import img from "@/assets/images/footer.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useLocale, useTranslations } from "next-intl";
import {
  EMAIL_ADDRESS,
  EMAIL_ADDRESS_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/constants/admin";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101010] py-[30px] pt-[100px]">
      <div className="container">
        <div
          className={`w-full flex text-center  ${
            isArabic ? "justify-end" : "justify-start"
          }`}
        >
          <Description className="text-[#FFFFFF]">{t("title")}</Description>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between text-[#FFFFFF] mt-[20px]">
          <Link
            href={EMAIL_ADDRESS_LINK}
            className="flex items-center gap-1 text-[26px] md:text-[38px] hover:text-[#C99769]"
          >
            {EMAIL_ADDRESS}
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[26px] md:text-[38px] hover:text-[#C99769]"
            href={WHATSAPP_LINK}
          >
            Whatsapp
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[26px] md:text-[38px] hover:text-[#C99769]"
            href={INSTAGRAM_LINK}
          >
            instagram
            <GoArrowUpRight />
          </Link>

          <Link
            target="_blank"
            className="flex items-center gap-1 text-[26px] md:text-[38px] hover:text-[#C99769]"
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
                © 2021 - {currentYear} B1R DIGITAL
              </Link>
            </Description>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
