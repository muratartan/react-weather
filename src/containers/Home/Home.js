import React, { Component } from 'react';
import {BsSearch} from 'react-icons/bs';

import Input from '../../components/Input/Input';
import './Home.css';
import Button from '../../components/Buttons/Button/Button';

class Home extends Component {

    getWeatherHandler = () => {
        this.props.history.push('/weather');
    };

    render () {
        return (
            <div className='Home'>
                <Input placeholder='Search location...' />
                <Button btnType='Search' clicked={this.getWeatherHandler} ><BsSearch /></Button>
            </div>
        );
    }
    
};

export default Home;