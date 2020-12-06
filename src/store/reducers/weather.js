import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    location: '',
    currentWeather: null,
    hourlyForecast: null,
    weeklyForecast: null,
    error: null,
    loading: false,
    lightMode: false
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER_START:
            const locationFixed = action.location.charAt(0).toUpperCase() + action.location.slice(1).toLowerCase();
            return updateObject(state, {
                location: locationFixed,
                loading: true,
                error: null,
                currentWeather: null,
                hourlyForecast: null,
                weeklyForecast: null
            });
            case actionTypes.FETCH_WEATHER_SUCCESS:
                return updateObject(state, {
                    loading: false,
                    currentWeather: action.data.current,
                    hourlyForecast: action.data.hourly,
                    weeklyForecast: action.data.daily,
                })
            case actionTypes.FETCH_WEATHER_FAIL:
                return updateObject(state, {
                    error: action.error
                })
            case actionTypes.ERROR_CLOSE:
                return updateObject(state, {
                    error: null
                })
            case actionTypes.MODE_SELECTOR:
                return updateObject(state, {
                    lightMode: action.value
                })
            default:
                return state
    }
};

export default reducer;