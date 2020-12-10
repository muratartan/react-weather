import React from 'react';
import {connect} from 'react-redux';

import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Spinner from '../Spinner/Spinner';

const currentWeather = props => {

    let isFav = false;
    if (props.favorites.length) {
        const favs = props.favorites.map(el => el.name);
        isFav = favs.includes(props.locationName);
    };
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
                    <img src={require(`../../assets/icons/${props.currentData.weather[0].icon}.png`).default} alt='weather' />
                    <div>
                        <p className='Temp'>{ Math.round(props.currentData.temp-273.15)}°C</p>
                        <p className='WeatherCondition'>{props.currentData.weather[0].main}</p>
                    </div>
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
                    {isFav ? <FaStar/> : <FaRegStar />}
                </Button>
               </div> : <Spinner />
               }
            </div>
        );
    }

    const mapStateToProps = state => {
        return {
            favorites: state.favoriteLocations.favorites
        }
    }

export default connect(mapStateToProps)(currentWeather);