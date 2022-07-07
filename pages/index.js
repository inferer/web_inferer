import LogoText from '../components/LogoText';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";

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
                        <div className="menu_item">
                            COMMUNITY
                        </div>
                        <div className="menu_item">
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
                <img src="/home_curve.png" style={{marginTop: '0px'}}></img>
                <div className="subpage_1_title_wrapper">
                    <img src="/subpage_1_title_bg.png" style={{
                        width: '988px',
                        height: '376px', marginTop: '-170px'
                    }}/>
                </div>
                <div className="subpage_1_title_wrapper">
                    <p className="subpage_1_title">INFERER</p>
                </div>
                <div className="subpage_1_subtitle_wrapper">
                    <p className="subpage_1_subtitle">
                        BUILT ON DATA ANALYSIS, SERVER FOR WEB3 IDENTITY
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
                <img src="/icon_logo_big.png" style={{marginTop: '26px'}}/>
                <LogoText text="Why we build Inferer?" customStyle={{marginTop: '88px'}}></LogoText>
                <div className="subtitle">
                    Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from
                    hurting user experience on chain and contribute to greate user ecysystem on chain.
                </div>
                <img src="/img_1.png" style={{marginTop: '41px', marginBottom: '112px'}}/>
            </div>

            {/*page 3*/}
            <div className="subpage_3">
                <LogoText text="Built on Data Analysis" customStyle={{marginTop: '112px'}}></LogoText>
                <div className="subtitle">
                    Blockchain is unique with its immutable data on chain and all data is public to everyone, which we
                    believe the solution for bots also points to data. We could learn from data on chain and evaluate
                    bots based on the behaviors in data.
                </div>
                <img src="/img_2.png" style={{marginTop: '47px'}}/>
                <LogoText text="Benefits" customStyle={{marginTop: '105px'}}></LogoText>
                <div className="subtitle">
                    Verification is processed internally in Inferer. We would not need user interaction the way like
                    reCaptcha in web2, which doesn’t cause trouble to users.
                </div>
                <img src="/img_3.png" style={{marginTop: '54px', marginBottom: '112px'}}/>
            </div>

            {/*page 4*/}
            <div className="subpage_4">
                <LogoText text="Products" customStyle={{marginTop: '105px'}}></LogoText>
                <div className="subpage_4_card_1">
                    <img src='/img_card_left.png'
                         style={{width: '390px', height: '270px', marginLeft: '-109px', marginTop: '-97px'}}/>
                    <div className='subpage_4_title_container' style={{marginLeft: '72px'}}>
                        <div className='subpage_4_title'>
                            Inferer Search
                        </div>
                        <div style={{width: '542px', marginTop: '19px'}}>
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
                        <div style={{width: '678px', marginTop: '19px'}}>
                            <span className='subpage_4_subtitle'>
                                Focus on pre-security check scenarios, which could be integrated in customer’s product and help reduce the harm conducted by bots or hackers.
                            </span>
                        </div>
                        <span className='span_link'>
                                Check docs for more detail ->
                            </span>
                    </div>

                    <img src='/img_card_right.png'
                         style={{width: '390px', height: '270px', marginRight: '-167px', marginTop: '-97px'}}/>
                </div>
            </div>

            {/*page 5*/}
            <div className="subpage_5">
                <LogoText text="Inferer community" customStyle={{marginTop: '108px'}}></LogoText>
                <div className="subtitle">
                    Inferer is born in web3 and values community. Community would play a big role in inferer evaluation
                    and management. We hope inferer community could help contribute to great user ecosystem on chain.
                </div>
                <img src="/img_4.png" style={{marginTop: '54px', marginBottom: '112px'}}/>
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
                height: 117px;
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
                font-size: 16px;
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
                font-family: D-DIN-Bold;
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
                color: rgba(255, 255, 255, 1);
                text-align: center;
                font-family: D-DIN-Light;
                font-style: normal;
                font-weight: 500;
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
