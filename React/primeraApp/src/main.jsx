import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Home from "./pages/Home";

/*
  Crear un componente "Lista" que reciba un array de strings llamado
  "caracteristicas" y que muestre una lista de elementos <li>
  y debes renderizar dos veces el componente con diferentes
  caracteristicas. (Utilizar .map para recorrer el array)

  ejercicio 2
  Crea un componente llamado "card" que reciba un objeto con
  las siguientes propiedades:
  {
    title: "Titulo de la card",
    description: "Descripción de la card",
    image: "url de la imagen",
  }
  y renderiza dos veces el componente con diferentes propiedades.
  Este componente además debe de tener un boton que diga "Ver más",
  debes usar el componente Button que ya hicimos. Y validar
  con PropTypes.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={<Button text="Hola Mundo 2" background="bg-green-600" />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
