// importamos la conexion a la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Blogmodel = db.define('curriculums', {
   nombre: { type: DataTypes.STRING },
   apellido_materno: { type: DataTypes.STRING },
   apellido_paterno: { type: DataTypes.STRING },
   domicilio: { type: DataTypes.STRING },
   telefono: { type: DataTypes.STRING },
   experiencia: { type: DataTypes.STRING },
   educacion: { type: DataTypes.STRING }, 
   habilidades: { type: DataTypes.STRING }, 
   idiomas: { type: DataTypes.STRING }
});

export default Blogmodel; 