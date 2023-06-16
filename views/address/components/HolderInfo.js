import React, { useState } from "react";
import LazyImage from "../../../components/LazyImage";

const TextMain = ({ children }) => {
  return (
    <div className="text-[20px] font-fbold text-[#3F4664] leading-[26px]">{children}</div>
  )
}
const TextSub = ({ children }) => {
  return (
    <div className="text-[rgba(63,70,100,0.6)] text-[16px] leading-6">
      {children}
    </div>
  )
}


const HolderInfo = () => {
  const [infererLabels] = useState([
    {label_name: 'Defi Staker'},
    {label_name: 'Defi Staker'},
    {label_name: 'ENS User'},
    {label_name: 'Top NFT Holders'},
    {label_name: 'Defi Staker'},
    {label_name: 'Opensea Trader'},
  ])

  return (
    <div className="mt-[120px] holder_bg h-[640px] rounded-xl flex relative">
      <LazyImage src="/addressan/circle4.png" className="w-[62px] h-[62px] absolute left-[11px] -top-[31px]" />
      <div className="flex-1">
        <div className="flex mt-[42px] mb-5 justify-center">
          <div className="relative w-[132px] h-[174px] flex items-center justify-center">
            <LazyImage src="/addressan/nft-asset.png" className=" max-w-full max-h-full w-auto h-auto" />
            <LazyImage src="/addressan/avatar_bg.png" className="w-[132px] h-[174px] absolute left-0 top-0" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <LazyImage src="/addressan/sq.png" className=" w-[10px] h-[10px]" />
          <div className="w-10 border-b border-[rgba(246,59,71,0.6)] mx-[18px]"></div>
          <div className=" font-fmedium text-[24px] num-text2">Holder</div>
          <div className="w-10 border-b border-[rgba(246,59,71,0.6)] mx-[18px]"></div>
          <LazyImage src="/addressan/sq.png" className=" w-[10px] h-[10px]" />
        </div>
        <div className="mt-[83px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/reddit_logo.png" className="w-[26px] h-[26px] mr-[6px]" />
            <TextMain>Reddit</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>BridgetheDivide</TextSub>
            <LazyImage src="/addressan/images/share.png" className="w-[16px] h-[16px] ml-[4px] cursor-pointer" />
          </div>
        </div>
        <div className="mt-[22px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/reddit2.png" className="w-[26px] h-[26px] mr-[6px]" />
            <TextMain>Reddit</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>Hold 239 Reddit NFTs</TextSub>
          </div>
        </div>
        <div className="mt-[22px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/link.png" className="w-[26px] h-[26px] mr-[6px]" />
            <TextMain>Address</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>0x231d3559aa848bf10366fb9868590f01d34bf240</TextSub>
            <LazyImage src="/addressan/images/copy.png" className="w-[16px] h-[16px] ml-[4px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-[755px] px-[64px] pr-[98px] pt-[30px] pb-[70px]">
         <div className="flex items-center">
            <LazyImage src="/addressan/ticket.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[rgba(63,70,100,0.9)]">Inferer score</div>
         </div>
         <div className="num-text1 font-fbold text-[176px] leading-[229px] text-center">
            3.2
         </div>
         <div className="flex items-center">
            <LazyImage src="/addressan/label.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[rgba(63,70,100,0.9)]">Inferer labels</div>
         </div>
         <div className="mt-[10px] pl-[30px]">
            <div className="bg-[#F8F9FF] rounded h-[116px] pl-5 pt-4">
              <div className="flex flex-wrap">
                {
                  infererLabels.map((label) => {
                    return (
                      <div key={label.label_name} className="infer-label2">
                        <div className="text-[20px] text-[#3F4664]">{label.label_name}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
         </div>
         <div className="flex items-center mt-5">
            <LazyImage src="/addressan/info.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[rgba(63,70,100,0.9)]">Basic info</div>
         </div>
         <div className="mt-[10px] pl-[30px]">
            <div className="bg-[#F8F9FF] rounded h-[76px] text-[20px] font-fbold text-[#3F4664]">
              <div className="flex h-[38px]">
                <div className="w-[50%] flex justify-between px-6 items-center bg-[#EEF4FF]">
                  <div className="">Balance</div>
                  <div className="text-[20px] font-fbold text-[#3F4664]">123</div>
                </div>
                <div className="w-[50%] flex justify-between px-6 items-center">
                  <div className="">Birth on</div>
                  <div className="">5/18/2021</div>
                </div>
              </div>
              <div className="flex h-[38px]">
                <div className="w-[50%] flex justify-between px-6 items-center">
                  <div className="">Tx count</div>
                  <div className="text-[20px] font-fbold text-[#3F4664]">8</div>
                </div>
                <div className="w-[50%] flex justify-between px-6 items-center bg-[#EEF4FF]">
                  <div className="">Active since</div>
                  <div className="">5/18/2021</div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default HolderInfo