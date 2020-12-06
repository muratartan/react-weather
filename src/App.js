import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Weather from './containers/Weather/Weather';
import * as actions from './store/actions/index';

class App extends Component {

  state = {
    checkedA: true,
    checkedB: true
  }

  componentDidMount() {
    const locationName = localStorage.getItem('locationName');
    if(locationName) this.props.onRefreshHandler(localStorage.getItem('locationName'));
    const favorites = localStorage.getItem('favorites');
    if(favorites) this.props.onGetFavorites();
  };

  changeMode = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    })
    this.props.onChangeMode(this.state.checkedB);
  }

  render () {
    return (
      <div className='App'>
        <Header value={this.state.checkedB} clicked={this.changeMode}/>
        <Route path='/' exact component={Home} />
        <Route path='/weather' component={Weather} /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lightMode: state.weather.lightMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRefreshHandler: (location) => dispatch(actions.fetchWeather(location)),
    onGetFavorites: () => dispatch(actions.getLocalStorageFavs()),
    onChangeMode: (value) => dispatch(actions.modeSelector(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
