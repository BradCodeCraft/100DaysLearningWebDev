import './App.css';
import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addChange = this.addChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  addChange() {
    const itemsList = this.state.userInput.split(", ")
    this.setState({
      toDoList: itemsList
    })
  }

  render() {
    const items = this.state.toDoList.map(action => <li>{action}</li>);
    return (
      <div className="page">
        <form className='item'>
          <label htmlFor='item'>
            <h2>ADD TO LIST</h2>
          </label>
          <input type='text' id='item' value={this.state.userInput} onChange={this.handleChange} />
          <button type="button" className='btn btn-primary' onClick={this.addChange} >Add</button>
        </form>
        <h2>TO DO</h2>
        <ul onChange={this.handleChange}>
          {items}
        </ul>
      </div>
    )
  }
}


function App() {
  return (
    <Page />
  )
}

export default App;
