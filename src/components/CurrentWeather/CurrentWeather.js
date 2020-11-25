import React from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/11n.png';
import Button from '../Buttons/Button/Button';
import { FaRegStar } from 'react-icons/fa';

const currentWeather = () => {

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
                <Button btnType='Add'><FaRegStar /></Button>
            </div>
        );
    }

export default currentWeather;