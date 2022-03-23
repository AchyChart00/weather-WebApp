
import { useEffect, useState } from 'react';
import { getUserLocation } from '../helpers/getUserLocation';

export const useFetchGeo = () => {

    const [datos, setDatos] = useState({
        LngLat: [0, 0],
      });

    useEffect(() => {
        getUserLocation().then((lngLat) => {
          setDatos({
            LngLat: lngLat
          });
        });
      }, []);

      const {LngLat} = datos

      return LngLat;
}
