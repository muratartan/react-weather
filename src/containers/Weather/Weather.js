import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';

class Weather extends Component {

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

    render () {
        return (
            <div className='Weather'>
               <div className='WeatherLeftLayout'>
                   <Input placeholder='Search location...' />
                   <CurrentWeather 
                        locationName={this.props.location} 
                        currentData= {this.props.current}
                        clicked= {this.addFavoritesHandler}/>
                   <span>Favorite Locations</span>
                    <Favorites />
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
        location: state.weather.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: () => dispatch(actions.removeFavorites()),
        onRemoveAllFavorites: dispatch(actions.removeAllFavorites)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);