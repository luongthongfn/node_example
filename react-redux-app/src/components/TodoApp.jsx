import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Form from './Form';
import List from './List';
import store from '../state/store/storeCfg';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Todo asd</h1>
                <Provider store={store}>
                    <Form />
                    <List />
                </Provider>
            </div>
        );
    }
}

export default TodoApp;
