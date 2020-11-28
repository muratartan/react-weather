import React from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/11n.png';
import Button from '../Buttons/Button/Button';
import { FaRegStar } from 'react-icons/fa';
import Spinner from '../Spinner/Spinner';

const currentWeather = props => {

    const temp = Math.round(props.currentData.temp-273.15);
    const wind_speed = Math.round(props.currentData.wind_speed/3.6);
    const time = new Date(props.currentData.dt*1000).toLocaleTimeString().slice(0,-3);

        return (
            <div className='CurrentWeatherCard'>
              {
              props.currentData ? 
               <div>
               <p className='CityName'>{props.locationName}</p>
                <div className='WeatherStatus'>
                    <div className='Time'>
                        <p>{time}</p>
                    </div>
                    <img src={img} alt='weather' />
                    <p className='Temp'>{temp}°C</p>
                </div>
                <div className='WeatherDetails'>
                    <div className='Details'>
                        <p>Wind: {wind_speed} km/h</p>
                        <p>Pressure: {props.currentData.pressure} hPa</p>
                    </div>
                    <div className='Details'>
                        <p>Humidity:%{props.currentData.humidity}</p>
                        <p>Clouds:%{props.currentData.clouds}</p>
                    </div>
                </div>
                <Button btnType='Add'><FaRegStar /></Button>
               </div> : <Spinner />
               }
            </div>
        );
    }

export default currentWeather;