import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleIsCompleteAction, removeTodoAction } from '../state/actions';

import List from './List';
class Note extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.del = this.del.bind(this);
        this.addChild = this.addChild.bind(this);

        this.dispatch = this.props.dispatch;
    }
    toggleComplete() {
        this.dispatch(toggleIsCompleteAction(this.props.index));
    }
    del(index) {
        this.dispatch(removeTodoAction(this.props.index));
    }
    addChild(){}
    render() {
        return (
            <li>
                {!this.props.isComplete ? (
                    this.props.children.text + this.props.isComplete
                ) : (
                    <strike>{this.props.children.text + this.props.isComplete}</strike>
                )}
                &nbsp; &nbsp; &nbsp;
                <button onClick={this.del}>del</button>
                <button onClick={this.toggleComplete}>complete</button>
                <button onClick={this.addChild}>add child</button>

                {this.props.todo && <List todo={this.props.todo}/> }
            </li>
        );
    }
}

export default connect()(Note);
