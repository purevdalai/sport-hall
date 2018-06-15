import React, { Component } from 'react';
import Child from './test2';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handler = this.handler.bind(this);
    }

    handler(e) {
        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <Child handler={this.handler} text={this.state.text} />
        );
    }
}

export default Test;