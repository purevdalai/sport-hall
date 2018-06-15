import React, { Component } from 'react';
import Modal from './Modal';
import Note from './Note';

class Box extends Component {
    
    constructor(props) {
        super(props);

        /** child-n function duudah zoriulaltaar ref uusgev. */
        this.modal = React.createRef();
        this.note = React.createRef();
    }

    editEvent(){
        this.modal.current.open();
    };

    viewNote() {
        this.note.current.visible();
    }

    /**
     * Generate color code
     * @returns color code
     */
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * @param elm selected element
     * Create new event choosed day and time
     */
    createEvent(elm) {

        // const day = elm.parentElement.getAttribute('day'); // selected day
        // const time = elm.getAttribute('time'); // selected time
        // const id = elm.getAttribute('id'); // selected div id
        const index = elm.getAttribute('index');
        const color = this.getRandomColor();
        elm.className = 'event-' + index;
        elm.id = 'event';
        elm.style = 'background-color:' + color;
        this.viewNote();
    }
    /**
     * 
     * @param {*} e element
     * darsan class-n ner ni 
     *                  1. box bol shine event uusne
     *                  2. event bol edit hiine.  
     */
    onMouseDown(e) {
        const elm = e.target;
        if (elm.className == 'box') {
            this.createEvent(elm);
        }
        else if (elm.id == 'event') {
            this.editEvent();
        }
        else {
            // console.log(elm.className);
        }
    }


    render() {
        const time = this.props.time;
        const index = this.props.index;
        const day = this.props.day;

        return (
            <div
                className="box"
                key={index}
                time={time}
                index={index}
                day={day}
                onMouseDown={this.onMouseDown.bind(this)}
            >
                <Modal ref={this.modal} />
                <Note ref={this.note} />
            </div>

        );
    }
}

export default Box;