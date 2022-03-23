export const weatherAPIBuscar = async (busqueda = "Tepotzotlan") => {
  const apiKey = "f16125a7de5881c4fe39f8b2bf43a096";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const resp = await fetch(url);
    const valores = await resp.json();
    console.log(valores);
    return valores;
  } catch (error) {
    console.log(error);
  }
};

export const weatherAPIUbicacion = async (lng, lat) => {
  const apiKey = "f16125a7de5881c4fe39f8b2bf43a096";
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=es&lat=${lat}&lon=${lng}`;

  try {
    const resp = await fetch(url);
    const valores = await resp.json();
    return valores;
    
  } catch (error) {
    console.log(error);
  }
};
