import React, { Component } from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/11n.png';

class CurrentWeather extends Component {
    render () {
        return (
            <div className='CurrentWeatherCard'>
                <p className='CityName'>Trabzon / TR</p>
                <div className='WeatherStatus'>
                    <img src={img} alt='weather' />
                    <p className='Temp'>25</p>
                </div>
                <div className='WeatherDetails'>
                    <div className='Details'>
                        <p>Wind:</p>
                        <p>Pressure:</p>
                    </div>
                    <div className='Details'>
                        <p>Humidity:</p>
                        <p>Clouds:</p>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default CurrentWeather;