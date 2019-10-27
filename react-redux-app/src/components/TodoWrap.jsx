import React, { Component } from 'react';

// import todoReducer from '../state/reducers/todoReducer';

import Form from './Form';
import List from './List';
class TodoWrap extends Component {
    
    render() {
        return (
            <div>
                <Form />
                <List/>
            </div>
        );
    }
}

export default TodoWrap;
