"use client";
import { Description } from "@/components/ui/text/Description";
import Link from "next/link";
import img from "@/assets/images/footer.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#101010] py-[30px] pt-[100px]">
      <div className="container">
        <div className="w-full flex text-start">
          <Description className="text-[#FFFFFF]">{t("title")}</Description>
        </div>
        <div className="flex flex-wrap justify-between text-[#FFFFFF] mt-[20px]">
          <Link
            className="flex items-center gap-1 text-[44px] hover:text-[#C99769]"
            href="/"
          >
            birdigital@
            <GoArrowUpRight />
          </Link>

          <Link
            className="flex items-center gap-1 text-[44px] hover:text-[#C99769]"
            href="/"
          >
            Whatsapp
            <GoArrowUpRight />
          </Link>

          <Link
            className="flex items-center gap-1 text-[44px] hover:text-[#C99769]"
            href="/"
          >
            instagram
            <GoArrowUpRight />
          </Link>

          <Link
            className="flex items-center gap-1 text-[44px] hover:text-[#C99769]"
            href="/"
          >
            telegram
            <GoArrowUpRight />
          </Link>
        </div>
        <div className="flex flex-col mt-[20px]">
          <Image className="w-full" src={img} alt="img" />
          <div className="w-full flex text-start mt-[20px]">
            <Description className="text-[#FFFFFF]">
              © 2025 B1R DIGITAL
            </Description>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
