import React, { Component } from 'react';
import Node from './Node';

class List extends Component {
    constructor(props) {
        super(props);
        console.log('List props: ', this.props);
    }
    render() {
        return <Node id={0} />;
    }
}

export default List;
