import express, { json } from 'express'; //importamos express
import mongoose from 'mongoose';
const app = express(); // Crear el servidor ejecutando express
const port = 3001;//crear un puerto
app.use(json());// Middleware para parsear JSON

// Utilizar mongoose para conectarnos a MongoDB
connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/api');
}

// Definir un schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, validate: /^[a-zA-Z0-9 ]+$/, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  image: { type: String },
  free_shipping: { type: Boolean, default: false },
  shipping_cost: { type: Number, default: 0, min: 0 },
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API con Express');
});
app.get('/productos', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200
    }
  ]);
});

// Ruta con parámetros
app.get('/productos/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    nombre: `Producto ${id}`,
    precio: 100 * id
  });
});

// Ruta con query params
app.get('/mensaje', (req, res) => {
  const { nombre, apellido } = req.query;
  res.json({ mensaje: `Hola ${nombre} ${apellido}` });
});



//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
