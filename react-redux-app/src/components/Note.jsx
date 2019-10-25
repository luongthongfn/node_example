import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleIsCompleteAction, removeTodoAction } from '../state/actions';
class Note extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.del = this.del.bind(this);

        this.dispatch = this.props.dispatch;
    }
    toggleComplete() {
        this.dispatch(toggleIsCompleteAction(this.props.index));
    }
    del(index) {
        this.dispatch(removeTodoAction(this.props.index));
    }
    render() {
        return (
            <li>
                {!this.props.isComplete ? (
                    this.props.children.text
                ) : (
                    <strike>{this.props.children.text}</strike>
                )}
                &nbsp; &nbsp; &nbsp;
                <button onClick={this.del}>del</button>
                <button onClick={this.toggleComplete}>complete</button>
            </li>
        );
    }
}

export default connect()(Note);
