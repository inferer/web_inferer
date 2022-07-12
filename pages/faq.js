import React from 'react';
import LaunchAppButton from '../components/LaunchAppButton';
import router from "next/router";
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'
import Header from '../components/Header'

export default class Faq extends React.Component {
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
        <div className="container">
           <Header></Header>
            <div className="content">
                <div className='content-fq w-1200'>
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
            <div className="foot">
                <div className='w-1200 flex-b'>
                    <div className='pl-40'>Made by Inferer Labs</div>
                    <div>Thanks to Platon</div>
                </div>
            </div>
            <style jsx>{`
            .flex-s {
                display: flex;
            }
            .w-1200{
                width:1200px;
                margin: 0 auto;

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
                width: 100%;
                height: 100%;
                background: #17152a;
                
            }
            .container ::-webkit-scrollbar{
                display:none;
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
                cursor: pointer;
            
              }
              .content{
                width: 100%;
                background: url(/bg-center.png) repeat;
                background-size: 100%;
                height: calc(100vh - 176px);;
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
            @media (max-width:1200px) {
                .w-1200{
                    width:80%;
                    margin:0 auto;
                    
                }
                ul{
                    padding:0 !important
                }
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
        );
    }
}
