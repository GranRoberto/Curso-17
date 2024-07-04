try {
  console.log("Este es nuestro bloque a ejecutar")
} catch (error) {
  throw new Error("Ocurrio un error al traer los datos")
}

//Reference Error 

try {
  console.log(miVariable);
}catch(error){
  if(error instanceof ReferenceError){
  console.log("Error de referencia: la variable mivariable no esta definida")
  }else{
    console.error("Error inesperado: " , error)
  }
}

//SyntaxError

try {
  console.log(miFuncion();
} catch (error) {
  if (error instanceof SyntaxError){
    console.error("Error de sintaxis: Falta un parentesis")
  } else{
    console.error("Ha ocurrido sepa dios cual es")
  }
}

//TypeError

try {
  let notAfunction = 123;
  notAfunction()
} catch (error) {
  if(error instanceof TypeError){
  console.error("Erro de tipo: no puedes llamar como funcion a algo que no es una funcion")
  }
}

let numeros = 1234;

numeros.toUpperCase()

//Asincronia


//El callbacks 

function agregar (miArray, miCallback){
  miArray.push("Delvis");
  miCallback();
}

let nombres = ["Roberto", "Jesus"];

agregar(nombres, ()=>{
  console.log("Hemos agregado un nombre");
  console.log(nombres);
})

//Con callbacks
function cargarImagenes(urlImagen, callback){
  const imagen = new Image()
  imagen.src = urlImagen
  imagen.onload = ()=> callback(imagen)
  
}

cargarImagenes("https://imagen.ejemplo.com/foto.jpg", (imagenCargada)=>{
console.log("la imagen cargo")
document.body.appendChild(imagen)
})

//Sin usar Callbacks
const imagen = new Image()

function crearImagenes(urlImagen){
  imagen.src = urlImagen
  
}

function cargarImagen(imagen){
  imagen.onload = document.body.appendChild(imagen)
}

crearImagenes("https://imagen.ejemplo.com/foto.jpg");
cargarImagen(imagen)

//SetInterval:

setInterval(()=>{
  console.log("Hola desde el setInterval")
},2000)

//SetTimeout

setTimeout(()=>{
  console.log("Hola desde el setTimeout")
},5000)

//Promesas

//

const datos = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela"
}

const miPromesa = new Promise(
  //Cualquier cosa
  (resolve, reject)=>{
    if(datos){
      resolve("Se cumplio la promesa")
    }else{
      reject("no se cumplio la promesa")
    }
});

miPromesa.then(
  function(respuesta){
    console.log(`La respuesta fue: ${respuesta}`)
  }
).catch(
  function(error){
    console.log(`La respuesta fue: ${error}`)
  }
)