import React from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/11n.png';
import Button from '../Buttons/Button/Button';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Spinner from '../Spinner/Spinner';

const currentWeather = props => {

        return (
            <div className='CurrentWeatherCard'>
              {
              props.currentData ? 
               <div>
               <p className='CityName'>{props.locationName}</p>
                <div className='WeatherStatus'>
                    <div className='Time'>
                        <p>{new Date(props.currentData.dt*1000).toLocaleTimeString().slice(0,-3)}</p>
                    </div>
                    <img src={img} alt='weather' />
                    <p className='Temp'>{ Math.round(props.currentData.temp-273.15)}°C</p>
                </div>
                <div className='WeatherDetails'>
                    <div className='Details'>
                        <p>Wind: {Math.round(props.currentData.wind_speed/3.6)} km/h</p>
                        <p>Pressure: {props.currentData.pressure} hPa</p>
                    </div>
                    <div className='Details'>
                        <p>Humidity:%{props.currentData.humidity}</p>
                        <p>Clouds:%{props.currentData.clouds}</p>
                    </div>
                </div>
                <Button btnType='Add' clicked={props.clicked}>
                    {props.isFavorite ? <FaStar/> : <FaRegStar />}
                </Button>
               </div> : <Spinner />
               }
            </div>
        );
    }

export default currentWeather;