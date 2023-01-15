import React, { Component } from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id: 2,
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
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          {id:this.max_contents_id, title:_title, desc:_desc}
        );
        this.setState({contents:_contents});
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    console.log(this);

    return(
      <div className = "App" >
        Hello react!
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}></Subject>
        {/* <header>
                <h1><a href="/" onClick={function(e) {
                  console.log(e);
                  e.preventDefault();
                  //this.state.mode = 'welcome';
                  this.setState({mode: 'welcome'});
                }.bind(this)}>{this.state.subject.title}</a></h1>
                {this.state.subject.sub}
        </header> */}
        <TOC 
          onChangePage={function(id) {
            this.setState({
              mode: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
          <Control onChangeMode={function(_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}></Control>
          {_article}
      </div>
    );
  }
}

export default App;
