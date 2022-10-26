import LogoText from '../components/LogoText';
import HeaderBlaner from '../components/Header';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">

            {/*导航栏*/}
            <HeaderBlaner/>
            <Head>
              <title>Inferer - user identity analysis service in web 3</title>
              {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
            </Head>


            {/* <div style={{width: "100%", height: "58.5px"}}/> */}

            {/*page 1*/}
            <div className="subpage_1">
                <img src="/home_curve_yun.png" style={{marginTop: '0px', width: '100%', height: '100%'}}></img>
                <div className="subpage_1_title_wrapper">
                    <img className='subpage_1_title_bg' src="/subpage_1_title_bg.png" style={{
                        width: '51.46%',
                        marginTop: '-8%'
                    }}/>
                </div>
                <div className="subpage_1_title_wrapper">
                    <p className="subpage_1_title">INFERER</p>
                </div>
                <div className="subpage_1_subtitle_wrapper">
                    <p className="subpage_1_subtitle">
                        BUILT ON DATA ANALYSIS, SERVE FOR WEB3 IDENDITY
                        <br/>
                        HOPE TO HELP CONTRIBUTE TO GREAT USER ECOSYSTEM ON CHAIN
                    </p>
                </div>
            </div>

            {/*page 2*/}
            <div className="subpage_2">
                <LogoText text="What's Inferer" customStyle={{marginTop: '117px'}}/>
                <div className="subtitle">
                    Inferer is a user identity analysis service on blockchain. We try to build a label-rich user portrait system,
                    which is based on on-chain and off-chain data analysis and data mining, infer user identity through algorithms models and offers the final user identify evaluation service.
                </div>
                <img src="/icon_logo_yun.png" style={{marginTop: '26px', width: '51.82%', height: '50%', "-webkit-user-drag": "none"}}/>
                <LogoText text="Why we build Inferer?" customStyle={{marginTop: '88px'}}></LogoText>
                <div className="subtitle">
                            So many bots we've seen on chain and they're hurting user experience in many ways. The cost for
                    building bots is too low to further generate more bots. It also increases the security risks in many
                    products. We hope Inferer could increase the cost of bot activity and raise the bar when they try to
                    hurt others, which facilitates current crypto users and would be more attractive to new crypto users.
                </div>
                <img src="/img_1.png" style={{marginTop: '41px', marginBottom: '112px', width: '46.20%', height: '50%', "-webkit-user-drag": "none"}} />
            </div>

            {/*page 3*/}
            <div className="subpage_3">
                <LogoText text="Built on Data Analysis" customStyle={{marginTop: '112px'}}></LogoText>
                <div className="subtitle">
                    Blockchain is unique with its immutable data on chain and all data is public to everyone, which we
                    believe the solution for bots also points to data. We could learn from data on chain and evaluate
                    bots based on the behaviors in data.
                </div>
                <img src="/built.png" style={{marginTop: '26px', width: '46.35%', height: '50%', "-webkit-user-drag": "none"}}/>
                <LogoText text="Benefits" customStyle={{marginTop: '105px'}}></LogoText>
                <div className="subtitle">
                    Verification is processed internally in Inferer. We would not need user interaction the way like
                    reCaptcha in web2, which doesn't cause trouble to users.
                </div>
                <img src="/img_3.png" className='img-w-100' style={{marginTop: '54px', marginBottom: '112px', width: '46.20%', height: '45%', "-webkit-user-drag": "none"}}/>
            </div>

            {/*page 4*/}
            <div className="subpage_4">
                <LogoText text="Products" customStyle={{marginTop: '5.35%'}}></LogoText>
                <img src="/inferer_search.png" style={{marginTop: '1.68%', width: '65.68%', height: '33.27%', "-webkit-user-drag": "none"}}/>
                <img src="/inferer_api.png" style={{marginTop: '26px', marginBottom: '100px', width: '65.68%', height: '33.27%', "-webkit-user-drag": "none"}}/>
            </div>

            {/*page 5*/}
            <div className="subpage_5">
                <LogoText text="Inferer community" customStyle={{marginTop: '108px'}}></LogoText>
                <div className="subtitle">
                    Inferer is born in web3 and values community. Community would play a big role in inferer evaluation
                    and management. We hope inferer community could help contribute to great user ecosystem on chain.
                </div>
                <img src="/img_4.png" style={{marginTop: '54px', marginBottom: '112px', width: '46.20%', height: '0%', "-webkit-user-drag": "none"}}/>
            </div>

            {/*page 6*/}
            <div className="subpage_6">
                <LogoText text="Contact us" customStyle={{marginTop: '108px'}}></LogoText>
                <div className='card_container'>
                    <ContactCard title='Twitter' subtitle='Follow our Twitter to get latest info.'
                                icon={'/icon_twitter.png'}/>
                    <ContactCard title='Discord' subtitle='Participate in our Discord to get latest info.'
                                icon={'/icon_discord.png'}/>
                    <ContactCard title='Telegram' subtitle='Join in our Telegram group to get latest info.'
                                icon={'/icon_telegram.png'}/>
                    <ContactCard title='Email' subtitle='Email us if anything interests you.'
                                icon={'/icon_email.png'}/>
                </div>
            </div>

            {/*footer*/}
            <div className="footer_bar">
                <div className="footer_bar_content">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        {/* <img src="/icon_logo_left.png" style={{width: '12px', height: '12px'}}/> */}
                        <div className='footer_text' style={{marginLeft: '3px'}}>
                            Made by Inferer Labs
                        </div>
                    </div>
                    <div className='footer_text'>
                        Thanks to PlatON
                    </div>
                </div>
            </div>

            <style jsx>{`

              .container {
                //min-width: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

              }

              .nav_bar {
                backdrop-filter: blur(100px);
                // background-color: transparent;
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
                // z-index:100;
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

              .subpage_1 {
                width: 100%;
                heght: 881px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 80px;
              }

              .subpage_1_title_wrapper {
                margin-top: -110px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
              }

              .subpage_1_title {
                font-family: D-DIN-Bold;
                font-style: normal;
                font-weight: 700;
                font-size: 8.5vw;
                letter-spacing: 0.1vw;
                line-height: 252px;
                color: white;
                letter-spacing: 0.04em;
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
                font-weight: 10;
                font-size: 1rem;
                letter-spacing: 0.08em;
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
                // width: 1093px;
                width: 63.8%;
                max-width: 1094px;
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
                background-color: #171529;
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .card_container {
                margin-top: 67px;
                margin-bottom: 10%;
                width:100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                // justify-content: center;
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
                font-family: 'D-DIN-Normal';
                font-style: normal;
                //font-weight: 700;
                font-size: 1.5rem;
                //line-height: 1.2vw;
                //letter-spacing: 0.02em;
                color: white;
                max-width: 70%;
                margin-top: 29px;
                //margin-right: 40px;
                //margin-left: 40px;
                text-indent: 1.5em
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
                font-size: 13px;
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

              // .home_curve{
              //   margin-top: 117px;
              // }
              // .title_bg_curve{
              //   width: 988px;
              //   height: 376px;
              //   margin-top: -170px;
              // }
              // .img1_style{
              //   margin-top: 41px;
              //   margin-bottom: 112px
              // }
              // .subpage_4_title_txt{
              //   width: 678px;
              //   margin-top: 19px
              // }
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
                // .subpage_1_title_bg{
                //   margin-top: -20px !important;
                // }
                .card_container{
                  width:800px!important
                }
                .footer_bar_content {
                  min-width: 800px;
                }
                .nav_bar_content{
                  min-width:800px !important;

                }
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
               .footer_bar_content {
                display: none;
              }
              .card_container {
                row-gap: 5px;
                column-gap: 1.2%;
              }
              .subtitle {
                margin-top: 15px;
                font-size: 1.1rem;
                max-width: 80%;
              }
              .nav_bar {
                height: 70px;
              }
              .button {
                height: 32px !important;
              }
              .button_text {
                font-size: 1.0rem;
              }
            }

            @media (max-width:480px){
              .container .icon{
                display: none;
              }

            }
           

            `}</style>
            <style global jsx>{`
              body {
                width: 100%;
                background-color: #0d0b17;
              }
              div{
                overflow-x: none;
              }
            `}</style>
        </div>
    );
}
