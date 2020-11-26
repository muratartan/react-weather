import React, { Component } from 'react';
import {BsSearch} from 'react-icons/bs';

import Input from '../../components/Input/Input';
import './Home.css';
import Button from '../../components/Buttons/Button/Button';

class Home extends Component {

    state = {
        locationName: ''
    };

    inputChangedHandler = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    getWeatherHandler = () => {

        this.props.history.push('/weather');
    };

    render () {
        return (
            <div className='Home'>                
                <div style={{marginBottom: 60}}>
                    <h1 className='Title'>Weather is life</h1>
                    <div className='SearchInput'>
                        <Input 
                        placeholder='Search location...' 
                        value={this.state.locationName}
                        changed={event =>this.inputChangedHandler(event) } />
                        <Button btnType='Search' clicked={this.getWeatherHandler} ><BsSearch /></Button>
                    </div>                   
                </div>
                
            </div>
        );
    }
    
};

export default Home;