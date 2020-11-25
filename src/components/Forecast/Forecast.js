import React from 'react';

import './Forecast.css';
import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCard/HourlyCard/HourlyCard';
import WeeklyCard from './ForecastCard/WeeklyCard/WeeklyCard';

const forecast = () => {
    
        return (
            <div className='Forecast'>
                <h2 className='LocationName'>Trabzon/TR</h2>
                <TabNavigator />
               
                <WeeklyCard />
            </div>
        );
    }
    

export default forecast;