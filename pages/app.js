import React from "react";
import SearchBar from "../components/SearchBar";
import EvaluationResult from "../components/EvaluationResult";
import axios from "axios";
import Head from "next/head";
import { Select, Typography, notification } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from "framer-motion";
const { Option } = Select;
const { Text } = Typography;

export default class Home extends React.Component {
    constructor() {
        super();
        this.title = React.createRef();
        this.subtitle = React.createRef();
        this.searchBar = React.createRef();
        this.searchResult = React.createRef();
        this.state = {
            scoreDesc: "EXCEPTIONAL",
            keyFactors: [],
            loading: false,
            isResult: false,
            isError: false,
            inputValue: "",
            feedBackVisible: false,
            textAreaValue: "",
            searchRecord: "",
            walletConnected: false,
            walletAddress: "",
            network:"Ethereum"
        };
    }

    openNotification(message, success) {
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

    random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    async handleOnSearchEvent() {
        //0x303425052e462dd0f3044aee17e1f5be9c7de783
        let text = this.state.inputValue;
        if (text === "") {
            return;
        } else {
            this.setState({ loading: true, isError: false, searchRecord: text, inputValue: text.toLowerCase()});
        }
        //默认假设无查询结果
        this.setState({ isResult: false });
        const SearchService = require("../api/SearchService");
        let searchService = new SearchService();
        let response = {}
        if (this.state.network == "Ethereum") {
            response = await searchService.searchOnETH(text);
        } else if (this.state.network == "PlatON") {
            response = await searchService.searchOnPlatON(text);
        }
        // let response = JSON.parse(`{"status":200,"message":"OK","result":{"level":"Poor","desc":"可能涉及Bot交易: 交易量较大","info":{"User Total Tx Count":"2055","User First Tx Timestamp":"5/18/2021, 6:21:52 PM","User Latest Tx Timestamp":"7/15/2022, 12:02:44 PM","Tx Info":{"Maximum tx value":"52.5 ETH","Minimum tx value":"0 ETH","Median tx value":"0.08 ETH","P80 tx value":"1 ETH"},"NFT Info":{"NFT mint count":"25","NFT burn count":"1","NFT send count":"7","NFT receive count":"74","NFT send interactor count":"6","NFT receive interactor count":"67","NFT total interactor count":"71"},"PoAP Info":{"PoAP mint count":0,"PoAP burn count":0,"PoAP send count":0,"PoAP receive count":0},"NFT Interactor":{"Top 3 Interacted Address":"0xc6efe835e985b116c75430f330b7a4c4aa29afe8, 0xed6552d7e16922982bf80cf43090d71bb4ec2179, 0xe6ff1989f68b6fd95b3b9f966d32c9e7d96e6255","Interacted Count":"6"},"NFT Interact Addresses":{"Interacted Addresses":"0xead6605b9e105e28bd35e9f494131c10c1281ce9, 0xebd9bb8bb470051339a7f13ab6842397b9cd6254, 0xed2a45611b967df5647a17dfeaa0dec40806de54 and more"}}}}`)
        let keyFactors = [];
        if (response && response.status == 200) {
            // 查询到结果 显示
            this.setState({ loading: false, isResult: true });
            for (let key in response.result.info) {
                keyFactors.push({ key: key, value: response.result.info[key] });
            }

            // this.searchResult.current.style.display = "flex"
            let scoreDesc = response.result.level;
            this.setState({ scoreDesc: scoreDesc, keyFactors: keyFactors });
        } else {
            // 未查询到结果 隐藏
            this.setState({ loading: false, isResult: false, isError: true });
        }
    }
    openFeedBack() {
        this.setState({ isResult: false, feedBackVisible: true });
    }
    //提交事件
    async submit() {
        const SearchService = require("../api/SearchService");

        if(this.state.inputValue == "") {
            this.openNotification("No Address Provided.", false)
            return
        }

        if(this.state.textAreaValue == "") {
            this.openNotification("No Content Provided.", false)
            return
        }

        let searchService = new SearchService();
        let response = await searchService.feedBack({
            address: this.state.inputValue,
            content: this.state.textAreaValue,
            network: this.state.network
        });

        console.log("submit response = " +  JSON.stringify(response))

        // if(response.status == 200) {
            console.log("submit 200")
            this.setState({inputValue: "", isResult: false, feedBackVisible: false, textAreaValue: ""})
            this.openNotification("Thanks for your feedback!", true)

            this.title.current.style.opacity = "1";
            this.subtitle.current.style.opacity = "1";
            this.searchBar.current.style.marginTop = "0";
        // } else {

        // }
    }

    async cancel() {
        this.title.current.style.opacity = "0";
        this.subtitle.current.style.opacity = "0";
        this.searchBar.current.style.marginTop = "-19vh";
        this.setState({ isResult: true });
        this.setState({ feedBackVisible: false });
    }

    // clickWallet() {
    //     if (initWeb3) {
    //         initWeb3((address) => {
    //             console.log("dddd address = " + address)
    //             if(address != "") {
    //                 this.setState({ walletConnected: true, walletAddress: address });
    //             } else {
    //                 this.setState({ walletConnected: false });
    //             }
                
    //         });
    //     } else {
    //         setTimeout(() => {
    //             this.clickWallet();
    //         }, 200);
    //     }
    // }

    handleChangeNetwork = value => {
        console.log(value);
        // this.props.form.validateField(["Dropdown2"]);
        this.setState({network: value, isResult: false, feedBackVisible: false, inputValue: ""})
    };

    render() {
        return (
            <>
                <Head>
                    <title>Inferer Search - Searc address idendity</title>
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                    </Head>
                <div className="bgEle"></div>
                <div className="container-box">
                    {/*导航栏*/}
                    <div className="nav_bar">
                        <div className="nav_bar_content">
                            <img
                                src="/icon_nav_logo_blue.svg"
                                className="logo"
                            />
                            <div className="nav_bar_content_right">
                                <div className="connect-right-icon"></div>
                                <div
                                    style={{ position: "relative" }}
                                    id="area"
                                ></div>
                                <Select
                                    className="connect_right"
                                    defaultValue="Ethereum"
                                    value={this.state.network}
                                    optionLabelProp="label"
                                    dropdownClassName="ethereum_dropdown"
                                    dropdownAlign={{ offset: [0, 15] }}
                                    dropdownRender={(node) => {
                                        return (
                                            <>
                                                <div className="dropdown_desc">
                                                    Select a network
                                                </div>
                                                <div className="self_dropdown_content">
                                                    {node}
                                                </div>
                                            </>
                                        );
                                    }}
                                    style={{
                                        width: 164,
                                    }}
                                    onChange={this.handleChangeNetwork}
                                    getPopupContainer={() =>
                                        document.getElementById("area")
                                    }
                                >
                                    <Option value="Ethereum" label="Ethereum">
                                        <div>
                                            <div className="select-left"></div>
                                            <span className="selelt-title">
                                                Ethereum
                                            </span>
                                        </div>
                                        <i className="select-icon"></i>
                                    </Option>
                                    <Option value="PlatON" label="PlatON">
                                        <div>
                                            <div className="select-left"></div>
                                            <span className="selelt-title">
                                                PlatON
                                            </span>
                                        </div>
                                        <i className="select-icon"></i>
                                    </Option>
                                </Select>
                                {/* {this.state.walletConnected == true &&
                                    (
                                        <div
                                            className="wallet_address"
                                            value={
                                                this.state.walletAddress
                                            }
                                        >
                                            {this.state.walletAddress}
                                        </div>
                                    )
                                }
                                {this.state.walletConnected == false &&
                                    (
                                        <button
                                            className="connect_button"
                                            onClick={this.clickWallet.bind(this)}
                                            >
                                                CONNECT TO WALLET
                                        </button>
                                    )
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="main_content_box">
                        <div
                                className="search_content"
                                style={
                                    this.state.inputValue
                                        ? { paddingTop: "9.8vh" }
                                        : {}
                                }
                            >
                                <div className="title" ref={this.title}>
                                    INFERER
                                </div>
                                <div className="subtitle" ref={this.subtitle}>
                                    Search address identity
                                </div>
                                <div
                                    className="search_bar"
                                    ref={this.searchBar}
                                >
                                    <SearchBar
                                        inputValue={this.state.inputValue}
                                        onTextChanged={(text) => {
                                            if (text) {
                                                this.title.current.style.opacity =
                                                    "0";
                                                this.subtitle.current.style.opacity =
                                                    "0";
                                                this.searchBar.current.style.marginTop =
                                                    "-19vh";
                                            } else {
                                                this.title.current.style.opacity =
                                                    "1";
                                                this.subtitle.current.style.opacity =
                                                    "1";
                                                this.searchBar.current.style.marginTop =
                                                    "0";
                                            }
                                            this.setState({ inputValue: text });
                                        }}
                                        onSearch={() =>
                                            this.handleOnSearchEvent()
                                        }
                                        onFocus={() => {}}
                                        onBlur={() => {}}
                                    />
                                    {this.state.loading ? (
                                        <div className="loading-box">
                                            <img
                                                src="/loading.png"
                                                className="loading-img"
                                            />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {this.state.isResult && this.state.inputValue && this.state.inputValue == this.state.searchRecord && (
                                    <motion.div
                                        style={{ width: "100%" }}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                        }}
                                    >
                                        <div
                                            className="search_result"
                                            style={{
                                                display: this.state.isResult
                                                    ? "flex"
                                                    : "none",
                                            }}
                                        >
                                            <EvaluationResult
                                                customStyle={{
                                                    marginTop: "0px",
                                                }}
                                                scoreDesc={this.state.scoreDesc}
                                                keyFactors={
                                                    this.state.keyFactors
                                                }
                                                openFeedBack={this.openFeedBack.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                                {this.state.feedBackVisible && this.state.inputValue && this.state.inputValue == this.state.searchRecord && (
                                    <motion.div
                                        className="feedBackBox"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <div className="key_factors_container">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    height: "4.1vh",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img
                                                    src="/headPic.svg"
                                                    className="key_factors_icon"
                                                ></img>
                                                <div className="key_factors_title">
                                                    <span>Address:</span>
                                                    <div
                                                        className="feedback-address"
                                                        value={
                                                            this.state.inputValue
                                                        }
                                                    >
                                                        {this.state.inputValue}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="feedback-top-line">
                                                <div className="feedback-start"></div>
                                            </div>
                                            <div className="feedback-list-ul">
                                                <div className="feedback-top">
                                                    Feedback content:
                                                </div>
                                                <textarea
                                                    onChange={(e) => {
                                                        this.setState({
                                                            textAreaValue:
                                                                e.target.value,
                                                        });
                                                    }}
                                                    value={this.state.textAreaValue}
                                                    placeholder="Please input your feedback content here"
                                                    className="feedback-detail"
                                                ></textarea>
                                                <div className="feedback-buttons">
                                                    <div
                                                        className="feedback-cancel"
                                                        onClick={this.cancel.bind(
                                                            this
                                                        )}
                                                    >
                                                        <span className="feedback-cancel-t">
                                                            Cancel
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="feedback-submit"
                                                        onClick={this.submit.bind(
                                                            this
                                                        )}
                                                    >
                                                        <span className="feedback-submit-t">
                                                            Submit
                                                        </span>
                                                        <div className="feedback-submit-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                {this.state.isError && this.state.inputValue && this.state.inputValue == this.state.searchRecord && (
                                    <motion.div
                                        className="errorBox"
                                        style={{ width: "100%" }}
                                        transition={{duration: 0.8}}
                                    >
                                        <div className="layout_search_error">
                                            <img
                                                src="/search_error.png"
                                                className="img_searcherror"
                                            />
                                            <div className="tx_search_error">404</div>
                                            <div className="tx_search_error2">Not Found</div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                        <div className="footer_bar">
                            <div className="footer_bar_content">
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* <img src="/icon_logo_left.png" style={{width: '12px', height: '12px'}}/> */}
                                    <div
                                        className="footer_text"
                                        style={{ marginLeft: "3px" }}
                                    >
                                        Made by Inferer Labs
                                    </div>
                                </div>
                                <div className="footer_text">
                                    Thanks to PlatON
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .container-box {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            z-index: 1;
                            top: 0;
                            left: 0;
                            overflow: hidden;
                            background: transparent;
                        }
                        .nav_bar {
                            background-color: transparent;
                            width: 100%;
                            height: 93px;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .nav_bar_content {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            // padding-top: 49px;
                            padding: 4.54vh 13.54vw;
                            // background: #6a88ff;
                        }

                        .logo {
                            width: 32px;
                            height: 32px;
                            -webkit-user-drag: none;
                        }
                        .search_bar {
                            width: 100%;
                            opacity: 1 !important;
                        }
                        .nav_bar_content_right {
                            position: relative;
                            display: flex;
                        }
                        select {
                            height: 100%;
                        }
                        .connect_button {
                            width: 210px;
                            height: 44px;
                            background: #6a88ff;
                            box-shadow: 0px 0px 6px #556ae8;
                            border-radius: 7px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            border: none;
                            cursor: pointer;
                        }

                        .title {
                            font-family: "DIN";
                            font-style: normal;
                            font-weight: 700;
                            font-size: 6.2vw;
                            line-height: 13.6vh;
                            text-align: center;
                            letter-spacing: 0.04em;
                            color: #a2a7d4;
                            animation-fill-mode: forwards;
                            transition: opacity 0.25s;
                            margin-bottom: 2.1vh;
                            pointer-events: none;
                        }

                        .subtitle {
                            font-family: "DIN";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 1.5vw;
                            line-height: 3.3vh;
                            text-align: center;
                            letter-spacing: 0.04em;
                            color: #a2a7d4;
                            animation-fill-mode: forwards;
                            transition: opacity 0.25s;
                            pointer-events: none;
                        }
                        .main_content_box {
                            width: 100%;
                            position: absolute;
                            top: 110px;
                            left: 0;
                            bottom: 0;
                            overflow-y: auto;
                        }
                        .search_content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;
                            min-height: calc(100% - 60px - 6.9vh);
                            padding-top: 13.2vh;
                        }

                        .search_bar {
                            animation-fill-mode: forwards;
                            transition: margin-top 0.25s;
                        }

                        .search_result {
                            width: 50vw !important;
                            margin: 0 auto;
                            // overflow: hidden;
                            // display: none;
                            box-shadow: 0px 0px 4px #9fb3ff;
                            // border-radius: 8px;
                            margin-top: 2.4vh;
                        }

                        .footer_bar {
                            width: 100%;
                            height: 60px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            background-color: rgba(0, 0, 0, 0.25);
                            margin-top: 6.9vh;
                            padding: 0 18.6vw;
                        }

                        .footer_bar_content {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }

                        .footer_text {
                            font-family: "Source Han Sans CN";
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 21px;
                            color: rgba(255, 255, 255, 0.8);
                        }
                        .feedBackBox {
                            width: 100%;
                        }
                        .key_factors_icon {
                            width: 1.5vw;
                            height: 1.5vw;
                            margin-right: 13px;
                        }
                        .feedback-content {
                            background-color: #f2f3ff;
                            margin-top: 23px;
                            padding: 34px;
                            box-shadow: 0px 0px 4px #9fb3ff;
                            border-radius: 8px;
                        }
                        .feedback-top-line {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            height: 1px;
                            background-color: #d3dfff;
                            margin-top: 1.2vh;
                            margin-bottom: 3.5vh;
                        }
                        .feedback-start {
                            position: absolute;
                            top: -5px;
                            left: 50%;
                            width: 10px;
                            height: 10px;
                            background: url(/feedback-start.png) no-repeat
                                center;
                            background-size: 100%;
                        }
                        .feedback-list {
                            margin-top: 35px;
                            background: #f2f3ff;
                            padding: 43px 19px 43px 19px;
                            box-shadow: 0px 0px 4px rgba(159, 179, 255, 0.3);
                            border-radius: 8px;
                        }
                        .feedback-list-top {
                            display: flex;
                        }
                        .feedback-list-top-icon {
                            margin-right: 8px;
                            width: 30px;
                            height: 30px;
                            background: url(/feedback-man.png) no-repeat;
                            background-size: 100%;
                        }
                        .feedback-list-top-title {
                            font-family: "DIN";
                            font-style: normal;
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 29px;
                            letter-spacing: 0.02em;
                            color: #727aba;
                        }
                        .feedback-list-ul {
                            height: 36.83vh;
                            position: relative;
                            padding: 1.4vh 1.4vw 2vh 1.1vw;
                            box-shadow: 0px 0px 4px rgba(159, 179, 255, 0.3);
                            border-radius: 8px;
                            background-color: #ffffff;
                        }
                        .feedback-top {
                            font-family: "DIN";
                            font-style: normal;
                            font-weight: 500;
                            font-size: 1.1vw;
                            line-height: 3.3vh;
                            letter-spacing: 0.02em;
                            color: #727aba;
                        }
                        .feedback-detail {
                            margin-top: 11px;
                            width: 100%;
                            height: 23.06vh;
                            padding: 1.7vh 0.6vw 0 1.3vw;
                            background: rgba(238, 238, 238, 0.2);
                            border-radius: 8px;
                            font-family: "Source Han Sans CN";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 1.04vw;
                            line-height: 2.7vh;
                            letter-spacing: 0.02em;
                            color: rgba(0, 0, 0, 0.9);
                            border: transparent;
                            resize: none;
                        }
                        .feedback-buttons {
                          display: flex;
                          justify-content: right;
                          flexDirection: row;
                          margin-top: 1.65vh;
                        }
                        .feedback-submit {
                            // position: absolute;
                            // bottom: 0px;
                            // right: 35px;
                            margin-left: 15px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 6.8vw;
                            min-width: 50px;
                            height: 3.8vh;
                            min-width: 20px;
                            background: #548EFF;
                            border-radius: 4px;
                            cursor: pointer;
                        }
                        .feedback-submit:hover {
                            background: #0057FF;
                        }
                        .feedback-submit-icon {
                            width: 20px;
                            height: 20px;
                            background: url(/feedback-submit.png) no-repeat;
                            background-size: 100%;
                            margin-top: 2px;
                            // align-items: center;
                        }
                        .feedback-submit-t {
                            font-family: "Source Han Sans CN";
                            font-style: normal;
                            font-weight: 500;
                            font-size: 0.9vw;
                            text-align: center;
                            letter-spacing: 0.1em;
                            color: #ffffff;
                            // text-shadow: 0px 0px 4px #618DFF;
                            resize: none;
                        }

                        .feedback-cancel {
                            // position: absolute;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 6.8vw;
                            min-width: 50px;
                            height: 3.8vh;
                            min-width: 20px;
                            background: transparent;
                            border-radius: 4px;
                            border-width: 1px;
                            border-color: #618DFF;
                            border-style: solid;
                            cursor: pointer;
                        }
                        .feedback-cancel:hover {
                            background: #CEDCFF;
                        }
                        .feedback-cancel-t {
                            font-family: "Source Han Sans CN";
                            font-style: normal;
                            font-weight: 500;
                            font-size: 0.9vw;
                            text-align: center;
                            letter-spacing: 0.1em;
                            color: #548EFF;
                            resize: none;
                        }
                        .feedback-cancel-t:hover {
                            color: #6792FF;
                        }
                        .key_factors_container {
                            width: 50vw !important;
                            height: 53.06vh;
                            margin-top: 2.4vh;
                            padding: 3.9vh 1.5vw 3.8vh 1.9vw;
                            background: rgba(255, 255, 255, 0.5);
                            box-shadow: 0px 0px 4px #9fb3ff;
                            border-radius: 8px;
                        }
                        .key_factors_title {
                            display: flex;
                        }

                        .layout_search_error {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;

                            margin-top: 11.2vh
                        }

                        .img_searcherror {
                            width: 12.4vw;
                        }

                        .tx_search_error {
                            color: #727ABA;
                            font-weight: 500;
                            font-size: 2.0vw;
                            line-height: 4.1vh;
                            text-align: center;
                            letter-spacing: 0.02em;
                            font-family: "DIN";
                            font-style: normal;

                            margin-top: 1.17vh
                        }

                        .tx_search_error2 {
                            color: #727ABA;
                            font-weight: 300;
                            font-size: 1.6vw;
                            line-height: 4.1vh;
                            text-align: center;
                            letter-spacing: 0.02em;
                            font-family: "DIN";
                            font-style: normal;

                            margin-top: 1.46vh
                        }

                        .key_factors_title span {
                            font-style: normal;
                            font-weight: 500;
                            font-size: 1.2vw;
                            line-height: 4.1vh;
                            text-align: center;
                            letter-spacing: 0.02em;
                            color: #727aba;
                            font-family: "DIN";
                            font-style: normal;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                        }
                        .feedback-address {
                            font-family: 'DIN';
                            font-style: bold;
                            font-weight: 500;
                            // font-size: 1.6vw;
                            font-size: 1.1vw;
                            line-height: 45px;
                            text-align: center;
                            letter-spacing: 0.08em;
                            color: #727aba;
                            margin-left: 15px;

                            // margin-left: 23px;
                            // font-family: "Source Han Sans CN";
                            // font-style: normal;
                            // font-weight: 400;
                            // font-size: 1vw;
                            // line-height: 36px;
                            // text-align: center;
                            // letter-spacing: 0.02em;
                            // color: #71769d;
                        }
                        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                            color: #999999;
                            opacity: 1; /* Firefox */
                            }

                            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                            color: #999999;
                            }

                            ::-ms-input-placeholder { /* Microsoft Edge */
                            color: #999999;
                        }
                    `}</style>
                    <style global jsx>{`
                        body > div {
                            height: 100%;
                            overflow: hidden;
                            position: relative;
                        }
                        .bgEle {
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            background: linear-gradient(
                                107.56deg,
                                #d5f7ff 0%,
                                #efdbff 100%
                            );
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                        .ethereum_dropdown {
                            background: #ffffff;
                            box-shadow: 0px 0px 4px rgba(85, 106, 232, 0.5);
                            padding: 10px !important;
                            border-radius: 7px;
                        }
                        .ant-select-arrow {
                            color: #6a88ff;
                        }
                        .dropdown_desc {
                            size: 12px;
                            height: 24px;
                            color: #666666;
                            margin-bottom: 5px;
                        }
                        .ant-select-item-option-selected {
                            background: #efefef !important;
                            border-radius: 7px;
                        }
                        .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
                            background: #ffffff;
                        }
                        .self_dropdown_content .ant-select-item-option {
                            min-height: 24px;
                            height: 24px;
                            padding: 0px !important;
                            margin-bottom: 3px;
                        }
                        .self_dropdown_content
                            .ant-select-item-option
                            .ant-select-item-option-content {
                            height: 24px;
                            border-radius: 7px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-left: 7px;
                            padding-right: 7px;
                        }
                        .self_dropdown_content
                            .ant-select-item-option
                            .ant-select-item-option-content
                            div {
                            display: flex;
                            align-items: center;
                        }
                        .ant-select-selector {
                            height: 100%;
                            border: none !important;
                        }
                        .connect_right {
                            width: 164px;
                            height: 44px;
                            margin-right: 20px;
                            background: #ffffff;
                            color: #6a88ff;
                            box-shadow: 0px 0px 4px rgba(85, 106, 232, 0.5);
                            border-radius: 7px;
                            display: flex;
                            align-items: center;
                        }
                        .connect-right-icon {
                            position: absolute;
                            top: 11px;
                            left: 10px;
                            width: 22px;
                            height: 22px;
                            z-index: 9;
                            background: url(/connect-icon.png);
                            background-size: 22px 22px;
                        }
                        .ant-select-selection-item {
                            text-align: center !important;
                        }
                        .ant-select-selector {
                            box-shadow: none !important;
                        }
                        .ant-select-item-option-selected {
                            position: relative;
                        }
                        .ant-select-item-option-selected .select-icon {
                            display: block;
                            background-color: green;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                        }
                        .select-top {
                            display: flex;
                            align-items: center;
                        }
                        .selelt-title {
                            margin-left: 15px;
                        }
                        .select-left {
                            width: 14px;
                            height: 14px;
                            background: url(/connect-icon.png);
                            background-size: 100% auto;
                        }
                    `}</style>
                </div>
            </>
        );
    }
}
