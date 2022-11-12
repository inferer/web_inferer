import React from "react";
import LazyImage from '../../LazyImage'
import Title from '../Title'
import TextWrap from './TextWrap'

const SubPage3 = () => {
  return (
    <div>
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[9.4667vw]">
        <div className="flex justify-center flex-col items-center">
          <Title text="Built on Data Analysis" />
          <div className="px-[5.3333vw] mt-[3.2vw]">
            <TextWrap>
            Based on on-chain and off-chain data analysis and data mining, we can infer user identity through algorithms models and offers the final user identify evaluation. 
            </TextWrap>
          </div>
          <div className="mt-[8.1333vw]">
            <LazyImage src="/h5/sub3_b.png" className="w-[82.4vw] h-[66.8vw]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(23,21,50,1)] pt-[11.2vw] pb-[9.4667vw]">
        <div className="flex justify-center flex-col items-center">
          <Title text="Products" />
          <div className="w-[89.2vw] h-[32.8vw] bg-[#0A0917] rounded-[2.8vw] mt-[8.9333vw] flex items-center px-[3.2vw] py-[4.2667vw] ">
d           <div className=" shrink-0">
                <LazyImage src="/h5/sub4_1.png" className="w-[33.6vw] h-[24.2667vw]" />
            </div>
            <div className="ml-[3.7333vw]">
              <div className="text-white font-bold text-[4.8vw]">Inferer Search</div>
              <TextWrap>
                <span className="text-[3.2vw]">Focus on instant-check search scenarios, and provide a quick scan on address.</span>
                <span className="text-gradient font-medium text-[3.2vw] cursor-pointer">
                  Try it out 
                  <img src="/h5/url.png" className=" inline-block w-[3.2vw] h-[3.2vw] ml-[0.9333vw]" />
                </span>
              </TextWrap>
            </div>
          </div>
          <div className="w-[89.2vw] h-[32.8vw] bg-[#0A0917] rounded-[2.8vw] mt-[6.4vw] flex items-center flex-row-reverse px-[3.2vw] py-[4.2667vw] ">
d           <div className=" shrink-0">
              <LazyImage src="/h5/sub4_2.png" className="w-[33.6vw] h-[24.2667vw]" />
            </div>
            <div className="ml-[3.7333vw]">
              <div className="text-white font-bold text-[4.8vw]">Inferer API</div>
              <TextWrap>
                <span className="text-[3.2vw]">Focus on pre-security check scenarios, and get integrated in dApps</span>
                <span className="text-gradient font-medium text-[3.2vw] cursor-pointer">
                  Try it out 
                  <img src="/h5/url.png" className=" inline-block w-[3.2vw] h-[3.2vw] ml-[0.9333vw]" />
                </span>
              </TextWrap>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[9.4667vw]">
        <div className="flex justify-center flex-col items-center">
          <Title text="Inferer community" />
          <div className="px-[5.3333vw] mt-[3.2vw]">
            <TextWrap>
            We value community and community would join in inferer evaluation process and manage routine. Our community would drive us to contribute to great user ecosystem on chain.
            </TextWrap>
          </div>
          <div className="mt-[4.1333vw]">
            <LazyImage src="/h5/sub_5.png" className="w-[89.3333vw] h-[48.1333vw]" />
          </div>
        </div>
      </div>
      <div className="bg-[#0F0E23] pt-[11.2vw] pb-[9.4667vw]">
        <div className="flex justify-center flex-col items-center">
          <Title text="Contact us" />
          <div className="grid grid-cols-2 gap-[3.2vw] mt-[3.8667vw]">
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer">
              <LazyImage src="/h5/twitter.png" className="w-[7.7333vw] h-[7.7333vw]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw]">Twitter</span>
            </div>
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer">
              <LazyImage src="/h5/discord.png" className="w-[7.7333vw] h-[7.7333vw]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw]">Discord</span>
            </div>
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer">
              <LazyImage src="/h5/tg.png" className="w-[7.7333vw] h-[7.7333vw]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw]">Telegram</span>
            </div>
            <div className="w-[43.0667vw] h-[17.4667vw] bg-[rgba(10,9,23,1)] rounded-[2vw] flex items-center pl-[5.3333vw] cursor-pointer">
              <LazyImage src="/h5/mail.png" className="w-[7.7333vw] h-[7.7333vw]" />
              <span className="text-white font-bold text-[4.2667vw] ml-[2.8vw]">Mail</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="h-[8vw] bg-[#0A0917] px-[5.3333vw] flex items-center justify-between">
        <div className="text-[#646787] text-[1.8667vw] font-medium">Made by Inferer Labs</div>
        <div className="text-[#646787] text-[1.8667vw] font-medium">Thanks to Platon</div>
      </div>
    </div>
  )
}

export default SubPage3