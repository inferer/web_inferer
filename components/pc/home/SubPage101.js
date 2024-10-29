import React from "react";
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/page1_bg.png')] flex justify-center bg-no-repeat" style={{backgroundSize: '100% 100%', backgroundColor: '#0f0923'}}>
      <div className="max-w-[1288px] pt-[10.00vw] pb-[14.166vw]">
        <div className="w-[67.08vw] h-[23.33vw] bg-[url('/pc/page1_title_bg.png')] flex justify-center items-center" style={{backgroundSize: '100% 100%'}}>
          <div className="font-exlt text-center text-[1.8vw] text-white uppercase" style={{letterSpacing: '5px'}}>INFERER AIRDROP PROTOCOL</div>
        </div>        
        <div className=" pt-[6.45vw] relative">
          <div className=" uppercase text-[rgba(217,217,217,0.6)] text-[1.1458vw] tracking-[0.08em] leading-[33px] text-center font-exlt relative">
            <div>Based on uniswap, targeted on web3 advertisement </div>
            <div>Committed to serve advancing user data rights in web3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubPage1