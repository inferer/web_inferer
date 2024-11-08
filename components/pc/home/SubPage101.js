import React from "react";
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/page1_bg.png')] flex justify-center bg-no-repeat" style={{backgroundSize: '100% 100%', backgroundColor: '#0f0923'}}>
      <div className="max-w-[1488px] pt-[10.00vw] pb-[14.166vw] flex justify-center items-center flex-col">
        <div className="max-w-[1288px] flex justify-center">
          <div className="flex justify-center">
            <div className="w-[67.08vw] h-[23.33vw] bg-[url('/pc/page1_title_bg.png')] flex justify-center items-center" style={{backgroundSize: '100% 100%'}}>
              {/* <div className="font-exlt text-center text-[1.8vw] text-white uppercase" style={{letterSpacing: '0.30vw'}}>INFERER AIRDROP PROTOCOL</div> */}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img src="/pc/line1.png" className="w-[77.5vw]" />  
        </div>     
        <div className="max-w-[1288px] flex justify-center"> 
          <div className=" relative flex justify-center">
            <div className="w-[68.95vw] h-[16.77vw] uppercase text-[rgba(217,217,217,0.6)] text-[0.8333vw] tracking-[0.2em] leading-[33px] text-center font-exlt bg-[url('/pc/page1_title_bg2.png')] flex justify-center items-center flex-col"
              style={{backgroundSize: '100% 100%'}}
            >
              <div>Based on uniswap, targeted on web3 advertisement </div>
              <div>Committed to serve advancing user data rights in web3</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SubPage1