import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClassroomContainer from './containers/ClassroomContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ClassroomContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
