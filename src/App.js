import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import custom component
import FacebookCustomLogin from './components/FacebookCustomLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook giriş yap</h1>
        </header>
        <p className="App-intro">
        </p>
        {/* Render custom component */}
        <FacebookCustomLogin />
      </div>
    );
  }
}

export default App;
