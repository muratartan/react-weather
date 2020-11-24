import React, {Component} from 'react';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';

class Weather extends Component {
    render () {
        return (
            <div className='Weather'>
                <div>Current Weather</div>
                <div>Forecast</div>
            </div>
        );
    }
};

export default Weather;