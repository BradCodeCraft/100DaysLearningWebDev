import React from 'react';
import './App.css'

function App() {  
  return (
    <div className='App'> 
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor='item'>
            <h2>New Item</h2>
          </label>
          <input type="text" id='item'/>
        </div>
        <button className='btn add'>Add</button>
      </form>
      <h1>To Do List</h1>
      <ul className='list'>
        <li>
          <input type='checkbox' id='check'/>
          Test
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default App;

class testApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    } 

    this.handleChange = this.handleChange.bind(this)
  }

}