import React, { useEffect, useState } from "react";
import H5Menu from '../Menu'
import Title from '../Title'
import H5Footer from '../H5Footer'
import LazyImage from '../../LazyImage'
import Menu from "../../pc/Menu";

const H5Community = ({ onSubmit, defaultValue, inputValueChange }) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (defaultValue === '' && inputValue !== '') {
      setInputValue('')
    }
  }, [defaultValue])
  return (
    <div className="pt-[17.33333vw] sm:pt-[224px] min-h-screen sm:max-w-[1200px]">
      <div className="block sm:hidden">
        <H5Menu />
      </div>
      <div className="sm:block hidden">
        <Menu />
      </div>
      
      <div className="text-[6.4vw] sm:text-[36px] text-white text-center sm:text-left font-fbold">
        Community
      </div>
      <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing text-center mt-[3.2vw] px-[10.6667vw]
        sm:text-[18px] sm:text-left sm:px-0 sm:mt-6 sm:leading-[33px]
      ">
        Inferer community is an ecosystem of users, developers, designers and evaluators. 
      </div>
      <div className="flex items-center sm:items-start sm:mt-[120px]">
        <div>
          <div className="flex justify-center sm:justify-start mt-[10.6667vw] sm:mt-[0]">
            <Title className=" block sm:hidden" >
              <span className="text-[4.2667vw] font-fmedium">Owned by the community</span>
            </Title>
            <div className="hidden sm:block text-[32px] text-white font-fmedium">Owned by the community</div>
          </div>
          <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing mt-[4vw] px-[5.3333vw]
            sm:text-[18px] sm:leading-[36px] sm:mt-3 sm:px-0
          ">
          Inferer is born in web3 and values community.  We hope to help contribute to great user ecosystem on chain and it wouldn’t be possible without ourcommunity. 
          <br />
          <br />
          Inferer community would play in a big role in our evaluation system. They’re decentralized and become an internal part in our evaluation
          process, which improves inferer all the time.
          </div>
          <div className="mt-[6.4vw] flex justify-center sm:hidden">
            <LazyImage src="/h5/cm_b.png" className="w-[89.2vw] h-[34.9333vw]" />
          </div>
        </div>
        <div className="hidden sm:block shrink-0 ml-[97px]">
          <LazyImage src="/pc/commutiy.png" className="w-[402px] h-[400px]" />
        </div>
      </div>
      <div className=" mt-[10.6667vw] sm:mt-[111px] sm:bg-[#0A0917] sm:rounded-[20px] sm:shadow-2xl">
        <div className="flex justify-center">
          <Title className="text-[4.2667vw] block sm:hidden" >
            <span className="text-[4.2667vw] font-fmedium">Join the community</span>
          </Title>
          <div className="text-[32px] mt-[89px] font-fmedium text-white hidden sm:block">Join the community</div>
        </div>
        <div className="flex justify-center">
          <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing text-center mt-[3.2vw] px-[10.6667vw]
            sm:text-[18px] sm:leading-[36px] sm:max-w-[540px] sm:px-0 sm:mt-[13px]
          ">
          Join the community and participate in our discussions. 
          </div>
        </div>
        <div className="mt-[7.2vw] sm:mt-[60px] flex justify-center sm:space-x-[226px]">
          <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw] sm:w-[136px] shrink-0">
            <LazyImage src="/h5/twitter.png" className="w-[10.6667vw] h-[10.6667vw] sm:w-[100px] sm:h-[100px]" />
            <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium sm:text-[20px] sm:mt-[22px]">Twitter</span>
          </div>
          <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw] sm:w-[136px]">
            <LazyImage src="/h5/discord.png" className="w-[10.6667vw] h-[10.6667vw] sm:w-[100px] sm:h-[100px]" />
            <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium sm:text-[20px] sm:mt-[22px]">Discord</span>
          </div>
          <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw] sm:w-[136px]">
            <LazyImage src="/h5/tg.png" className="w-[10.6667vw] h-[10.6667vw] sm:w-[100px] sm:h-[100px]" />
            <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium sm:text-[20px] sm:mt-[22px]">Telegram</span>
          </div>
        </div>
        <div className="mb-[21.3333vw] mt-[6.4vw] sm:mb-[100px] sm:pb-[100px] sm:mt-[100px] sm:px-0 px-[5.3333vw]">
          <div className="flex w-full justify-center">
            <input className="
             bg-[rgba(23,21,50,1)] h-[11.0667vw] rounded-l-[1.3333vw] w-full outline-none pl-[3.2vw] text-[3.2vw] font-medium text-white
              sm:h-[67px] sm:max-w-[630px] sm:rounded-l-[10px] sm:pl-[25px] sm:text-[18px]
            "
              placeholder="Your email"
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value)
                inputValueChange(e.target.value)
              }}
            />
            <div className="
              text-[3.7333vw] shrink-0 letter-spacing font-bold btn-bg w-[27.6vw] h-[11.0667vw] flex justify-center items-center rounded-r-[1.3333vw] text-white cursor-pointer
              sm:h-[67px] sm:w-[200px] sm:rounded-r-[10px] sm:text-[18px]
            "
              onClick={e => {
                e.stopPropagation()
                onSubmit && onSubmit()
              }}
            >
            <span className="font-fbold">SUBSCRIBE</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default H5Community