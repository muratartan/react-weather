import React, {Component} from 'react';

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
                   <CurrentWeather />
                   <span>Favorite Locations</span>
                    <Favorites />
               </div>
               <div className='WeatherRightLayout'>forecast</div>
            </div>
        );
    }
};

export default Weather;