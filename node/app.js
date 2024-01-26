import express from "express";
import cors from 'cors';
// Importamos la conexión con la base de datos
import db from "./database/db.js";
import blogRoutes from "../node/routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
// Corregimos la ruta para usar '/blogs' en lugar de 'blogs'
app.use('/curriculums', blogRoutes);

// Usamos un bloque try-catch para manejar errores en la conexión a la base de datos
try {
  await db.authenticate();
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.error(`Error en la conexión a la base de datos: ${error}`);
}

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
