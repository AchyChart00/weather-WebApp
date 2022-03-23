import React from "react";
export const MostrarResultados = ({coord, main, sys, weather, name}) => {

      //valores coordenada
  const { description } = weather;
  const image = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

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
