"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

import { PAGE } from "@/config/pages/public-page.config";
import BurgerMenu from "./BurgerMenu";
import LanguageSelect from "./LanguageModal";
import useNavbar from "@/components/layout/navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lineColor = isOpen || scrolled ? "bg-black" : "bg-white";
  const navbar = useNavbar();

  useEffect(() => {
    const target = document.getElementById("hero-observer");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div
        className={`fixed top-0 left-0 z-50 w-full   backdrop-blur-md backdrop-saturate-10  py-3 transition-all duration-500 ${
          scrolled ? "bg-[#00000034]" : "bg-transparent   "
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href={PAGE.HERO} className="w-full max-w-[130px]">
            <Image src={logo} alt="logo" className="w-[43px]" />
          </Link>

          <div className="hidden w-full justify-center text-[14px] text-[#ffffff] md:flex gap-[24px]">
            {navbar.map((el, index) => (
              <Link
                key={index}
                href={el.link}
                className=" uppercase text-[14px] font-[300]"
              >
                {el.name}
              </Link>
            ))}
            <LanguageSelect />
          </div>
          <div className="flex md:hidden w-full items-center justify-end">
            <button
              aria-label="Menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-[60] w-6 h-6 flex flex-col justify-center items-center"
            >
              {/* Line 1 */}
              <span
                className={`absolute bg-white h-[2px] transition-all duration-300 ${
                  isOpen ? "w-5 rotate-45  " : "w-6 -translate-y-2  "
                }`}
              />

              {/* Line 2 */}
              <span
                className={`absolute bg-white h-[2px] w-5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100  "
                }`}
              />

              {/* Line 3 */}
              <span
                className={`absolute bg-white h-[2px] transition-all duration-300 ${
                  isOpen ? "w-5 -rotate-45  " : "w-4 translate-y-2  "
                }`}
              />
            </button>
          </div>

          <div className="w-full md:max-w-[130px] max-w-0 text-end   flex justify-end">
            <Link
              href={"tel:+79259009090"}
              target="_blank"
              className="md:flex hidden text-white text-[14px] font-[300]  text-end"
            >
              +7 925 900 90 90
            </Link>
          </div>
        </div>

        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
