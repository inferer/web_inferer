import React from "react";
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/subpage1_bg.png')] flex justify-center bg-no-repeat" style={{backgroundSize: '100% auto', backgroundColor: '#0f0923'}}>
      <div className="max-w-[1200px] py-[10.00vw] ">
        {/* <LazyImage src='/pc/subpage1_text.png' className="w-[42vw] h-auto max-w-[815px]" /> */}
        <div className="w-[43.75vw] h-[36.145vw] pt-[26.5625vw] relative">
          <div className=" uppercase text-[rgba(255,255,255,0.6)] text-[1.1458vw] tracking-[0.08em] leading-[33px] text-center font-exlt relative">
            <LazyImage src='/pc/star.png' className="w-[7.21vw] h-[7.21vw] absolute left-0 ml-[3.65vw] bottom-0 tip-img" /> 
            <div>Built on data analysis, serve for web3 identity </div>
            <div>Hope to help contribute to great user ecosystem on chain</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubPage1