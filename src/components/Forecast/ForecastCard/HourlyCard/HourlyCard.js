import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { WiBarometer } from 'react-icons/wi';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';

import './HourlyCard.css';
import img from '../../../../assets/icons/11n.png';


const styles = {
    fontSize:18,
    marginRight:3
};

const hourlyCard = props => (
    <div className='Hourly-Card'>
        <div className='Hour'>
            <p>18:00</p>
        </div>
        <div className='Hourly-Forecast'>
            <img src={img} alt='img'/>
            <div className='An-Hour-Forecast'>
                <p className='Hour-Temp'>25°C</p>
                <p>Rain</p>
            </div>
        </div>
        <div className='Hourly-Details'>
            <p><BsFillDropletFill style={{color:'#00a2ff',...styles}}/> % 65</p>
            <p><IoMdTimer style={{color:'#ff6f00',...styles}} /> 1022 hpa</p>
            <p><FiWind style={{...styles}}/> 2.09 m/s</p>
            <p><IoIosCloud style={{...styles}}/> % 90</p>
        </div>
    </div>
);

export default hourlyCard;
