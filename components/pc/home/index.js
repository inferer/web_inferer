import React from "react";
import SubPage2 from "../../h5/home/SubPage2";
import SubPage3 from "../../h5/home/SubPage3";
import H5Footer from "../../h5/H5Footer";
import Menu from '../Menu'
import SubPage1 from "./SubPage1";

const PCHome = () => {
  return (
    <>
      <Menu />
      <SubPage1 />
      <SubPage2 />
      <SubPage3 /> 
      <H5Footer />
    </>
  )
}

export default PCHome