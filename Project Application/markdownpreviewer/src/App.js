import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import "./App.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
      
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:
      
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.

  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:`
      
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    })
  }
  render() {
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
            value={this.state.markdown}
            onChange={this.handleChange}
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
            <ReactMarkdown
              children={this.state.markdown}
            />
          </div>
        </span>
      </div>
    )
  }
}




const App = () => {

  return (
    <Container />
  )
}

export default App;