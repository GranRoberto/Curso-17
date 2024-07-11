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
    //para obtener la fecha actual

    let objetoAnidado = {
      nombre: "delvis",
      apellido: "Sanabria",
      pais: "venezuela"
    }

    let ObjetoJSOn = JSON.stringify(objetoAnidado);
    let date = new Date();
    //para establecer la fecha de expiración
    date.setTime(date.getTime() + 80000); //le pasas milisegundos

    document.cookie = `nombreUsuario=${ObjetoJSOn}; expires=${date.toUTCString()};`;
    alert("Se guardo la cookie con exito");
  }
}


//para actualizar una cookie
function updateCookie(){
  if(!input.value){
    alert ("Por favor ingresa un nombre de usuario para actualizar");
  }else if (input.value){
    let nombre = input.value;
    //para obtener la fecha actual
    let date = new Date();
    //para establecer la fecha de expiración
    date.setTime(date.getTime() + 80000); //le pasas milisegundos

    document.cookie = `username=${nombre}; expires=${date.toUTCString()};`;
    //document.cookie = `username=${nombre}; expires=${date.toUTCString()}; path=/; domain=127.0.0.1:5500; secure`;
    alert("Se guardo la cookie con exito");
  }
}

saveButton.addEventListener("click", saveCookie);

function loadFromCookies(){
  //metodo 1 para buscar cookies
  const nombreUsuario = document.cookie.split('; ').find(c => c.startsWith('nombreUsuario=')).split('=')[1];

  /* let cookie = document.cookie;

  console.log(cookie);

  cookie = cookie.split('; ');
  console.log(cookie);

  cookie = cookie.find(c => c.startsWith('DatosUsuario='));
  console.log(cookie);

  cookie = cookie.split('=')[1];
  console.log(cookie); */

  //metodo 2 para buscar cookies
  //const nombreUsuario = document.cookie.match(/nombreUsuario=([^;]+)/)[1];

  //estas dos lineas traen algo asi

  let traen = ["nombreUsuario", "Jesus"]


  if(nombreUsuario){
    let usuarioConvertido = JSON.parse(nombreUsuario);
    document.getElementById("username").innerText = usuarioConvertido.nombre;
    console.log(usuarioConvertido);
  }else {
    alert("No hay cookie");
  }
}

loadButton.addEventListener("click", loadFromCookies);

//Borrar la cookie

function deleteCookie(){
  document.cookie = "nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  alert("Se elimino la cookie con exito");
  input.value = "";
  document.getElementById("username").innerText = "";
}

deleteButton.addEventListener("click", deleteCookie);