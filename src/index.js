import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WeatherHome } from './WeatherHome';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de geolocalización')
}

ReactDOM.render(
    <WeatherHome />
  ,
  document.getElementById('root')
);

