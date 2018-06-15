import React, { Component } from 'react';

class Note extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: {
                visibility: 'hidden'
            }
        }
    }

    visible() {
        this.setState({
            visible: {
                visibility: 'visible'
            }
        });
    }


    hide() {
        this.setState({
            visible: {
                visibility: 'hidden'
            }
        });
    }

    render() {
        return (
            <div style={this.state.visible}>
                <span></span>
            </div>
        );
    }
}

export default Note;