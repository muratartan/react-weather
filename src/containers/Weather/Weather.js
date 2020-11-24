import React, {Component} from 'react';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';

class Weather extends Component {
    render () {
        return (
            <div className='Weather'>
               <div className='WeatherLeftLayout'>
                   <Input />
                    <div>Current Weather</div>
                    <div>Favourites</div>
               </div>
               <div className='WeatherRightLayout'>forecast</div>
            </div>
        );
    }
};

export default Weather;