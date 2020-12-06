import React, { Component } from 'react';
import {BsSearch} from 'react-icons/bs';
import {connect} from 'react-redux';

import Input from '../../components/Input/Input';
import './Home.css';
import Button from '../../components/Buttons/Button/Button';
import {fetchWeather} from '../../store/actions/index';
import '../../Mode-Selector/Mode-Selector.css';

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
        if (this.state.locationName !== '') {
            this.props.onSubmit(this.state.locationName);
            this.props.history.push('/weather');
        }
    };

    getWeatherOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            if (this.state.locationName !== '') {
                this.props.onSubmit(this.state.locationName);
                this.props.history.push('/weather');
            }
        }
    }

    render () {
        const modeImage = this.props.mode ? 'Light-Mode-BackImg' : 'Dark-Mode-BackImg';
        
        return (
            <div className={['Home',modeImage].join(' ')}>                
                <div style={{marginBottom: 60}}>
                    <h1 className='Title'>Weather is life</h1>
                    <div className='SearchInput'>
                        <Input 
                        mode= {this.props.mode}
                        placeholder='Search location...' 
                        value={this.state.locationName}
                        clicked= {this.getWeatherOnKeyPress}
                        changed={event =>this.inputChangedHandler(event) } />
                        <Button btnType='Search' clicked={this.getWeatherHandler} ><BsSearch /></Button>
                    </div>                   
                </div>
                
            </div>
        );
    }    
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (location) => dispatch(fetchWeather(location))
    }
}

export default connect(null, mapDispatchToProps)(Home);