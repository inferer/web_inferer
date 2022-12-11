import LaunchAppButton from '../LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [showBg, setShowBg] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      window.onscroll = () => {
        if (window.scrollY <= 1) {
          setShowBg(false)
        } else {
          setShowBg(true)
        }
      }
    }, 2000)
    
    return () => {
      window.onscroll = null
    }
  }, [])
  return (
    <div className={`fixed left-0 right-0 top-0 flex justify-center h-[104px] items-center
      ${showBg ? 'bg-[#0F0C2F] bg-opacity-95' : ''}
    `}>
      <div className='w-full max-w-[1200px] flex justify-between items-center'>
        <img src='/h5/logo.png' className='w-10 h-10' />
        <div className='text-base font-bold text-white flex space-x-9 items-center'>
          <div className="cursor-pointer hover:text-[#44488F]">
              DOCS
          </div>
          <div className="cursor-pointer hover:text-[#44488F]">
              WHITEPAPER
          </div>
          <div className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
            router.push('/community')
          }}>
              COMMUNITY
          </div>
          <div className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
            router.push('/faq')
          }}>
              FAQ
          </div>
          <div className='launch-btn p-[2px] cursor-pointer ' 
          onClick={()=>{
              router.push('/app')
          }}>
            <div className='bg-[#121327] rounded-[3px] flex justify-center items-center h-full text-white'>LAUNCH APP</div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

export class Header extends React.Component{
  constructor() {
    super();
    this.state = {type:''};
}
 
  render(){
    return (
     
        <div className="nav_bar">
          <div className="nav_bar_content">
            <img src="/icon_nav_logo.svg" className="logo"/>
            <div className="menu_container">
                <div className="menu_item">
                    DOCS
                </div>
                <div className="menu_item">
                    WHITEPAPER
                </div>
                <button className="menu_button_item" onClick={()=>{
                  router.push('/community')
                }}>
                    COMMUNITY
                </button>
                <button className="menu_button_item" onClick={()=>{
                  router.push('/faq')
                }}>
                    FAQ
                </button>

                <LaunchAppButton onClick={()=>{
                    router.push('/app')
                }}/>
            </div>
          </div>

          <style jsx>{`
               .nav_bar {
                backdrop-filter: blur(100px);
                background-color: transparent;
                width: 100%;
                height: 6%;
                position: fixed;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }
              .nav_bar_content {
                min-width: 1200px;
                width: 1200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index:2;
              }

              .logo {
                width: 30px;
                height: 30px;
                -webkit-user-drag: none;
              }

              .menu_container {
                display: flex;
                flex-direction: row;
                align-items: center;
              }

              .menu_item {
                margin-left: 25px;
                margin-right: 25px;
                color: white;
                font-weight: 500;
                font-size: 14px;
                cursor: pointer;
              }
              .menu_button_item {
                font-family: 'DIN';
                background-color: transparent; 
                border: none;
                margin-left: 25px;
                margin-right: 25px;
                color: white;
                font-weight: 500;
                font-size: 14px;
                cursor: pointer;
              }

              .menu_button_item:hover {
                color: #44488F;
              }
        `}</style>

        </div>

      
       
    
    
   );
  }

  
}


