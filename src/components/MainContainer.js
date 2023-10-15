import React from "react";
import Table1 from "./Table1";
import WallateHead from "./WallateHead";

const MainContainer = () => {
  return (
    <div className="z-20 overflow-y-hidden sm:overflow-y-hidden border h-auto md:h-auto md:overflow-hidden border-black m-4 rounded-lg   w-[25rem] sm:w-[26rem] md:w-[27rem]  sm:mx-0 lg:w-[45rem] xl:w-[55rem] 2xl:w-[55rem]   bg-gray-950 absolute right-0 md:right-2 xl:absolute xl:right-[9rem]  xl:left-[14rem] lg:absolute lg:left-[14rem] md:absolute md:left-[13rem] sm:absolute sm:left-[13rem] sm:h-[80rem] lg:h-[50rem] ">
      <WallateHead />
      <h1 className="font-sans text-2xl text-white mx-6">My Balance</h1>
      <div className="first-container grid-cols-3 sm:grid-cols-3 md:flex-col lg:flex-col lg:grid lg:grid-cols-12 gap-4  flex-col sm:w-[25rem] lg:w-[42rem] lg:mx-6 xl:w-[50rem]">
        <div className="box-1 mx-4 sm:mx-4  lg:mx-0 lg:col-span-3 col-span-3 bg-gray-900 rounded-lg mt-4 py-8 h-[8.5rem] p-4 ">
          <div className="text-xl sm:text-5xl font-bold text-center lg:text-3xl text-white">
            20.000$
          </div>
          <div className="text-center text-white">Shibarium Mainnet</div>
        </div>
        <div className="box-2 col-span-3 p-4  lg:col-span-3 ">
          <div className="flex   bg-gray-700 rounded-lg p-4 mb-2  ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9265 17.333H24.5932V19.9997H20.5932V22.6663H17.9265V17.333Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.9272 26.6667C26.6636 26.6667 27.2605 26.0697 27.2605 25.3333V24H29.9272V25.3333C29.9272 27.5425 28.1364 29.3333 25.9272 29.3333H23.2605V26.6667H25.9272Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5932 25.333V29.333H17.9265V25.333H20.5932Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5932 25.333V29.333H17.9265V25.333H20.5932Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.9272 17.333V21.333H27.2605V17.333H29.9272Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5932 7.33301H7.92651V9.99967H10.5932V7.33301Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.2602 7.33301H22.5935V9.99967H25.2602V7.33301Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.2602 22H22.5935V24.6667H25.2602V22Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5932 22H7.92651V24.6667H10.5932V22Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5938 5.33366H5.92716V12.0003H12.5938V5.33366ZM5.92716 2.66699C4.4544 2.66699 3.2605 3.8609 3.2605 5.33366V14.667H15.2605V2.66699H5.92716Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5938 19.9997H5.92716V26.6663H12.5938V19.9997ZM3.2605 17.333V26.6663C3.2605 28.1391 4.4544 29.333 5.92716 29.333H15.2605V17.333H3.2605Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.2598 5.33366H20.5932V12.0003H27.2598V5.33366ZM17.9265 2.66699V14.667H29.9265V5.33366C29.9265 3.8609 28.7326 2.66699 27.2598 2.66699H17.9265Z"
                  fill="white"
                />
              </svg>
              <div className="ml-4 whitespace-nowrap text-white ">Recive</div>
            </div>
          </div>
          <div className="flex  bg-gray-700 rounded-lg p-4  ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M27.4677 3.55851C28.5017 3.22555 29.4785 4.20243 29.1456 5.23637L21.8866 27.7774C21.5354 28.8678 20.0634 29.037 19.4741 28.0548L13.9148 18.7893L4.64931 13.23C3.66701 12.6406 3.83619 11.1687 4.92659 10.8175L27.4677 3.55851Z"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M28.9996 3.70433L13.9147 18.7893"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <div className="ml-4 whitespace-nowrap text-white ">Send</div>
            </div>
          </div>
        </div>
        <div className="box-3 mx-4 col-span-6 bg-gray-900 p-2 m-2 pb-2  rounded-lg md:h-[8.5rem] mt-[1rem] ">
          <div className="bg-white text-gray-600 font-semibold p-2 rounded-lg mb-2 text-center ">
            Move funds from Ethereum to Shibarium
          </div>
          <div className="bg-white text-gray-600 font-semibold  p-2 rounded-lg text-center">
            How Shibarium works
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-sans text-2xl my-6 text-white mx-6">Assets on Shibarium</h1>
      </div>
      <Table1 />
    </div>
  );
};

export default MainContainer;
