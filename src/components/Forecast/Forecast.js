import React from 'react';

import './Forecast.css';
import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCard/HourlyCard/HourlyCard';
import WeeklyCard from './ForecastCard/WeeklyCard/WeeklyCard';

const forecast = props => {
    
        return (
            <div className='Forecast'>
                <h2 className='LocationName'>Trabzon/TR</h2>
                <TabNavigator />
                {props.hourlyData.map(item => {
                    <HourlyCard 
                        id={item.dt}
                        time={item.dt}
                        temp={item.temp}
                        pressure={item.pressure}
                        humidity={item.humidity}
                        clouds={item.clouds}
                        wind={item.wind_speed}
                        weather={item.weather} />
                })}
                <WeeklyCard weeklyData={props.weeklyData} />
            </div>
        );
    }
    

export default forecast;