import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
class List extends Component {
    render() {
        return (
            <ul>
                {this.props.todo.map((item, i) => {
                    return (
                        <Note key={i} index={i} isComplete={item.isComplete}>
                            {item}
                        </Note>
                    );
                })}
            </ul>
        );
    }
}

export default connect(state => ({ todo: state.todoReducer }))(List);
