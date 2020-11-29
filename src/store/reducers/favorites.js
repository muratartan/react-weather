import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../helper/utility';

const initialState = {
    favorites: []
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FAVORITES:
            const newFavorite = action.favorite;
            return updateObject(state, {
                favorites: state.favorites.concat(newFavorite) 
            });

        case actionTypes.REMOVE_FAVORITES:
            return {
                ...state
            };

        case actionTypes.REMOVE_ALL_FAVORITES:
            return {
                ...state
             };
        default:
            return state;
    }
};

export default reducer;