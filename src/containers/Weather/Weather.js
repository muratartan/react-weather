import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BsSearch} from 'react-icons/bs';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';

class Weather extends Component {

    state = {
        locationName: '',
        isFavorite: false
    };

    componentDidMount () {
        setTimeout(()=>{
            if(this.props.favorites.includes(this.props.location)) this.setState({isFavorite: true});
            else this.setState({isFavorite:false});
        },0);
    }

    addFavoritesHandler = () => {
        this.props.onAddFavorites(this.props.location);
        setTimeout(()=>{
            if(this.props.favorites.includes(this.props.location)) this.setState({isFavorite: true});
            else this.setState({isFavorite:false});
        },0);
    };

    removeFavoritesHandler = (index) => {
        this.props.onRemoveFavorites(index)
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites()
    }

    getWeatherHandler = () => {
        this.props.onSubmit(this.state.locationName);
        setTimeout(()=>{
            if(this.props.favorites.includes(this.props.location)) this.setState({isFavorite: true});
            else this.setState({isFavorite:false});
        },0);
    };

    inputChangedHandler = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    render () {
        return (
            <div className='Weather'>
               <div className='WeatherLeftLayout'>
                   <div style={{display:'flex'}}>
                        <Input 
                        placeholder='Search location...'
                        value={this.state.locationName}
                        changed={event =>this.inputChangedHandler(event) } />
                        <Button btnType='Search' clicked={this.getWeatherHandler} ><BsSearch /></Button>
                   </div>
                   <CurrentWeather 
                        locationName={this.props.location} 
                        currentData= {this.props.current}
                        clicked= {this.addFavoritesHandler}
                        isFavorite= {this.state.isFavorite}/>
                   {this.props.favorites.length ? <span>Favorite Locations</span> : null}
                   {
                       this.props.favorites.length >= 2 
                       ? <Button 
                            btnType='Remove-All'
                            clicked={this.removeAllFavoritesHandler}>Remove All</Button> : null
                   }
                    {
                    this.props.favorites.map((item,index) => (
                        <Favorites 
                            locationName = {item}
                            key = {item}
                            clicked={() => this.removeFavoritesHandler(index)}/>
                    ))
                    }
               </div>
               <div className='WeatherRightLayout'>
                   <Forecast 
                        locationName={this.props.location} 
                        hourlyData={this.props.hourly} 
                        weeklyData={this.props.weekly}/>
               </div>
               
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        current: state.weather.currentWeather,
        hourly: state.weather.hourlyForecast,
        weekly: state.weather.weeklyForecast,
        location: state.weather.location,
        favorites: state.favoriteLocations.favorites
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: (index) => dispatch(actions.removeFavorites(index)),
        onRemoveAllFavorites: () => dispatch(actions.removeAllFavorites()),
        onSubmit: (location) => dispatch(actions.fetchWeather(location))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);