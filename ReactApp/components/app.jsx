import React from 'react';
import ReactDOM from 'react-dom';
bootstrap = require('bootstrap');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (

      <div className="container-fluid">
        <div className="row no-gutters">
          <p className="col-12 text-right">Express</p>
        </div>
      </div>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
