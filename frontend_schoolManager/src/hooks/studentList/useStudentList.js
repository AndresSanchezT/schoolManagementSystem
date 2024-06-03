import { useContext, useEffect, useState } from "react";
import { deleteStudent, listStudent } from "../../services/studentService/StudentService";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../components/NavStudent/StudentContext";

export function useStudentList () {
    const { selectedModality, inputValue } = useContext(StudentContext);
    const [estudiantes, setEstudiantes] = useState([]);
    const navigator = useNavigate();

    const handleDelete = async (studentId) => {
        try {
            await deleteStudent(studentId);
            const updatedStudents = estudiantes.filter(student => student.id !== studentId);
            setEstudiantes(updatedStudents);
        } catch (err) {
            console.error(err);
        }
    };

    const updateStudent = (id) => {
        navigator(`/editarEstudiante/${id}`);
    }

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await listStudent();
                setEstudiantes(data);
            } catch (err) {
                console.error("Error fetching students:", err);
            }
        };

        fetchStudents();
    }, []);

    const filteredStudents = estudiantes.filter(estudiante => {
        if (selectedModality === 'TODOS' || estudiante.modality === selectedModality) {
            return estudiante.name.toLowerCase().includes(inputValue.toLowerCase());
        }
        return false;
    });

    return { handleDelete, updateStudent, filteredStudents }
}

