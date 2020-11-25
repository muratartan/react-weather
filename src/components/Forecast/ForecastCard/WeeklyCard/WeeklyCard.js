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
                    <p>26.11.2020</p>
                </div>
                <div className='WeeklyForecast'>
                    <img src={img} alt='img' />
                    <div className='DayNightForecast'>
                        <div className='DN-Temp'>
                            <HiSun style={{...DNIconStyle, color: '#ffaa00'}} />
                            <p>25C</p>
                        </div>
                        <div className='DN-Temp'>
                        <HiMoon style={{...DNIconStyle, color: '#fff'}} />
                            <p>18C</p>
                        </div>
                    </div>               
                </div>
                <div className='WeeklyDetails'>
                    <p><BsFillDropletFill style={{color:'#00a2ff',...styles}}/> % 65</p>
                    <p><IoMdTimer style={{color:'#ff6f00',...styles}} /> 1022 hpa</p>
                    <p><FiWind style={{...styles}}/> 2.09 m/s</p>
                    <p><IoIosCloud style={{...styles}}/> % 90</p>
                </div>
            </div>
        );
    }
    

export default weeklyCard;