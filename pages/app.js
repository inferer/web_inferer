import React from 'react';
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'
import axios from 'axios'
import { Select } from 'antd';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
const { Option } = Select;

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

    async handleOnSearchEvent(text) {
      const SearchService = require("../api/SearchService");
      let searchService = new SearchService();
      let response = await searchService.searchOnETH(text);
      // console.log("handleOnSearchEvent response = " + JSON.stringify(response));
      // searchService.searchOnETH(text, (response) => {
        
      // });

      // 0x303425052e462dd0f3044aee17e1f5be9c7de783
      let keyFactors = []
      if(response.status == 200) {
          for (var key of Object.keys(response.result.info)) {
              if(typeof response.result.info[key]  === 'object') {
                  for(var subKey of Object.keys(response.result.info[key])) {
                      console.log("[" + key + "][" + subKey + "] : " + response.result.info[key][subKey])
                      keyFactors.push("[" + key + "][" + subKey + "] : " + response.result.info[key][subKey])
                  }
              } else {
                  console.log("[" + key + "] : " + response.result.info[key])
                  keyFactors.push("[" + key + "] : " + response.result.info[key])
              }
          }

          this.searchResult.current.style.display = "flex"
          let scoreDesc = response.result.level
          this.setState({scoreDesc: scoreDesc, keyFactors: keyFactors})
      } else {



      }



      
    }


  handleChange() {}

    render() {
        return (
            <div className="container-box">
                {/*导航栏*/}
                <div className="nav_bar">
                    <div className="nav_bar_content">
                        <img src="/icon_nav_logo_blue.svg" className="logo"/>
                        <div className='nav_bar_content_right'>
                          <div className='connect-right-icon'></div>
                          <div style={{ position: 'relative' }} id="area"></div>
                          <Select
                            className='connect_right'
                            defaultValue="Ethereum"
                            optionLabelProp="label"
                            style={{
                                width: 164,
                            }}
                            onChange={this.handleChange()}
                            getPopupContainer={() => document.getElementById('area')}>
                              <Option value="Ethereum" label="Ethereum">
                                <div role="img" aria-label="Ethereum" className='select-top'>
                                  <div className='select-left'></div>
                                  <span className='selelt-title'>Ethereum</span>
                                  <i className='select-icon'></i>
                                </div>
                              </Option>
                              <Option value="Platon"  label="Platon">
                                <div role="img" aria-label="Platon" className='select-top'>
                                  <div className='select-left'></div>
                                  <span className='selelt-title'>Platon</span>
                                  <i className='select-icon'></i>
                                </div>
                              </Option>
                          </Select>
                        <button className="connect_button">
                            CONNECT TO WALLET2
                        </button>
                        </div>
                    </div>
                </div>

                <div style={{width: "100%", height: "58.5px"}}/>

                {/*内容*/}
                <div className="search_content">
                    <div className="title" ref={this.title}>INFERER</div>
                    <div className="subtitle" ref={this.subtitle}>Search address for verification</div>
                    <div className="search_bar" ref={this.searchBar}>
                        <SearchBar
                            customStyle={{marginTop: "72px"}}
                            onTextChanged={(text) => {
                                console.log("changed: " + text)
                                if (text){
                                  this.title.current.style.opacity = "0"
                                  this.subtitle.current.style.opacity = "0"
                                  this.searchBar.current.style.marginTop = "-220px"
                                }
                            }}
                            onSearch={(text) => this.handleOnSearchEvent(text)}
                            // onSearch={(text) => {
                            //     let that = this;
                            //     that.searchResult.current.style.display = "none"
                            //     console.log("on search: " + text)
                            //     // todo 替换为真实地址 增加地址前置校验等
                            //     let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
                            //     axios.get(api)
                            //         .then(function (response) {
                            //             console.log(response);
                            //             that.searchResult.current.style.display = "flex"
                            //             let descs = ["EXCEPTIONAL", "Very Good", "Good", "Fair", "Poor"]
                            //             let index = that.random(0, 4)
                            //             let scoreDesc = descs[index]
                            //             that.setState({scoreDesc: scoreDesc, keyFactors: ["Participate PoAP activity", "Participate PoAP activity", "Participate PoAP activity", "Participate PoAP activity"]})
                            //         })
                            //         .catch(function (error) {
                            //             console.log(error);
                            //         });
                            // }}
                            onFocus={() => {

                            }}
                            onBlur={() => {

                            }}
                        />
                    </div>
                    

                    <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}>
                    <div className="search_result" ref={this.searchResult}>
                        <EvaluationResult customStyle={{marginTop: "12px"}} scoreDesc={this.state.scoreDesc}
                                          keyFactors={this.state.keyFactors}/>
                    </div>
                    </motion.div>
                </div>


                <div className="footer_bar">
                    <div className="footer_bar_content">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            {/* <img src="/icon_logo_left.png" style={{width: '12px', height: '12px'}}/> */}
                            <div className='footer_text' style={{marginLeft: '3px'}}>
                                Made by Inferer Labs
                            </div>
                        </div>
                        <div className='footer_text'>
                            Thanks to Platon
                        </div>
                    </div>
                </div>

                <style jsx>{`
                  
                  .container-box {
                    min-width: 600px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    overflow: hidden;
                    background-image: linear-gradient(to bottom right, #D5F7FF, #EFDBFF);
                  }
                  .nav_bar_content_right{
                    position: relative;
                    display: flex;
                   }
                   select{
                    height:100%;
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
                    border: none;
                    cursor: pointer;
                  }

                  .nav_bar {
                    background-color: transparent;
                    width: 100%;
                    height: 117px;
                    position: fixed;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    z-index:10;
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
                    margin: 10% 0 5% 0;
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
                    width:100%;
                    min-height:400px;
                    height:calc(100vh - 112px);
                    overflow-y: scroll;
                    padding-bottom:120px;
                  }
                  
                  .search_bar {
                    animation-fill-mode: forwards;
                    transition: margin-top 0.25s
                  }
                  
                  .search_result {
                    width: 924px;
                    display: none;
                  }

                  .footer_bar {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0.25);
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
                    font-size: 16px;
                    line-height: 21px;
                    color: rgba(255, 255, 255, 0.8);
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
                  color: #6A88FF;
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
                 .ant-select-selector{
                    box-shadow: none!important;
                 }
                 .ant-select-item-option-selected{
                    position: relative;
                 }
                 .ant-select-item-option-selected .select-icon{
                    position: absolute;
                    right: 10px;
                    top: 15px;
                    display: block;
                    background-color: green;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                 }
                 .select-top{
                  display: flex;
                  align-items: center;
                 }
                 .selelt-title{
                  margin-left: 15px
                 }
                 .select-left{
                  width: 26px;
                  height: 26px;
                  background: url(/connect-icon.png);
                  background-size: 100% auto;
                 }
                 @media (max-width:1280px) {
                  .footer_bar_content {
                    min-width: 760px!important;
                    width: 760px!important;
                  }
                 .nav_bar_content{
                   min-width:760px !important;
                   width:760px !important;
 
                 }
                }
                @media (max-width:768px) {
                  .nav_bar_content{
                    min-width:320px !important;
                    width:320px !important;
                  }
                  .footer_bar_content {
                     min-width: 320px;
                  }
            `}</style>
            </div>
        );
    }
}
