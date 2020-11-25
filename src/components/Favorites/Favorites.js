import React from 'react';
import {IoMdRemoveCircleOutline} from 'react-icons/io';

import img from '../../assets/icons/11n.png';
import './Favorites.css';
import Button from '../Buttons/Button/Button';

const favorites = props => (
    <div className='FavoritesCard'>
        <Button btnType='Remove'><IoMdRemoveCircleOutline /></Button>
        <p className='City'>Ordu</p>
       <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={img} alt='weather'/>
            <p className='Temperature'>25</p>
       </div>
    </div>
);

export default favorites;