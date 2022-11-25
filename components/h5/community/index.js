import React, { useEffect, useState } from "react";
import H5Menu from '../Menu'
import Title from '../Title'
import H5Footer from '../H5Footer'
import LazyImage from '../../LazyImage'

const H5Community = ({ onSubmit, defaultValue, inputValueChange }) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (defaultValue === '' && inputValue !== '') {
      setInputValue('')
    }
  }, [defaultValue])
  return (
    <div className="pt-[17.33333vw] min-h-screen ">
      <H5Menu />
      <div className="text-[6.4vw] font-bold text-white text-center font-fbold">
        Community
      </div>
      <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing text-center mt-[3.2vw] px-[10.6667vw]">
        Inferer community is an ecosystem of users, developers, designers and evaluators. 
      </div>
      <div className="flex justify-center mt-[10.6667vw]">
        <Title className="" >
          <span className="text-[4.2667vw] font-fmedium">Owned by the community</span>
        </Title>
      </div>
      <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing mt-[4vw] px-[5.3333vw]">
      Inferer is born in web3 and values community.  We hope to help contribute to great user ecosystem on chain and it wouldn’t be possible without ourcommunity. 
      <br />
      <br />
      Inferer community would play in a big role in our evaluation system. They’re decentralized and become an internal part in our evaluation
      process, which improves inferer all the time.
      </div>
      <div className="mt-[6.4vw] flex justify-center">
        <LazyImage src="/h5/sub2_b.png" className="w-[89.2vw] h-[34.9333vw]" />
      </div>
      <div className="flex justify-center mt-[10.6667vw]">
        <Title className="text-[4.2667vw]" >
          <span className="text-[4.2667vw] font-fmedium">Join the community</span>
        </Title>
      </div>
      <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw] letter-spacing text-center mt-[3.2vw] px-[10.6667vw]">
      Join the community and participate in our discussions. 
      </div>
      <div className="mt-[7.2vw] flex justify-center">
        <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw] shrink-0">
          <LazyImage src="/h5/twitter.png" className="w-[10.6667vw] h-[10.6667vw]" />
          <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium">Twitter</span>
        </div>
        <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw]">
          <LazyImage src="/h5/discord.png" className="w-[10.6667vw] h-[10.6667vw]" />
          <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium">Discord</span>
        </div>
        <div className="flex items-center flex-col justify-center cursor-pointer w-[22.2667vw]">
          <LazyImage src="/h5/tg.png" className="w-[10.6667vw] h-[10.6667vw]" />
          <span className="text-white font-medium text-[3.7333vw] mt-[2.1333vw] font-fmedium">Telegram</span>
        </div>
      </div>
      <div className="mb-[21.3333vw] mt-[6.4vw] px-[5.3333vw]">
        <div className="flex w-full">
          <input className="bg-[rgba(23,21,50,1)] h-[11.0667vw] rounded-l-[1.3333vw] w-full outline-none pl-[3.2vw] text-[3.2vw] font-medium text-white"
            placeholder="Your email"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
              inputValueChange(e.target.value)
            }}
          />
          <div className="text-[3.7333vw] shrink-0 letter-spacing font-bold btn-bg w-[27.6vw] h-[11.0667vw] flex justify-center items-center rounded-r-[1.3333vw] text-white cursor-pointer"
            onClick={e => {
              e.stopPropagation()
              onSubmit && onSubmit()
            }}
          >
          <span className="font-fbold">SUBSCRIBE</span> 
          </div>
        </div>
      </div>
      <H5Footer />
    </div>
  )
}

export default H5Community