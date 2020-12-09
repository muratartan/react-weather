import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';
import { apiKey, geoCodeApiKey } from '../../assets/apiKey';

export const addFavorites = (location) => {
    return {
        type: actionTypes.ADD_FAVORITES,
        favorite: location
    }
}
export const removeFavorites = (index) => {
    return {
        type: actionTypes.REMOVE_FAVORITES,
        index: index
    }
}
export const removeAllFavorites = (location) => {
    return {
        type: actionTypes.REMOVE_ALL_FAVORITES
    }
};

export const getLocalStorageFavs = () => {
    return {
        type: actionTypes.GET_LOCALSTORAGE_FAVS
    }
};


export const fetchFavoriteStart = () => {
    return{
        type:actionTypes.FETCH_FAVORITE_START
    };
};

export const fetchFavorite = (locationName) => {
    return dispatch => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${geoCodeApiKey}`)
        .then(response => {
          const location = response.data.results[0].geometry.location;
          axios.get(`/onecall?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}`)
          .then(response => {
              const current = response.data.current;
              dispatch(addFavorites({
                  name: locationName,
                  icon: current.weather[0].icon,
                  temp: current.temp
              }))
          })
          .catch(error=> error)
        }).catch(err=>err)
    }
};