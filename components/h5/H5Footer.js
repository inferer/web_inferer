import React, { useEffect, useState } from "react";

const H5Footer = () => {
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 1) {
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    }
    return () => {
      window.onscroll = null
    }
  }, [])
  return (
    <div className={`
      h-[8vw] bg-[#0A0917] px-[5.3333vw] flex items-center justify-between fixed bottom-0 w-full transition-all duration-300
      ${ showMenu ? ' bottom-0 opacity-100' : ' -bottom-[10vw] opacity-0' }
    `} >
      <div className="text-[#646787] text-[1.8667vw] font-medium">Made by Inferer Labs</div>
      <div className="text-[#646787] text-[1.8667vw] font-medium">Thanks to Platon</div>
    </div>
  )
}

export default H5Footer