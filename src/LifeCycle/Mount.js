import React, {Component} from 'react';

class App extends Component {
  componentWillMount() {
    alert('component is about to mount!');
  }

  render() {
    return <h1>Hello world, {this.props.value}</h1>;
  }
  componentDidMount() {
    alert('Halo!');
  }
}

export default App;