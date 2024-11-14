import React from "react";
import LazyImage from '../../LazyImage'
import Title from '../Title'
import TextWrap from './TextWrap'

const SubPage2 = () => {
  return (
    <div className="bg-[#171532] pt-[11.2vw] pb-[12vw] sm:pt-[120px] sm:pb-[8.333vw] sm:flex sm:justify-center">
      <div className="flex justify-center flex-col items-center sm:max-w-[1200px]">
        <Title text="Inferer Airdrop Protocol" />
        <div className="px-[5.3333vw] sm:w-[62.5vw] sm:px-0 mt-[3.2vw] sm:mt-[32px]">
          <TextWrap>
          Inferer Airdrop protocol is the first ever decentralized crypto airdrop protocol, which is based on uniswap, targeted on web3 airdrop(advertisement) and created new possibilities on airdrop. It’s AMM based, user analyzed and data(user) profited.
          </TextWrap>
        </div>
        <div className="mt-[10.6667vw] sm:mt-[4.6875vw]">
          <img src="/pc/protocol.png" className="w-[89.2vw] h-auto sm:w-[46.19vw] sm:h-[17.8125vw]" />
        </div>
        <Title text="User Data Rights" className="mt-[9.3333vw] sm:mt-[8.3333vw]" />
        <div className="px-[5.3333vw] sm:w-[62.5vw] sm:px-0 mt-[3.2vw] sm:mt-8">
          <TextWrap>
          User data rights would prosper in web3 era. People would get their deserved economic feedbacks in this new era. The problem billions dollars of earnings created upon user data are solely poured into giant web2 entities’ revenue would be fixed. With blockchain technology, people would have a much more fair, permissionless and efficient data rights economics.
          </TextWrap>
        </div>
        <div className="mt-[10.8vw] sm:mt-[4.6875vw]">
          <img src="/pc/user_data.png" className="w-[89.2vw] h-auto sm:w-[51.718vw] sm:h-[20.833vw]" />
        </div>
      </div>

    </div>
  )
}

export default SubPage2