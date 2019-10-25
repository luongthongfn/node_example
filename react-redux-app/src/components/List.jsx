import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';

class List extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <ul>
                {this.props.todo.map((item, i) => {
                    return (
                        <Note key={i} index={i} isComplete={item.isComplete} todo={item.todo}>
                            {item}
                        </Note>
                    );
                })}
            </ul>
        );
    }
}

export default connect()(List);
