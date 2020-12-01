import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Weather from './containers/Weather/Weather';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount() {
    if(localStorage.key('locationName')) this.props.onRefreshHandler(localStorage.getItem('locationName'));
    if(localStorage.key('favorites')) this.props.onGetFavorites();
  };

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

const mapDispatchToProps = dispatch => {
  return {
    onRefreshHandler: (location) => dispatch(actions.fetchWeather(location)),
    onGetFavorites: () => dispatch(actions.getLocalStorageFavs())
  }
}

export default connect(null,mapDispatchToProps)(App);
