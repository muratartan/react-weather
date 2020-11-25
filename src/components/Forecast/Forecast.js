import React, { Component } from 'react';

import './Forecast.css';
import TabNavigator from '../TabNavigator/TabNavigator';

class Forecast extends Component {
    render () {
        return (
            <div className='Forecast'>
                <TabNavigator />
            </div>
        );
    }
    
};

export default Forecast;