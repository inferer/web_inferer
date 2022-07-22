// app.js
import React from 'react';
import {Tooltip} from 'antd';
import axios from 'axios'
import router from "next/router";

class EvaluationResult extends React.Component {
  constructor() {
    super();
    this.state = { 
      activeIndex: []
    };
  }

  initRate(scoreDesc) {
      console.log(`scoreDesc = ${scoreDesc}`)
    var nums = 0;
    switch(scoreDesc)
    {
      case "Poor":
        return <img src="/rate_poor.png" className="img_rate_result"></img>
      case "Fair":
        return <img src="/rate_fair.png" className="img_rate_result"></img>
      case "Good":
        return <img src="/rate_good.png" className="img_rate_result"></img>
      case "Very good":
          console.log(`------verygood = ${scoreDesc}`)
        return <img src="/rate_verygood.png" className="img_rate_result"></img>
      case "Exceptional":
        return <img src="/rate_excellent.png" className="img_rate_result"></img>
    }

    return "";
  }
  
  clickHandle(index) {
    let arr = [...this.state.activeIndex]
    if(arr.indexOf(index) == -1) {
      arr.push(index)
    }else {
      let i = arr.indexOf(index);
      arr.splice(i, 1)
    }
    this.setState({activeIndex: arr})
  }
  copyHandle(context) {
    event.stopPropagation();
    let input = document.createElement('input');
    input.value = context;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
  }

  render() {
      return (
          <div className='container' style={this.props.customStyle}>
            <div>

              {/* <div className="title_dividing_line"></div> */}
              <div className='connect-top'>
                <div className="title">EVALUATION TICKET</div>
                <div className='connect-top-line'></div>
                <div className="rate_container">
                  {this.initRate(this.props.scoreDesc)}
                </div>
              </div>
              {/* <img className="score_icon" src={this.scoreImageURL()}></img> */}
              {/* <div className={this.scoreDescStyle()}>{this.props.scoreDesc}</div> */}

              <div className="key_factors_container">
                  <div style={{display: "flex", flexDirection: "row", height: "80px", alignItems: "center"}}>
                      <img src="/icon_keey_factor.svg" className="key_factors_icon"></img>
                      <div className="key_factors_title">Key Factors</div>
                  </div>

                  <div className="key_factors_list_container">
                      {
                          this.props.keyFactors.map((keyFactor, index) => {
                              if(typeof(keyFactor.value) == "string" ) {
                                return (
                                    <div key={index} className='key_factors_item_style stringType' style={{background: index%2 == 0 ? "#F0F2FF" : "#FFFFFF"}}>
                                        <img src="/round.svg" className="key_factors_item_icon"></img>
                                        <div className="key_factors_item_title">
                                          <div>{keyFactor.key}</div>
                                          <div>{keyFactor.value}</div>
                                        </div>
                                    </div>
                                )
                              }else{
                                let arr = [];
                                for(let key in keyFactor.value) {
                                  arr.push({key: key, value: keyFactor.value[key]});
                                }
                                return (
                                  <div key={index} className='key_factors_item_style objectType' style={{background: index%2 == 0 ? "#F0F2FF" : "#FFFFFF"}}>
                                      <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: 62,
                                        }}
                                        onClick={this.clickHandle.bind(this, index)}>
                                      {this.state.activeIndex.indexOf(index) != -1 ? (
                                        <img src="/down.png" className="key_factors_item_icon"></img>
                                      ) : (
                                        <img src="/icon_keyfactor_item.svg" className="key_factors_item_icon"></img>
                                      )}
                                        <div className="key_factors_item_title">{keyFactor.key}</div>
                                      </div>
                                      {this.state.activeIndex.indexOf(index) != -1 ? <div>
                                        {arr.map((item,subindex) => {
                                          if(item.key == 'Top 3 Interacted Address') {
                                            let list = item.value.split(',');
                                            return (
                                              <>
                                            {     list.map((item, splitindex) => {
                                                  return (
                                                    <div key={splitindex} className="subInfo" style={{background: splitindex%2 == 1 ? "#F6FDFF" : "#EDFBFF"}}>
                                                      <div>{splitindex == 0 ? 'Top 3 Interacted Address' : ''}</div>
                                                      <div className='rightContent'>
                                                        <Tooltip title={item}><span className='addSpan'>{item}</span></Tooltip>
                                                        <span><img src="/copy.svg" className='copySpan' onClick={this.copyHandle.bind(this, item)}></img></span>
                                                      </div>
                                                    </div>
                                                  )
                                                })}
                                              </>
                                            )
                                          }else if(item.key == 'Contributed Projects') {
                                            let list = item.value.split(',');
                                            if(item.value.indexOf('and more') != -1) {
                                              return (
                                                <>
                                                  {list.map((item, splitindex) => {
                                                    return (
                                                      <div key={splitindex} className="subInfo" style={{background: splitindex%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                        <div>{splitindex == 0 ? 'Contributed Projects' : ''}</div>
                                                        <div className='rightContent'>
                                                          <span className='addSpan'>{item}</span>
                                                        </div>
                                                      </div>
                                                    )
                                                  })}
                                                  <div key={index} className="subInfo" style={{background: index%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                    <div></div>
                                                    <div>......</div>
                                                  </div>
                                                </>
                                              )
                                            }else {
                                              return (
                                                <>
                                                  {list.map((item, splitindex) => {
                                                    return (
                                                      <div key={splitindex} className="subInfo" style={{background: splitindex%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                        <div>{splitindex == 0 ? 'Interacted Addresses' : ''}</div>
                                                        <div className='rightContent'>
                                                          <Tooltip title={item}><span className='addSpan'>{item}</span></Tooltip>
                                                          <span><img src="/copy.svg" className='copySpan' onClick={this.copyHandle.bind(this, item)}></img></span>
                                                        </div>
                                                      </div>
                                                    )
                                                  })}
                                                </>
                                              )
                                            }
                                          }else if(item.key == 'Interacted Addresses') {
                                            let list = item.value.split(',');
                                            if(item.value.indexOf('and more') != -1) {
                                              return (
                                                <>
                                                  {list.map((item, splitindex) => {
                                                    return (
                                                      <div key={splitindex} className="subInfo" style={{background: splitindex%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                        <div>{splitindex == 0 ? 'Interacted Addresses' : ''}</div>
                                                        <div className='rightContent'>
                                                          <Tooltip title={item}><span className='addSpan'>{item}</span></Tooltip>
                                                          <span><img src="/copy.svg" className='copySpan' onClick={this.copyHandle.bind(this, item)}></img></span>
                                                        </div>
                                                      </div>
                                                    )
                                                  })}
                                                  <div key={index} className="subInfo" style={{background: index%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                    <div></div>
                                                    <div>......</div>
                                                  </div>
                                                </>
                                              )
                                            }else {
                                              return (
                                                <>
                                                  {list.map((item, splitindex) => {
                                                    return (
                                                      <div key={splitindex} className="subInfo" style={{background: splitindex%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                        <div>{splitindex == 0 ? 'Interacted Addresses' : ''}</div>
                                                        <div className='rightContent'>
                                                          <Tooltip title={item}><span className='addSpan'>{item}</span></Tooltip>
                                                          <span><img src="/copy.svg" className='copySpan' onClick={this.copyHandle.bind(this, item)}></img></span>
                                                        </div>
                                                      </div>
                                                    )
                                                  })}
                                                </>
                                              )
                                            }
                                          }else if(item.key == 'Interacted Count') {
                                              return (
                                                <div key={index} className="subInfo" style={{background: "#F6FDFF"}}>
                                                    <div>{item.key}</div>
                                                    <div>{item.value}</div>
                                                </div>
                                              )
                                          }else {
                                            return (
                                              <div key={subindex} className="subInfo" style={{background: subindex%2 == 0 ? "#F6FDFF" : "#EDFBFF"}}>
                                                <div>{item.key}</div>
                                                <div>{item.value}</div>
                                              </div>
                                            )
                                          }
                                        })}
                                      </div> : null}
                                  </div>
                              )
                              }
                              
                          })
                      }
                  </div>

                  <div style={{display: "flex", justifyContent: "flex-end", }}>
                      <button className="feedback" onClick={()=>{
                            this.props.openFeedBack();
                          }}>Incorrect? Feedback us</button>
                  </div>
              </div>
            </div>
              


              <style jsx>{`

                .container {
                //   position: relative;
                  width: 100%;
                //   padding:5px;
                }
                .container>div{
                  background: rgba(255, 255, 255, 0.5);
                  box-shadow: 0px 0px 4px #9FB3FF;
                  border-radius: 8px;
                  display: flex;
                  flex-direction: column;
                }
                .star{
                  width: 28px;
                  height: 25px;
                }
                .in-start{
                  width: 28px;
                  height: 25px;
                  background: url(/in-start.png) no-repeat;
                  background-size: 100%;
                }
                .on-start{
                  width: 28px;
                  height: 25px;
                  background: url(/on-start.png) no-repeat;
                  background-size: 100%;
                }
                .start-one{
                  width: 28px;
                  height: 25px;
                  background: url(/start-one.png) no-repeat;
                  background-size: 100%;
                }
                .start-two{
                  width: 28px;
                  height: 25px;
                  background: url(/start-two.png) no-repeat;
                  background-size: 100%;
                }
                .start-three{
                  width: 28px;
                  height: 25px;
                  background: url(/start-three.png) no-repeat;
                  background-size: 100%;
                }
                .start-four{
                  width: 28px;
                  height: 25px;
                  background: url(/start-four.png) no-repeat;
                  background-size: 100%;
                }
                .start-five{
                  width: 28px;
                  height: 25px;
                  background: url(/start-five.png) no-repeat;
                  background-size: 100%;
                }

                .title {
                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 30px;
                  line-height: 37px;
                  text-align: left;
                  letter-spacing: 0.02em;
                  color: #727ABA;
                //   margin-left: 51px;
                  margin-top: 60px;
                }
                .subInfo{
                  width: 100%;
                  height: 62px;
                  padding:0 21px 0 41px;
                  display: flex;
                  align-items:center;
                  font-size: 16px;
                  color: #666666;
                  width: 100%;
                  justify-content: space-between;
                  cursor: text;
                }
                .subInfo:hover {
                    background: #000000;
                    color: #000000;
                }

                .rightContent{
                  display: flex;
                  align-items: center;
                }
                .addSpan{
                  width: 125px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .copySpan{
                  color: rgb(0, 0, 0);
                  width: 14px;
                  height: 14px;
                  margin-left: 16px;
                  cursor: pointer;
                }
                .title_dividing_line {
                  width: 411px;
                  height: 0px;
                  border: 1px solid #D3DFFF;
                  margin-left: 52px;
                  margin-top: 30px;
                }
                .connect-top-line{
                  width: 406px;
                  height: 4px;
                  background: url(/line.png) no-repeat;
                  background-size: 100%;
                  margin-top: 11px;
                  margin-bottom: 19px;
              }

                .score_icon {
                  position: absolute;
                  width: 362.13px;
                  height: 268px;
                  right: 0px;
                  top: 0px;
                }

                .score_desc_exceptional {
                  position: absolute;
                  right: 24px;
                  top: 54px;
                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 39px;
                  /* identical to box height */
                  text-align: center;
                  background: linear-gradient(90deg, #52A7AA 2.91%, #54ACAF 91.57%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;

                  text-shadow: 0px 0px 6px #FFFFFF;
                }

                .score_desc_verygood {
                  position: absolute;
                  right: 58px;
                  top: 54px;

                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 39px;
                  /* identical to box height */
                  text-align: center;
                  background: linear-gradient(90deg, #3587B6 2.91%, #4E99CF 91.57%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;

                  text-shadow: 0px 0px 6px #FFFFFF;
                }

                .score_desc_good {
                  position: absolute;
                  right: 102px;
                  top: 54px;

                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 39px;
                  /* identical to box height */
                  text-align: center;
                  background: linear-gradient(90deg, #4E6ACF 2.91%, #3C77CF 91.57%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;

                  text-shadow: 0px 0px 6px #FFFFFF;
                }

                .score_desc_fair {
                  position: absolute;
                  right: 109px;
                  top: 54px;

                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 39px;
                  /* identical to box height */
                  text-align: center;
                  background: linear-gradient(90deg, #FFC49A 2.91%, #FFC27B 91.57%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;

                  text-shadow: 0px 0px 6px #FFFFFF;
                }

                .score_desc_poor {
                  position: absolute;
                  right: 104px;
                  top: 54px;

                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 39px;
                  /* identical to box height */
                  text-align: center;
                  background: linear-gradient(90deg, #FD8F8F 2.91%, #F37777 91.57%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;

                  text-shadow: 0px 0px 6px #FFFFFF;
                }

                .key_factors_container {
                  margin-top: 39px;
                  margin-left: 35px;
                  margin-right: 35px;
                  margin-bottom: 35px;
                  background: rgba(255, 255, 255, 0.5);
                  box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.3);
                  border-radius: 8px;
                }

                .key_factors_icon {
                  margin-left: 18px;
                  width: 28px;
                  height: 28px;
                }

                .img_rate_result {
                  margin: 0 auto;
                  width: 9.84vw;
                  -webkit-user-drag: none;
                }

                .key_factors_title {
                  margin-left: 6px;
                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 29px;
                  letter-spacing: 0.02em;
                  color: #727ABA;
                }

                .key_factors_list_container {
                  background: #F0F2FF;
                  border-radius: 8px;
                  margin-left: 51px;
                  margin-right: 36px;
                }

                .key_factors_item_icon {
                  width: 14px;
                  height: 14px;
                  margin-left: 16px;
                }

                .key_factors_item_title {
                  font-family: 'DIN';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: 0.02em;
                  color: #666666;
                  margin-left: 11px;
                  margin-right:21px;
                  flex:1;
                  display: flex;
                  align-items:center;
                  justify-content: space-between;
                }
                .key_factors_item_style:first-child{
                  border-radius: 8px 8px 0px 0px;
                }
                .key_factors_item_style:last-child{
                  border-radius: 0px 0px 8px 8px;
                }

                .key_factors_item_style {
                  display: flex;
                  flexDirection: row;
                  align-items: center;
                }


                .key_factors_item_style.stringType{
                  height:60px;
                  display: flex;
                  align-items: center;
                  &>div{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                }

                .key_factors_item_style.objectType{
                  display: block;
                  cursor: pointer;
                }

                .feedback {
                  font-family: 'DIN';
                  background-color: transparent; 
                  border: none;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  /* identical to box height */
                  text-align: center;
                  letter-spacing: 0.02em;
                  color: rgba(107, 104, 255, 0.5);
                  margin-top: 14px;
                  margin-right: 46px;
                  margin-bottom: 13px;
                  cursor: pointer;
                }

              `}</style>
                <style global jsx>{`
                body {
                  width: 100%;
                  background-color: #0d0b17;
                }
                .connect-top{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }
              .rate_container{
                display:flex;
              }
                .in-start{
                  width: 28px;
                  height: 25px;
                  background: url(/in-start.png) no-repeat;
                  background-size: 100%;
                }
                .on-start{
                  width: 28px;
                  height: 25px;
                  background: url(/on-start.png) no-repeat;
                  background-size: 100%;
                }
                .start-one{
                  width: 28px;
                  height: 25px;
                  background: url(/start-one.png) no-repeat;
                  background-size: 100%;
                }
                .start-two{
                  width: 28px;
                  height: 25px;
                  background: url(/start-two.png) no-repeat;
                  background-size: 100%;
                }
                .start-three{
                  width: 28px;
                  height: 25px;
                  background: url(/start-three.png) no-repeat;
                  background-size: 100%;
                }
                .start-four{
                  width: 28px;
                  height: 25px;
                  background: url(/start-four.png) no-repeat;
                  background-size: 100%;
                }
                .start-five{
                  width: 28px;
                  height: 25px;
                  background: url(/start-five.png) no-repeat;
                  background-size: 100%;
                }
              `}</style>
          </div>
      )
  }
}

export default EvaluationResult;
