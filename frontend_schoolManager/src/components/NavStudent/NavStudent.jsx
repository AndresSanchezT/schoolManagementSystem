import React from 'react'
import './navStudent.css'
import { Link } from 'react-router-dom'

const NavListStudent = () => {
    return (
        <>
            <div className='container-fluid d-flex justify-content-between mb-2'>
                <div>
                    <Link to='/añadirEstudiante' className='btn btn-primary'>+ Nuevo Alumno</Link>

                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <label htmlFor="ebr">EBR</label>
                    <input type="checkbox" name="" id="ebr" />
                    <label htmlFor="ebr">CEBA</label>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="ebr">TODOS</label>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
            <div className="input-group mb-3">
                <button className="input-group-text btn btn-outline-primary" id="basic-addon1"><i className="bi bi-search"></i></button>
                <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
        </>
    )
}

export default NavListStudent