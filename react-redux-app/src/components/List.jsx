import React, { Component } from 'react';   
import {connect} from 'react-redux';
import Note from './Note';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Note/>
            </div>
        );
    }
}
 
export default connect()(List);