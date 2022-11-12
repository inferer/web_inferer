import React from "react";

const TextWrap = ({ children }) => {
  return (
    <div className="text-[3.2vw] text-[rgba(255,255,255,0.6)] leading-[4.8vw]">
      { children }
    </div>
  )
}

export default TextWrap