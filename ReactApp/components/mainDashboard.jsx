import React from 'react';
import ReactDOM from 'react-dom';

class MainDashboard extends React.Component{


  constructor(props){
    super(props);

  }

  render(){
    return (

    <div>
      		mainDashboard changes
      </div>
    )
  }
}


ReactDOM.render(
  <MainDashboard/>,
  document.getElementById('app')
);
