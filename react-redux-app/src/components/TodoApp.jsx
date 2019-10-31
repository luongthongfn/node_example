import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoWrap from './TodoWrap';

import store from '../state/store/storeCfg';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* <h1>Todo asd</h1> */}
                <Provider store={store}>
                    <TodoWrap />
                </Provider>
            </div>
        );
    }
}

export default TodoApp;
