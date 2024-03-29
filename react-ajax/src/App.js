import React, {Component} from 'react';

class NowLoading extends Component{
  render() {
    return(
      <div>Now Loading....</div>
    );
  }
}

class Nav extends Component {
  // state = {
  //   list: []
  // }
  // componentDidMount() {
  //   fetch('list.json').then(function(result) {
  //     return result.json();   // json 파일의 데이터를 javascript 객체로 변환
  //   }).then(function(json) {
  //     console.log(json);
  //     this.setState({list:json});
  //   }.bind(this));
  // }

  render() {
    var listTag = [];
    for(var i = 0; i < this.props.list.length; i++) {
      var li = this.props.list[i];
      listTag.push(
        <li key={li.id}>
          <a href={li.id} data-id={li.id} onClick={function(e) {
          e.preventDefault();
          console.log('trigger');
          this.props.onClick(e.target.dataset.id);
        }.bind(this)}>
          {li.title}
          </a>
        </li>
      );
    }

    return(
      <nav>
        {listTag}
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    article: {
      item: {title:'Welcome', desc:'Hello, React & Ajax'},
      isLoading: false
    },
    list: {
      items: [],
      isLoading: false
    }
  }

  componentDidMount() {
    var newList = Object.assign({}, this.state.list, {isLoading:true});
    this.setState({list:newList});
    fetch('list.json').then(function(result) {
      return result.json();
    }).then(function(json) {
      console.log(json);
      this.setState({list: {
        items: json,
        isLoading: false
      }
    });
    }.bind(this));
  }

  render() {
    var NavTag = null;
    if(this.state.list.isLoading) {
      NavTag = <NowLoading></NowLoading>
    } else {
      NavTag = <Nav list={this.state.list.items} onClick={function(id) {
        var newArticle = Object.assign({}, this.state.article, {isLoading:true});
        this.setState({article:newArticle});
        fetch(id+'.json')
        .then(function(result) {
          return result.json();
        })
        .then(function(json) {
          this.setState({
            article:{
              item:{
                title: json.title,
                desc: json.desc
              },
              isLoading: false
            }
          })
        }.bind(this))
      }.bind(this)}></Nav>
    }

    var ArticleTag = null;
    if(this.state.article.isLoading) {
      ArticleTag = <NowLoading></NowLoading>
    } else {
      ArticleTag = <Article title={this.state.article.item.title} dec={this.state.article.item.desc}></Article>
    }

    return(
      <div className="App">
        <h1>WEB</h1>
          {NavTag}
          {ArticleTag}
      </div>
      
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>WEB</h1>
//       <Nav></Nav>
//       <article>
//         <h2>Welcome</h2>
//         Hello, React &amp; Ajax
//       </article>
//     </div>
//   );
// }

export default App;
