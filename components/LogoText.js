// app.js
import React from 'react';
import LazyImage from './LazyImage';

export default ({ text, customStyle }) => (
    <div className='container' style={customStyle}>
        {/* <img src='/icon_logo_left.png' className="left_img"></img> */}
        <LazyImage src='/icon_logo_left.png' className="w-[31px] h-[31px]" />
        <div className="text">{text}</div>
        {/* <img src='/icon_logo_right.png' className="right_img"></img> */}
        <LazyImage src='/icon_logo_right.png' className="w-[31px] h-[31px]" />

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
            font-family: 'D-DIN-Normal';
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
