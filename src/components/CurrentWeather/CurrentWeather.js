import React, { Component } from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/02d.png';

class CurrentWeather extends Component {
    render () {
        return (
            <div className='CurrentWeatherCard'>
                <p>Trabzon / TR</p>
                <div className='WeatherStatus'>
                    <img src={img} alt='weather' />
                    <p>25</p>
                </div>
                <div className='WeatherDetails'>
                    <div>
                        <p>Wind:</p>
                        <p>Pressure:</p>
                    </div>
                    <div>
                        <p>Humidity:</p>
                        <p>Clouds:</p>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default CurrentWeather;