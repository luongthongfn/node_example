import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {this.props.todo.map((item, i) => {
                    return (
                        <Note key={i} index={i}>
                            {item}
                        </Note>
                    );
                })}
            </div>
        );
    }
}

export default connect(state => ({ todo: state.todoReducer }))(List);
