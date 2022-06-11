// index.js
import React from 'react';

export default ({ text, customStyle }) => (

    <div className='container' style={customStyle}>
        <div className='color_bg'></div>
        <div className='button'>
            <div className='button_text'>LAUNCH APP</div>
        </div>


        <style jsx>{`
          .container {
            width: 177px;
            height: 77px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .color_bg {
            width: 100%;
            height: 100%;
            background-image: url("/button_color_bg.png");
            background-size:100%;
          }
          
          .button {
            position: absolute;
            width: 142px;
            height: 44px;
            border-radius: 5px;
            background-color: #121422;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none
          }
          
          .button_text {
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 0.02em;
            color: white;
            pointer-events: none
          }
          
          .container:hover .color_bg {
            filter: blur(20px);
          }
          
        `}</style>
    </div>
);
