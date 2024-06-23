import { useContext, useEffect, useState } from "react";
import { deleteStudent, listStudent } from "../../services/studentService/StudentService";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../contexts/StudentContext";

export function useStudentList() {
    const { selectedModality, inputValue } = useContext(StudentContext);
    const [estudiantes, setEstudiantes] = useState([]);
    const [itemsPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);
    const navigator = useNavigate();

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

    const filteredStudents = estudiantes.filter(estudiante => {
        const matchesModality = selectedModality === 'TODOS' || estudiante.modality === selectedModality;
        const matchesNameOrDni = estudiante.name.toLowerCase().includes(inputValue.toLowerCase()) || estudiante.dni.includes(inputValue);
        return matchesModality && matchesNameOrDni;
    });

    const indexFin = currentPage * itemsPerPage;
    const indexIni = indexFin - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexIni, indexFin);

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
   

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return { handleDelete, updateStudent, currentStudents, currentPage, totalPages, nextPage, prevPage };
}
