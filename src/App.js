import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Weather from './containers/Weather/Weather';

class App extends Component {

  render () {
    return (
      <div className='App'>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/weather' component={Weather} /> 
      </div>
    );
  }
}


export default App;
