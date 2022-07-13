import LogoText from './LogoText';
import ContactCard from './ContactCard';
import LaunchAppButton from './LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import React from 'react';

export default class Header extends React.Component{
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
              .nav_bar_mobile{
                display:none;
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

             
              
              // 响应式样式
              @media (max-width:768px) {
                .container{
                  min-width: 100%
                }
                .nav_bar{
                  display: none;
                  color:red;
                }
                .nav_bar_content{
                  width:100%;
                  min-width:100%;
                }
                .nav_bar_mobile{
                  display:block;
                }
                .logo{
                  display:none;
                }
                .menu_container{
                  width:100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
                .menu_item{
                  margin:0;
                  padding:20px 0;
                }
                
              }
              @media (min-width: 768px) and (max-width:992px) {
                .nav_bar{
                  display: none;
                  color:red;
                }
                .nav_bar_content{
                  width:100%;
                  min-width:100%;
                }
                .nav_bar_mobile{
                  display:block;
                }
                .logo{
                  display:none;
                }
                .menu_container{
                  width:100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
                .menu_item{
                  margin:0;
                  padding:20px 0;
                }
               
              }
              @media (min-width:992px) and (max-width:1200px) {
                .nav_bar_content{
                  width:100%;
                  min-width:100%;
                }
               }
               
            `}</style>
    
    
   );
  }

  tabClick=(val,e)=>{
    router.push('/'+val)

  }
  
}


