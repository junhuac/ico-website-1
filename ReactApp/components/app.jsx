import React from 'react';
import ReactDOM from 'react-dom';
// global.Tether = tether;
// import tether from 'tether';
window.Popper = Popper;
import Popper from 'popper.js';
//bootstrap = require('bootstrap');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="row no-gutters">
          <p className="col-4 text-right">Express Federico jaramillo work</p>
        </div>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
  
);
