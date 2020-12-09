import React from 'react';
import {IoMdRemoveCircleOutline} from 'react-icons/io';

import './Favorites.css';
import Button from '../Buttons/Button/Button';

const favorites = props => {
    const temp = Math.round(props.temp - 273.15);
    return (
        <div className='FavoritesCard'>
            <div className='CityInfoContainer' onClick={props.showFavoriteCurrentWeather}>
                <div>
                    <p className='City'>{props.locationName}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={require(`../../assets/icons/${props.icon}.png`).default} alt='weather'/>
                    <p className='Temperature'>{temp}°C</p>
                </div>
            </div>
            <Button btnType='Remove' clicked={props.clicked}><IoMdRemoveCircleOutline /></Button>
        </div>
    );
}

export default favorites;