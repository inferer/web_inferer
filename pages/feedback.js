import React, { startTransition } from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios'
import { Select } from 'antd';
const { Option } = Select;

export default class Feedback extends React.Component {
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
    handleChange() {}
    render() {
        return (
            <div className="container">
                {/*导航栏*/}
                <div className="nav_bar">
                    <div className="nav_bar_content">
                        <img src="/icon_nav_logo_blue.svg" className="logo"/>
                        <div className='nav_bar_content_right'>
                          <div className='connect-right-icon'></div>
                        <Select
                          className='connect_right'
                          defaultValue="Ethereum"
                            style={{
                              width: 164,
                            }}
                            onChange={this.handleChange()}
                          >
                          <Option value="Ethereum">Ethereum</Option>
                          <Option value="Platon">Platon</Option>
                        </Select>
                        <div className="connect_button">
                            CONNECT
                        </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "100%", height: "58.5px"}}/>

                {/*内容*/}
                <div className="search_content">
                    {/* <div className="title" ref={this.title}>ISCIENCE</div>
                    <div className="subtitle" ref={this.subtitle}>Search historical data</div> */}
                    <div className="search_bar" ref={this.searchBar}>
                        <SearchBar
                            customStyle={{marginTop: "72px"}}
                            onTextChanged={(text) => {
                                console.log("changed: " + text)
                            }}
                            onSearch={(text) => {
                                let that = this;
                                // that.searchResult.current.style.display = "none"
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
                              
                            }}
                            onBlur={() => {

                            }}
                        />
                        <div className="key_factors_container">
                          <div style={{display: "flex", flexDirection: "row", height: "80px", alignItems: "center"}}>
                            <img src="/icon_keey_factor.svg" className="key_factors_icon"></img>
                            <div className="key_factors_title">
                              <span>反馈地址:</span>
                              <div className='feedback-address'>1111.111.111.1111</div>
                            </div>
                           </div>
                     
                            <div className='feedback-top-line'>
                                  <div className='feedback-start'></div>
                            </div>
                            <div className='feedback-list-ul'>
                                <div className='feedback-top'>反馈细节:</div>
                                <textarea placeholder='请输入' className='feedback-detail'></textarea>
                                <div className='feedback-submit'>
                                <span className='feedback-submit-t'>提交</span>
                                    <div className='feedback-submit-icon'></div>
                                </div>
                            </div>
                            </div>

                         
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

                  .feedback_button {
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
                    z-index:10;
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
                  .rate_container{
                    display:flex;
                  }
                 .nav_bar_content_right{
                  position: relative;
                  display: flex;
                 }
                 select{
                  height:100%;
                 }
                 .connect_right{
                  width:164px;
                  height:44px;
                  margin-right:20px;
                  padding:11px 13px;
                  background: #FFFFFF;
                  box-shadow: 0px 0px 6px rgba(85, 106, 232, 0.5);
                  border-radius: 7px;
                  display: flex;
                  align-items: center;
                 }
                 .icon-down{
                  width: 14px;
                  height: 8px;
                 }
                 .icon{
                  width: 22px;
                  height: 22px;
                 }
                 .right-title{
                  width: 91px;
                  margin-left:8px;
                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 19px;
                  color: #6A88FF;
                }
                .feedback-content{
                  background-color: #f2f3ff;
                  margin-top:23px;
                  padding: 34px;
                  box-shadow: 0px 0px 8px #9FB3FF;
                  border-radius: 14px;
              }
              .feedback-top-line{
                position: relative;
                display: flex;
                justify-content: center;
                height: 1px;
                background-color: #D3DFFF;
                margin-top: 11px;
                margin-bottom: 19px;
            }
            .feedback-start{
                position: absolute;
                top:-5px;
                left:50%;
                width: 10px;
                height: 10px;
                background: url(/feedback-start.png) no-repeat center;
                background-size: 100%;
            }
            .feedback-address{
                margin-left:23px;
                font-family: 'Source Han Sans CN';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 36px;
                text-align: center;
                letter-spacing: 0.02em;
                color: #999999;
            }
              .feedback-list{
                margin-top: 35px;
                background: #f2f3ff;
                padding: 43px 19px 43px 19px;
                box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.3);
                border-radius: 14px;
            }
            .feedback-list-top{
                display: flex;
            }
            .feedback-list-top-icon{
                margin-right:8px;
                width: 30px;
                height: 30px;
                background: url(/feedback-man.png) no-repeat;
                background-size: 100%;
            }
            .feedback-list-top-title{
                font-family: 'DIN';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 29px;
                letter-spacing: 0.02em;
                color: #727ABA;
            }
            .feedback-list-ul{
                position: relative;
                padding:16px 23px;
                box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.3);
                border-radius: 14px;
                background-color: #FFFFFF;
                margin-top: 34px;
            }
        .feedback-top{
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0.02em;
            color: #727ABA;
        }
        .feedback-detail{
            margin-top:11px;
            width:100%;
            height: 302px;
            padding:19px 13px 0 25px;
            background: #EEEEEE;
            opacity: 0.5;
            border-radius: 14px;
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.02em;
            color: #999999;
            border: transparent;
        }
        .feedback-submit{
            position: absolute;
            bottom: 35px;
            right: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 131px;
            height: 36px;
            background: #618DFF;
            opacity: 0.5;
            border-radius: 7px;
        }
        .feedback-submit-icon{
            box-shadow: 0px 0px 6px #769CFF;
            width: 15px;
            height: 14px;
            background: url(/feedback-submit.png) no-repeat;
            background-size: 100%;
        }
        .feedback-submit-t{
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #FFFFFF;
            text-shadow: 0px 0px 4px #769CFF;
        }

        .key_factors_container {
          margin-top: 39px;
          margin-bottom: 35px;
          padding: 43px 19px 43px 19px;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.3);
          border-radius: 14px;
        }
        .key_factors_title{
          display:flex
        }

        .key_factors_title span{
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 36px;
           text-align: center;
          letter-spacing: 0.02em;
          color: #727ABA;

        }
            
                `}</style>
               <style global jsx>{`
                .ant-select-selector {
                  height:100%;
                  border:none!important;
                }
                .connect_right{
                  width:164px;
                  height:44px;
                  margin-right:20px;
                  background: #FFFFFF;
                  box-shadow: 0px 0px 6px rgba(85, 106, 232, 0.5);
                  border-radius: 7px;
                  display: flex;
                  align-items: center;
                 }
                 .connect-right-icon{
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  width:26px;
                  height:26px;
                  z-index:9;
                  background: url(/connect-icon.png);
                  background-size: 26px 26px;
                 }
                 .ant-select-selection-item{
                  text-align: center!important;
                 }
            `}</style>
            </div>
        );
    }
}
