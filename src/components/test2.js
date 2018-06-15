import React, { Component } from 'react';

class Child extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handler} value={this.props.text} />
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Child;