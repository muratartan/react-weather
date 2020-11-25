import React from 'react';

import './WeeklyCard.css';

const weeklyCard = props => {
        return (
            <div className='WeeklyCard'>
                <div className='Date'>
                    <p>18:00</p>
                </div>
                <div className='WeeklyForecast'>
                    <div className='Day'>
                        <img />
                        <div className='DayForecast'>
                            <p>25C</p>
                            <p>Rain</p>
                        </div>
                    </div>
                    <div className='Night'>
                        <img />
                        <div className='Nightforecast'>
                            <p>25C</p>
                            <p>Rain</p>
                        </div>
                    </div>                   
                </div>
                <div className='WeeklyDetails'>
                    <p>humidity</p>
                    <p>wind speed</p>
                    <p>pressure</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        );
    }
    

export default weeklyCard;