import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';

class Weather extends Component {
    render () {
        return (
            <div className='Weather'>
               <div className='WeatherLeftLayout'>
                   <Input placeholder='Search location...' />
                   <CurrentWeather 
                        locationName={this.props.location} 
                        currentData= {this.props.current}/>
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
        current: state.currentWeather,
        hourly: state.hourlyForecast,
        weekly: state.weeklyForecast,
        location: state.location
    }
}

export default connect(mapStateToProps)(Weather);