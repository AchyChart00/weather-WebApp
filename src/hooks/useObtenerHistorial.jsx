import { useEffect, useState } from "react";
import { addHistorial, getHistorial } from "../helpers/getHistorial";

export const useObtenerHistorial = () => {
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getHistorial().then((busqueda) => {
      console.log(busqueda);
      setState(busqueda);
      setLoading(false);
    });
  }, []);

  return [state, isLoading];
};

export const useAgregarBusqueda = (datos) => {
  
  useState(() => {
    addHistorial(datos);
  });
};
