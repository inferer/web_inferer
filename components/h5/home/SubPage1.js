import React from "react";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/h5/subpage1_bg.png')] bg-no-repeat bg-top bg-cover w-full pb-[19.2vw]">
      <div className="flex items-center justify-between px-[5.3333vw] pt-[6.6667vw]">
        <div>
          <img src="/h5/logo.png" className="w-[5.3333vw] h-[5.3333vw]" />
        </div>
        <div>
          <img src="/h5/menus.png" className="w-[5.3333vw] h-[5.3333vw]" />
        </div>
      </div>
      <div className="mt-[40.5333vw] flex justify-center">
        <div className="text-[9.6vw] font-bold text-white main-title">INFERER</div>
      </div>
      <div className="flex justify-center mt-[53.2vw]">
        <div className="w-[36.2667vw] text-[rgba(78,77,122,1)] text-[3.2vw] leading-[150%] text-center">
          Built on data analysis
          Serve for web3 identity
        </div>
      </div>
      <div className="flex justify-center mt-[6.4vw]">
        <div className="bg-[url('/h5/launch_btn_bg.png')] bg-no-repeat bg-center bg-cover w-[36.5333vw] h-[11.2vw] flex justify-center items-center text-white font-bold text-[4.2667vw] cursor-pointer">
        LAUNCH APP
        </div>
      </div>
    </div>
  )
}

export default SubPage1