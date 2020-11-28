import React from 'react';

import './CurrentWeather.css';
import img from '../../assets/icons/11n.png';
import Button from '../Buttons/Button/Button';
import { FaRegStar } from 'react-icons/fa';
import Spinner from '../Spinner/Spinner';

const currentWeather = props => {

        return (
            <div className='CurrentWeatherCard'>
              {
              props.currentData ? 
               <div>
               <p className='CityName'>{props.locationName}</p>
                <div className='WeatherStatus'>
                    <img src={img} alt='weather' />
                    <p className='Temp'>{props.currentData.temp}</p>
                </div>
                <div className='WeatherDetails'>
                    <div className='Details'>
                        <p>Wind:{props.currentData.wind_speed}</p>
                        <p>Pressure:{props.currentData.pressure}</p>
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