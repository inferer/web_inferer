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
                <div className='content-fq'>
                    <div className='coon-1204'>
                        <div className='community-1 flex-l'>
                            <span className='name'>Community</span>
                            <span className='name-detail'>Inferer community is an ecosystem of users, developers, designers and evaluators. </span>
                        </div>
                    </div>
                    {/* <div className='test'>
                        <div className='community-1 flex-l'>
                            <span className='name'>Community</span>
                            <span className='name-detail'>Inferer community is an ecosystem of users, developers, designers and evaluators. </span>
                        </div>
                    </div> */}
                    <div className='community-2 '>
                        <div className='coon-1204 flex-b'>
                            <div className='left flex-l'>
                                <span className='community-2-name'>Owned by the community</span>
                                <span className='community-2-name-detail'>
                                Inferer is born in web3 and values community.  We hope to help contribute to great user ecosystem on chain and it wouldn’t be possible without our
                                community.
                                </span>
                                <span className='community-2-name-detail community-2-next-detail'>
                                The community would play in a big role in our evaluation system. They're decentralized and become an internal part in our evaluation
                                process, which improves inferer all the time.
                                </span>
                            </div>
                            <div className='right'>
                                <img className='right-img' src='/community-right.png' />
                                {/* <div className='right-bg'></div> */}
                            </div>
                        </div>
                    </div>
                 <div className='community-3'>
                    <div className='coon-1204'>
                        <div className='community-3-bg'></div>
                        <div className='community-join flex-l flex-j'>
                            <div className='community-title flex-l'>
                                <span className='title-m'>Join the community</span>
                                <p className='title-j'>Join the community and participate in our discussions. </p>
                            </div>
                            <div className='community-icon'>
                                <ul className='flex-b'>
                                    <li className='flex-c flex-j flex-l'>
                                        <div className='radius flex-c flex-j'>
                                        <i className='twitter-icon'></i>
                                        </div>
                                        <span className='tips'>Twitter<br/> Community</span>
                                    </li>
                                    <li className='flex-c flex-j flex-l'>
                                    <div className='discoverd-icon flex-c flex-j'>
                                        </div>
                                        <span className='tips'>Discord <br/> Community</span>
                                    </li>
                                    <li className='flex-c flex-j flex-l'>
                                    <div className='radius flex-c flex-j'>
                                        <i className='tel-icon'></i>
                                        </div>
                                        <span className='tips'>Telegram<br/>  Community</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='community-input flex-b'>
                                <input type="text" className='input' placeholder='Your e-mail'></input>
                                <div className='submit'>Subscribe</div>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>

            <style jsx>{`
              .container{
                width: 100%;
                height: 100%;
                background: #17152A;
              }

              .nav_bar {
                backdrop-filter: blur(100px);
                background-color: #0D0C1E;
                width: 100%;
                height: 9.54vh;
                position: fixed;
                display: flex;
                flex-direction: row;
                justify-content: center;
                z-index:100;
              }
              
              .nav_bar_content {
                min-width: 1200px;
                width: 1200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index:2;
              }

              .test {
                  margin-left: 20.85%
              }

              

              .logo {
                width: 25px;
                height: 25px;
                margin-left: 40px;
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
                margin-right: 15px;
                color: white;
                font-weight: 500;
                font-size: 16px;
                cursor: pointer;
              }

              .menu_button_item {
                font-family: 'DIN';
                font-style: normal;
                background-color: transparent; 
                border: none;
                margin-left: 25px;
                margin-right: 15px;
                color: white;
                font-weight: 500;
                font-size: 16px;
                cursor: pointer;
              }

              .menu_button_item:hover {
                color: #44488F;
              }
            //   .right-bg{
            //     position: absolute;
            //     width: 674px;
            //     height: 678px;
            //     top: -120px;
            //     right: -110px;
            //     background: url(/qiu-bg.png) no-repeat;
            //     background-size: 100%;
            //   }
              .flex-s {
                display: flex;
            }
            .flex-b {
                display: flex;
                justify-content: space-between;
            }
            .flex-c {
                align-items: center;
            }
            .flex-l {
                display: flex;
                flex-direction: column;
            }
            .flex-j{
                display: flex;
                justify-content: center;
            }
            
              .menu_container {
                display: flex;
                flex-direction: row;
                align-items: center;
              }

            //   .menu_item {
            //     margin-left: 25px;
            //     margin-right: 25px;
            //     color: white;
            //     font-weight: 500;
            //     font-size: 16px;
            //   }
              .content{
                padding-top:152px;
                width: 100%;
                background-size: 100%;
            }
            .coon-1204{
                position: relative;
                width: 1200px;
                height: 100%;
                margin: 0 auto;
                padding:0 40px 0 40px;
            }
            .content{
                padding-bottom:205px;
            }
            .community-1{
                padding: 100px 0 115px 0;
            }
            .name{
                font-family: 'D-DIN-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .name-detail{
                margin-top: 18px;
                font-family: 'D-DIN-Regular';
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                letter-spacing: 0.02em;
                color: rgba(255, 255, 255, 0.6);
            }
            .community-2{
                background: #0D0C1E;
                padding: 74px 0 83px 0;
            }
            .left{
                width: 34.95vw
                padding-top: 114px;
                width: calc(100% - 397px);
                // margin-right: 97px
            }
            .community-2-name{
                font-family: 'D-DIN-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .community-2-name-detail {
                margin-top: 12px;
                font-family: 'D-DIN-Regular';
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                letter-spacing: 0.02em;
                color: rgba(255, 255, 255, 0.6);
            }
            .community-2-next-detail{
                margin-top: 30px
            }
            .right{
                position: relative;
            }
            .right-img{
                // position: relative;
                z-index: 1;
                width: 35.1vw;
                height: 51.29vh;
            }
            // .right-bg{
            //     position: absolute;
            //     height: 678px;
            //     top: -120px;
            //     right: -110px;
            //     background: url(/qiu-bg.png) no-repeat;
            //     background-size: 100%;
            // }
            .community-3{
                padding-top: 7.5vh;
                width:100%;
                height:87.13vh
                // background: #ffffff;
            }
            .community-3-bg{
                position: absolute;
                // top: -232px;
                // left: -172px;
                width: 100%;
                height: 87.13vh;
                background: url(/community-foot.png) no-repeat;
                background-size: 100%;
            }
            .community-join{
                position: relative;
                // z-index:1;
                padding:89px 194px 120px 194px;
                background: #0D0C1E;
                border-radius: 47px;
            }
            .community-icon{
                margin-top: 83px;
            }
            .title-m{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 500;
                font-size: 28px;
                line-height: 34px;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .title-j{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                text-align: center;
                // text-transform: capitalize;
                color: #979797;
            }
            .radius{
                width:122px;
                height:122px;
                background: #231E38;
                border-radius:50%;
            }
            .twitter-icon{
                display:block;
                width:80px;
                height:58px;
                background: url(/twitter.png) no-repeat;
                background-size: 100%;
            }
            .discoverd-icon{
                width:122px;
                height:122px;
                background: url(/discovered.png) no-repeat;
                background-size: 100%;
            }
            .tel-icon{
                display:block;
                width:80px;
                height:58px;
                background: url(/tel.png) no-repeat;
                background-size: 100%;
            }
            .tips{
                margin-top:17px;
                font-family: 'DIN';
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                text-align: center;
                color: #FFFFFF;
            }
            .community-input{
                margin-top:103px;
            }
            .input{
                border: transparent;
                width:calc(100% - 193px);
                padding:16px 0 15px 25px;
                background: #17152A;
                border-radius: 10px 0px 0px 10px;
                border-color: #ffffff
            }

            .input:focus{
                outline: none !important;
                border:2px solid #44488F;
                // box-shadow: 0 0 10px #719ECE;
            }

            .submit{
                height: 67px;
                width: 193px;
                padding:16px 25px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                text-align: center;
                letter-spacing: 0.05em;
                color: #FFFFFF;
                background: #44488F;
                border-radius: 0px 10px 10px 0px;
            }
           }

            `}</style>
            
            <style global jsx>{`
              body {
                width: 100%;
                background-color: #0d0b17;
              }
             

               @media (max-width:1280px) {
                .coon-1204{
                    width:800px!important;
                  }
                .nav_bar_content{
                  min-width:800px !important;

                }
               }
               @media (max-width:768px) {
                .nav_bar_content{
                  min-width:320px !important;

                }
               }

            `}</style>
        </div>
    );
}
