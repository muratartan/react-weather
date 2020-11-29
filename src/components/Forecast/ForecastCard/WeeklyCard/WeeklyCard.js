import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';
import {HiSun, HiMoon} from 'react-icons/hi';

import './WeeklyCard.css';
import img from '../../../../assets/icons/11n.png';

const styles = {
    fontSize:18,
    marginRight:7
};

const DNIconStyle = {
    fontSize:25,
    marginRight:5
}

const weeklyCard = props => {
        return (
            <div className='WeeklyCard'>
                <div className='Date'>
                     <p>{new Date(props.date*1000).toLocaleDateString()}</p>
                </div>
                <div className='WeeklyForecast'>
                    <img src={img} alt='img' />
                    <div className='DayNightForecast'>
                        <div className='DN-Temp'>
                            <HiSun style={{...DNIconStyle, color: '#ffaa00'}} />
                            <p>{Math.round(props.temp.day-273.15)} °C</p>
                        </div>
                        <div className='DN-Temp'>
                        <HiMoon style={{...DNIconStyle, color: '#fff'}} />
                            <p>{Math.round(props.temp.night-273.15)} °C</p>
                        </div>
                    </div>               
                </div>
                <div className='WeeklyDetails'>
                    <p><BsFillDropletFill style={{color:'#00a2ff',...styles}}/> % {props.humidity}</p>
                    <p><IoMdTimer style={{color:'#ff6f00',...styles}} /> {props.pressure} hpa</p>
                    <p><FiWind style={{...styles}}/>{Math.round(props.wind*3.6)} km/h</p>
                    <p><IoIosCloud style={{...styles}}/> % {props.clouds}</p>
                </div>
            </div>
        );
    }
    

export default weeklyCard;