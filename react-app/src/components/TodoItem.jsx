import React, { Component } from 'react';
class TodoItem extends Component {
    render() { 
        return (
            <li>
                {this.props.text}
                <button onClick={this.props.delete}>del</button>
            </li>
        );
    }
}
 
export default TodoItem;