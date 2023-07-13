import React from 'react'
import './App.css'

class DisplayList extends React.Component {
  constructor(props) {
    super(props)
    // Initialize state
    this.state = {
      input: '',
      list: []
    }
    // Bind this to handleChange() and submitItem()
    this.handleChange = this.handleChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }

  // handleChange()
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }


  // submitItem()
  submitItem() {
    let listArr = [...this.state.list]
    listArr.push(this.state.input)
    this.setState({
      input: '',
      list: listArr
    })
  }

  // Render
  render() {
    const listItem = this.state.list.map(item => <li>{item}</li>)
    return (
      <div className='container'>
        <form className='add-item-form'>
          <h2>Add Item</h2>
          <input
            value={this.props.input}
            onChange={this.handleChange} />
          <button type="button" onClick={this.submitItem}>
            Add Item
          </button>
        </form>
        <ul>
          {listItem}
        </ul>
      </div>
    )
  }
}

export default DisplayList;