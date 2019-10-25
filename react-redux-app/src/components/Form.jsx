import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../state/actions';
class Form extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        let { dispatch } = this.props;
        dispatch(addTodoAction(this.refs.newTodo.value));
    }
    render() {
        return (
            <div>
                <input type="text" ref="newTodo" />
                <button onClick={this.addTodo}>add</button>
            </div>
        );
    }
}

export default connect()(Form);
