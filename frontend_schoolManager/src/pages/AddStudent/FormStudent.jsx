import React, { useState } from 'react';
import './formStudent.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { FormInput, FormRadio } from './FormComponents';
import { addStudent } from '../../services/studentService/StudentService';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigator = useNavigate()

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        dni: '',
        modality: 'EBR',
        degree: '',
        gender: '',
        email: '',
        contactNumber: '',
        address: '',
        birthdate: null,
        fatherName: '',
        motherName: '',
        cellphoneNumber: '',
        previousSchoolName: '',
        shift: '',
        observations: '',
        state: '',
    });

    const [errors, setErrors] = useState({});

    const grados = {
        EBR: ['Inicial', 'Primaria', 'Secundaria'],
        EBA: ['Basico', 'Intermedio', 'Avanzado']
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleModalidadChange = (e) => {
        const modalidad = e.target.value;
        setForm((prevForm) => ({
            ...prevForm,
            modality: modalidad,
            degree: grados[modalidad][0]
        }));
    };

    const handleDateChange = (newValue) => {
        setForm((prevForm) => ({
            ...prevForm,
            birthdate: newValue ? dayjs(newValue).format('YYYY-MM-DD') : null,
        }));
    };

    const validateForm = () => {
        let errors = {};

        if (!form.name.match(/^[a-zA-Z]+$/)) {
            errors.name = 'El campo solo debe contener letras.';
        }
        if (!form.lastName.match(/^[a-zA-Z]+$/)) {
            errors.lastName = 'El campo solo debe contener letras.';
        }
        if (!form.dni.match(/^\d{8}$/)) {
            errors.dni = 'El DNI debe tener 8 dígitos.';
        }
        if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'El correo debe ser válido.';
        }
        if (form.contactNumber && !/^\d+$/.test(form.contactNumber)) {
            errors.contactNumber = 'El campo solo puede contener números.';
        }
        if (form.fatherName && !/^[a-zA-Z]+$/.test(form.fatherName)) {
            errors.fatherName = 'El campo solo debe contener letras.';
        }
        if (form.motherName && !/^[a-zA-Z]+$/.test(form.motherName)) {
            errors.motherName = 'El campo solo debe contener letras.';
        }
        if (form.cellphoneNumber && !/^\d+$/.test(form.cellphoneNumber)) {
            errors.cellphoneNumber = 'El campo solo puede contener números.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const student = {
                name: form.name,
                lastName: form.lastName,
                dni: form.dni,
                modality: form.modality,
                degree: form.degree,
                gender: form.gender,
                email: form.email,
                contactNumber: form.contactNumber,
                address: form.address,
                birthdate: form.birthdate,
                fatherName: form.fatherName,
                motherName: form.motherName,
                cellphoneNumber: form.cellphoneNumber,
                previousSchoolName: form.previousSchoolName,
                shift: form.shift,
                observations: form.observations,
                state: form.state
            };

            addStudent(student);
            navigator("/")
            console.log(form);
            // Aquí puedes manejar el envío del formulario
        }
    };
    return (
        <div className='container p-4 custom-scroll'>
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
                                    value={form.birthdate ? dayjs(form.birthdate) : null}
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
        </div>
    );
};

export default AddStudent;
