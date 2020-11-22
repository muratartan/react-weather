import React, { Component } from 'react';
import './Header.css';

class Home extends Component {
    render () {
        return (
            <div className='Header'>
                <p>App name</p>                                
                    <a href='https://github.com/hangeldimyrat/react-weather' 
                    target='_blank'><i class='fab fa-github'></i></a>
                <p>dark/light mode</p>
            </div>
        );
    }
    
};

export default Home;