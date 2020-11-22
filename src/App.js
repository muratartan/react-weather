import React, {Component} from 'react';

import './App.css';
import Header from './containers/Header/Header';

class App extends Component {

  render () {
    return (
      <div className='App'>
       <Header />
        <div>Home</div>
        <div>Weather</div>
        
      </div>
    );
  }
}


export default App;
