import React from "react";

import { useObtenerHistorial } from "../../hooks/useObtenerHistorial";
import { LandingPlaceHolder } from "../../helpers/LandingPlaceHolder";

export const HistorialWeather = () => {
  const [datos, isLoading] = useObtenerHistorial();

  console.log(datos);
  console.log(isLoading);
  //getHistorial();
  return (
    <>
      <div className="container">
        <h2>Resultados</h2>

        {isLoading ? (
          <LandingPlaceHolder />
        ) : (
          datos.map((dato) => (
            <div key={dato._id}>
              <div className="card">
                <img
                  src={dato.image}
                  className="card-img-top"
                  alt="Imagen del tiempo"
                  size="small"
                />

                <div className="card-body">
                  <h5 className="card-title">{dato.name}</h5>
                  <p className="card-text">
                    <span>Temperatura actual: {dato.temp} </span>
                  </p>
                  <p className="card-text">{dato.description}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      latitud: {dato.lat}
                    </li>
                    <li className="list-group-item">Longitud: {dato.lon}</li>
                    <li className="list-group-item">ubicación: {dato.country}</li>
                  </ul>
                </div>
              </div>

              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
};
