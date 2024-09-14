import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
  return (
    <div className="h-[100vh] flex justify-evenly bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]">
      <div className=" flex flex-col justify-center items-start gap-4">
        <h1 className="text-lg font-lighter mb-4">NEW ARRIVALS ONLY</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-5xl font-normal">new</p>
            <img src={hand_icon} alt="" className="w-[20%]" />
          </div>
          <p className="text-5xl font-normal">collections</p>
          <p className="text-5xl font-normal">for everyone</p>
        </div>
        <div className="px-6 py-3 mt-5 flex gap-4 bg-red-500 text-sm text-white rounded-full cursor-pointer hover:bg-red-600 transition-transform ease-in-out">
          <p>Latest Collection</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <img className="" src={hero_image} alt="hero banner" />
    </div>
  );
}
