// NavStudent.jsx
import React, { useContext } from 'react';
import './navStudent.css';
import { Link } from 'react-router-dom';
import { StudentContext } from './StudentContext';

const NavStudent = () => {
    const { selectedModality, setSelectedModality } = useContext(StudentContext);

    const handleCheckboxChange = (event, modality) => {
        setSelectedModality(modality);
    };

    return (
        <>
            <div className='container-fluid d-flex justify-content-between mb-2'>
                <div>
                    <Link to='/añadirEstudiante' className='btn btn-primary'>+ Nuevo Alumno</Link>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <label htmlFor="ebr">EBR</label>
                    <input
                        type="checkbox"
                        id="ebr"
                        checked={selectedModality === 'EBR'}
                        onChange={(e) => handleCheckboxChange(e, 'EBR')}
                    />

                    <label htmlFor="eba">EBA</label>
                    <input
                        type="checkbox"
                        id="eba"
                        checked={selectedModality === 'EBA'}
                        onChange={(e) => handleCheckboxChange(e, 'EBA')}
                        
                    />

                    <label htmlFor="ceba">CEBA</label>
                    <input
                        type="checkbox"
                        id="ceba"
                        checked={selectedModality === 'CEBA'}
                        onChange={(e) => handleCheckboxChange(e, 'CEBA')}
                    />
                    <label htmlFor="todos">TODOS</label>
                    <input
                        type="checkbox"
                        id="todos"
                        checked={selectedModality === 'TODOS'}
                        onChange={(e) => handleCheckboxChange(e, 'TODOS')}
                    />
                </div>
            </div>
        </>
    );
};

export default NavStudent;
