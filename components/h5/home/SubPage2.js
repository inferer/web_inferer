import React from "react";
import LazyImage from '../../LazyImage'
import Title from '../Title'
import TextWrap from './TextWrap'

const SubPage2 = () => {
  return (
    <div className="bg-[#171532] pt-[11.2vw] pb-[12vw]">
      <div className="flex justify-center flex-col items-center">
        <Title text="What's Inferer ?" />
        <div className="px-[5.3333vw] mt-[3.2vw]">
          <TextWrap>
          Inferer is a user identity analysis service on blockchain. We try to build a label-rich user portrait system, which is based on on-chain and off-chain data analysis and data mining, infer user identity through algorithms models and offers the final user identify evaluation service.
          </TextWrap>
        </div>
        <div className="mt-[10.6667vw]">
          <LazyImage src="/h5/inferer.png" className="w-[80vw] h-[31.0667vw]" />
        </div>
        <Title text="Why we build Inferer?" className="mt-[9.3333vw]" />
        <div className="px-[5.3333vw] mt-[3.2vw]">
          <TextWrap>
          So many bots we've seen on chain and the cost for
building bots is too low to further generate more bots. It also increase the security risks. Inferer could increase the cost of bot activity and raise the bar when they try to
hurt others, which facilitates current crypto users and would be more attractive to new crypto users.
          </TextWrap>
        </div>
        <div className="mt-[10.8vw]">
          <LazyImage src="/h5/sub2_b.png" className="w-[89.2vw] h-[35.0667vw]" />
        </div>
      </div>

    </div>
  )
}

export default SubPage2