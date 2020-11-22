import React, {Component} from 'react';

import './App.css';
import Header from './containers/Header/Header';

class App extends Component {

  render () {
    return (
      <div className='App'>
       <Header />
        <p>Home</p>
        <p>Weather</p>
        
      </div>
    );
  }
}


export default App;
