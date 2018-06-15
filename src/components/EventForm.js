import React, { Component } from 'react';

class EventForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const divStyle = {
            width: '100%',
            padding: '50px'
        };

        const inputStyle = {
            marginLeft: '20px',
            width: '100%',
            height: '50px'
        };
        
        const secDivStyle = {
            marginBottom: '20px'
        };

        return (
            <div style={divStyle}>
                <div style={secDivStyle}>
                    <label>Тэмдэглэл</label>
                </div>
                <div>
                    <input type="text" style={inputStyle} onChange={this.props.handler} value={this.props.text} />
                </div>
            </div>
        );
    }
}

export default EventForm;