"use client";
import React from "react";
import { BannerLayer, Parallax, ParallaxBanner } from "react-scroll-parallax";
import BackgroundImage from "@/assets/background.png";
// import PageTwoImage from "../assets/task-2-background.png";
import Cards from "./card";
import { mockCardData } from "./mock-card-data";


export default function page() {
  const background: BannerLayer = {
    image: "../assets/background.png",
    translateY: [5, 20],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center bottom-[25%] md:ml-[125px] ml-[24px] mr-[20vw]">
        <h1 className=" md:text-[160px] text-[80px] text-white font-sans font-black  text-left leading-none">
          Monaco Grand Prix
        </h1>
      </div>
    ),
  };
  const foreground: BannerLayer = {
    image: "../assets/foreground.png",
    translateY: [5, 15],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };
  const gradientOverlay: BannerLayer = {
    opacity: [1, 1, "easeOutCubic"],
    translateY: [0, 20],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className=" absolute  inset-0 w-[100%]   top-[82vh] h-[100vw] bg-gradient-to-r from-[#00162B]  md:from-90% from-70% to-transparent  transform -rotate-90 " />
    ),
  };
    
    

  return (
    <div className="flex flex-col items-center justify-items-center   ">
      {/* hero Section  */}
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className=" full h-screen  "
      />
      {/* Context Card Section */}
      <div
        className=" flex center flex-col justify-between full min-h-screen bg-no-repeat bg-center bg-cover w-full md:p-[40px] p-[24px] pr-0 gap-10"
        style={{ backgroundImage: `url(../assets/task-2-background.png)` }}
      >
        <div>
          <h1 className="  text-[50px] text-white font-sans font-black md:text-[60px] leading-none ">
            Oracle In Practice
          </h1>
        </div>

        <div className="flex items-center justify-start  overflow-x-auto space-x-4 pr-10">
          {mockCardData.map((item, index) => (
            <Cards key={index} results={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
