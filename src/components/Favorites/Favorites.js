import React from 'react';
import {IoMdRemoveCircleOutline} from 'react-icons/io';

import img from '../../assets/icons/11n.png';
import './Favorites.css';
import Button from '../Buttons/Button/Button';

const favorites = props => (
    <div className='FavoritesContainer'>
        <Button btnType='Remove' clicked={props.clicked}><IoMdRemoveCircleOutline /></Button>
        <div className='FavoritesCard' onClick={props.showFavoriteCurrentWeather}>
            <p className='City'>{props.locationName}</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={img} alt='weather'/>
                <p className='Temperature'>25</p>
            </div>
        </div>
    </div>
   
);

export default favorites;