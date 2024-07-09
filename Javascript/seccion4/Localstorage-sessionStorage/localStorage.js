//Diferencia entre LocalStorage 

//nos permite almacenar datos de forma persistente en el navegador

//nos sirve para almacenar configuraciones del sitio web

//Session Storage

//nos permite almacenar datos de la sesion del navegador

//almacenar datos de un carrito de compras


//Ambos comparten metodos de acceso a datos

/* -setItem(clave, valor) //Guarda la clave y el valor en el LocalStorage

-getItem(clave) //nos traera el valor de la clave que solicitamos

-removeItem(clave) //Elimina la clave y su valor del LocalStorage

clear() //para todos los datos almacenados */


//En el local storage y session solo se pueden almacenar maximo 5mb


//ejemplos de uso

//setItem sirve para actualizar y crear nuevos elementos del local/session Storage

//localStorage.setItem("nombre", "Jesus");

//console.log(localStorage.getItem("nombre"));

//localStorage.removeItem("nombre");

//localStorage.clear();

let carrito ={
  productos : ["Libro", "Pantalon", "Zapatos"],
  total: 0
}

let numeros = [1,2,3,4,5,6,7,8,9,10]

//localStorage.setItem("numeros",numeros)

//console.log(typeof localStorage.getItem("carrito"))

/* let string = "de esta forma"

localStorage.setItem("Ejemplo", carrito)

//convertir objeto a JSON
localStorage.setItem("carrito", JSON.stringify(carrito))


//al traerlo lo convertimos de nuevo en su tipo original
const carrito2 = JSON.parse(localStorage.getItem("carrito"))

console.log(carrito2) */

const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");

function saveToLocalStorage(){
  const objetoAnidado = {
    prop1: {
      "subprop1": "valor1",
      "subprop2": "valor2"
    },
    prop2: [1, 2, 3]
  };

  const convertToJSON = JSON.stringify(objetoAnidado);

  sessionStorage.setItem("objetoAnidado", convertToJSON);
  alert("Se guardo con exito");
}

function loadFromLocalStorage(){
  const objetoAnidadJSON = sessionStorage.getItem("objetoAnidado");

  //convertir de nuevo a array anidado

  const objetoAnidado = JSON.parse(objetoAnidadJSON);

  if (objetoAnidado){
    console.log(objetoAnidado);
  }else{
    alert("No hay datos");
  }
}

saveButton.addEventListener("click", saveToLocalStorage);
loadButton.addEventListener("click", loadFromLocalStorage);