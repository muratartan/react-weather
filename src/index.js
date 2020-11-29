import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import WeatherReducer from './store/reducers/weather';
import favoritesReducer from './store/reducers/favorites';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    favoriteLocations: favoritesReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter> 
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
