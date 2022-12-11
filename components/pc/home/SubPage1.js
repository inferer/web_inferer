import React from "react";
import LazyImage from "../../LazyImage";

const SubPage1 = () => {
  return (
    <div className="bg-[url('/pc/subpage1_bg.png')] flex justify-center bg-no-repeat" style={{backgroundSize: '100% auto', backgroundColor: '#0f0923'}}>
      <div className="max-w-[1200px] py-[10.00vw]">
        <LazyImage src='/pc/subpage1_text.png' className="w-[42vw] h-auto max-w-[815px]" />
      </div>
    </div>
  )
}

export default SubPage1