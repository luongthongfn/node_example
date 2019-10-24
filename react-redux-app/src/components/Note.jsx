import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleIsCompleteAction } from '../state/actions';
class Note extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
    }
    toggleComplete() {
        let { dispatch } = this.props;
        dispatch(toggleIsCompleteAction(this.props.index));
    }
    render() {
        return (
            <div>
                {!this.props.isComplete ? (
                    this.props.children.text
                ) : (
                    <strike>{this.props.children.text}</strike>
                )}
                <button onClick={this.toggleComplete}>complete</button>
            </div>
        );
    }
}

export default connect(state => ({ isComplete: state.isComplete }))(Note);
