import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mount from './Mount';
import UpdateWill from './componentWillReceiveProps';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Mount value="dis" />, document.getElementById('root'));
// setTimeout(() => {
//     ReactDOM.render(
//         <Mount value="haha" />,
//         document.getElementById('root')
//     );
// }, 5000);

/***************************************** */
// The first render won't trigger
// componentWillReceiveProps:
// ReactDOM.render(<UpdateWill text="dis" />, document.getElementById('root'));

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
// setTimeout(() => {
//     ReactDOM.render(
//         <UpdateWill text="haha" />,
//         document.getElementById('root')
//     );
// }, 5000);

// registerServiceWorker();

