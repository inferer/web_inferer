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
            {/*导航栏*/}
                <div className="nav_bar_content">
                    <img src="/icon_nav_logo.svg" className="logo"/>
                    <div className="menu_container">
                        <div className="menu_item" >
                            DOC
                        </div>
                        <div className="menu_item {`${'DOCS' ==this.state.type ? 'active' : ''}`}">
                            WHITEPAPER
                        </div>
                        <button className="menu_button_item" onClick={(e)=>{
                          this.tabClick('community',e)}}>
                            COMMUNITY
                        </button>
                        <button className="menu_button_item" onClick={(e)=>{
                          this.tabClick('faq',e)}}>
                            FAQ
                        </button>


                        <LaunchAppButton onClick={()=>{
                            router.push('/app')
                        }}/>
                    </div>
                </div>

          
         <style jsx>{`
              .container {
                min-width: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
              }

              .nav_bar {
                backdrop-filter: blur(100px);
                background-color: transparent;
                width: 100%;
                height: 117px;
                position: fixed;
                display: flex;
                flex-direction: row;
                justify-content: center;
                z-index:2;
              }

              .nav_bar_content {
                min-width: 500px;
                width: 1200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .logo {
                width: 20%;
                height: 20%;
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
                font-size: 0.8vw;
              }

              .menu_button_item {
                background-color: transparent; 
                border: none;
                margin-left: 25px;
                margin-right: 25px;
                color: white;
                font-weight: 500;
                font-size: 0.8vw;
                cursor: pointer;
              }

              .menu_button_item:hover {
                color: #44488F;
              }

              .subpage_1 {
                width: 100%;
                heght: 881px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              .subpage_1_title_wrapper {
                margin-top: -48px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .subpage_1_title {
                font-family: 'Source Han Sans SC';
                font-style: normal;
                font-weight: 700;
                font-size: 170px;
                line-height: 252px;
                color: white;
              }

              .subpage_1_subtitle_wrapper {
                margin-top: 42px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .subpage_1_subtitle {
                color: rgba(255, 255, 255, 0.5);
                text-align: center;
                font-family: 'Source Han Sans SC';
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
              }

              .subpage_2 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #171529;
              }

              .subpage_2_title_1 {
                margin-top: 117px;
              }

              .subpage_2_title_2 {
                margin-top: 88px;
              }

              .subpage_3 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #0d0c1d;
              }

              .subpage_4 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #171529;
              }

              .subpage_4_card_1 {
                margin-top: 178px;
                width: 1093px;
                height: 213px;
                background: #0A0917;
                border-radius: 21px;
                display: flex;
                flex-direction: row;
              }

              .subpage_4_card_2 {
                margin-top: 170px;
                margin-bottom: 112px;
                width: 1093px;
                height: 213px;
                background: #0A0917;
                border-radius: 21px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }

              .subpage_4_title_container {
                display: flex;
                flex-direction: column;
              }

              .subpage_4_title {
                margin-top: 43px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 48px;
                color: #FFFFFF;
              }

              .subpage_4_subtitle {
                margin-top: 19px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.05em;
                color: #FFFFFF;
              }

              .subpage_5 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #0d0c1d;
              }

              .subpage_6 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #171529;
              }

              .card_container {
                margin-top: 67px;
                margin-bottom: 288px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 1209px;
                row-gap: 63px;
                column-gap: 56px;
              }

              .img_curve {
                width: 100%;
                -webkit-user-drag: none;
              }

              .subtitle {
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: white;
                max-width: 940px;
                margin-top: 29px;
              }

              .footer_bar {
                width: 100%;
                height: 60px;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }

              .footer_bar_content {
                min-width: 1200px;
                width: 1200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .footer_text {
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                color: #646787;
              }

              .span_link {
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.05em;
                color: #6571ae;
                text-decoration: underline
              }

            `}</style>
            <style global jsx>{`
              body {
                width: 100%;
                background-color: #0d0b17;
              }
            `}</style>
        </div>
    );
}

tabClick=(val,e)=>{
  // this.setState({
  //   type:val
  // })
  router.push('/'+val)

}
}
