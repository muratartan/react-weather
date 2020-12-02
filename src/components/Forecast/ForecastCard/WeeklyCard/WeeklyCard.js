import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';



import './WeeklyCard.css';
import img from '../../../../assets/icons/11n.png';
import { FaTemperatureHigh,FaTemperatureLow } from 'react-icons/fa';

const styles = {
    fontSize:18,
    marginRight:7
};

const DNIconStyle = {
    fontSize:22,
    marginRight:12
}

const weeklyCard = props => {
        return (
            <div className='WeeklyCard'>
                <div>
                     <p className='Date'>{new Date(props.date*1000).toLocaleDateString()}</p>
                     <p className='Weather-Condition'>{props.weather[0].main}</p>
                </div>
                <div className='WeeklyForecast'>                    
                        <img src={require(`../../../../assets/icons/${props.weather[0].icon}.png`).default} alt='img' />
                    <div className='DayNightForecast'>
                        <div className='DN-Temp'>
                            <FaTemperatureHigh style={{...DNIconStyle, color: '#ff860a'}} />
                            <p>{Math.round(props.temp.day-273.15)} °C</p>
                        </div>
                        <div className='DN-Temp'>
                        <FaTemperatureLow style={{...DNIconStyle, color: '#23b2ff'}} />
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