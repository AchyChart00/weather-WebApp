import React from "react";
import { useState } from "react";

import { useForm } from "../../hooks/useForm";
import {
  weatherAPIBuscar,
  weatherAPIUbicacion,
} from "../../helpers/weatherAPI";
import { MostrarResultados } from "../../helpers/mostrarResultados";
import { useFetchGeo } from "../../hooks/useFetchGeo";

export const BusquedaWeather = () => {

  //useState para Checkbox
  const [revisar, setRevisar] = useState({
    checar: false,
  });

  const { checar } = revisar;
  

  //GEOLOCALIZACION DEL EXPLORADOR 
  const [lng, lat] = useFetchGeo();

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



  const disableInput = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setRevisar({
        checar: true,
      });
    } else {
      setRevisar({
        checar: false,
      });
    }
  };




  return (
    <div>
      {/* Home busqueda */}
      <div className="container">
        <form onSubmit={handleSearch}>
          <label className="form-label m-2">Find The Weather</label>
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
            Introduce cualquier ciudad y descubre el tiempo de la ubicación
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

            <label className="form-check-label">
              ¿Desea utilizar su ubicación?
            </label>
          </div>
          {/* Boton de buscar */}
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!searchText && !checar}
          >
            Buscar
          </button>
        </form>
      </div>
      <br />
      <hr />
      {/* Resultados de la busqueda*/}
      
      {
      (!searchText && !checar)? "":<MostrarResultados {...values}/>}
      {/* terminan resultados */}
    </div>
  );
};
