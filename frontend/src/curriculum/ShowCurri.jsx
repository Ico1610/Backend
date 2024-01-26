import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/curriculums/';

const CompShowCurri = () => {
    const [curriculums, setCurri]=useState([])
    useEffect(()=>{
        getCurris()
    },[])
/// Procedimiento para mostrar todos los curris
    const getCurris = async () =>{
        const res= await axios.get(URI)
        setCurri(res.data)
    }

/// Procedimiento para eliminar los curri
    const deletecurri = async(id) => {
        axios.delete(`${URI}${id}`)
        getCurris()

    }
return(
    <div>
        <h1>Bienvenido</h1>
        <Link to="/create" className='btn btn-primary'>Crear</Link>
        <div className='contanier'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Curriculum</th>

                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {curriculums.map((curriculum)=>(
                                <tr key={curriculum.id}>
                                        <td>{curriculum.nombre}</td>

                                        <td>
                                            <Link to={`/edit/${curriculum.id}`} className='btn btn-info'>Editar</Link>
                                            <button onClick={()=>deletecurri(curriculum.id)}className='btn btn-danger'>Eliminar</button>
                                            
                                            <Link to={`/view/${curriculum.id}`}className='btn btn-success'>ver</Link>

                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
            </div>                        
        </div>
    )

}

export default CompShowCurri