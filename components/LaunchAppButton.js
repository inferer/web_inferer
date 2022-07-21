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

                    width: 9.22vw;
                    height: 4.01vw;
                    min-width:77px;
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
                    width: 7.40vw;
                    height: 2.29vw;
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
                    font-size: 0.73vw;
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

