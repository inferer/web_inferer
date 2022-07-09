import React from 'react';
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'
import axios from 'axios'

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
            <div className="container">
                {/*导航栏*/}
                <div className="nav_bar">
                    <div className="nav_bar_content">
                        <img src="/icon_nav_logo_blue.svg" className="logo"/>
                        <div className="connect_button">
                            CONNECT
                        </div>
                    </div>
                </div>

                <div style={{width: "100%", height: "58.5px"}}/>

                {/*内容*/}
                <div className="search_content">
                    <div className="title" ref={this.title}>ISCIENCE</div>
                    <div className="subtitle" ref={this.subtitle}>Search historical data</div>
                    <div className="search_bar" ref={this.searchBar}>
                        <SearchBar
                            customStyle={{marginTop: "72px"}}
                            onTextChanged={(text) => {
                                console.log("changed: " + text)
                            }}
                            onSearch={(text) => {
                                let that = this;
                                that.searchResult.current.style.display = "none"
                                console.log("on search: " + text)
                                // todo 替换为真实地址 增加地址前置校验等
                                let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
                                axios.get(api)
                                    .then(function (response) {
                                        console.log(response);
                                        that.searchResult.current.style.display = "flex"
                                        let descs = ["EXCEPTIONAL", "Very Good", "Good", "Fair", "Poor"]
                                        let index = that.random(0, 4)
                                        let scoreDesc = descs[index]
                                        that.setState({scoreDesc: scoreDesc, keyFactors: ["Participate PoAP activity", "Participate PoAP activity", "Participate PoAP activity", "Participate PoAP activity"]})
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }}
                            onFocus={() => {
                                this.title.current.style.opacity = "0"
                                this.subtitle.current.style.opacity = "0"
                                this.searchBar.current.style.marginTop = "-220px"
                            }}
                            onBlur={() => {

                            }}
                        />
                    </div>

                    <div className="search_result" ref={this.searchResult}>
                        <EvaluationResult customStyle={{marginTop: "12px"}} scoreDesc={this.state.scoreDesc}
                                          keyFactors={this.state.keyFactors}/>
                    </div>
                </div>


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
                    min-height: 1080px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    background-image: linear-gradient(to bottom right, #D5F7FF, #EFDBFF);
                  }

                  .connect_button {
                    width: 210px;
                    height: 44px;
                    background: #6A88FF;
                    box-shadow: 0px 0px 6px #556AE8;
                    border-radius: 7px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                  }

                  .nav_bar {
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

                  .title {
                    font-family: 'DIN';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 120px;
                    line-height: 147px;
                    text-align: center;
                    letter-spacing: 0.04em;
                    color: #A2A7D4;
                    margin-top: 236px;
                    animation-fill-mode: forwards;
                    transition: opacity 0.25s
                  }

                  .subtitle {
                    font-family: 'DIN';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 30px;
                    line-height: 36px;
                    text-align: center;
                    letter-spacing: 0.04em;
                    color: #A2A7D4;
                    animation-fill-mode: forwards;
                    transition: opacity 0.25s
                  }

                  .search_content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  }
                  
                  .search_bar {
                    animation-fill-mode: forwards;
                    transition: margin-top 0.25s
                  }
                  
                  .search_result {
                    display: none;
                  }

                  .footer_bar {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-top: auto;
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
}
