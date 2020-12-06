import React from 'react';
import {NavLink} from 'react-router-dom'

import './Logo.css';
import AppLogo from '../../assets/logo.png';
import '../../Mode-Selector/Mode-Selector.css';

const logo = props => {

    const modeColor = props.mode ? 'Light-Mode-Color' : 'Dark-Mode-Color';

    return (
        <NavLink to='/' activeStyle={{border: 'transparent'}}>
        <div className='Logo' style={{height: props.height}}>
        <img src={AppLogo} alt='app-logo' />
        <div className='App-name'>
            <p className={['Logo-name', modeColor].join(' ')}>MRT-DEV</p>
            <p className={['App-type', modeColor].join(' ')}>weather</p>
        </div>
    </div>
    </NavLink>
    )
}

export default logo;