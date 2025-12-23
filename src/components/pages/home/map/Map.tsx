import Image from "next/image";
import React from "react";
import lattice from "@/assets/images/lattice4.png";
import map from "@/assets/images/map3.png";
import map2 from "@/assets/images/map2.png";

const Map = () => {
  return (
    <section className="">
      <div className="relative flex justify-center items-center">
        <div className="flex flex-col items-center justify-center overflow-hidden h-[550px]">
          <div className="w-[900px] md:w-auto flex justify-center items-center mr-[-100px] md:mb-[200px] mb-auto">
            <Image className="w-full h-full" src={lattice} alt="img" />
          </div>
        </div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <Image className="md:flex hidden" src={map} alt="img" />
          <Image className="md:hidden flex" src={map2} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Map;
