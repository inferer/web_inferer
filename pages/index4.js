import React from 'react';
import SearchBar from '../components/SearchBar';
import EvaluationResult from '../components/EvaluationResult'

export default class Home extends React.Component {
    constructor() {
        super();
        this.title = React.createRef()
        this.subtitle = React.createRef()
        this.searchBar = React.createRef()
        this.searchResult = React.createRef()
        this.state = {scoreDesc: "EXCEPTIONAL", keyFactors: []};
    }

    random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <div className="container">
        111
                <style jsx>{``}</style>
                <style global jsx>{`
                  body {
                    width: 100%;
                  }
                `}</style>
            </div>
        );
    }
}
