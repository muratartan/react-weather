import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';

import './HourlyCard.css';
import img from '../../../../assets/icons/11n.png';


const styles = {
    fontSize:18,
    marginRight:3
};

const hourlyCard = props => {

    const time= new Date(props.time*1000).toLocaleTimeString().slice(0,-3);

   return (
    <div className='Hourly-Card'>
    <div className='Hour'>
        <p>{time}</p>
    </div>
    <div className='Hourly-Forecast'>
        <img src={img} alt='img'/>
        <div className='An-Hour-Forecast'>
            <p className='Hour-Temp'>{props.temp}°C</p>
            <p>{props.weather[0].main}</p>
        </div>
    </div>
    <div className='Hourly-Details'>
        <p><BsFillDropletFill style={{color:'#00a2ff',...styles}}/> %{props.humidity}</p>
        <p><IoMdTimer style={{color:'#ff6f00',...styles}} /> {props.pressure} hpa</p>
        <p><FiWind style={{...styles}}/> {props.wind} m/s</p>
        <p><IoIosCloud style={{...styles}}/> % {props.clouds}</p>
    </div>
</div>
   )
};

export default hourlyCard;
