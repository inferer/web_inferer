import LogoText from '../components/LogoText';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import {useState} from "react";
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { notification } from "antd";
import Head from 'next/head';
import H5Community from '../components/h5/community';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = async () => {
        // console.log("onSubmit")
        const SearchService = require("../api/SearchService");

        if(inputValue == "") {
            openNotification("No Email Provided.", false)
            return
        }

        let searchService = new SearchService();
        let response = await searchService.subscribe({
            email: inputValue
        });

        console.log("onSubmit response = " +  JSON.stringify(response))

        setInputValue("")
        openNotification("Success!", true)
    }

    const openNotification = (message, success) => {
        const args = {
            message: message,
            duration: 1.5,
            icon: success ? <CheckCircleOutlined style={{ color: '#618DFF' }} /> : <InfoCircleOutlined style={{ color: 'red' }} />,
            // style: {
            //     // width: 600,
            //     background: '#618DFF'
            // },
        };
        notification.open(args);
    };

    return (
        <>
        <Head>
            <title>Inferer - user idendity service in web3</title>
            {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        <div className="hidden sm:block">
        <div className="container">
            

            {/*导航栏*/}
            <div className="nav_bar">
                <div className="nav_bar_content">
                    <img src="/icon_nav_logo.svg" className="logo"/>
                    <div className="menu_item_docs">
                            DOCS
                    </div>
                    <div className="menu_item_whitepaper">
                        WHITEPAPER
                    </div>
                    <button className="menu_button_item_community" onClick={()=>{router.push('/community')}}>
                        COMMUNITY
                    </button>
                    <button className="menu_button_item_faq" onClick={()=>{router.push('/faq')}}>
                        FAQ
                    </button>
                    <LaunchAppButton onClick={()=>{
                            router.push('/app')
                        }}/>
                </div>
            </div>

            <div style={{width: "100%", height: "58.5px"}}/>
            <div>
                <div className='community-1 layout_column'>
                            <span className='name'>Community</span>
                            <span className='name-detail'>Inferer community is an ecosystem of users, developers, designers and evaluators. </span>
                    </div>
                    <div className='community-2'>
                        <div className='layout_column'>
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
                        <div>
                                <img className='right-img' src='/community-right.png' />
                        </div>
                    </div>
                    <div className='community-3'>
                        <div className='community-join layout_column'>
                            <div className='layout_column'>
                                <span className='title-m'>Join the community</span>
                                <p className='title-j'>Join the community and participate in our discussions. </p>
                            </div>
                            <div className='community-icon'>
                                <ul className='flex-b'>
                                    <li className='layout_justify_center layout_column'>
                                        <div className='radius flex-c layout_justify_center'>
                                            <div className='twitter-icon'></div>
                                        </div>
                                        <span className='tips'>Twitter<br/> Community</span>
                                    </li>
                                    <li className='layout_justify_center layout_column'>
                                        <div className='discoverd-icon flex-c layout_justify_center'>
                                        </div>
                                        <span className='tips'>Discord <br/> Community</span>
                                    </li>
                                    <li className='layout_justify_center layout_column'>
                                        <div className='radius flex-c layout_justify_center'>
                                        <i className='tel-icon'></i>
                                        </div>
                                        <span className='tips'>Telegram<br/>  Community</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='community-input flex-b'>
                                <input type="text" className='input' placeholder='Your e-mail'
                                    value={inputValue}
                                    autoComplete="off"
                                    id="query"
                                    onInput={()=> {
                                        let text = document.getElementById("query").value;
                                        setInputValue(text)
                                    }}></input>
                                
                                <button className='submit' onClick={onSubmit}>Subscribe</button>
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
                height: 9.8%;
                position: fixed;
                display: flex;
                flex-direction: row;
                // justify-content: center;
                align-items: center;
                z-index: 1;
              }


              .nav_bar_content {
                // min-width: 1200px;
                width: 100%;
                display: flex;
                align-items: center;
                // justify-content: space-between;
                z-index:2;
              }

              .logo {
                width: 1.67%;
                // height: 32px;
                min-width: 15px;
                margin-left: 18.49%;
                -webkit-user-drag: none;
              }

              .menu_container {
                display: flex;
                flex-direction: row;
                align-items: center;
                // width: 100%;
              }

              .menu_item_docs {
                font-family: 'Source Han Sans CN';
                font-style: bold;
                margin-left: 30.1%;
                color: white;
                font-weight: 500;
                font-size: 0.83vw;
                cursor: pointer;
                letter-spacing: 0.08em;
                line-height: 24px;
              }

              .menu_item_whitepaper {
                font-family: 'Source Han Sans CN';
                font-style: bold;
                margin-left: 1.77%;
                color: white;
                font-weight: 500;
                font-size: 0.83vw;
                cursor: pointer;
                letter-spacing: 0.08em;
                line-height: 24px;
              }

              .menu_button_item_community {
                font-family: 'Source Han Sans CN';
                font-style: bold;
                background-color: transparent; 
                border: none;
                margin-left: 2%;
                color: white;
                font-weight: 500;
                font-size: 0.83vw;
                cursor: pointer;
                letter-spacing: 0.08em;
                line-height: 24px;
              }

              .menu_button_item_community:hover {
                color: #44488F;
              }

              .menu_button_item_faq {
                font-family: 'Source Han Sans CN';
                background-color: transparent; 
                border: none;
                margin-left: 1%;
                margin-right: 1.1%;
                color: white;
                font-weight: 500;
                font-size: 0.83vw;
                cursor: pointer;
              }

              .menu_button_item_faq:hover {
                color: #44488F;
              }

              .menu_launch {
                  display: flex;
                  flex-direction: row;
              }

              .menu_item {
                font-family: 'DIN';
                font-style: normal;
                margin-left: 25px;
                margin-right: 15px;
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
                margin-right: 15px;
                color: white;
                font-weight: 500;
                font-size: 14px;
                cursor: pointer;
              }

              .menu_button_item:hover {
                color: #44488F;
              }
              
            .flex-b {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .flex-c {
                align-items: center;
            }
            .layout_column {
                display: flex;
                flex-direction: column;
            }
            .layout_justify_center{
                display: flex;
                justify-content: center;
            }
            .layout_justify_space{
                display: flex;
                justify-content: space-bettwen;
            }
            
              .menu_container {
                display: flex;
                flex-direction: row;
                align-items: center;
              }

            
            .community-1{
                width:100vw;
                padding-left:18.59vw;
                padding-right:18.59vw;
                padding-top: 20.84vh;
                padding-bottom:10.5vh;
                // padding: 100px 0 115px 0;
                background: #17152A;
            }
            .name{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .name-detail{
                margin-top: 18px;
                font-family: 'DIN';
                font-weight: 60;
                font-size: 22px;
                line-height: 27px;
                letter-spacing: 0.02em;
                color: rgba(255, 255, 255, 0.5);
            }
            .community-2{
                width: 100vw;
                background: #0D0C1E;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-left:18.59vw;
                padding-right:11.35vw;
            }
            .community-2-name{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-top: 11.56vh;
            }
            .community-2-name-detail {
                margin-top: 20px;
                margin-bottom: 50px;
                font-family: 'DIN';
                font-weight: 60;
                font-size: 22px;
                line-height: 27px;
                letter-spacing: 0.04em;
                color: rgba(255, 255, 255, 0.5);
            }
            .right-img{
                z-index: 1;
                width: 35.1vw;
                // height: 51.29vh;
            }
            .community-3 {
                padding-top: 8.5vh;
                // padding-bottom:10.31vh;
                padding-bottom:60.31vh;
                padding-left:18.59vw;
                padding-right:18.59vw;
                width:100vw;
                height:87.13vh;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                // background: #17152A;
                background: url(/community-foot.png) no-repeat;
                background-size: 100% 100%;
            }
            .community-join {
                background: #0D0C1E;
                border-radius: 47px;
                padding-top: 8.24vh;
                padding-left: 9.74vw;
                padding-right:9.74vw;
                padding-bottom:11.11vh;
                width:62.81vw;
                height:70.31vh;
            }
            .community-icon{
                margin-top: 6.5vh;
            }
            .title-m{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 400;
                font-size: 1.46vw;
                line-height: 3.15vh;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .title-j{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 300;
                font-size: 22px;
                line-height: 27px;
                text-align: center;
                // text-transform: capitalize;
                color: rgba(255, 255, 255, 0.5);
                margin-top:12px;
            }
            .radius{
                width:6.35vw;
                height:6.35vw;
                background: #231E38;
                border-radius:50%;
            }
            .twitter-icon{
                display:block;
                width:4.08vw;
                height:3.02vw;
                background: url(/twitter.png) no-repeat;
                background-size: 100%;
            }
            .discoverd-icon{
                width:6.35vw;
                height:6.35vw;
                background: url(/discovered.png) no-repeat;
                background-size: 100%;
            }
            .tel-icon{
                display:block;
                width:4.17vw;
                height:4.17vw;
                background: url(/tel.png) no-repeat;
                background-size: 100%;
            }
            .tips{
                margin-top:1.57vh;
                font-family: 'DIN';
                font-style: normal;
                font-weight: 400;
                font-size: 1.15vw;
                line-height: 3vh;
                text-align: center;
                color: #FFFFFF;
            }
            .community-input{
                margin-top:8vh;
            }
            .input{
                border: transparent;
                width:calc(100% - 10.05vw);
                padding:0px 0 0px 1.3vw;
                background: #17152A;
                border-radius: 10px 0px 0px 10px;
                border-color: #ffffff;
                color: #ffffff;
            }

            .input:focus{
                outline: none !important;
                border:2px solid #44488F;
                // box-shadow: 0 0 10px #719ECE;
            }

            .submit{
                height: 6.2vh;
                width: 10.05vw;
                // padding:0px 0px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 500;
                font-size: 1.25vw;
                line-height: 3.33vh;
                text-align: center;
                letter-spacing: 0.05em;
                color: #FFFFFF;
                background: #44488F;
                border-radius: 0px 10px 10px 0px;
                cursor: pointer;
                border: none;
            }
           }

            `}</style>
            
            <style global jsx>{`
            //   body {
            //     width: 100%;
            //     background-color: #0d0b17;
            //   }
             

            //    @media (max-width:1280px) {
            //     .coon-1204{
            //         width:800px!important;
            //       }
            //     .nav_bar_content{
            //       min-width:800px !important;

            //     }
            //    }
            //    @media (max-width:768px) {
            //     .nav_bar_content{
            //       min-width:320px !important;

            //     }
            //    }

            `}</style>
        </div>
        </div>
        <div className="block sm:hidden faq-bg">
          <H5Community />
        </div>
        </>
    );
}
