

import * as actionTypes from './actionTypes';

export const fetchWeatherStart = () => {
    return {
        type: actionTypes.FETCH_WEATHER_START
    }
};

export const fetchWeatherSuccess = () => {
    return {
        type: actionTypes.FETCH_WEATHER_SUCCESS
    }
};

export const fetchWeatherFail = () => {
    return {
        type: actionTypes.FETCH_WEATHER_FAIL
    }
},

export const fetchWeather = (location) => {

}