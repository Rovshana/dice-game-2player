import React from 'react'
import './App.css';
import Game from './Game'
import 'bootstrap/dist/css/bootstrap.min.css'


class App  extends React.Component {
  render(){
  return (
    <div className="container">
      <Game />
   
      
    </div>
  );
  }

}

export default App;
