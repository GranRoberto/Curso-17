// Geolocation API

 //navigator es un objeto que nos permite acceder a la API de geolocalización

 //navigato.geolocation nos permite acceder a la informacion de la ubicacion del usuario en forma 
// objeto

//navigator.geolocation.getCurrentPosition nos permite acceder y traer la informacion de el usuario

// watchPosition nos permite observar la ubicacion del usuario y poder controlar la informacion

//ClearWatch  detiene el seguimiento realizado por WatchPosition

//coords nos permite acceder a la informacion de la ubicacion del usuario 

//timestamp nos permite acceder al tiempo de la ubicacion del usuario

//errors nos permite acceder al error de la ubicacion del usuario

const longitud = document.getElementById("longitud");
const latitud = document.getElementById("latitud");
const altitud = document.getElementById("altitud");
const precision = document.getElementById("precision");
const velocidad = document.getElementById("velocidad");
const direccion = document.getElementById("direccion");

//Ejemplo 

/* if ("geolocation" in navigator) {
    console.log("Tu navegador soporta la API Geolocation");

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);

            let user_latitude = position.coords.latitude;
            let user_longitude = position.coords.longitude;
            let user_altitude = position.coords.altitude;
            let user_precision = position.coords.accuracy;
            let user_velocidad = position.coords.speed;
            let user_direccion = position.coords.heading;

            let user_date = new Date(position.timestamp).toLocaleDateString("es-ES");

            console.log(user_latitude);
            console.log(user_longitude);
            console.log(user_altitude);
            console.log(user_precision);
            console.log(user_velocidad);
            console.log(user_direccion);
            console.log(user_date);
        },
        (error) => {
            console.log(error);
        })
} else{
    console.log("Tu navegador no soporta la API Geolocation");
} */

    if ("geolocation" in navigator) {
      console.log("Tu navegador soporta la API Geolocation");
  
      navigator.geolocation.watchPosition(
          (position) => {
              console.log(position);
  
              let user_latitude = position.coords.latitude;
              let user_longitude = position.coords.longitude;
              let user_altitude = position.coords.altitude;
              let user_precision = position.coords.accuracy;
              let user_velocidad = position.coords.speed;
              let user_direccion = position.coords.heading;
  
              let user_date = new Date(position.timestamp).toLocaleDateString("es-ES");
  
              longitud.innerText = user_longitude || "Sin datos";
              latitud.innerText = user_latitude || "Sin datos";
              altitud.innerText = user_altitude || "Sin datos";
              precision.innerText = user_precision || "Sin datos";
              velocidad.innerText = user_velocidad || "Sin datos";
              direccion.innerText = user_direccion || "Sin datos";
              //date.innerText = user_date || "Sin datos";

              setTimeout(() => {
                  navigator.geolocation.clearWatch(position);
              }, 8000);
          },
          (error) => {
              console.log(error);
          })
  } else{
      console.log("Tu navegador no soporta la API Geolocation");
  }

function ubicarme(){
  const status = document.getElementById("status");
  const coordenadas = document.getElementById("map-link");

  function success(ubicacion){
    const latitud =  ubicacion.coords.latitude;
    const longitud = ubicacion.coords.longitude;

    status.innerText = `Tu ubicacion es ${latitud}, ${longitud}`;
    coordenadas.href = `https://www.google.com/maps/@${latitud},${longitud},80m/data=!3m1!1e3?entry=ttu`;

    coordenadas.innerText = `Ver en el mapa tus cordenadas`; 
  }

  function error(){
    status.innerText = "No se pudo obtener tu ubicacion";
  }

  if (navigator.geolocation){
    status.innerText = "Localizando...";
    navigator.geolocation.getCurrentPosition(success, error);
  }else {
    status.innerText = "Tu navegador no soporta la API Geolocation";
  }
}

document.getElementById("encontrarme").addEventListener("click", ubicarme);