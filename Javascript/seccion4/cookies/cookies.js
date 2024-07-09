//solo puedes almacenar 4kb de informacion en una cookie

//Existen varios tipos de cookies

//Cookies de sesion : almacenar nombre de usuario, preferencia de idioma
//Cookies persistentes : almacenar configuraciones del sitio web, carrito de compras, nombre y contraseña

//secure cookies : las que hacen todo lo anterior pero de forma segura y encriptada

//zombie cookies: no se borran de ninguna forma, se regeneran si el navegador las borra.


const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const input = document.getElementById("usernameInput");
const deleteButton = document.getElementById("deleteButton");

function saveCookie(){
  if(!input.value){
    alert ("Por favor ingresa un nombre de usuario");
  }else if (input.value){
    let nombre = input.value;

    document.cookie = `nombreUsuario=${nombre}; expires=Sun, 14 Jul 2024 23:59:59`;
    alert("Se guardo la cookie con exito");
  }
}

saveButton.addEventListener("click", saveCookie);

function loadFromCookies(){
  //metodo 1 para buscar cookies
  const nombreUsuario = document.cookie.split('; ').find(c => c.startsWith('nombreUsuario=')).split('=')[1];

  //metodo 2 para buscar cookies
  //const nombreUsuario = document.cookie.match(/nombreUsuario=([^;]+)/)[1];

  //estas dos lineas traen algo asi

  let traen = ["nombreUsuario", "Jesus"]


  if(nombreUsuario){
    document.getElementById("username").innerText = nombreUsuario;
  }else {
    alert("No hay cookie");
  }
}

loadButton.addEventListener("click", loadFromCookies);