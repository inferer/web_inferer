import React from "react";
import LazyImage from '../../LazyImage'
import Title from '../Title'
import TextWrap from './TextWrap'

const SubPage2 = () => {
  return (
    <div className="bg-[#171532] pt-[11.2vw] pb-[12vw] sm:pt-[120px] sm:pb-[136px] sm:flex sm:justify-center">
      <div className="flex justify-center flex-col items-center sm:max-w-[1200px]">
        <Title text="What's Inferer ?" />
        <div className="px-[5.3333vw] sm:px-0 mt-[3.2vw] sm:mt-[32px]">
          <TextWrap>
          Inferer is a user identity analysis service on blockchain. We try to build a label-rich user portrait system, which is based on on-chain and off-chain data analysis and data mining, infer user identity through algorithms models and offers the final user identify evaluation service.
          </TextWrap>
        </div>
        <div className="mt-[10.6667vw] sm:mt-[92px]">
          <LazyImage src="/h5/inferer.png" className="w-[80vw] h-[31.0667vw] sm:w-[995px] sm:h-[387px]" />
        </div>
        <Title text="Why we build Inferer?" className="mt-[9.3333vw] sm:mt-[120px]" />
        <div className="px-[5.3333vw] sm:px-0 mt-[3.2vw] sm:mt-8">
          <TextWrap>
          So many bots we've seen on chain and they're huring user experience in many ways. The cost for
building bots is too low to further generate more bots. It also increase the secrity risks in many
products. We hope Inferer could increase the cost of bot activity and raise the bar when they try to
hurt others, which facilitates current crypto users and would be more attractive to new crypto users.
          </TextWrap>
        </div>
        <div className="mt-[10.8vw] sm:mt-12">
          <LazyImage src="/h5/sub2_b.png" className="w-[89.2vw] h-[35.0667vw] sm:w-[887px] sm:h-[348px]" />
        </div>
      </div>

    </div>
  )
}

export default SubPage2