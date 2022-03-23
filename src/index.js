import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WeatherHome } from './WeatherHome';
import {EnableOnInputChange} from './prueba';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de geolocalización')
}

ReactDOM.render(
    <WeatherHome />
  ,
  document.getElementById('root')
);

