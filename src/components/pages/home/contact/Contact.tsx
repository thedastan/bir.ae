import Image from "next/image";
import React from "react";
import light from "@/assets/images/light2.png";
import lattice1 from "@/assets/images/lattice2.png";
import lattice2 from "@/assets/images/lattice3.png";
import lattice3 from "@/assets/images/lattice.png";
import Button from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

const Contact = () => {
  return (
    <section className="py-[100px]">
      <div className="flex justify-center items-center w-full h-[80vh]">
        <div className="w-full h-full overflow-hidden flex flex-col md:flex-row justify-start md:justify-between items-center relative">
          <Image className="hidden md:flex" src={lattice2} alt="img" />

          <div className="absolute w-[700px] md:w-full flex justify-center items-center">
            <Image className="mr-[120px]" src={light} alt="img" />
          </div>
          <Image className="hidden md:flex" src={lattice1} alt="img" />
          <Image className="md:hidden flex" src={lattice3} alt="img" />
        </div>
        <div className="container absolute z-10">
          <div className="flex flex-col items-center gap-[40px]">
            <TitleComponent className="text-white">contact us</TitleComponent>
            <div className="flex flex-col gap-[20px]">
              <input
                className="border-[0.1px] border-[#313131] w-[300px] h-[64px] rounded-[40px] bg-[#000000] p-[20px] outline-none text-[16px]"
                type="text"
                placeholder="Your name"
              />
              <input
                className="border-[0.1px] border-[#313131] w-[300px] h-[64px] rounded-[40px] bg-[#000000] p-[20px] outline-none text-[16px]"
                type="text"
                placeholder="Your name"
              />
              <input
                className="border-[0.1px] border-[#313131] w-[300px] h-[64px] rounded-[40px] bg-[#000000] p-[20px] outline-none text-[16px]"
                type="text"
                placeholder="Your name"
              />
              <Button className="bg-white !text-black w-[300px] h-[44px] !rounded-[40px]">
                Send Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
