import React, {useState} from 'react';
import "./App.css";
import ReactMarkdown from "react-markdown";


const App = () => {
  const [markdownText, setMarkdownText] = useState('');
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

  return (
    <div className='container'>
      <span
        className='editor-container'
      >
        <h1
          id='header'
        >
          Editor
        </h1>
        <textarea
          id='editor'
          value={markdown}
        >
        </textarea>
      </span>
      <span
        className='preview-container'
      >
        <h1
          id='header'
        >
          Previewer
        </h1>
        <div
          id='preview'
        >
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </span>
    </div>
  )
}

export default App;