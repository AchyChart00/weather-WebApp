

export const getUserLocation = () => {

  //obtener la ubicación del usuario
   return new Promise((resolve, reject) => {
     navigator.geolocation.getCurrentPosition(
       ({coords})=>{
         resolve([coords.longitude, coords.latitude]);
       },
       (err)=>{
        alert("No se pudo obtener la geolocalización");
        console.log(err);
        reject();
       }
     )
   })
}
