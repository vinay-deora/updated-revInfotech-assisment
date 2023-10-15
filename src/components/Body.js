import React from "react";
import Slider from "./Slider";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="overflow-y-scroll flex w-[100vw] bg-gra lg:h-[55rem] aspect-video bg-gray-900 sm:w-[100vw] lg:w-[98vw]  lg:overflow-x-hidden lg:overflow-y-hidden h-[80rem]  ">
        <Slider />
        <Outlet />
      </div>
      <div></div>
    </>
  );
};

export default Body;
