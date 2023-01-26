import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props) {
  var [number, setNumber] = useState(props.initNumber);
  var [_date, setDate] = useState((new Date()).toString());

  useEffect(function() {
    console.log('%cfunc => useEffect ' + (++funcId), funcStyle);
    document.title = number + ' : ' + _date;
  })

  console.log('%cfunc => render '+(++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>props number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random_func" onClick={
        function() {
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date_now" onClick={
        function() {
          setDate(Date());
        }
      }></input>
      
    </div>
  );
}

class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>props number: {this.state.number}</p>
        <p>date: {this.state.date}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>

        <input type="button" value="date now!" onClick={
          function() {
            this.setState({date:(new Date()).toString()});
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
