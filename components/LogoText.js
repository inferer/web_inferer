// app.js
import React from 'react';

export default ({ text, customStyle }) => (
    <div className='container' style={customStyle}>
        <img src='/icon_logo_left.png' className="left_img"></img>
        <div className="text">{text}</div>
        <img src='/icon_logo_right.png' className="right_img"></img>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          
          .left_img {
            width: 31px;
            height: 31px;
          }
          
          .right_img {
            width: 31px;
            height: 31px;
          }
          
          .text {
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            color: white;
            margin-left: 20px;
            margin-right: 20px;
            justify-self: center;
          }
        `}</style>
    </div>
);
