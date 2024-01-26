import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URI = 'http://localhost:8000/curriculums/';

const ShowCurri = () => {
    const [curriculums, setCurri] = useState([]);

    useEffect(() => {
        getCurris();
    }, []);

    // Procedimiento para mostrar todos los curris
    const getCurris = async () => {
        try {
            const res = await axios.get(URI);
            setCurri(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Bienvenido</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ap.Paterno</th>
                                    <th>Ap.Materno</th>
                                    <th>Domicilio</th>
                                    <th>Telefono</th>
                                    <th>Experiencia</th>
                                    <th>Habilidades</th>
                                    <th>Educacion</th>
                                    <th>Idiomas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {curriculums.map((curriculum) => (
                                    <tr key={curriculum.id}>
                                        <td>{curriculum.nombre}</td>
                                        <td>{curriculum.apellido_paterno}</td>
                                        <td>{curriculum.apellido_materno}</td>
                                        <td>{curriculum.domicilio}</td>
                                        <td>{curriculum.telefono}</td>
                                        <td>{curriculum.experiencia}</td>
                                        <td>{curriculum.habilidades}</td>
                                        <td>{curriculum.educacion}</td>
                                        <td>{curriculum.idiomas}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCurri;
