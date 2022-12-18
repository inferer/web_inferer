import React from "react";
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/subpage1_bg.png')] flex justify-center bg-no-repeat" style={{backgroundSize: '100% auto', backgroundColor: '#0f0923'}}>
      <div className="max-w-[1200px] py-[10.00vw] ">
        {/* <LazyImage src='/pc/subpage1_text.png' className="w-[42vw] h-auto max-w-[815px]" /> */}
        <div className="w-[43.75vw] h-[36.145vw] pt-[26.56vw] relative">
          <LazyImage src='/pc/star.png' className="w-[6.21vw] h-auto absolute left-[50%] -ml-[3.105vw] top-[16.979vw]" /> 
          <LazyImage src='/pc/star.png' className="w-[6.21vw] h-auto absolute right-0 -mr-[3.205vw] top-[26.7645vw]" /> 
          <div className=" uppercase text-[#4E4D7A] text-[1.1458vw] tracking-[0.08em] leading-[33px] text-center">
            <div>Built on data analysis, serve for web3 identity </div>
            <div>Hope to help contribute to great user ecosystem on chain</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubPage1