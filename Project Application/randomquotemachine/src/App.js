import React from 'react';
import { FaTwitter } from "react-icons/fa";
import './App.css'

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Life is like throwing a dice; you can\'t control the outcome, but you can control which dice to use',
            author: 'unknown',
        };
        this.requestChange = this.requestChange.bind(this);
    }

    requestChange() {
        let quoteDict = fetch("https://type.fit/api/quotes");
        quoteDict.then(response => response.json())
            .then(data => {
                let rng = Math.floor(Math.random() * data.length);
                let dataText = data[rng]['text']
                let author = (data[rng]['author'] == null) ? "unknown" : data[rng]['author']
                this.setState({
                    text: dataText,
                    author: author
                });
            });
        
    }

    render() {
        return (
            <div className='page'>
                <div className='container'>
                    <blockquote id='quote-box'>
                        <h1 id='text'>{this.state.text}</h1>
                        <p id='author'>{this.state.author}</p>
                    </blockquote>
                    <div className='row'>
                        <a id='tweet-quote' href='twitter.com/intent/tweet' target='_top'><FaTwitter /></a>
                        <button className='btn' id='new-quote' onClick={this.requestChange}>New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote;