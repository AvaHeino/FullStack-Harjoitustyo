import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Prinsessan Pallo</h1>
        <Sidebar />
      </div>
    );
  }
}

export default App;
