import { useEffect, useState } from "react";
import { getUserLocation } from "./helpers/getUserLocation";
import { weatherAPIBuscar, weatherAPIUbicacion } from "./helpers/weatherAPI";
import { useForm } from "./hooks/useForm";

export const WeatherHome = () => {
  //useState para Checkbox
  const [revisar, setRevisar] = useState({
    checar: false,
    LngLat: [0, 0],
  });

  const { checar, LngLat } = revisar;
  console.log("Arriba desestructuracion", LngLat);
  const [lng, lat] = LngLat;

  useEffect(() => {
    getUserLocation().then((lngLat) => {
      console.log("useEffect", lngLat);
      setRevisar({
        ...revisar,
        LngLat: lngLat,
      });
    });
  }, []);

  console.log("Abajo useEFfect", lng, lat);
  //useState para valores obtenidos de buscar
  const [values, setValues] = useState({
    coord: "",
    main: "",
    sys: "",
    weather: [""],
    name: "",
  });
  const [formValues, handleInputSearch] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  //funcion para busqueda, devuelve los valores
  const handleSearch = async (e) => {
    if (!checar) {
      e.preventDefault();
      const { coord, main, sys, weather, name } = await weatherAPIBuscar(
        searchText
      );
      setValues({ coord, main, sys, weather, name });
    } else {
      e.preventDefault();
      const { coord, main, sys, weather, name } = await weatherAPIUbicacion(
        lng,
        lat
      );
      setValues({ coord, main, sys, weather, name });
    }
  };

  //valores coordenada
  const { coord, main, sys, weather, name } = values;
  const { description } = weather;
  const image = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  const disableInput = (e) => {
    const checked = e.target.checked;
    if (checked) {
      console.log("Dentro del checked if", LngLat);
      setRevisar({
        
        checar: true,
        LngLat,
      });
    } else {
      setRevisar({
        checar: false,
        LngLat,
      });
    }
  };

  const disableButton = (e) => {
    if (!searchText) {
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Weather Web App</h1>
      </div>

      {/* menu busqueda */}
      <div className="container">
        <form onSubmit={handleSearch}>
          <label className="form-label">Find The Weather</label>
          <input
            type="text"
            className="form-control"
            placeholder="Introduce un ciudad"
            id="buscarCiudad"
            name="searchText"
            value={searchText}
            onChange={handleInputSearch}
            disabled={checar}
          />
          <div id="emailHelp" className="form-text">
            Busca y descubre el clima en tu ubicación
          </div>

          {/* checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={disableInput}
            />

            <label className="form-check-label" for="flexCheckDefault">
              ¿Desea utilizar su ubicación?
            </label>
          </div>
          {/* Boton de buscar */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!searchText && !checar} 
          >
            Buscar
          </button>
        </form>
      </div>
      <br />
      <hr />
      {/* Resultados */}
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
      {/* terminan resultados */}
    </div>
  );
};
