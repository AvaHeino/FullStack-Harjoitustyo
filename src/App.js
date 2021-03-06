import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import GameWindow from './components/GameWindow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Prinsessan Pallo</h1>
        <Sidebar />
        <GameWindow />
      </div>
    );
  }
}

export default App;
