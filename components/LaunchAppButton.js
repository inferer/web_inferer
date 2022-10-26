// app.js
import React from 'react';

export default class LaunchAppButton extends React.Component {

    render() {
        return (
            // onClick={this.props.onClick}
            <div className='container' style={this.props.customStyle}>
                <div className='color_bg'></div>
                <a className='button' target="_blank" href="/app">
                    <div className='button_text'>LAUNCH APP</div>
                </a>


                <style jsx>{`
                  .container {
                    width: 30%;
                    height: 77px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }

                  .color_bg {
                    filter: none;
                    width: 177px;
                    height: 100%;
                    background-image: url("/button_color_bg.png");
                    background-size: 100%;
                    animation-fill-mode: forwards;
                    transition: filter 0.5s;
                    background-repeat:no-repeat;
                    background-position: center center;
                  }

                  .button {
                    position: absolute;
                    width: 137px;
                    height: 40px;
                    border-radius: 5px;
                    background-color: #121422;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                  }

                  .button:hover {
                    background-color: #1F2143;
                  }

                  .button_text {
                    font-family: 'Source Han Sans CN';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 1.2rem;
                    letter-spacing: 0.02em;
                    color: white;
                    pointer-events: none
                  }

                  .container:hover .color_bg {
                    filter: blur(30px);
                    animation-fill-mode: forwards;
                    transition: filter 0.8s
                  }

                  @media (max-width:480px){

                  .button {
                    width: 92px;
                    height: 26px;
                  }
                  .button_text {
                    font-size: 0.8rem;
                  }
                }

                `}</style>
            </div>
        );
    }
}

