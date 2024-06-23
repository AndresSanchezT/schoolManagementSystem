// NavStudent.jsx
import React, { useContext } from 'react';
import './navStudent.css';
import { Link } from 'react-router-dom';
import { StudentContext } from '../../contexts/StudentContext';

const NavStudent = () => {
    const { selectedModality, setSelectedModality, inputValue, setInputValue } = useContext(StudentContext);


    const handleCheckboxChange = (modality) => {
       
        // Solo actualizar si la modalidad seleccionada es diferente
        if (selectedModality !== modality) {
            setSelectedModality(modality);
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value)
    };

    return (
        <>
            <div className='container-fluid d-flex justify-content-between mb-2'>
                <div>
                    <Link to='/añadirEstudiante' className='btn btn-primary'>+ Nuevo Alumno</Link>
                    <input type="text" value={inputValue} onChange={handleInputChange} className='ms-3'/>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <label htmlFor="ebr">EBR</label>
                    <input
                        type="checkbox"
                        id="ebr"
                        checked={selectedModality === 'EBR'}
                        onChange={() => handleCheckboxChange('EBR')}
                    />

                    <label htmlFor="eba">EBA</label>
                    <input
                        type="checkbox"
                        id="eba"
                        checked={selectedModality === 'EBA'}
                        onChange={() => handleCheckboxChange('EBA')}
                    />

                    <label htmlFor="ceba">CEBA</label>
                    <input
                        type="checkbox"
                        id="ceba"
                        checked={selectedModality === 'CEBA'}
                        onChange={() => handleCheckboxChange('CEBA')}
                    />
                    <label htmlFor="todos">TODOS</label>
                    <input
                        type="checkbox"
                        id="todos"
                        checked={selectedModality === 'TODOS'}
                        onChange={() => handleCheckboxChange('TODOS')}
                    />
                </div>
            </div>
        </>
    );
};

export default NavStudent;
