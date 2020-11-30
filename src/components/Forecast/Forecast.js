import React, {useState} from 'react';

import './Forecast.css';
import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCard/HourlyCard/HourlyCard';
import WeeklyCard from './ForecastCard/WeeklyCard/WeeklyCard';
import Spinner from '../Spinner/Spinner';

const Forecast = props => {

    const [value,setValue] = useState(0);

    const tabNavigatorHandler = (value) => {
        setValue(value);
    };

    let weeklyData = <Spinner />
    let hourlyData = <Spinner />

    if (props.hourlyData) {
        hourlyData = (
            props.hourlyData.map(item => (
                <HourlyCard 
                    key={item.dt}
                    time={item.dt}
                    temp={item.temp}
                    pressure={item.pressure}
                    humidity={item.humidity}
                    clouds={item.clouds}
                    wind={item.wind_speed}
                    weather={item.weather} />
                ))
        )
    };

    if (props.weeklyData) {
        weeklyData = (
            props.weeklyData.map(item => (
                <WeeklyCard
                    key={item.dt}
                    date={item.dt}
                    temp={item.temp}
                    pressure={item.pressure}
                    humidity={item.humidity}
                    clouds={item.clouds}
                    wind={item.wind_speed}
                    weather={item.weather} />
            ))
        )
    };

        return (
            <div className='Forecast'>
                <h2 className='LocationName'>{props.locationName}</h2>
                <TabNavigator value={value} changed={(_,value)=>tabNavigatorHandler(value)} />
                {value === 0 ? hourlyData : weeklyData}                 
                
            </div>
        );
    }
    

export default Forecast;