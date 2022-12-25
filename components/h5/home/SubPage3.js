import React from "react";
import Link from "next/link";
import LazyImage from '../../LazyImage'
import Title from '../Title'
import TextWrap from './TextWrap'

const SubPage3 = () => {
  return (
    <div className="">
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[9.4667vw] sm:pt-[120px] sm:pb-[120px] flex justify-center">
        <div className="flex justify-center flex-col items-center sm:max-w-[1200px]">
          <Title text="Built on Data Analysis" />
          <div className="px-[5.3333vw] mt-[3.2vw] sm:mt-10 sm:px-0">
            <TextWrap>
            Blockchain is unique with its immutable data on chain and all data is public to everyone, which we  believe the solution for bots also points to data. We could learn from data on chain and evaluate bots based on the behaviors in data. 
            </TextWrap>
          </div>
          <div className="mt-[8.1333vw] sm:mt-[100px]">
            <LazyImage src="/h5/sub3_b.png" className="w-[100vw] h-[84.9333vw] sm:w-[900px] sm:h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(23,21,50,1)] pt-[11.2vw] pb-[9.4667vw] flex justify-center">
        <div className="flex justify-center flex-col items-center sm:max-w-[1200px]">
          <Title text="Products" />
          <div className=" sm:hidden w-[89.2vw] h-[32.8vw] bg-[#0A0917] rounded-[2.8vw] mt-[6.4vw] flex items-center px-[3.2vw] py-[4.2667vw] ">
            <div className=" shrink-0">
                <LazyImage src="/h5/sub4_1.png" className="w-[33.6vw] h-[24.2667vw]" />
            </div>
            <div className="ml-[3.7333vw]">
              <div className="text-white font-bold text-[4.8vw] font-fbold">Inferer Identity</div>
              <TextWrap>
                <span className="text-[3.2vw]">Focus on instant-check search scenarios, and provide a quick scan on address.</span>
                <span className="text-gradient font-medium text-[3.2vw] cursor-pointer font-fmedium"
                  onClick={e => {
                    e.stopPropagation()
                    window.open('https://chrome.google.com/webstore/detail/inferer/cihpoafnmmlancocngfdmdcfhkfjglnj', '_blank')
                  }}
                >
                  <div className="text-gradient tracking-wider relative inline-block">
                   Try it out 
                    <div className="bg-gr w-full h-[1px] bg-gr absolute bottom-[3px] left-0"></div>
                  </div>
                  <img src="/h5/url.png" className=" inline-block w-[3.2vw] h-[3.2vw] ml-[0.9333vw]" />
                </span>
              </TextWrap>
            </div>
          </div>
          <div className=" sm:hidden w-[89.2vw] h-[32.8vw] bg-[#0A0917] rounded-[2.8vw] mt-[6.4vw] flex items-center flex-row-reverse px-[3.2vw] py-[4.2667vw] ">
d           <div className=" shrink-0">
              <LazyImage src="/h5/sub4_2.png" className="w-[33.6vw] h-[24.2667vw]" />
            </div>
            <div className="ml-[3.7333vw]">
              <div className="text-white font-bold text-[4.8vw] font-fbold">Inferer API</div>
              <TextWrap>
                <span className="text-[3.2vw]">Focus on pre-security check scenarios, and get integrated in dApps</span>
                <div className="text-gradient font-medium text-[3.2vw] cursor-pointer font-fmedium">
                  <div className="text-gradient tracking-wider relative inline-block">
                    For more detail
                    <div className="bg-gr w-full h-[1px] bg-gr absolute bottom-[3px] left-0"></div>
                  </div>
                  <img src="/h5/url.png" className=" inline-block w-[3.2vw] h-[3.2vw] ml-[0.9333vw]" />
                </div>
              </TextWrap>
            </div>
          </div>
          <div className="hidden w-full mt-[98px] sm:flex items-center justify-center">
            <div className=" shrink-0">
              <LazyImage src="/h5/sub4_1.png" className="w-[368px] h-[260px]" />
            </div>
            <div>
              <LazyImage src="/pc/line.png" className="w-[110px] h-[12px] ml-10" />
            </div>
            <div className="ml-[40px] bg-[#0A0917] rounded-[12px] px-[30px] py-[40px] w-[650px] h-[260px] flex flex-col relative ">
              <LazyImage src="/pc/circle2.png" className="w-[32px] h-[32px] absolute left-[30px] top-0 -mt-[15px]" />
              <div className="text-white font-bold text-[34px] font-fbold mb-[37px]">Inferer Identity</div>
              <TextWrap>
                <div className="leading-6">
                <span className="text-[16px] tracking-widest leading-6">Focus on instant-check search scenarios, which enable user to
have a quick scan on address.</span>
                  </div>
                
              </TextWrap>
              <div className=" font-medium text-[16px] cursor-pointer font-fmedium mt-5"
                onClick={e => {
                  e.stopPropagation()
                  window.open('https://chrome.google.com/webstore/detail/inferer/cihpoafnmmlancocngfdmdcfhkfjglnj', '_blank')
                }}
              >
                <div className="text-gradient tracking-wider relative inline-block">
                  Try it out 
                  <div className="bg-gr w-full h-[1px] bg-gr absolute bottom-[3px] left-0"></div>
                </div>
                
                <img src="/h5/url.png" className=" inline-block w-[20px] h-[20px] ml-[4px]" />
              </div>
            </div>
          </div>
          <div className="hidden w-full sm:flex items-center justify-center mt-[140px]">
            <div className="bg-[#0A0917] rounded-[12px] px-[30px] py-[40px] w-[650px] h-[260px] flex flex-col relative">
              <LazyImage src="/pc/circle1.png" className="w-[32px] h-[32px] absolute left-[30px] top-0 -mt-[15px]" />
              <div className="text-white font-bold text-[34px] font-fbold mb-[10px]">Inferer API</div>
              <TextWrap>
                <div className="leading-6">
                <span className="text-[16px] tracking-widest leading-6">Focus on pre-security check scenarios, which could be integrated in customer’s product and help reduce the harm conducted by bots or hackers. </span>
                </div>
                
              </TextWrap>
              <div className=" font-medium text-[16px] cursor-pointer font-fmedium mt-5"
                onClick={e => {
                  e.stopPropagation()
                  // window.open('https://chrome.google.com/webstore/detail/inferer/cihpoafnmmlancocngfdmdcfhkfjglnj', '_blank')
                }}
              >
                <div className="text-gradient tracking-wider relative inline-block">
                  For more detail
                  <div className="bg-gr w-full h-[1px] bg-gr absolute bottom-[3px] left-0"></div>
                </div>
                
                <img src="/h5/url.png" className=" inline-block w-[20px] h-[20px] ml-[4px]" />
              </div>
            </div>
            <div>
              <LazyImage src="/pc/line.png" className="w-[110px] h-[12px] ml-10" />
            </div>
            <div className=" shrink-0 ml-[40px] ">
              <LazyImage src="/h5/sub4_2.png" className="w-[368px] h-[260px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[9.4667vw] sm:pt-[120px] sm:pb-[120px] flex justify-center">
        <div className="flex justify-center flex-col items-center sm:max-w-[1200px]">
          <Title text="Community" />
          <div className="px-[5.3333vw] mt-[3.2vw] sm:mt-[33px] sm:px-0">
            <TextWrap>
            Inferer is born in web3 and values community. Community would play a big role in inferer evaluation and management. We hope inferer community could help contribute to great user ecosystem on chain.
            </TextWrap>
          </div>
          <div className="mt-[4.1333vw] sm:mt-[100px]">
            <LazyImage src="/h5/sub_5.png" className="w-[89.3333vw] h-[48.1333vw] sm:w-[887px] sm:h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[16vw] sm:pt-[91px] sm:pb-[74px]">
        <div className="flex justify-center flex-col items-center">
          <Title text="Contact us" />
          <div className="grid grid-cols-2 gap-[3.2vw] mt-[3.8667vw]">
            <a href="https://twitter.com/inferer_xyz" target="_blank" >
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer sm:w-[573px] sm:h-[146px] sm:rounded-[15px] sm:pl-8">
              <LazyImage src="/h5/twitter.png" className="w-[7.7333vw] h-[7.7333vw] sm:w-[58px] sm:h-[58px]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw] font-fbold block sm:hidden">Twitter</span>
              <div className="hidden sm:block font-fmedium text-white ml-4">
                <div className="text-[22px] mb-1">Twitter</div>
                <div className="text-[14px] text-[rgba(255,255,255,0.6)]">Follow our Twitter to get latest info.</div>
              </div>
            </div>
            </a>
            <a href="https://twitter.com/inferer_xyz" target="_blank" >
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer sm:w-[573px] sm:h-[146px] sm:rounded-[15px] sm:pl-8">
              <LazyImage src="/h5/discord.png" className="w-[7.7333vw] h-[7.7333vw] sm:w-[58px] sm:h-[58px]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw] font-fbold block sm:hidden">Discord</span>
              <div className="hidden sm:block font-fmedium text-white ml-4">
                <div className="text-[22px] mb-1">Discord</div>
                <div className="text-[14px] text-[rgba(255,255,255,0.6)]">Participate in our Discord to get latest info.</div>
              </div>
            </div>
            </a>
            <a href="https://twitter.com/inferer_xyz" target="_blank" >
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer sm:w-[573px] sm:h-[146px] sm:rounded-[15px] sm:pl-8">
              <LazyImage src="/h5/tg.png" className="w-[7.7333vw] h-[7.7333vw] sm:w-[58px] sm:h-[58px]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw] font-fbold block sm:hidden">Telegram</span>
              <div className="hidden sm:block font-fmedium text-white ml-4">
                <div className="text-[22px] mb-1">Telegram</div>
                <div className="text-[14px] text-[rgba(255,255,255,0.6)]">Join in our Telegram group to get latest info.</div>
              </div>
            </div>
            </a>
            <a href="https://twitter.com/inferer_xyz" target="_blank" >
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer sm:w-[573px] sm:h-[146px] sm:rounded-[15px] sm:pl-8">
              <LazyImage src="/h5/mail.png" className="w-[7.7333vw] h-[7.7333vw] sm:w-[58px] sm:h-[58px]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw] font-fbold block sm:hidden">Mail</span>
              <div className="hidden sm:block font-fmedium text-white ml-4">
                <div className="text-[22px] mb-1">Mail</div>
                <div className="text-[14px] text-[rgba(255,255,255,0.6)]">Email us if anything interests you.</div>
              </div>
            </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SubPage3