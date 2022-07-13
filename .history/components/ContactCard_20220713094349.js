// app.js
import React from 'react';

export default ({ title, subtitle, icon, customStyle }) => (
    <div className='container' style={customStyle}>
        <img src={icon} className='icon'></img>
        <div style={{marginLeft: '16px'}}>
            <div className='title'>{title}</div>
            <div>
                <div className='subtitle'>{subtitle}</div>
            </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #0A0917;
            border-radius: 15px;
            width: 573px;
            height: 146px;
          }
          
          .icon {
            margin-left: 10%;
            width: 58px;
            height: 59px;
          }
          
          .text_container {
            display: flex;
            flex-direction: column;
            margin-left: 16px;
          }
          
          .title {
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 33px;
            color: #FFFFFF;
          }
          
          .subtitle {
            margin-top: 4px;
            font-family: 'Source Han Sans CN';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: #FFFFFF;
          }
          
          .arrow {
            width: 10px;
            height: 10px;
          }
          // @media (max-width:968px) {
          //   .container {
          //     width: 373px !important;
          //     height: 126px;
          //   }
          //  }
        `}</style>
    </div>
);
