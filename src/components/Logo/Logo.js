import React from 'react';
import {NavLink} from 'react-router-dom'

import './Logo.css';
import AppLogo from '../../assets/logo.png';

const logo = props => (
    <NavLink to='/' activeStyle={{border: 'transparent'}}>
        <div className='Logo' style={{height: props.height}}>
        <img src={AppLogo} alt='app-logo' />
        <div className='App-name'>
            <p className='Logo-name'>MRT-DEV</p>
            <p className='App-type'>weather</p>
        </div>
    </div>
    </NavLink>
);

export default logo;