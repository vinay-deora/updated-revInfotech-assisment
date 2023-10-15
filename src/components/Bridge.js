import React from "react";
import BridgeComp1 from "./BridgeComp1";
import BridgeComp2 from "./BridgeComp2";
import Header from "./Header";

const Bridge = () => {
  return (
    <div className="Bridge z-20 overflow-y-hidden sm:overflow-y-hidden border h-auto md:h-auto md:overflow-hidden border-black m-4 rounded-lg    w-[25rem] sm:w-[26rem] md:w-[27rem]  sm:mx-0 lg:w-[55rem] xl:w-[55rem] 2xl:w-[55rem]   bg-gray-950 absolute right-0 md:right-2 xl:absolute xl:right-[9rem] xl:left-[14rem] lg:absolute lg:left-[14rem] md:absolute md:left-[13rem] sm:absolute sm:left-[13rem] sm:h-[80rem] lg:h-[50rem] ">
      <Header />
      <div className="mainContainer   flex flex-col lg:flex-row ">
        <div className="box-1  ">
          <BridgeComp1 />
        </div>
        <div className="box-2 ">
          <BridgeComp2 />
        </div>
      </div>
    </div>
  );
};

export default Bridge;
