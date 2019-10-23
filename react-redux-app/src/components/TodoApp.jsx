import React, { Component } from 'react';
import {connect} from 'react-redux';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h1>Todo app</h1>
                
                <Form/>
                <List/>
            </div>
        );
    }
}
 
export default TodoApp;