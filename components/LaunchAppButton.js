// app.js
import React from 'react';

export default class LaunchAppButton extends React.Component {

    render() {
        return (
            <div className='container' style={this.props.customStyle} onClick={this.props.onClick}>
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
                    filter: none;
                    width: 100%;
                    height: 100%;
                    background-image: url("/button_color_bg.png");
                    background-size: 100%;
                    animation-fill-mode: forwards;
                    transition: filter 0.5s
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
                    cursor: pointer;
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
                    filter: blur(30px);
                    animation-fill-mode: forwards;
                    transition: filter 0.8s
                  }

                `}</style>
            </div>
        );
    }
}

