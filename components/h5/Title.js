import React from "react";
import LazyImage from '../LazyImage'

const Title = ({ text, className, children }) => {
  return (
    <div className={`flex items-center text-white text-[4.8vw] ${className}`}>
      <LazyImage src="/h5/t-left.png" className="w-[4.1333vw] h-[4.1333vw]" />
      {
        text ? <span className=" font-bold text-inherit mx-[1.0667vw] font-fbold">{text}</span> : <span className="mx-[1.0667vw]">{children}</span>
      }
      
      <LazyImage src="/h5/t-right.png" className="w-[4.1333vw] h-[4.1333vw]" />
    </div>
  )
}

export default Title