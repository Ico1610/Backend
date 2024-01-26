import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/curriculums/';

const CompEditCurri = () => {
    const [nombre, setNombre] = useState('')
    const [apellido_paterno, setPaterno] = useState('')
    const [apellido_materno, setMaterno] = useState('')
    const [domicilio, setDomi] = useState('')
    const [telefono, setTelfono] = useState('')
    const [experiencia, setExp] = useState('')
    const [educacion, setEdu] = useState('')
    const [idiomas, setIdio] = useState('')
    const [habilidades, setHabi] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()


    const update= async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{nombre:nombre, apellido_paterno:apellido_paterno, apellido_materno:apellido_materno, domicilio:domicilio, telefono:telefono ,experiencia:experiencia, educacion:educacion, idiomas:idiomas, habilidades:habilidades})
        navigate('/')
    }

    useEffect(()=>{
        getCurriById()
    },[])
    const getCurriById = async() =>{
        await axios.get(URI+id)
        setNombre(res.data.nombre)
        setPaterno(res.data.apellido_paterno)
        setMaterno(res.data.apellido_materno)
        setDomi(res.data.domicilio)
        setTelfono(res.data.telefono)
        setExp(res.data.experiencia)
        setEdu(res.data.educacion)
        setIdio(res.data.idiomas)
        setHabi(res.data.habilidades)
    }
    return(
        <div>
            <h1> Crear curriculum</h1>
            <h3>Datos Personales</h3>
            <form onSubmit={update}>
            <div class="mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                 </div>
                 <br/>
                 <div class="col">
                    <input type="text" class="form-control" placeholder="Apellido paterno" value={apellido_paterno} onChange={(e)=> setPaterno(e.target.value)}/>
                 </div>
                 <br/>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Apellido materno" value={apellido_materno} onChange={(e)=> setMaterno(e.target.value)}/>
                </div>
                <br/>
                <div class="col">
                    <textarea
                        value={domicilio}
                        onChange={(e)=> setDomi(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Domicilio"
                    />
                </div>
                <br/>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Telefono" value={telefono} onChange={(e)=> setTelfono(e.target.value)}/>
                </div>
                </div>
                <h3>Experiencia laboral</h3>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Experiencia" value={experiencia} onChange={(e)=> setExp(e.target.value)}/>
                 </div>
                 <br/>
                 <div class="col">
                    <input type="text" class="form-control" placeholder="Habilidades" value={habilidades} onChange={(e)=> setHabi(e.target.value)}/>
                 </div>
                <h3>Escolaridad </h3>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Escolaridad" value={educacion} onChange={(e)=> setEdu(e.target.value)}/>
                 </div>
                 <br/>
                 <div class="col">
                    <input type="text" class="form-control" placeholder="Idiomas" value={idiomas} onChange={(e)=> setIdio(e.target.value)}/>
                 </div>
                 <button type='submit' className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default CompEditCurri