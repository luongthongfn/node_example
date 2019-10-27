import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleIsCompleteAction, removeTodoAction } from '../state/actions';

import List from './List';
class Node extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.del = this.del.bind(this);
        this.addChild = this.addChild.bind(this);

        this.dispatch = this.props.dispatch;
        console.log('props: ', props)
    }
    toggleComplete() {
        this.dispatch(toggleIsCompleteAction(this.props.index));
    }
    del(index) {
        this.dispatch(removeTodoAction(this.props.index));
    }
    addChild() {}
    render() {
        let { id, text, isComplete, childs } = this.props;
        return (
            <ul>
                <li>
                    {isComplete ? (
                        text + isComplete
                    ) : (
                        <strike>{text + isComplete}</strike>
                    )}
                    &nbsp; &nbsp; &nbsp;
                    <button /* onClick={this.del} */>del</button>
                    <button /* onClick={this.toggleComplete} */>complete</button>
                    <button /* onClick={this.addChild} */>add child</button>
                    {this.props.todo && <List todo={this.props.todo} />}
                </li>
            </ul>
        );
    }
}

export default connect((state, ownProps) => (state.todoReducer[ownProps.id]))(Node)
