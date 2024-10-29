import React from "react";
import H5Menu from '../Menu'

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/page1_bg.png')] bg-no-repeat bg-top bg-cover w-full pb-[19.2vw] pt-[38.7vw]">
      <H5Menu />
      <div className="w-[100vw] h-[23.33vw] bg-[url('/pc/page1_title_bg.png')] flex justify-center items-center" style={{backgroundSize: '100% 100%'}}>
        <div className="font-exlt text-center text-[4vw] text-white uppercase" style={{letterSpacing: '5px'}}>INFERER AIRDROP PROTOCOL</div>
      </div>
      <div className="flex justify-center mt-[20vw]">
        <div className="w-[76.2667vw] text-[rgba(78,77,122,1)] text-[3.2vw] leading-[150%] text-center">
        Based on uniswap, targeted on web3 advertisement
        Committed to serve advancing user data rights in web3
        </div>
      </div>
      <div className="flex justify-center mt-[6.4vw]">
        <div className="bg-[url('https://website-1315068501.cos.ap-nanjing.myqcloud.com/web_inferer/h5/launch_btn_bg.png')] bg-no-repeat bg-center bg-cover w-[36.5333vw] h-[11.2vw] flex justify-center items-center text-white font-bold text-[4.2667vw] cursor-pointer font-fbold"
          onClick={e => {
            e.stopPropagation()
            window.open('https://id.inferer.xyz', '_blank')
          }}
        >
        LAUNCH APP
        </div>
      </div>
    </div>
  )
}

export default SubPage1