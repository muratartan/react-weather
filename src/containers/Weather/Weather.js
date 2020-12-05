import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BsSearch} from 'react-icons/bs';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';
import {changeFavStarHandler} from '../../helper/utility';
import Modal from '../../components/Modal/Modal';

class Weather extends Component {

    state = {
        locationName: '',
        isFavorite: false
    };

    componentDidMount () {
        setTimeout(()=>{
           this.setState({isFavorite:changeFavStarHandler(this.props.favorites, this.props.location)});
        },0);
    }

    addFavoritesHandler = () => {
        if(!changeFavStarHandler(this.props.favorites, this.props.location)) {
            this.props.onAddFavorites(this.props.location);
        };        
        setTimeout(()=>{
            this.setState({isFavorite:changeFavStarHandler(this.props.favorites, this.props.location)});
         },0);
    };

    removeFavoritesHandler = (index) => {
        this.props.onRemoveFavorites(index);
        setTimeout(()=>{
            this.setState({isFavorite:changeFavStarHandler(this.props.favorites, this.props.location)});
         },0);
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites();
        this.setState({
            isFavorite: false
        })
    }

    getWeatherHandler = () => {
        this.props.onSubmit(this.state.locationName);
        setTimeout(()=>{
            this.setState({
                locationName: '',
                isFavorite:changeFavStarHandler(this.props.favorites, this.props.location)
            });
         },0);
    };

    getWeatherOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            if (this.state.locationName !== '') {
                this.props.onSubmit(this.state.locationName);
                setTimeout(()=>{
                    this.setState({
                        locationName: '',
                        isFavorite:changeFavStarHandler(this.props.favorites, this.props.location)
                    });
                 },0);
            }
        }
    }

    inputChangedHandler = (event) => {
        this.setState({
            locationName: event.target.value
        })
    };

    errorClose = () => {
        this.props.onErrorClose();
    }

    render () {
        return (
            <div className='Weather'>
                <div className='BackImage'></div>
                    {
                        this.props.error ? 
                        <Modal>
                        <ErrorOutlineIcon style={{fontSize:50,color:'#ff0000'}} />
                        <p>Oops! Something went wrong!</p>
                        <Button btnType='Error' clicked={this.errorClose}>Go Home</Button>
                        </Modal> : null
                    }
                <div className='WeatherLeftLayout'>
                   <div style={{display:'flex'}}>
                        <Input 
                        placeholder='Search location...'
                        value={this.state.locationName}
                        clicked={this.getWeatherOnKeyPress}
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
                            clicked={() => this.removeFavoritesHandler(index)}
                            showFavoriteCurrentWeather= {() => this.props.onSubmit(item)}/>
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
        favorites: state.favoriteLocations.favorites,
        error: state.weather.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: (index) => dispatch(actions.removeFavorites(index)),
        onRemoveAllFavorites: () => dispatch(actions.removeAllFavorites()),
        onSubmit: (location) => dispatch(actions.fetchWeather(location)),
        onErrorClose: () => dispatch(actions.errorClose())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);