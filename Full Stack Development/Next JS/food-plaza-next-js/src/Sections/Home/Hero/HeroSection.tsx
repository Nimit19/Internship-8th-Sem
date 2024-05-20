import ImageSlideshow from "@/components/ImageSlideShow";
import React from "react";
const HeroSection = () => {
  return (
    <div className="relative min-w-full h-[40vh] bg-cover bg-center sm:h-[40vh] md:h-[60vh] overflow-hidden">
      <ImageSlideshow />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="text-center uppercase text-4xl sm:text-5xl ">
          Noodletown
        </p>
        <p className="text-2xl sm:text-3xl text-center">
          Discover best food around you
        </p>

        <div className="text-base mt-5 sm:mt-12 md:mt-20  text-black flex flex-col items-center p-1 w-[90%] sm:w-[75%]  md:w-[700px] md:flex-row md:bg-white rounded ">
          <select className=" bg-white w-[100%] outline-none p-2 rounded md:w-[30%]">
            <option value="Surat">Surat</option>
          </select>
          <div className="border-l-[1px] h-3 mx-1 border-[#000000] " />
          <input
            className="bg-white w-[100%] outline-none p-2 rounded "
            placeholder="Type to search..."
            // value={input}
            // onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
