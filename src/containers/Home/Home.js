import React, { Component } from 'react';
import {BsSearch} from 'react-icons/bs';
import {connect} from 'react-redux';

import Input from '../../components/Input/Input';
import './Home.css';
import Button from '../../components/Buttons/Button/Button';
import * as actions from '../../store/actions/index';
import '../../Mode-Selector/Mode-Selector.css';
import Favorites from '../../components/Favorites/Favorites';

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
                    {
                    this.props.favorites.length > 0
                    ? this.props.favorites.map((item,index) => (
                        <Favorites 
                            locationName = {item.name}
                            key = {item.name}
                            icon = {item.icon}
                            temp = {item.temp}
                            clicked={() => this.props.onRemoveFavorites(index)}
                            showFavoriteCurrentWeather= {() => this.getFavoriteWeather(item.name)}/>
                    )) : null
                    }               
                </div>
                
            </div>
        );
    }    
};

const mapStateToProps = state => {
    return {
        favorites: state.favoriteLocations.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (location) => dispatch(actions.fetchWeather(location)),
        onRemoveFavorites: (index) => dispatch(actions.removeFavorites(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);