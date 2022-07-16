import React from 'react';
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'
import axios from 'axios'
import { Select } from 'antd';
import { motion, AnimatePresence } from "framer-motion"
const { Option } = Select;

export default class Home extends React.Component {
  constructor() {
    super();
    this.title = React.createRef()
    this.subtitle = React.createRef()
    this.searchBar = React.createRef()
    this.searchResult = React.createRef()
    this.state = { 
      scoreDesc: "EXCEPTIONAL", 
      keyFactors: [], 
      loading: false, 
      isResult: false,
      inputValue: '',
    };
  }



  random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  async handleOnSearchEvent() {
    //0x303425052e462dd0f3044aee17e1f5be9c7de783
    let text = this.state.inputValue;
    if (text === "") {
      return
    } else {
      this.setState({ loading: true })
    }
    //默认假设无查询结果
    this.setState({ isResult: false })
    const SearchService = require("../api/SearchService");
    let searchService = new SearchService();
    let response = await searchService.searchOnETH(text);
    // console.log("handleOnSearchEvent response = " + JSON.stringify(response));
    // searchService.searchOnETH(text, (response) => {

    // });

    // 0x303425052e462dd0f3044aee17e1f5be9c7de783
    let keyFactors = []
    if (response && response.status == 200) {
      // 查询到结果 显示
      this.setState({ loading: false, isResult: true })
      for (var key of Object.keys(response.result.info)) {
        if (typeof response.result.info[key] === 'object') {
          for (var subKey of Object.keys(response.result.info[key])) {
            console.log("[" + key + "][" + subKey + "] : " + response.result.info[key][subKey])
            keyFactors.push("[" + key + "][" + subKey + "] : " + response.result.info[key][subKey])
          }
        } else {
          console.log("[" + key + "] : " + response.result.info[key])
          keyFactors.push("[" + key + "] : " + response.result.info[key])
        }
      }

      // this.searchResult.current.style.display = "flex"
      let scoreDesc = response.result.level
      this.setState({ scoreDesc: scoreDesc, keyFactors: keyFactors })
    } else {
      // 未查询到结果 隐藏
      this.setState({ loading: false, isResult: false })

    }




  }


  handleChange() { }

  render() {
    return (
      <>
        <div className='bgEle'></div>
        <div className="container-box">
          {/*导航栏*/}
          <div className="nav_bar">
            <div className="nav_bar_content">
              <img src="/icon_nav_logo_blue.svg" className="logo" />
              <div className='nav_bar_content_right'>
                <div className='connect-right-icon'></div>
                <div style={{ position: 'relative' }} id="area"></div>
                <Select
                  className='connect_right'
                  defaultValue="Ethereum"
                  optionLabelProp="label"
                  dropdownClassName="ethereum_dropdown"
                  dropdownAlign={{offset: [0, 15]}}
                  dropdownRender={node => {
                    return (
                      <>
                        <div className='dropdown_desc'>Select a network</div>
                        <div className='self_dropdown_content'>{node}</div>
                      </>
                    )
                  }}
                  style={{
                    width: 164,
                  }}
                  onChange={this.handleChange()}
                  getPopupContainer={() => document.getElementById('area')}
                  >
                  <Option value="Ethereum" label="Ethereum">
                      <div>
                        <div className='select-left'></div>
                        <span className='selelt-title'>Ethereum</span>
                      </div>
                      <i className='select-icon'></i>
                  </Option>
                  <Option value="Platon" label="Platon">
                      <div>
                        <div className='select-left'></div>
                        <span className='selelt-title'>Platon</span>
                      </div>
                      <i className='select-icon'></i>
                  </Option>
                </Select>
                <button className="connect_button">
                  CONNECT TO WALLET2
                </button>
              </div>
            </div>
          </div>
          <div className='main_content_box'>
            {/*内容*/}
            <div className="search_content">
              <div className="title" ref={this.title}>INFERER</div>
              <div className="subtitle" ref={this.subtitle}>Search address for verification</div>
              <div className="search_bar" ref={this.searchBar}>
                <SearchBar
                  inputValue={this.state.inputValue}
                  onTextChanged={(text) => {
                    console.log("changed: " + text)
                    if (text) {
                      this.title.current.style.opacity = "0"
                      this.subtitle.current.style.opacity = "0"
                      this.searchBar.current.style.marginTop = "-15.6%"
                    }
                    this.setState({inputValue: text});
                  }}
                  onSearch={() => this.handleOnSearchEvent()}
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
                {
                  this.state.loading ? (<div className='loading-box'>
                    <img src="/loading.png" className='loading-img' />
                  </div>) : (<></>)
                }
              </div>
              {this.state.isResult && (<motion.div
              style={{width: '100%'}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}>
                <div className="search_result" style={{ display: this.state.isResult ? 'flex' : 'none' }}>
                  <EvaluationResult customStyle={{ marginTop: "12px" }} scoreDesc={this.state.scoreDesc}
                    keyFactors={this.state.keyFactors} />
                </div>
              </motion.div>
              )}
            </div>

            <div className="footer_bar">
              <div className="footer_bar_content">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {/* <img src="/icon_logo_left.png" style={{width: '12px', height: '12px'}}/> */}
                  <div className='footer_text' style={{ marginLeft: '3px' }}>
                    Made by Inferer Labs
                  </div>
                </div>
                <div className='footer_text'>
                  Thanks to Platon
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
                    .container-box {
                      width: 100%;
                      height: 100%;
                      position:absolute;
                      z-index:1;
                      top:0;
                      left: 0;
                      overflow: hidden;
                      background: transparent;
                      
                    }
                    .nav_bar {
                      background-color: transparent;
                      width: 100%;
                      height: 93px;
                      padding-top: 49px;
                      position:absolute;
                      top:0;
                      left:0;
                    }

                    .nav_bar_content {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding:0 13%;
                    }

                    .logo {
                      width: 30px;
                      height: 30px;
                      -webkit-user-drag: none;
                    }
                    .search_bar{
                      width: 100%;
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

                    .title {
                      font-family: 'DIN';
                      font-style: normal;
                      font-weight: 900;
                      font-size: 1em;
                      text-align: center;
                      letter-spacing: 0.04em;
                      color: #A2A7D4;
                      animation-fill-mode: forwards;
                      transition: opacity 0.25s
                    }

                    .subtitle {
                      font-family: 'DIN';
                      font-style: normal;
                      font-weight: 500;
                      font-size: 25px;
                      line-height: 36px;
                      text-align: center;
                      letter-spacing: 0.04em;
                      color: #A2A7D4;
                      animation-fill-mode: forwards;
                      transition: opacity 0.25s
                    }
                    .main_content_box{
                      width: 100%;
                      position: absolute;
                      top: 110px;
                      left:0;
                      bottom:0;
                      overflow-y: auto;
                    }
                    .search_content {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      width:100%;
                      font-size:120px;
                      min-height: calc(100% - 77px);
                      padding-top:106px;
                    }
                    
                    .search_bar {
                      animation-fill-mode: forwards;
                      transition: margin-top 0.25s
                    }
                    
                    .search_result {
                      width: 46%!important;
                      margin:0 auto;
                      display: none;
                    }

                    .footer_bar {
                      width: 100%;
                      height: 60px;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      background-color: rgba(0, 0, 0, 0.25);
                      margin-top:20px;
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
                  body>div{
                    height: 100%;
                    overflow: hidden;
                    position: relative;
                  }
                  .bgEle{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-image: linear-gradient(to bottom right, #D5F7FF, #EFDBFF);
                    position: absolute;
                    top:0;
                    left: 0;
                  }
                  .ethereum_dropdown{
                    background: #FFFFFF;
                    box-shadow: 0px 0px 6px rgba(85, 106, 232, 0.5);
                    padding:10px !important;
                    border-radius: 7px;
                  }
                  .ant-select-arrow{
                    color:#6A88FF;
                  }
                  .dropdown_desc{
                    size:12px;
                    height:24px;
                    color: #666666;
                    margin-bottom:5px;
                  }
                  .ant-select-item-option-selected{
                    background: #EFEFEF!important;
                    border-radius: 7px;
                  }
                  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
                    background: #ffffff;
                  }
                  .self_dropdown_content .ant-select-item-option{
                    min-height:24px;
                    height: 24px;
                    padding:0px !important;
                    margin-bottom:3px;
                  }
                  .self_dropdown_content .ant-select-item-option .ant-select-item-option-content{
                    height: 24px;
                    border-radius: 7px;
                    display: flex;
                    align-items:center;
                    justify-content: space-between;
                    padding-left: 7px;
                    padding-right: 7px;
                  }
                  .self_dropdown_content .ant-select-item-option .ant-select-item-option-content div{
                    display: flex;
                    align-items:center;
                  }
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
                    top: 11px;
                    left: 10px;
                    width:22px;
                    height:22px;
                    z-index:9;
                    background: url(/connect-icon.png);
                    background-size: 22px 22px;
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
                    width: 14px;
                    height: 14px;
                    background: url(/connect-icon.png);
                    background-size: 100% auto;
                  }
                  @media (max-width:1920px) {
                    .search_content{
                      font-size: 120px!important;
                    }
                  }
                  @media (max-width:1440px) {
                    .search_content{
                      font-size: 90px!important;
                    }
                  }
                  @media (max-width:1280px) {
                    .footer_bar_content {
                      min-width: 760px!important;
                      width: 760px!important;
                    }
                    .search_content{
                      font-size: 80px!important;
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
                    .search_content{
                      font-size: 70px!important;
                    }
              `}</style>
        </div>
      </>)
  }
}
