// app.js
import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            inputFocused:false
        };
    }
    onSearch() {
        let text = document.getElementById("query").value;
        this.props.onSearch(text);
    }

    onFocus() {
        // console.log("oncccfocus")
        this.setState({ inputFocused: true });
    }

    onBlur() {
        // console.log("onBlur")
        this.setState({ inputFocused: false });
    }

    CheckBrowserIsIE(evt){
        var result = false; 
        var browser = navigator.appName; 
        if(browser == "Microsoft Internet Explorer"){ 
            result = true; 
        } 
        return result;           
    }

    onKeyDown(e) {
        // console.log(`onKeyDown`)
        var keycode = 0; 
        //IE浏览器 
        if(this.CheckBrowserIsIE()){ 
            keycode = event.keyCode; 
        }else{ 
            keycode = event.key; 
        }
        // console.log(`onKeyDown keycode = ${keycode}`)
        if(keycode == 'Enter') {
            let text = document.getElementById("query").value;
            if(text != "") {
                // console.log(`onKeyDown text empty`)
                this.props.onSearch(text);
            }
        }
    }


    render() {
        return (
            <div className={this.state.inputFocused ? 'bar_focused' : 'bar'} id='bar' style={this.props.inputValue || this.props.feedBackVisible ? {marginTop: 0 } : {}} >
                <img src='/icon_search.svg' className="search_icon"></img>
                <div className='inputBox'>
                    <input
                        value={this.props.inputValue}
                        autoComplete="off"
                        id="query"
                        onInput={()=> {
                            let text = document.getElementById("query").value;
                            this.props.onTextChanged(text);
                        }}
                        onFocus={()=>{
                            this.onFocus()
                        }}
                        onBlur={()=>{
                            this.onBlur()
                        }}
                        onKeyDown={()=>{
                            this.onKeyDown()
                        }}
                        //   placeholder="Search address identity"
                        //   onKeyPress={this.onKeyUp()}
                    ></input>
                </div>
                <div className="search_button" onClick={()=>{
                    this.onSearch()
                }}>
                    SEARCH
                </div>

            <style jsx>{`
          
          .bar {
            width: 50vw!important;
            margin: 6.6vh auto 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 5.8vh;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0px 0px 4px #9FB3FF;
            border-radius: 8px;
          }

          .bar_focused {
            width: 50vw!important;
            margin: 6.6vh auto 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 5.8vh;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 4px #6686FF;
            border-radius: 8px;
            border: solid #9A98E6;
            border-width: 1px 1px;
          }

          .inputBox{
            flex:1;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding-left:5px;
          }

          #query {
            width:100%;
            overflow: hidden;
            float:left;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
            border: none;
            border-color: transparent;
            background: none;
            font-size: 20px;
            color: #71769D;
            outline: none;
          }

          .search_icon {
            width: 1.2vw;
            height: 1.2vw;
            margin-left: 19px;
          }

          .search_button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 8.9vw;
            height: 100%;
            background: #FFFFFF;
            box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.25);
            font-family: 'DIN';
            font-style: bold;
            font-weight: 500;
            font-size: 1.6vw;
            line-height: 45px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #9A98E6;
            cursor: pointer;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          .search_button:hover {
              background:#6A88FF;
              color: #ffffff;
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
            </div>
        )
    }
}

export default SearchBar;
