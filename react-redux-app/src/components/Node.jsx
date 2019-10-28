import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleIsCompleteAction, removeTodoAction } from '../state/actions';

export class Node extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.del = this.del.bind(this);
        this.addChild = this.addChild.bind(this);

        this.dispatch = this.props.dispatch;
        console.log(`props ${this.props.id}: `, props);
    }
    toggleComplete() {
        this.dispatch(toggleIsCompleteAction(this.props.id));
    }
    del(id, parentId) { 
        this.dispatch(removeTodoAction(this.props.id ));
    }
    addChild() {}
    render() {
        let { id, text, isComplete, childs } = this.props;

        return (
            <>
                {id !== 0 && (
                    <>
                        {isComplete ? (
                            <strike>{text + isComplete}</strike>
                        ) : (
                            text + isComplete
                        )}
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={this.del}>del</button>
                        <button onClick={this.toggleComplete}>
                            complete
                        </button>
                        <button /* onClick={this.addChild} */>add child</button>
                        
                    </>
                )}

                {childs && childs.length > 0 && (
                    <ul>
                        {childs.map((childId, i) => (
                            <li key={i}>
                                <ConnectedNode id={childId} parentId={id} />
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

const ConnectedNode = connect(
    (state, ownProps) => state.todoReducer[ownProps.id]
)(Node);

export default ConnectedNode;
