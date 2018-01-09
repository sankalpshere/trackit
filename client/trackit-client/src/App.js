import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Track It!</h1>
        </header>
        <p className="App-intro">
          Enter URL and XPath below         
        </p>        
        <p className="App-input">
          <input type="text" defaultValue="Enter URL" className="App-input-url"/>          
        </p>
        <p>
          <input type="text" defaultValue="Enter XPath" className="App-input-xpath"/>
        </p>
        <p>
          <input type="button" value="Track!" onClick={() => alert('To be tracked!')} className="App-input-button"/>
        </p>
      </div>
    );
  }
}

export default App;
