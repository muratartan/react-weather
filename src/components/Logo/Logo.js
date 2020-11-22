import React from 'react';

import './Logo.css';
import AppLogo from '../../assets/logo.png';

const logo = props => (
    <div className='Logo' style={{height: props.height}}>
        <img src={AppLogo} alt='app-logo' />
        <div className='App-name'>
            <p className='Logo-name'>MRT-DEV</p>
            <p className='App-type'>weather</p>
        </div>
    </div>
);

export default logo;