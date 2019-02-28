import React, { Component } from 'react';
import ClassroomContainer from './containers/ClassroomContainer'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassroomContainer />
      </div>
    );
  }
}

export default App;
