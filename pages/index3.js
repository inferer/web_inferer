import React from 'react';
import LaunchAppButton from '../components/LaunchAppButton';
import Head from 'next/head'
import router from "next/router";
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'

export default class Home extends React.Component {
    constructor() {
        super();
        this.title = React.createRef()
        this.subtitle = React.createRef()
        this.searchBar = React.createRef()
        this.searchResult = React.createRef()
        this.state = {scoreDesc: "EXCEPTIONAL", keyFactors: []};
    }

    random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    render() {
        return (
            <>
                <Head>
        <title>First Post</title>
      </Head>
                <div className="container">
                    <div className='top-left'></div>
                    <div className='bottom-left'></div>
                    <div className='bottom-right'></div>
                    <div className='content-center'></div>
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
                    <div className="content">
                        <div className='content-fq'>
                            <div className='coon-1204'>
                                <ul className='content-ul-bg'>
                                    <li>
                                        <div className='flex-c flex-j'>
                                            <div className='jt flex-c flex-j'>
                                            <div className='faq'>FAQ</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='list flex-l'>
                                        <span className='item1'>Q: What's Inferer ?</span>
                                        <span className='item2'>A: Inferer is a blockchain user verification service built on data analyis, aimed to prevent bots from hurting user experience on chain and contribute to greate user ecysystem on chain.

                                        </span>
                                    </li>
                                    <li className='list flex-l'>
                                        <span className='item1'>Q: What products do Inferer provide?</span>
                                        <span className='item2'>A: Currently we have Inferer Search and Inferer API, which serves in different purposes. Inferer Search focuses more on instant-check search scenarios, which enable user to have a quick scan on address whether it's bot related and what behaviors it generated before; Inferer API focuses more on pre-security check scenarios, which could help prevent hackers from invading system and contribute to more security ecosystem.
                                        </span>
                                    </li>
                                    <li className='list flex-l'>
                                        <span className='item1'>Q: What's Inferer evaluation result?</span>
                                        <span className='item2'>A: We learned from "Credit Score", and integrate it to our evaluation. Currenlty we have 5 evaluation levels, which includes Exceptional, Very Good, Good, Fair and Poor. These levels indicates the user behavior and the degree related with bots. We may adjust it if necessary in the future.
                                        </span>
                                    </li>
                                    <li className='list flex-l'>
                                        <span className='item1'>Q: Can I use Inferer in our AirDrop activity?</span>
                                        <span className='item2'>A: Sure. Inferer fits well in AirDrop list management. It would help in filtering target users efficiently and save the project team much time and work.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                

                    </div>
                    <div className="foot">
                            <div className='coon-1204 flex-b'>
                                <div>Made by Inferer Labs</div>
                                <div>Thanks to Platon</div>
                            </div>
                        </div>
                    <style jsx>{`
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
                    .container{
                        position: relative;
                        width: 100%;
                        height: 100%;
                        background: url(/content-yun.png) no-repeat;
                        background-size: 100%;
                        background: #17152a;
                    }
                    .content-center{
                        // position: absolute;
                        // z-index:1;
                        // left: 0;
                        // right: 0;
                        // top: 103px;
                        // width: 100vw;
                        // height:972px;
                        // background: url(/yun.png) no-repeat;
                        // background-size: 100%;
                    }
                .top-left{
                    // position: absolute;
                    // left: 162.61px;
                    // top: 1065.16px;
                    // width: 1272px;
                    // height: 1155px;
                    // background: url(/top-left.png) no-repeat;
                    // background-size: 100%;
                    // transform: rotate(-155.6deg);
                }
                .bottom-left{
                    width: 100%;
                    // background: url(/bg-center.png) repeat;
                    background-size: 100%;
                }
                .bottom-right{
                    background: url(/bottom-right.png) repeat;
                    background-size: 100%;
                    width: 357px;
                    height: 873px;
                    position: absolute;
                    right: 0;
                    top: 0;

                }
                    .nav_bar {
                        z-index: 5;
                        backdrop-filter: blur(100px);
                        background: #17152A;
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
                    .content{
                        position: relative;
                        z-index: 10;
                        padding-top:152px;
                    
                    }
                    .content-ul-bg{
                        width: 100%;
                        background: url(/bg-center.png) repeat;
                        background-size: 100%;
                    }
                
                    .coon-1204{
                        width: 1204px;
                        height: 100%;
                        margin: 0 auto;
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
                        font-family: 'DIN';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 90px;
                        line-height: 110px;
                        text-align: center;
                        letter-spacing: 0.1em;
                        color: #50557E;
                    }
                    .list{
                        margin-top: 24px;
                        padding: 22px 27px;
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
                    }
                    .content-bg{
                        width: 100%;
                        height: 175px;
                        background: url(/conten-foot.png) no-repeat;
                        background-size: 100%;
                    }
                    .foot{
                        background: #17152A;
                        height: 66px;
                        line-height: 66px;
                        font-family: 'Source Han Sans CN';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        color: #ffffff;
                    }
                    `}</style>
                    <style global jsx>{`
                        body {
                        width: 100%;
                        height: 100%;
                        color: rgba(0, 0, 0, 0.85);
                        }
                    `}</style>
                </div>
            </>
        );
    }
}
