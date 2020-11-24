import React from 'react';

import img from '../../assets/icons/11n.png';
import './Favorites.css';

const favorites = props => (
    <div className='FavoritesCard'>
        <p className='City'>Ordu</p>
       <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={img} alt='weather'/>
            <p className='Temperature'>25</p>
       </div>
    </div>
);

export default favorites;