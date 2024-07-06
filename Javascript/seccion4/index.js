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

//Metodos HTTP

//Get : para pedir u obtener datos (informacion)

//Post : para enviar datos (informacion)

//Put/Patch : para modificar datos (informacion)

let usuario = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela",
  estaActivo: false
}

//Delete : Sirve para borrar datos (Informacion) 

//los estados de las API son:

//-Respuesta correcta (200,201,204)
//-Respuesta incorrecta (400,404,500)
//-Error interno (500)

//JSON

//JavasCript Object Notation

//Esto es un JSON
{
  "nombre": "delvis",
  "apellido": "Sanabria",
  "pais": "venezuela"
}


//Esto es un objeto
let persona = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela"
}

//Fetch

//Es la API nativa de javascript que nos sirve para obtener u enviar datos, atraves de peticiones HTTP
//const ApiDatos = "https://rickandmortyapi.com/api/character/1";

fetch(ApiDatos)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

function ObtenerDatos(idUsuario){
  return new Promise((resolve, reject)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))
  })
}

ObtenerDatos(1).then(data => console.log(data));

//funciones Asyn-Await

//Async Nos da a entender que la funcion que viene a continuacion es una funcion asincrona, que devuelve una promesa

//await Nos da a entender que se debe completar la ejecucion de la funcion que la precede
// antes de seguir con la ejecucion de la linea de codigo

const ApiDatos = "https://rickandmortyapi.com/api/character/1";

async function obtenerPersonaje(){
  try {
    const response = await fetch(ApiDatos);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally{
    console.log("la funcion se ejecuto")
  }
}

obtenerPersonaje()

//Desectructuracion de objetos

const numero = [1,2,3,4,5,6,7,8,9,10];

const [primero, segundo, tercero,cuarto,quinto, ...resto] = numero;

const nombres1 = ["Roberto", "Jesus", "Delvis", "Franciely"];

const NombreQueQuiero = nombres1[3];

console.log(NombreQueQuiero)


console.log(primero)
console.log(segundo)
console.log(tercero)

//Para objetos

const persona1 = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela",
}
//para desestructurar sacamos las propiedades del objeto en variables individuales
const {nombre, apellido, pais} = persona1;

//Desestructurado
console.log(apellido)
//No desestructurado
console.log(persona1.apellido)
