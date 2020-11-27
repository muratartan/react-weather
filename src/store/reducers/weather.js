import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    location: '',
    currentWeather: null,
    hourlyForecast: null,
    weeklyForecast: null,
    favorites: null,
    error: null,
    loading: false
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER_START:
            return updateObject(state, {
                location: action.location,
                loading: true,
                error: null 
            });
            case actionTypes.FETCH_WEATHER_SUCCESS:
                return updateObject(state, {
                    loading: false,
                    currentWeather: '',
                    hourlyForecast: '',
                    weeklyForecast: '',
                })
            case actionTypes.FETCH_WEATHER_FAIL:
                return updateObject(state, {
                    error: action.error
                })
            default:
                return state
    }
};

export default reducer;