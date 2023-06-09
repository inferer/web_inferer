import React from "react";
import MenuWhite from '../../components/pc/MenuWhite';
import RedditTitle from './components/RedditTitle';

const Ranking = () => {
  return (
    <div  className=" min-h-screen ranking-bg ">
      <div className="w-full bg-white fixed z-50 left-0 right-0 top-0 ">
        <div className="w-[1200px] mx-auto">
          <MenuWhite />
        </div>
      </div>
      <div className="w-[1200px] mx-auto pt-[104px]">
        <RedditTitle />
      </div>
    </div>
  )
}

export default Ranking