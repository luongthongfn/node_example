import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <input type="text"/>
                <button>add</button>
            </div>
        );
    }
}
 
export default Form;