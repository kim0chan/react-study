import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return(
    <div>
      <h1>Hello React Router DOM</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li></li>
      </ul>
    </div>
  );
}
