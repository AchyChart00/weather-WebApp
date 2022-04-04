export const getHistorial = async () => {
  const apiDev = `http://localhost:5000/busquedas/historial`;
  //const apiProd = ``;

  const resp = await fetch(apiDev);
  const { busqueda } = await resp.json();
  console.log(busqueda);

  return busqueda;
};

export const addHistorial = async ({
    des,
    nombre,
    lat,
    lon,
    country,
    img,
    temp,
  }) => {

  const apiDev = `http://localhost:5000/busquedas/add`;

  const update = {
    description: des,
    name: nombre,
    lat: lat,
    lon: lon,
    country: country,
    image: img,
    temp: temp,
  };

  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };

  //const apiProd = ``;

  const resp = await fetch(apiDev, options);
  const valores = await resp.json();
  console.log(valores);
};
