// app.js
import React from 'react';

class SearchBar extends React.Component {
    onSearch() {
        let text = document.getElementById("query").value;
        this.props.onSearch(text);
    }

    render() {
        return (
            <div className='bar' style={this.props.inputValue || this.props.feedBackVisible ? {marginTop: 0 } : {}} >
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
              ></input>
            </div>
            <div className="search_button" onClick={()=>{
                this.onSearch()
            }}>
                SEARCH
            </div>

            <style jsx>{`
          
          .bar {
            width: 49vw!important;
            margin: 6.6vh auto 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 7vh;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0px 0px 8px #9FB3FF;
            border-radius: 14px;
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
            border-radius: 14px;
            font-family: 'DIN';
            font-style: normal;
            font-weight: 700;
            font-size: 1.6vw;
            line-height: 45px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #9A98E6;
            cursor: pointer;
          }
        `}</style>
            </div>
        )
    }
}

export default SearchBar;
