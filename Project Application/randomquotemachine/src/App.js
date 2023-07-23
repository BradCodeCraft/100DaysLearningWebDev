import React, { useState, useEffect} from 'react';
import './App.css'

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        let rng = Math.floor(Math.random() * data.length);
        setQuotes(data[rng]);
      })
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className='app'>
      <div className='container'>
        <blockquote
          id='quote-box'
        >
          <p 
            id='text'
          >
            {quotes.text}
          </p>
          <p id='author'>
            - {quotes.author}
          </p>
        </blockquote>
        <span className='btn-container'>
          <a
            className='btn'
            id='tweet-quote'
            target='_blank'
            href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
            rel='noopener noreferrer'
          >
            Twitter
          </a>
          <button
            onClick={getQuote}
            className='btn'
          >
            New Quote
          </button>
        </span>
      </div>
    </div>
  )
}

export default App;