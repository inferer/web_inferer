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
            <div className="menu_container">
                <img src="/icon_nav_logo.svg" className="logo" onClick={()=>{router.push('/')}} />
            </div>
            <div className="menu_container">
              <ul>
              <li className="menu_item">
                  <button className="menu_button_item" onClick={()=>{router.push('/')}}>
                    HOME
                  </button>
                </li>
                <li className="menu_item">
                  <button className="menu_button_item" onClick={()=>{router.push('/coming')}}>
                    DOCS
                  </button>
                </li>
                <li className="menu_item">
                    
                  <button className="menu_button_item" onClick={()=>{router.push('/coming')}}>
                    WHITEPAPER
                  </button>
                </li>
                <li className="menu_item">
                <button className="menu_button_item" onClick={()=>{router.push('/community')}}>
                    COMMUNITY
                </button>
                </li>
                <li className="menu_item">
                <button className="menu_button_item" onClick={()=>{router.push('/faq')}}>
                    FAQ
                </button>
                </li>
                </ul>
                
            </div>
            <LaunchAppButton onClick={()=>{
                    router.push('/app')
                }}/>
          </div>

          <style jsx>{`
                ul {
                  list-style: none;
                  list-style-type: none;
                  display: block;
                  overflow: hidden;
                  white-space: nowrap;//处理块元素中的空白符和换行符的，这个属性保证图片不换行
                }
  
                ul li{
                  //float: left;
                  margin-top: 2%;
                  list-style: none;
                  display: inline-block;//使li对象显示为一行
                  margin-left: 15px;
                  //width: 130px;
                }

                .nav_bar {
                  backdrop-filter: blur(100px);
                  background-color: transparent;
                  width: 100%;
                  height: 9.8%;
                  //position: fixed;
                  display: flex;
                  flex-direction: column;
                  //justify-content: center;
                  position: fixed;
                  width: 100%;
                  height: 100px;
                  top: 0px;
                  z-index: 9999;
                }
                .nav_bar_mobile{
                  display:none;
                }
  
                .nav_bar_content {
                  //min-width: 1200px;
                  //width: 1200px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  z-index:2;
                }
  
                .logo {
                  width: 40px;
                  height: 40px;
                  margin-left: 105px;
                  -webkit-user-drag: none;
                }
  
                .menu_container {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  //widht: 1200px;
                  //margin-right: 200px;
                }
  
                .menu_item {
                  font-family: 'DIN';
                  font-style: normal;
                  margin-left: 25px;
                  margin-right: 15px;
                  color: white;
                  font-weight: 500;
                  font-size: 1.2rem;
                  cursor: pointer;
                }
  
                .menu_button_item {
                  font-family: 'DIN';
                  background-color: transparent; 
                  border: none;
                  margin-left: 25px;
                  margin-right: 15px;
                  color: white;
                  font-weight: 500;
                  font-size: 1.2rem;
                  cursor: pointer;
                }
  
                .menu_button_item:hover {
                  color: #44488F;
                }

                .logo:hover {
                  cursor: pointer;
                }
                /*鼠标移上去时，方框发亮
                  实现思想：使用 .button::before 伪类元素（遮罩）创建一个内容为空，背景为黑色的方框，将button的背景颜色盖住，
                  通过span设置 z-index 将字显示在最上层，起到了覆盖背景颜色的功能，然后设置遮罩的 inset 元素留出部分的颜色
                  然后通过 box-shadow 设置阴影效果
                */
                .menu_button_item:hover {
                  box-shadow: 0 0 35px var(--clr);  /*设置阴影*/
                }

                /*!*在button类前面插入伪类元素，相当于创建了一个透明的图层，用于显示背景颜色*!*/
                .menu_button_item::before {
                  inset: 2px;  /*top right bottom left的简写，这里表示top的距离2px*/
                } 

                @media (max-width:768px) {
                  // .subpage_1_title_bg{
                  //   margin-top: -20px !important;
                  // }
                  .card_container{
                    width:500px!important
                  }
                  .nav_bar_content{
                    min-width:320px !important;
                 }
                 .menu_container ul{
                    display: none;
                 }
                 .logo {
                  width: 30px;
                  height: 30px;
                  margin-left: 60px;
                 }
                }
        `}</style>

        </div>

      
       
    
    
   );
  }

  
}


