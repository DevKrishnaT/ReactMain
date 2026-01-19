import React, { useState } from "react";
import WhiteOne from "../assets/photos/white.png";
import BlackOne from "../assets/photos/black.png";
import BuyButton from '../components/BuyButton';

const BuyOption = () => {
  const [countwhite, setcountwhite] = useState(1);
  const [countBlack, setcountblack] = useState(0);

  const decreseCountwhite = ()=>{
    if(countwhite > 0){
        setcountwhite(countwhite  - 1);
    }
  }
   const IncreaseCountwhite = ()=>{
    if(countwhite < 10){
        setcountwhite(countwhite  + 1);
    }
  }
  
  const decreseCountBlack = ()=>{
    if(countBlack > 0){
        setcountblack(countBlack  - 1);
    }
  }
   const IncreaseCountBlack = ()=>{
    if(countBlack < 10){
        setcountblack(countBlack  + 1);
    }
  }

  return (
    <div className="h-full mr-4">
      <div className="top">
        <div className="Uptext text-4xl text-[#00000033] font-main">
          Purchase your
        </div>
        <div className="lowertext text-4xl text-black py-1 font-main">
          Opal Tadpole
        </div>
      </div>
      <div className="middle py-10">
        <div className="font-bold">Choose your finish.</div>
        <div className="flex flex-col align-middle ">
          <div className="h-25 my-2 rounded-sm border border-[rgba(0,0,0,0.1)] border-box ">
            <div className="Area flex justify-between px-2 py-2 h-full">
              <div className="font-medium text-sm">White edition</div>
              <div className="flex">
                <img src={WhiteOne} alt="" className="object-cover" />
              </div>
              <div className="flex items-end gap-6">
                <button className="w-8 h-8 flex items-center justify-center  rounded-2xl bg-[#fafafa] border border-[rgba(0,0,0,0.25)]" onClick={decreseCountwhite}>-</button>
                <div className="w-8 h-8 flex items-center justify-center ">
                  <span>{countwhite}</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-2xl bg-[#fafafa] border border-[rgba(0,0,0,0.25)]" onClick={IncreaseCountwhite}>+</button>
              </div>
            </div>
          </div>
          <div className="h-25 my-2 rounded-sm border border-[rgba(0,0,0,0.1)] border-box">
            <div className="Area flex justify-between px-2 py-2 h-full">
              <div className="font-medium text-sm">Black edition</div>
              <div className="flex">
                <img src={BlackOne} alt="" className="object-cover" />
              </div>
              <div className="flex items-end gap-6">
                <button className="w-8 h-8 flex items-center justify-center  rounded-2xl bg-[#fafafa] border border-[rgba(0,0,0,0.25)]" onClick={decreseCountBlack}>-</button>
                <div className="w-8 h-8 flex items-center justify-center ">
                  <span>{countBlack}</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-2xl bg-[#fafafa] border border-[rgba(0,0,0,0.25)]" onClick={IncreaseCountBlack} >+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buyBotton flex flex-row  justify-between border-t border-[rgba(0,0,0,0.25)] mt-23">
       <div className="price text-2xl">
        ${countBlack * 119 + countwhite * 119}
       </div>
          <BuyButton/>
        <div className="my-2">
        </div>
      </div>
    </div>
  );
};

export default BuyOption;
