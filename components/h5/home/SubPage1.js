import React from "react";
import H5Menu from '../Menu'

const SubPage1 = () => {
  return (
    <div className="bg-[url('/h5/subpage1_bg.png')] bg-no-repeat bg-top bg-cover w-full pb-[19.2vw] pt-[52.533vw]">
      <H5Menu />
      <div className="flex justify-center">
        <div className="text-[9.6vw] font-bold text-white main-title letter-spacing font-fbold" style={{letterSpacing: '0.04rem'}}>INFERER</div>
      </div>
      <div className="flex justify-center mt-[53.2vw]">
        <div className="w-[36.2667vw] text-[rgba(78,77,122,1)] text-[3.2vw] leading-[150%] text-center">
          Built on data analysis
          Serve for web3 identity
        </div>
      </div>
      <div className="flex justify-center mt-[6.4vw]">
        <div className="bg-[url('/h5/launch_btn_bg.png')] bg-no-repeat bg-center bg-cover w-[36.5333vw] h-[11.2vw] flex justify-center items-center text-white font-bold text-[4.2667vw] cursor-pointer font-fbold"
          onClick={e => {
            e.stopPropagation()
            window.open('https://chrome.google.com/webstore/detail/inferer/cihpoafnmmlancocngfdmdcfhkfjglnj', '_blank')
          }}
        >
        LAUNCH APP
        </div>
      </div>
    </div>
  )
}

export default SubPage1