// app.js
import React from 'react';

class SearchBar extends React.Component {
    onSearch() {
        let text = document.getElementById("query").value;
        this.props.onSearch(text);
    }

    render() {
        return (
            <div className='bar' style={this.props.customStyle}>
            <img src='/icon_search.svg' className="search_icon"></img>
            <input
                autoComplete="off"
                id="query"
                onInput={()=> {
                    let text = document.getElementById("query").value;
                    this.props.onTextChanged(text);
                }}
                onKeyDown={(e)=> {
                    let keycode = e.keyCode;
                    if (keycode == 13) {
                        this.onSearch()
                    }
                }}
                onFocus={(e)=>{
                    this.props.onFocus();
                }}
                onBlur={(e)=>{
                    this.props.onBlur();
                }}
            ></input>
            <div className="search_button" onClick={()=>{
                this.onSearch()
            }}>
                SEARCH
            </div>

            <style jsx>{`
          .bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 940px;
            height: 76px;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0px 0px 8px #9FB3FF;
            border-radius: 14px;
          }

          #query {
            display: flex;
            height: 100%;
            flex-grow: 1;
            border: none;
            border-color: transparent;
            background: none;
            font-size: 30px;
            outline: none;
            margin-left: 19px;
          }

          .search_icon {
            width: 35px;
            height: 35px;
            margin-left: 19px;
          }

          .search_button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 172px;
            height: 76px;
            background: #FFFFFF;
            box-shadow: 0px 0px 8px rgba(159, 179, 255, 0.25);
            border-radius: 14px;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 45px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #9A98E6;
          }
        `}</style>
            </div>
        )
    }
}

export default SearchBar;
