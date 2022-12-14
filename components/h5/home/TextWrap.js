import React from "react";

const TextWrap = ({ children }) => {
  return (
    <>
    <div className="text-[3.2vw] sm:text-[16px] text-[rgba(255,255,255,0.6)] tracking-wide leading-[4.8vw] sm:leading-6 block sm:hidden">
      { children }
    </div>
    <div className="text-[3.2vw] text-justify sm:text-[16px] text-[rgba(255,255,255,0.6)] leading-[4.8vw] sm:leading-6 letter-spacing-lg hidden sm:block">
      { children }
    </div>
    </>
    
  )
}

export default TextWrap