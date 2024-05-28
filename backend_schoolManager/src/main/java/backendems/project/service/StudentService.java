package backendems.project.service;

import backendems.project.models.Student;

import java.util.List;

public interface StudentService {
    public List<Student> listStudents();

    public Student addStudent(Student student);

    public Student getStudentById(Long id);

    public Student updateStudent(Student student);

    public void deleteStudent(Long id);
}
