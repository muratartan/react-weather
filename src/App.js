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
    checkedA: false,
    checkedB: false
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


const mapDispatchToProps = dispatch => {
  return {
    onRefreshHandler: (location) => dispatch(actions.fetchWeather(location)),
    onGetFavorites: () => dispatch(actions.getLocalStorageFavs())
  }
}

export default connect(null,mapDispatchToProps)(App);
