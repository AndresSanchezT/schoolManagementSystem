import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent ,updateStudent,addStudent} from "../../services/studentService/StudentService";
import dayjs from "dayjs";

export function useForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    
    const grados = {
        EBR: ['Inicial', 'Primaria', 'Secundaria'],
        EBA: ['Basico', 'Intermedio', 'Avanzado'],
        CEBA: ['Basico', 'Intermediario', 'Nocturno']
    };

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

    useEffect(() => {
        if (id) {
            const fetchStudent = async () => {
                try {
                    const { data } = await getStudent(id);
                    if (data) {
                        setForm({
                            ...data,
                            birthdate: data.birthdate ? dayjs(data.birthdate) : null,
                        });
                    } else {
                        console.error('Los datos del estudiante son inválidos.');
                    }
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchStudent();
        } else {
            setLoading(false);
        }
    }, [id]);

    const handleChange = (e) => {
       
        const { name, value } = e.target;
        if (value.startsWith(" ")) return;
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
            birthdate: newValue ? dayjs(newValue) : null,
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

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Si la validación falla, no hacer nada.
        }

        const student = { ...form };

        try {
            if (id) {
                await updateStudent(id, student);
            } else {
                await addStudent(student);
            }
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };


    return { form, handleChange, handleDateChange, handleModalidadChange, handleSubmit, errors, loading, grados };
}
