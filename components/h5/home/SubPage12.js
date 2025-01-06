import React from "react";
import H5Menu from '../Menu'
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('https://website-1315068501.cos.ap-nanjing.myqcloud.com/web_inferer/pc/page1_bg.png')] bg-no-repeat bg-top bg-cover w-full pt-[16.8vw]"
      style={{backgroundSize: '100% 100%', backgroundColor: '#0f0923'}}
    >
      <H5Menu />
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="w-[84.8vw] h-[46.4vw] bg-[url('/h5/page1_sub1.png')] flex justify-center items-center" style={{backgroundSize: '100% 100%'}}>
              {/* <LazyImage className="w-[31.1979vw] h-[2.8125vw]" src="/pc/page1_title_text.svg" /> */}
              <img className="w-[66.53vw] h-[6vw]" src="/h5/page1_title_text.svg" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          {/* <LazyImage src="/pc/line1.svg" className="w-[77.5vw]" />   */}
          <img src="/h5/page1_line.png" className="w-[89.333vw]" />  
        </div>     
        <div className="flex justify-center"> 
          <div className=" relative flex justify-center">
            <div className="w-[68.95vw] h-[38.13vw] uppercase text-[rgba(217,217,217,0.6)] text-[1.6vw] tracking-[0.2em] leading-[14px] text-center font-exlt bg-[url('/h5/page1_title_bg2.png')] flex justify-center items-center flex-col"
              style={{backgroundSize: '100% 100%'}}
            >
              <div  className="">Based on uniswap, targeted on web3 advertisement </div>
              <div>Committed to serve advancing user data rights in web3</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SubPage1