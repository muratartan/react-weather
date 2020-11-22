import React, { Component } from 'react';

import './Header.css';
import Logo from '../../components/Logo/Logo';

class Home extends Component {
    render () {
        return (
            <div className='Header'>
                <Logo height='65px' />
                <a href='https://github.com/hangeldimyrat/react-weather' 
                target='_blank'><i class='fab fa-github'></i></a>
                <p>dark/light mode</p>
            </div>
        );
    }
    
};

export default Home;