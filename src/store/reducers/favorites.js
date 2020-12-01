import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../helper/utility';

const initialState = {
    favorites: []
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FAVORITES:
            const newFavs = [...state.favorites];
            newFavs.unshift(action.favorite);
            localStorage.setItem('favorites',JSON.stringify(newFavs));
            return updateObject(state, {
                favorites: newFavs
            });

        case actionTypes.REMOVE_FAVORITES:
            const newFavorites=state.favorites.filter((item,index) => index !== action.index);
            localStorage.setItem('favorites',JSON.stringify(newFavorites));
            return updateObject(state,{
                favorites: newFavorites
            });

        case actionTypes.REMOVE_ALL_FAVORITES:
            localStorage.removeItem('favorites');
            return updateObject(state, {
                favorites: []
            });
        case actionTypes.GET_LOCALSTORAGE_FAVS:
            const loadFavs = JSON.parse(localStorage.getItem('favorites'));
            return updateObject(state,{
                favorites: loadFavs
            })
        default:
            return state;
    }
};

export default reducer;