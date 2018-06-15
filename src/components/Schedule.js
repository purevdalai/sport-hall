import React, { Component } from 'react';
import ScheduleTemplate from './ScheduleTemplate';

class Schedule extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <ScheduleTemplate
                    events={this.state.events}
                    times={this.state.times}
                    week={this.state.week} />
            </div>
        );
    }

    componentWillMount() {
        this.setState(
            {
                events: [
                    {
                        id: 1,
                        day: '4',
                        name: 'Halo',
                        start: '11:30',
                        end: '11:40',
                    },
                    {
                        id: 2,
                        day: '1',
                        name: 'Do homework!',
                        start: '13:30',
                        end: '15:00',
                    },
                    {
                        id: 3,
                        day: '5',
                        name: 'Do homework!',
                        start: '16:30',
                        end: '18:00',
                    }
                ],
                times: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
                    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
                    '16:00', '16:30', '17:00', '17:30', '18:00'],

                week: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
            }
        );
    }

}

export default Schedule;