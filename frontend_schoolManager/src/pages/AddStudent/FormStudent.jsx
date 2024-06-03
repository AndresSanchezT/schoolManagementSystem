import React from 'react'
import './formStudent.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormInput, FormRadio } from './FormComponents';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/studentForm/UseForm';


const AddStudent = () => {
    const { form, handleChange, handleDateChange, handleModalidadChange, handleSubmit, errors, loading, grados } = useForm();
    //console.log("render")
    return (
        <div className='container p-4 custom-scroll'>
            <Link to='/' className='btn btn-primary'>Atras</Link>
            {loading ? (
                <div>Cargando datos...</div>
            ) : (
                <form className="row mt-4 g-1" onSubmit={handleSubmit}>
                    <div className='row'>
                        <FormInput label="Nombre" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                        <FormInput label="Apellido" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} />
                        <FormInput label="DNI" name="dni" value={form.dni} onChange={handleChange} error={errors.dni} />
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <label htmlFor="modality" className="form-label">Modalidad</label>
                            <select id="modality" name="modality" className="form-select" value={form.modality} onChange={handleModalidadChange}>
                                <option value="EBR">EBR</option>
                                <option value="EBA">EBA</option>
                                <option value="CEBA">CEBA</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="degree" className="form-label">Grado</label>
                            <select id="degree" name="degree" className="form-select" value={form.degree} onChange={handleChange}>
                                {grados[form.modality].map((grado, index) => (
                                    <option key={index} value={grado}>{grado}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <FormRadio label="Sexo" name="gender" options={['Masculino', 'Femenino']} value={form.gender} onChange={handleChange} />
                    </div>
                    <div className='row'>
                        <FormInput label="Correo" name="email" value={form.email} onChange={handleChange} error={errors.email} />
                    </div>
                    <div className='row'>
                        <FormInput label="Celular" name="contactNumber" value={form.contactNumber} onChange={handleChange} error={errors.contactNumber} />
                    </div>
                    <div className='row'>
                        <FormInput label="Domicilio" name="address" value={form.address} onChange={handleChange} />
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <label htmlFor="birthdate" className="form-label">Fecha de Nacimiento</label>
                            <div className='col-md-12'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={form.birthdate}
                                        onChange={handleDateChange}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <FormInput label="Nombre del Padre" name="fatherName" value={form.fatherName} onChange={handleChange} error={errors.fatherName} />
                        <FormInput label="Nombre de la Madre" name="motherName" value={form.motherName} onChange={handleChange} error={errors.motherName} />
                        <FormInput label="Celular de los Padres" name="cellphoneNumber" value={form.cellphoneNumber} onChange={handleChange} error={errors.cellphoneNumber} />
                    </div>
                    <div className='row'>
                        <FormInput label="Colegio de Procedencia" name="previousSchoolName" value={form.previousSchoolName} onChange={handleChange} />
                    </div>
                    <div className='row'>
                        <FormRadio label="Turno" name="shift" options={['Mañana', 'Tarde', 'Normal']} value={form.shift} onChange={handleChange} />
                    </div>
                    <div className='row'>
                        <FormInput label="Observaciones" name="observations" value={form.observations} onChange={handleChange} />
                    </div>
                    <div className='row'>
                        <FormRadio label="Estado" name="state" options={['Activo', 'Inactivo', 'Retirado']} value={form.state} onChange={handleChange} />
                    </div>
                    <div className="col-12 mt-5">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddStudent;
