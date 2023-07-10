import React from 'react';

class toDoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            listArray: []
        }

    }

    // Handle Changes
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
}