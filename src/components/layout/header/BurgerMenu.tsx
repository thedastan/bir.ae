"use client";

import { navbar } from "@/lib/navbar";
import Link from "next/link";
import logo2 from "@/assets/images/logo_about.png";

import Image from "next/image";
import LanguageSelect from "./LanguageModal";

const BurgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50   w-full h-[100vh] transition-opacity duration-500 ${
        isOpen ? "  pointer-events-auto" : "  pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`absolute top-0 right-0  max-w-full w-full h-[100vh] bg-[#000000] pt-3 p-6 shadow-xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-auto">
          <div className="flex flex-col items-center gap-[24px] mt-20">
            {navbar.map((el, index) => (
              <Link
                key={index}
                href={el.link}
                style={{
                  fontFamily: "Inter, sans-serif",
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  transitionDelay: isOpen ? `${index * 0.1}s` : "0s",
                }}
                className="text-white  uppercase text-[14px] font-[300]"
                onClick={() => setIsOpen(false)}
              >
                {el.name}
              </Link>
            ))}
            <LanguageSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
