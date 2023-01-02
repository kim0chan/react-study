import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  render() {
    return( 
      <div className = "App" >
        Hello react!
        <Subject title="WEB" content="world wide web"></Subject>
        <Subject title="REACT" content="react!"></Subject>
      </div>
    );
  }
}

export default App;
