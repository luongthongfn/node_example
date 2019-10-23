import React, { Component } from 'react';   
import {connect} from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Form/>
                <Note/>
            </div>
        );
    }
}
 
export default List;