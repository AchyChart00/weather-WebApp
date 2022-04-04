import React from "react";
import { useAgregarBusqueda } from "../hooks/useObtenerHistorial";
export const MostrarResultados = ({ coord, main, sys, weather, name }) => {
  //valores coordenada
  const { description } = weather[0];

  const image = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  console.log("Description", typeof (description));
  console.log("name", typeof (name));
  console.log("lat", typeof (coord.lat));
  console.log("lon", typeof (coord.lon));
  console.log("country", typeof (sys.country));
  console.log("image", typeof (image));
  console.log("main", typeof (main.temp));

  if(description){
    const data = {
      des: description,
      nombre: name, 
      lat: coord.lat, 
      lon: coord.lon,
      country: sys.country, 
      img: image,
      temp: main.temp
  
    }
    useAgregarBusqueda(data);
  }
  

  

  return (
    <div className="container">
      <h2>Resultados</h2>
      <div>
        {description}
        <div className="col">
          <span className="row">{name} </span>
          <span className="row">Latitud: {coord.lat}</span>
          <span className="row">Longitud: {coord.lon}</span>
        </div>
        <div> {sys.country}</div>
      </div>

      <img src={image} alt="Imagen del tiempo" />

      <div>
        <span>Temperatura actual: {main.temp} </span>
      </div>
    </div>
  );
};
