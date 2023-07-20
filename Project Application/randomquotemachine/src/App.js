import React from 'react';
import './App.css'

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: '',
        };
        this.requestChange = this.requestChange.bind(this);
    }

    requestChange() {
        let quoteDict = fetch("https://type.fit/api/quotes");
        quoteDict.then(response => response.json())
            .then(data => {
                let rng = Math.floor(Math.random() * data.length);
                this.setState({
                    text: data[rng]['text'],
                    author: data[rng]['author']
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
                        <a id='tweet-quote' href='twitter.com/intent/tweet'>Twitter</a>
                        <button className='btn' id='new-quote' onClick={this.requestChange}>New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote;