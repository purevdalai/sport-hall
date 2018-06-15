import React, { Component } from 'react';
import Schedule from './components/Schedule';
import './App.css';
import Test from './components/test';

class App extends Component {

  render() {
    return (
      <div className="cd-schedule js-full">
        <Schedule />
      </div>
    );
  }
}

export default App;