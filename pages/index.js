import LogoText from '../components/LogoText';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import {
  Button
} from '@mui/material';

export default function Home() {
    return (
        <div className="container">
            {/*导航栏*/}
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
                        <button className="menu_button_item" onClick={()=>{router.push('/community')}}>
                            COMMUNITY
                        </button>
                        <button className="menu_button_item" onClick={()=>{router.push('/faq')}}>
                            FAQ
                        </button>

                        <LaunchAppButton onClick={()=>{
                            router.push('/app')
                        }}/>
                    </div>
                </div>
            </div>
            {/* 移动端样式 */}

            <div className="nav_bar_mobile">
                <div className="nav_bar_content">
                    <img src="/icon_nav_logo.svg" className="logo"/>
                    <div className="menu_container">
                        <div className="menu_item">
                            DOCS
                        </div>
                        <div className="menu_item">
                            WHITEPAPER
                        </div>
                        <div className="menu_item" onClick={()=>{
                           router.push('/community')
                        }}>
                            COMMUNITY
                        </div>
                        <div className="menu_item" onClick={()=>{
                          router.push('/faq')
                        }}>
                            FAQ
                        </div>

                        <LaunchAppButton onClick={()=>{
                            router.push('/app')
                        }}/>
                    </div>
                </div>
            </div>

            <div style={{width: "100%", height: "58.5px"}}/>

            {/*page 1*/}
            <div className="subpage_1">
                <img src="/home_curve_yun.png" style={{marginTop: '-60px', width: '100%', height: '100%'}}></img>
                <div className="subpage_1_title_wrapper">
                    <img src="/subpage_1_title_bg.png" style={{
                        width: '80%',
                        height: '80%', marginTop: '-10%'
                    }}/>
                </div>
                <div className="subpage_1_title_wrapper">
                    <p className="subpage_1_title">INFERER</p>
                </div>
                <div className="subpage_1_subtitle_wrapper">
                    <p className="subpage_1_subtitle">
                        BUILT ON DATA ANALYSIS , SERVE  FOR USER VERIFICATION
                        <br/>
                        HOPE TO HELP CONTRIBUTE TO GREAT USER ECOSYSTEM ON CHAIN
                    </p>
                </div>
            </div>

            {/*page 2*/}
            <div className="subpage_2">
                <LogoText text="What's Inferer" customStyle={{marginTop: '117px'}}/>
                <div className="subtitle">
                    Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from
                    hurting user experience on chain and contribute to greate user ecysystem on chain.
                </div>
                <img src="/icon_logo_yun.png" style={{marginTop: '26px', width: '50%', height: '50%'}}/>
                <LogoText text="Why we build Inferer?" customStyle={{marginTop: '88px'}}></LogoText>
                <div className="subtitle">
                    Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from
                    hurting user experience on chain and contribute to greate user ecysystem on chain.
                </div>
                <img src="/img_1.png" style={{marginTop: '41px', marginBottom: '112px', width: '50%', height: '50%'}} />
            </div>

            {/*page 3*/}
            <div className="subpage_3">
                <LogoText text="Built on Data Analysis" customStyle={{marginTop: '112px'}}></LogoText>
                <div className="subtitle">
                    Blockchain is unique with its immutable data on chain and all data is public to everyone, which we
                    believe the solution for bots also points to data. We could learn from data on chain and evaluate
                    bots based on the behaviors in data.
                </div>
                <img src="/built.png" style={{marginTop: '26px', width: '50%', height: '50%'}}/>
                <LogoText text="Benefits" customStyle={{marginTop: '105px'}}></LogoText>
                <div className="subtitle">
                    Verification is processed internally in Inferer. We would not need user interaction the way like
                    reCaptcha in web2, which doesn’t cause trouble to users.
                </div>
                <img src="/img_3.png" className='img-w-100' style={{marginTop: '54px', marginBottom: '112px', width: '45%', height: '45%'}}/>
            </div>

            {/*page 4*/}
            <div className="subpage_4">
                <LogoText text="Products" customStyle={{marginTop: '105px'}}></LogoText>
                <img src="/inferer_search.png" style={{marginTop: '26px', width: '70%', height: '70%'}}/>
                <img src="/inferer_api.png" style={{marginTop: '26px', marginBottom: '100px', marginLeft: '50px', width: '70%', height: '70%'}}/>
                {/* <div className="subpage_4_card_1">
                    <img src='/img_card_left.png'
                    className='img_card_left-bg' />
                    <div className='subpage_4_title_container' style={{marginLeft: '72px'}}>
                        <div className='subpage_4_title'>
                            Inferer Search
                        </div>
                        <div className='mg-w-100' style={{marginTop: '19px'}}>
                            <span className='subpage_4_subtitle'>
                                Focus on instant-check search scenarios, which enable user to have a quick scan on address.
                            </span>
                            <span className='span_link'>
                                Try IT OUT ->
                            </span>
                        </div>
                    </div>
                </div>
                <div className="subpage_4_card_2">
                    <div className='subpage_4_title_container' style={{marginLeft: '66px'}}>
                        <div className='subpage_4_title'>
                            Inferer API
                        </div>
                        <div className='subpage_4_title_txt'>
                            <span className='subpage_4_subtitle'>
                                Focus on pre-security check scenarios, which could be integrated in customer's product and help reduce the harm conducted by bots or hackers.
                            </span>
                        </div>
                        <span className='span_link'>
                                Check for more detail ->
                            </span>
                    </div>

                    <img src='/img_card_right2.png'
                         className='img_card_right-bg' />
                </div> */}
            </div>

            {/*page 5*/}
            <div className="subpage_5">
                <LogoText text="Inferer community" customStyle={{marginTop: '108px'}}></LogoText>
                <div className="subtitle">
                    Inferer is born in web3 and values community. Community would play a big role in inferer evaluation
                    and management. We hope inferer community could help contribute to great user ecosystem on chain.
                </div>
                <img src="/img_4.png" style={{marginTop: '54px', marginBottom: '112px', width: '45%', height: '45%'}}/>
            </div>

            {/*page 6*/}
            <div className="subpage_6">
                <LogoText text="Contact us" customStyle={{marginTop: '108px'}}></LogoText>
                <div className='card_container'>
                    <ContactCard title='Twitter' subtitle='Inferer is born in web3 and values community.'
                                 icon={'/icon_twitter.png'}/>
                    <ContactCard title='Discord' subtitle='Inferer is born in web3 and values community.'
                                 icon={'/icon_discord.png'}/>
                    <ContactCard title='Email' subtitle='Inferer is born in web3 and values community.'
                                 icon={'/icon_email.png'}/>
                    <ContactCard title='Github' subtitle='Inferer is born in web3 and values community.'
                                 icon={'/icon_github.png'}/>
                </div>
            </div>

            {/*footer*/}
            <div className="footer_bar">
                <div className="footer_bar_content">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src="/icon_logo_left.png" style={{width: '12px', height: '12px'}}/>
                        <div className='footer_text' style={{marginLeft: '3px'}}>
                            Made by Inferer Labs, Thanks to PlatON
                        </div>
                    </div>
                    <div className='footer_text'>
                        Thanks to Platon
                    </div>
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
                height: 10%;
                position: fixed;
                display: flex;
                flex-direction: row;
                justify-content: center;
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
                font-family: 'DIN';
                font-style: normal;
                margin-left: 25px;
                margin-right: 25px;
                color: white;
                font-weight: 500;
                font-size: 16px;
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
                font-size: 16px;
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
                margin-top: -110px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .subpage_1_title {
                font-family: D-DIN-Bold;
                font-style: normal;
                font-weight: 700;
                font-size: 9vw;
                letter-spacing: 0.1vw;
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
                color: rgba(255, 255, 255, 0.8);
                text-align: center;
                font-family: D-DIN-Regular;
                font-style: normal;
                font-weight: 400;
                font-size: 1.2vw;
                letter-spacing: 0.06vw;
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

              // .subpage_3_card_1 {
              //   margin-top: 20px;
              //   width: 40%;
              //   height: 183px;
              //   background: #262437;
              //   border-radius: 16px;
              //   display: flex;
              //   flex-direction: row;
              //   min-width: 500px;
              //   padding-right: 2%;
              // }

              // .subpage_3_card_2 {
              //   margin-top: 20px;
              //   width: 40%;
              //   height: 274px;
              //   background: #262437;
              //   border-radius: 16px;
              //   display: flex;
              //   flex-direction: row;
              //   min-width: 500px;
              //   padding-right: 2%;
              // }

              // .subpage_3_card_1_left {
              //   width: 200px;
              //   height: 183px;
              //   left: 516px;
              //   top: 2657px;
              //   background: #17152A;
              //   border-radius: 16px 0px 0px 16px;
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              //   margin-right: 1%;
              // }

              // .subpage_3_card_2_left {
              //   width: 200px;
              //   height: 274px;
              //   left: 516px;
              //   top: 2657px;
              //   background: #17152A;
              //   border-radius: 16px 0px 0px 16px;
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              //   margin-right: 1%;
              // }

              // .subpage_3_card_1_right {
              //   width: 200px;
              //   height: 128px;
              //   left: 741px;
              //   top: 2683px;
              //   background: #17152A;
              //   border-radius: 8px;
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              //   margin-left: 5%;
              //   margin-top: 2%;
              // }

              // .subpage_3_card_2_right1 {
              //   width: 320px;
              //   height: 80px;
              //   left: 741px;
              //   top: 2683px;
              //   background: #17152A;
              //   border-radius: 8px;
              //   display: flex;
              //   margin-left: 5%;
              //   margin-top: 2%;
              //   padding-left: 10%;
              // }

              // .subpage_3_card_3_right {
              //   width: 180px;
              //   height: 128px;
              //   left: 741px;
              //   top: 2683px;
              //   background: #17152A;
              //   border-radius: 8px;
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              //   margin-left: 1%;
              //   margin-top: 2%;
              // }

              // .subpage_3_subtitle {
              //   text-align: center;
              //   margin-top: 4px;
              //   font-family: 'Source Han Sans CN';
              //   font-style: normal;
              //   font-weight: 500;
              //   font-size: 0.9vw;
              //   line-height: 21px;
              //   max-width: 140px;
              //   color: #FFFFFF;
              // }

              // .subpage_3_text {
              //   text-align: center;
              //   margin-top: 7%;
              //   font-family: 'Source Han Sans CN';
              //   font-style: normal;
              //   font-weight: 500;
              //   font-size: 0.7vw;
              //   line-height: 21px;
              //   max-width: 140px;
              //   color: #FFFFFF;
              // }

              // .subpage_3_text2 {
              //   margin-top: 13%;
              //   margin-left: 10%;
              //   font-family: 'Source Han Sans CN';
              //   font-style: normal;
              //   font-weight: 500;
              //   font-size: 0.7vw;
              //   line-height: 21px;
              //   max-width: 140px;
              //   color: #FFFFFF;
              // }

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

              .img_card_left-bg{
                width: 390px;
                height: 270px;
                margin-left: -109px;
                margin-top: -97px
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
                width:100%;
                display: flex;
                flex-direction: row;
                // flex-wrap: wrap;
                // width: 1209px;
                row-gap: 63px;
                column-gap: 5%;
              }

              icon{
                margin-left: 2% !important;
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
                margin-right: 40px;
                margin-left: 40px;
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

              .home_curve{
                margin-top: 117px;
              }
              .title_bg_curve{
                width: 988px;
                height: 376px;
                margin-top: -170px;
              }
              .img1_style{
                margin-top: 41px;
                margin-bottom: 112px
              }
              .subpage_4_title_txt{
                width: 678px;
                margin-top: 19px
              }
              .img_card_right-bg{
                width: 450px;
                height: 340px;
                margin-right: -167px;
                margin-top: -115px;
              }
              .right-bg{
                position: absolute;
                width: 674px;
                height: 678px;
                top: -120px;
                right: -110px;
                background: url(/qiu-bg.png) no-repeat;
                background-size: 100%;
              }
              // // 响应式样式
              @media (max-width:768px) {
                // .container{
                //   min-width: 100%
                // }
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
                .menu_button_item {
                  background-color: transparent; 
                  border: none;
                  margin:0;
                  padding:20px 0;
                  cursor: pointer;
                }
                .menu_button_item:hover {
                  color: #44488F;
                }
              //   .home_curve{
              //     height:300px;
              //   }
              //   .title_bg_curve{
              //     width:100%;
              //   }
              //   .subpage_1_title{
              //     font-size: 100px;
              //   }
              //   .img1_style{
              //     margin-top: 30px;
              //     margin-bottom: 80px
              //   }
              //   .subtitle{
              //     text-align: center;
              //     width:100%;
              //     max-width:100%;
              //     word-break: break-word;
              //   }
              //   .subpage_4_card_1{
              //     width:100%;
              //     height: 213px;
              //     display: flex;
              //     justify-content: space-between;
              //     align-items: center;
              //   }
              //   .img_card_left-bg{
              //     width: 190px;
              //     height: 170px;
              //     margin-left: 0px;
              //     margin-top: 0px;
              //   }
              //   .subpage_4_card_2{
              //     width:100%;
              //     align-items: center;
              //   }
              //   .subpage_4_title_txt{
              //     width: 350px;
              //     margin-top: 19px
              //   }
              //   .img_card_right-bg{
              //     width: 30%;
              //     height: 170px;
              //     margin-right: 0;
              //     margin-top: 0;
              //   }
              //   .card_container{
              //     display: flex
              //     width:100%;
              //     justify-content: center;
              //     margin-bottom: 88px;
              //   }
              //   .footer_bar_content{
              //     width:100%;
              //     min-width:100%;
              //   }
              //   .img-w-100{
              //     width:100%;
              //   }
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
                .menu_button_item {
                  background-color: transparent; 
                  border: none;
                  margin:0;
                  padding:20px 0;
                  cursor: pointer;
                }
                .menu_button_item:hover {
                  color: #44488F;
                }
              //   .home_curve{
              //     height:300px;
              //   }
              //   .title_bg_curve{
              //     width:100%;
              //   }
              //   .subpage_1_title{
              //     font-size: 100px;
              //   }
              //   .img1_style{
              //     margin-top: 30px;
              //     margin-bottom: 80px
              //   }
              //   .subtitle{
              //     text-align: center;
              //     width:100%;
              //   }
              //   .subpage_4_card_1{
              //     width:100%;
              //     height: 213px;
              //     display: flex;
              //     justify-content: space-between;
              //     align-items: center;
              //   }
              //   .img_card_left-bg{
              //     width: 190px;
              //     height: 170px;
              //     margin-left: 0px;
              //     margin-top: 0px;
              //   }
              //   .subpage_4_card_2{
              //     width:100%;
              //     align-items: center;
              //   }
              //   .subpage_4_title_txt{
              //     width: 350px;
              //     margin-top: 19px
              //   }
              //   .img_card_right-bg{
              //     width: 290px;
              //     height: 170px;
              //     margin-right: 0;
              //     margin-top: 0;
              //   }
              //   .card_container{
              //     width:100%;
              //     justify-content: center;
              //     margin-bottom: 88px;
              //     flex-wrap: wrap;
              //     width: 600px;
              //   }
              // .footer_bar_content{
              //     width:100%;
              //     min-width:100%;
              //   }
              //   .img-w-100{
              //     width:100%;
              //   }
              }
              @media (min-width:992px) and (max-width:1200px) {
                .nav_bar_content{
                  width:100%;
                  min-width:100%;
                }
              //   .home_curve{
              //     height:300px;
              //   }
              //   .title_bg_curve{
              //     width:100%;
              //   }
              //   .subpage_1_title{
              //     font-size: 100px;
              //   }
              //   .img1_style{
              //     margin-top: 30px;
              //     margin-bottom: 80px
              //   }
              //   .subtitle{
              //     text-align: center;
              //     width:100%;
              //   }
              //   .subpage_4_card_1{
              //     width:100%;
              //     height: 213px;
              //     display: flex;
              //     justify-content: space-between;
              //     align-items: center;
              //   }
              //   .img_card_left-bg{
               
              //   }
              //   .subpage_4_card_2{
              //     width:100%;
              //     align-items: center;
              //   }
              //   .subpage_4_title_txt{
              //     width: 350px;
              //     margin-top: 8px
              //   }
              //   .img_card_right-bg{
              //     width: 280px;
              //     height: 270px;
              //     margin-right: 0;
              //     margin-top: -110px;
              //   }
              //   .card_container{
              //     margin-bottom: 88px;
              //     flex-wrap: wrap;
              //     width: 1209px;
              //   }
              //   .footer_bar_content{
              //     width:100%;
              //     min-width:100%;
              //   }
              //   .img-w-100{
              //     width:100%;
              //   }
                
              }
              //  @media (min-width:1380px) {
              //   .card_container{
              //     margin-bottom: 88px;
              //     flex-wrap: wrap;
              //     width: 1209px;
              //   }
              // }

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
