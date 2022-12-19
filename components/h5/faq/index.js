import React, { useRef } from "react";
import H5Menu from '../Menu'
import Title from '../Title'
import H5Footer from '../H5Footer'
import Menu from "../../pc/Menu";

const TextCard = ({ title, children }) => {
  return (
    <div className="bg-[rgba(10,9,23,1)] py-[4.2667vw] px-[3.7333vw] rounded-[2.8vw] mb-[6.4vw]
      sm:rounded-[21px] sm:px-[28px] sm:py-[32px] sm:mb-[48px]
    ">
      <div className="text-[4.2667vw] sm:text-[24px] sm:mb-[10px] text-white mb-[1.3333vw] font-fbold">{ title }</div>
      <div className="text-[3.2vw] sm:text-[24px] text-[rgba(255,255,255,0.6)] leading-[150%]" style={{letterSpacing: '0.05em'}}>{children}</div>
    </div>
  )
}

const H5Faq = () => {
  return (
    <div className="pt-[17.33333vw] sm:pt-[223px] flex justify-center flex-col items-center">
      <div className=" sm:max-w-[1200px] sm:pb-[80px]">
      <H5Menu className="block sm:hidden" />
      <Menu />
      <div className="flex justify-center">
        <Title text="FAQ" className="text-[6.4vw] font-bold block sm:hidden" />
        <div className="text-[36px] text-white font-fbold sm:block hidden">FAQ</div>
      </div>
      <div 
        className="px-[5.3333vw] mt-[3.7333vw] sm:px-0 sm:mt-[48px]">
        <TextCard title="What's Inferer ?" >
        Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from hurting user experience on chain and contribute to greate user ecysystem on chain.
        </TextCard>
        <TextCard title="What products do Inferer provide?" >
        Currently we have Inferer Search and Inferer API, which serves in different purposes. Inferer Search focuses more on instant-check search scenarios, which enable user to have a quick scan on address whether it's bot related and what behaviors it generated before; Inferer API focuses more on pre-security check scenarios, which could help prevent hackers from invading system and contribute to more security 
        </TextCard>
        <TextCard title="What's Inferer evaluation result?" >
        We learned from "Credit Score", and integrate it to our evaluation. Currenlty we have 5 evaluation levels, which includes Exceptional, Very Good, Good, Fair and Poor. These levels indicates the user behavior and the degree related with bots. We may adjust it if necessary in the future.
        </TextCard>
        <TextCard title="Can I use Inferer in our AirDrop activity?" >
        Sure. Inferer fits well in AirDrop list management. It would help in filtering target users efficiently and save the project team much time and work.
        </TextCard>
        <TextCard title="What about community in Inferer ?" >
        Inferer's born in web3 and focus on community all the time. We would need big community participation in our evaluation process. Also, Inferer would not be a centralized service provider and would be running backed up by our community.
        </TextCard>
        <TextCard title="What if the evaluation result doesn't fit into the fact?" >
        Inferer provide feedback feature in our product and welcome users provide further feedbacks when they believe it doesn't fit into the fact, which would help us improving our service. Internally, when we receive the feedback, we would have a re-analysis process on it and come up with a solution. And this whole process would be checked and published in community.
        </TextCard>
        <TextCard title=" What blockchains does Inferer support?" >
        Currently Inferer is available in PlatON, Ethereum and Polygon.
        </TextCard>
      </div>
      </div>
      <H5Footer />
    </div>
  )
}

export default H5Faq