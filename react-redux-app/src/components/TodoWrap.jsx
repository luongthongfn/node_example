import React, { Component } from 'react';
import { connect } from 'react-redux';
// import todoReducer from '../state/reducers/todoReducer';

import Form from './Form';
import List from './List';
class TodoWrap extends Component {
    
    render() {
        return (
            <div>
                <Form />
                <List todo={this.props.todo} />
            </div>
        );
    }
}

export default connect(state => ({ todo: state.todoReducer }))(TodoWrap);
