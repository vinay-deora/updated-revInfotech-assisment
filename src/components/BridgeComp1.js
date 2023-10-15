import React from "react";
import { useSelector } from "react-redux";

const BridgeComp1 = () => {
  const diposite = useSelector((store) => store.Bridge.AddBridgeData);
  return (
    <div className=" flex flex-col justify-between text-white bg-slate-900     w-[24rem] rounded-3xl    lg:mt-[-1rem] lg:overflow-y-hidden sm:h-[35rem] h-[40rem] md:h-[41rem] lg:h-[40rem] mx-1 sm:ml-3 sm:overflow-y-hidden sm:w-[24rem] sm:overflow-x-hidden">
      <div>
        <h1 className="text-3xl p-5 font-openSans">Shibarium Bridge</h1>
        {!diposite ? (
          <h3 className="font-openSans pt-4 pl-4">Transfer Overview:</h3>
        ) : (
          <h3 className="font-openSans pt-4 pl-4"> Withdraw Overview:</h3>
        )}
        {!diposite ? (
          <p className="font-openSans px-4 text-gray-400 ">
            {" "}
            The deposit process consists of a single <br /> transaction
          </p>
        ) : (
          <p className="font-openSans px-4 text-gray-400 whitespace-nowrap">
            {" "}
            The deposit process consists of three transactions
          </p>
        )}

        {!diposite ? (
          <h3 className="font-openSans pt-4 pl-4"> Transfer Time:</h3>
        ) : (
          <h3 className="font-openSans pt-4 pl-4"> Withdraw Time:</h3>
        )}

        <p className="font-openSans px-4 text-gray-400">
          {" "}
          Moving your funds from Shibarium to Ethereum take up to 60 mins to 3
          hours
        </p>
      </div>
      {!diposite ? (
        <>
          <div className="shortBox flex items-center mx-4 mb-[-4rem] space-x-2  mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.49965 1.33325C4.58679 1.33325 1.41632 4.31722 1.41632 7.99992C1.41632 11.6826 4.58679 14.6666 8.49965 14.6666C12.4125 14.6666 15.583 11.6826 15.583 7.99992C15.583 4.31722 12.4125 1.33325 8.49965 1.33325Z"
                fill="url(#paint0_linear_1_638)"
              />
              <path d="M9.20799 10H7.79132V11.3333H9.20799V10Z" fill="white" />
              <path
                d="M9.20799 4.66675H7.79132V8.66675H9.20799V4.66675Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_638"
                  x1="8.49965"
                  y1="1.33325"
                  x2="8.49965"
                  y2="14.6666"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F06500" />
                  <stop offset="1" stop-color="#F28B03" />
                </linearGradient>
              </defs>
            </svg>
            <span> Delegation/Staking Advice:</span>
          </div>
          <p className="font-openSans text-gray-400 mx-4 mt-16">
            Delegation/Staking takes place on Ethereum. Do not deposit funds to
            Shibarium for this purpose. To delegate or stake please visit the
            <span className="text-orange-700"> Staking UI</span> .
          </p>
        </>
      ) : (
        ""
      )}

      <div className="bottomContainer mb-10 mx-4 space-y-4 mt-24">
        {!diposite ? (
          ""
        ) : (
          <div className="flex items-center space-x-2">
            <img
              className="w-4"
              src="https://s3-alpha-sig.figma.com/img/7f02/0236/53a1c0fdd21914b2aad33c4ef1bbb442?Expires=1698019200&Signature=kG2ZbUR0vE-DShMqkPzcQwOq~tF0n9NNxKnsYdmG05~JlVfXErefOSIF0oD0sbBkuIYIjOOj3yL6JzVNamdmsUb96wiGYpkLCkA6Id3s6YkmUasEOtuidMeOgXlL2MbArJkHlOX~oD3NIPtn6yepVompkc234sJM44LDSANHZK2gQmFyhj5aBOBrJhCmansDb-ZQFUN3txhNGsej3gVR57VVvo8CaXp11ZdS996~TilAXHeWjsowxmi0zoBQksIZqQIHkvKYRrCCpQVGpJFPeXfpb3rZdvIvykkCPt-nJ81sA209-Q-ZK1vOgluzs4vPDz~Iyxq~iXgKJFTWj~lC5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div className="flex space-x-12">
              <p className="font-openSans text-gray-400 whitespace-nowrap">
                Estimation of GAS fee required
              </p>
              <p className="font-openSans text-gray-400">$10.00</p>
            </div>
          </div>
        )}
        {/*  */}
        <div className=" flex items-center space-x-2">
          <img
            className="w-4  "
            src="https://s3-alpha-sig.figma.com/img/179c/bf4c/2f9da81c73f90900fce4e6ceb89c2c19?Expires=1698019200&Signature=q2j~ERO-0tHOqad0WXK3mkuUUyJs2qYK2X~bQEtDRpjB1MMmfu7JipcobK5vADinjj~KFkjFxGTpb~bNi9i8iucFJJbcoJBRfgaJjPXOdaq1ylENhwf~~nW0tDpj7oTX8yEuxSgdRXqIQ-qBrrLGTUlN6KPdx62UCKKPR~0f8tX1S8kZFiZvFhn-elndjzZ~XM8xB0Uz8amYqeFAQ25dhCYqc-tpyrd7gAVaLbvS03331LUjBC3oBC4lvV8BcyRfw4bfsSEvhgB8CZRNp8BA0mOp~l0zOpXON6qfBwajaoNQcBDyWp-CQb3~HmFEvsgAjHPKWec9FrtFxzSq5CFZug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        <div className="flex space-x-12 ">
            <p className="  font-openSans text-gray-400 whitespace-nowrap">
              Estimation of GAS fee required
            </p>
            <p className="font-openSans text-gray-400">$10.00</p>
          </div>
        </div>

        <div className="space-x-3 mt-2 ">
          <button className="flex-1 font-inter text-gray-900 bg-white p-4 whitespace-nowrap  rounded-lg w-[12rem]">
            How Shibarium works
          </button>
          <button className="flex-1 font-inter bg-white p-4 pl-[2rem]  px-16 text-black rounded-lg w-[3rem] ">
            FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BridgeComp1;
