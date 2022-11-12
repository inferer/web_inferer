import React from "react";
import LazyImage from '../LazyImage'

const Title = ({ text, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <LazyImage src="/h5/t-left.png" className="w-[4.1333vw] h-[4.1333vw]" />
      <span className=" font-bold text-[4.8vw] text-white mx-[1.0667vw]">{text}</span>
      <LazyImage src="/h5/t-right.png" className="w-[4.1333vw] h-[4.1333vw]" />
    </div>
  )
}

export default Title