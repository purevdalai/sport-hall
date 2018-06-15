import React, { Component } from 'react';
import Box from './Box';

class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const day = this.props.day;
        const i = this.props.index;
        const times = this.props.times;
        const events = this.props.events;

        const boxes = times.map((time, index) =>
            <Box events={events} day={i + 1} time={time} index={index} key={index} />
        );

        return (
            <li className="events-group">
                <div className="top-info"><span>{day}</span></div>
                <ul className="day-event-list">
                    {boxes}
                </ul>
            </li >
        );
    }
}

export default Day;