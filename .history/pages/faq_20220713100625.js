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

            <div style={{width: "100%", height: "58.5px"}}/>
            <div className="content">
                <div className='content-fq w-1200' style={{marginTop: '60px'}}>
                    <div className='list-content'>
                        <ul className='ul'>
                            <li></li>
                            <li>
                                <div className='flex-c flex-j'>
                                    <div className='jt flex-c flex-j'>
                                    <div className='faq'></div>
                                    </div>
                                </div>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What's Inferer ?</span>
                                <span className='item2'>A: Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from hurting user experience on chain and   
                                contribute to greate user ecysystem on chain.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What products do Inferer provide?</span>
                                <span className='item2'>A: Currently we have Inferer Search and Inferer API, which serves in different purposes. Inferer Search focuses more on instant-check search 
     scenarios, which enable user to have a quick scan on address whether it's bot related and what behaviors it generated before; Inferer API 
     focuses more on pre-security check scenarios, which could help prevent hackers from invading system and contribute to more security 
     ecosystem.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What's Inferer evaluation result?</span>
                                <span className='item2'>A: We learned from "Credit Score", and integrate it to our evaluation. Currenlty we have 5 evaluation levels, which includes Exceptional, Very 
     Good, Good, Fair and Poor. These levels indicates the user behavior and the degree related with bots. We may adjust it if necessary in the 
     future.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: Can I use Inferer in our AirDrop activity?</span>
                                <span className='item2'>A: Sure. Inferer fits well in AirDrop list management. It would help in filtering target users efficiently and save the project team much time and 
     work.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What about community in Inferer ?</span>
                                <span className='item2'>A: Inferer's born in web3 and focus on community all the time. We would need big community participation in our evaluation process. Also, 
     Inferer would not be a centralized service provider and would be running backed up by our community.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What if the evaluation result doesn't fit into the fact?</span>
                                <span className='item2'>A: Inferer provide feedback feature in our product and welcome users provide further feedbacks when they believe it doesn't fit into the fact,   
     which would help us improving our service. Internally, when we receive the feedback, we would have a re-analysis process on it and come   
     up with a solution. And this whole process would be checked and published in community.
                                </span>
                            </li>
                            <li className='list flex-l'>
                                <span className='item1'>Q: What blockchains does Inferer support?</span>
                                <span className='item2'>A: Currently Inferer is available in PlatON, Ethereum and Polygon.
                                </span>
                            </li>
                        </ul>
                    </div>
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
                height: 6%;
                position: fixed;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }
              .content{
                width: 100%;
                background: url(/faq2.png) repeat;
                background-size: 100%;
                backgroud-position: cebter;
                height: calc(100vh - 66px);;
                overflow-y: auto;
            }
            ::-webkit-scrollbar{
              width: 7px;
       
           }
           ::-webkit-scrollbar-track{
               background-color: #25243a;
               -webkit-box-shadow:inset 0 0 3px rgba(0,0,0,0.1);
               border-radius:5px;
    
            }
            ::-webkit-scrollbar-thumb{
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 5px;
        
            }
            .list-content{
                position: relative;
                
                
            }
            .content-fq{
                // width: 100%;
                // height: 972px;
                // background: url(/content-bg-gy.jpg) no-repeat;
                // background-size: 100%;
            }
            .jt{
                width: 320px;
                height: 44px;
                margin-bottom: 30px;
                background: url(/contnet-jt.png) no-repeat;
                background-size: 100%;
            }
            .faq{
                width: 208px;
                height: 80px;
                background: url(/faq.png) no-repeat;
                background-size: 100%;
            }
            .list{
                margin-top: 11px;
                padding: 25px 17px;
                background: #25243A;
                box-shadow: 0px 0px 6px rgba(17, 14, 45, 0.5);
                border-radius: 10px;
            }
            .item1{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                letter-spacing: 0.02em;
                color: #727ABA;
            }
            .item2{
                margin-top:12px;
                font-family: 'DIN';
                font-style: normal;
                font-weight: 700;
                font-size: 17px;
                line-height: 21px;
                letter-spacing: 0.02em;
                color: #DADADA;
                padding-left: 1.5em;
                text-indent: -1.5em;
            }
            .content-bg{
                width: 100%;
                height: 175px;
                background: url(/conten-foot.png) no-repeat;
                background-size: 100%;
            }
            .foot{
                position: relative;
                width:100%;
                background: #17152A;
                height: 66px;
                line-height: 66px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                color: #ffffff;
            }
            .pl-40{
                padding-left:40px
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
                width: 85%;
                margin: 0 auto;
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

              @media (max-width:1280px) {
                .subpage_1_title_bg{
                  margin-top: -20px !important;
                }
                .card_container{
                  width:800px!important
                }
                .footer_bar_content {
                  min-width: 800px;
                }
               }
               @media (max-width:768px) {
                .subpage_1_title_bg{
                  margin-top: -20px !important;
                }
                .card_container{
                  width:500px!important
                }
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
