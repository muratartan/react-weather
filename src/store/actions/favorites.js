import * as actionTypes from './actionTypes';

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
}