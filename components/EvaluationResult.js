// app.js
import React from 'react';
import axios from 'axios'
import router from "next/router";

class EvaluationResult extends React.Component {
    scoreImageURL() {
        switch (this.props.scoreDesc) {
            case "EXCEPTIONAL":
                return "/icon_evaluation_exceptional.svg"
                break
            case "Very Good":
                return "/icon_evaluation_verygood.svg"
                break
            case "Good":
                return "/icon_evaluation_good.svg"
                break
            case "Fair":
                return "/icon_evaluation_fair.svg"
                break
            case "Poor":
                return "/icon_evaluation_poor.svg"
                break
            default:
                return ''
        }
    }

    scoreDescStyle() {
        switch (this.props.scoreDesc) {
            case "EXCEPTIONAL":
                return "score_desc_exceptional"
                break
            case "Very Good":
                return "score_desc_verygood"
                break
            case "Good":
                return "score_desc_good"
                break
            case "Fair":
                return "score_desc_fair"
                break
            case "Poor":
                return "score_desc_poor"
                break
            default:
                return ''
        }
    }
    result = [
      'Participate PoAP activity',
      'Initial transaction timestamp is 2020/05/21',
      'Participate PoAP activity',
      'Participate PoAP activity',
    ]

    // initRate(nums) {
    //   const expresses = [
    //     {rate: "/on-start.png", choose: true,},
    //     {rate: "/on-start.png", choose: true},
    //     {rate: "/on-start.png", choose: true},
    //     {rate: "/on-start.png", choose: false},
    //     {rate: "/on-start.png", choose: false},
    //   ]
    //   for(let i=0;i< nums;i++){
    //     for(let itme of expresses) {
    //       itme.choose = true;
    //     }
    //   }
    //   return expresses.map((value,index)=>{
    //     return <div key={index+2} className={ value.choose ? 'on-start':  'in-start' } onClick={()=>{
    //       if(value.choose){
    //         value.choose = false
    //       } else {
    //         value.choose = true
    //       }
    //     }}></div>
    //   })
    // }

    initRate(scoreDesc) {
      var nums = 0;
      switch(scoreDesc)
      {
        case "Poor":
          nums = 1;
          break;
        case "Fair":
          nums = 2;
          break;
        case "Good":
          nums = 3;
          break;
        case "Very Good":
          nums = 4;
          break;
        case "EXCEPTIONAL":
          nums = 5;
          break;
      }
      const expresses = [
        {rate: "/on-start.png", choose: true,},
        {rate: "/on-start.png", choose: true},
        {rate: "/on-start.png", choose: true},
        {rate: "/on-start.png", choose: false},
        {rate: "/on-start.png", choose: false},
      ]
      for(let i=0;i< nums;i++){
        for(let itme of expresses) {
          itme.choose = true;
        }
      }
      var i = 0;
      for (let itme of expresses) {
          if (i++ < nums){
            itme.choose = true;
          }else{
            itme.choose = false;
          }
      }
      var level = '';
      switch(nums)
      {
        case 1:
          level = 'start-one';
          break;
        case 2:
          level = 'start-two';
          break;
        case 3:
          level = 'start-three';
          break;
        case 4:
          level = 'start-four';
          break;
        case 5:
          level = 'start-five';
          break;
      }
      return expresses.map((value,index)=>{
        return <div key={index+2} className={ value.choose ? level : 'in-start' } onClick={()=>{
          if(value.choose){
            value.choose = false
          } else {
            value.choose = true
          }
        }}></div>
      })
    }
  

    render() {
        return (
            <div className='container' style={this.props.customStyle}>
               
                {/* <div className="title_dividing_line"></div> */}
                <div className='connect-top'>
                <div className="title">Evaluation Result</div>
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
                                return (
                                    <div key={index} className='key_factors_item_style' style={{background: index%2 == 0 ? "#F0F2FF" : "#FFFFFF"}}>
                                        <img src="/icon_keyfactor_item.svg" className="key_factors_item_icon"></img>
                                        <div className="key_factors_item_title">{keyFactor}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div style={{display: "flex", justifyContent: "flex-end", }}>
                        <button className="feedback" onClick={()=>{
                              router.push('/feedback')
                            }}>Incorrect? Feedback us</button>
                    </div>
                </div>


                <style jsx>{`

                  .container {
                    position: relative;
                    width: 942px;
                    background: rgba(255, 255, 255, 0.5);
                    box-shadow: 0px 0px 8px #9FB3FF;
                    border-radius: 14px;
                    display: flex;
                    flex-direction: column;
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
                    margin-left: 51px;
                    margin-top: 60px;
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
                    border-radius: 14px;
                  }

                  .key_factors_icon {
                    margin-left: 18px;
                    width: 28px;
                    height: 28px;
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
                    border-radius: 16px;
                    margin-left: 51px;
                    margin-right: 36px;
                  }

                  .key_factors_item_icon {
                    width: 14px;
                    height: 14px;
                    margin-left: 16px;
                  }

                  .key_factors_item_title {
                    font-family: 'Source Han Sans CN';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.02em;
                    color: #999999;
                    margin-left: 11px;
                  }

                  .key_factors_item_style {
                    height: 60px;
                    display: flex;
                    flexDirection: row;
                    align-items: center;
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
                  @media (max-width:1280px) {
                    .container{
                        min-width:700px !important;
                        width:700px !important;
                     }
                  @media (max-width:768px) {
                   .container{
                      min-width:320px !important;
                      width:320px !important;
        
                  }
                `}</style>
            </div>
        )
    }
}

export default EvaluationResult;
