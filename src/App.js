import React, { Component } from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    };
  }

  render() {
    return( 
      <div className = "App" >
        Hello react!
        <Subject
          title={this.state.subject.title}
          content={this.state.subject.sub}></Subject>
        <TOC data={this.state.content}></TOC>
        <Subject title="REACT" content="react!"></Subject>
      </div>
    );
  }
}

export default App;
