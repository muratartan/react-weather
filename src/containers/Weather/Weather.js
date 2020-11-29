import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BsSearch} from 'react-icons/bs';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';

class Weather extends Component {

    state = {
        locationName: ''
    };

    addFavoritesHandler = () => {
        this.props.onAddFavorites({
            location: this.props.location,
            id: this.props.location
        });
    };

    removeFavoritesHandler = () => {
        this.props.onRemoveFavorites()
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites()
    }

    getWeatherHandler = () => {
        this.props.onSubmit(this.state.locationName);
    };

    inputChangedHandler = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    render () {
        return (
            <div className='Weather'>
               <div className='WeatherLeftLayout'>
                   <div style={{display:'flex'}}>
                        <Input 
                        placeholder='Search location...'
                        value={this.state.locationName}
                        changed={event =>this.inputChangedHandler(event) } />
                        <Button btnType='Search' clicked={this.getWeatherHandler} ><BsSearch /></Button>
                   </div>
                   <CurrentWeather 
                        locationName={this.props.location} 
                        currentData= {this.props.current}
                        clicked= {this.addFavoritesHandler}/>
                   <span>Favorite Locations</span>
                    {
                    this.props.favorites.map(item => (
                        <Favorites 
                            locationName = {item.location}
                            id = {item.id}/>
                    ))
                    }
               </div>
               <div className='WeatherRightLayout'>
                   <Forecast 
                        locationName={this.props.location} 
                        hourlyData={this.props.hourly} 
                        weeklyData={this.props.weekly}/>
               </div>
               
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        current: state.weather.currentWeather,
        hourly: state.weather.hourlyForecast,
        weekly: state.weather.weeklyForecast,
        location: state.weather.location,
        favorites: state.favoriteLocations.favorites
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: () => dispatch(actions.removeFavorites()),
        onRemoveAllFavorites: dispatch(actions.removeAllFavorites),
        onSubmit: (location) => dispatch(actions.fetchWeather(location))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);