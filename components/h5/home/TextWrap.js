import React from "react";

const TextWrap = ({ children }) => {
  return (
    <>
    <div className="text-[3.2vw] sm:text-[22px] text-[rgba(255,255,255,0.6)] tracking-wide sm:tracking-wider leading-[4.8vw] sm:leading-6 block sm:hidden font-exlt">
      { children }
    </div>
    <div className="text-[3.2vw] text-justify sm:text-[20px] text-[rgba(255,255,255,0.6)] leading-[4.8vw] sm:leading-[150%] tracking-wide sm:tracking-wider sm:text-left hidden sm:block font-exlt">
      { children }
    </div>
    </>
    
  )
}

export default TextWrap