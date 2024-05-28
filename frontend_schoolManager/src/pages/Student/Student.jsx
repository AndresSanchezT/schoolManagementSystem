import React, { useEffect, useState } from 'react'
import {listStudent} from '../../services/studentService/StudentService.jsx'
import NavStudent from '../../components/NavStudent/NavStudent.jsx'
import './student.css'

const TableStudent = () => {
    const [estudiantes, setEstudiantes] = useState([])

    useEffect(() => {
        listStudent().then(res => {
                setEstudiantes(res.data)
                console.log(estudiantes)
            })
            .catch(err => {
                console.error("Error fetching students:", err);
            });
    }, [])

    return (
        <div className='container-fluid px-5 py-3'>
            <NavStudent />
            <div className='table-fluid'>
                <div className='table'>
                    <thead>
                        <tr className='table-danger'>
                            <th className='col-1'>NOMBRES</th>
                            <th className='col-1'>EDAD</th>
                            <th className='col-1'>TURNO</th>
                            <th className='col-1'>GRADO</th>
                            <th className='col-1'>MODALIDAD</th>
                            <th className='col-1'>ESTADO</th>
                            <th className='col-1 text-center'>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.map(estudiante => {
                            return (
                                <tr className='table-primary' key={estudiante.id}>
                                    <td>{estudiante.fatherName}</td>
                                    <td>{estudiante.age}</td>
                                    <td>{estudiante.name}</td>
                                    <td>{estudiante.classroom}</td>
                                    <td>{estudiante.name}</td>
                                    <td>{estudiante.name}</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button type="button" className="btn btn-danger btn-sm ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                                                </svg>
                                            </button>
                                            <button className='btn btn-primary btn-sm'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16">
                                                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
                                                </svg>
                                            </button>
                                            <button className='btn btn-transparent btn-sm'>
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </div>
            </div>
        </div>
    )
}

export default TableStudent