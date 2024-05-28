package backendems.project.controller;

import backendems.project.models.Student;
import backendems.project.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/w1")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/estudiantes")
    public List<Student> studentList() {
        return studentService.listStudents();
    }

    @PostMapping("/estudiantes")
    public Student guardarEstudiante(@Valid @RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @GetMapping("/estudiantes/{id}")
    public ResponseEntity<Student> listarEstudiantePorId(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    @PutMapping("estudiantes/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student student) {
        Student estudianteExistente = studentService.getStudentById(id);
        estudianteExistente.setId(id);
        estudianteExistente.setName(student.getName());
        estudianteExistente.setLastName(student.getLastName());
        estudianteExistente.setDni(student.getDni());
        estudianteExistente.setModality(student.getModality());
        estudianteExistente.setDegree(student.getDegree());
        estudianteExistente.setGender(student.getGender());
        estudianteExistente.setEmail(student.getEmail());
        estudianteExistente.setContactNumber(student.getContactNumber());
        estudianteExistente.setAddress(student.getAddress());
        estudianteExistente.setBirthdate(student.getBirthdate());
        estudianteExistente.setFatherName(student.getFatherName());
        estudianteExistente.setMotherName(student.getMotherName());
        estudianteExistente.setCellphoneNumber(student.getCellphoneNumber());
        estudianteExistente.setPreviousSchoolName(student.getPreviousSchoolName());
        estudianteExistente.setShift(student.getShift());
        estudianteExistente.setObservations(student.getObservations());
        estudianteExistente.setState(student.getState());
        estudianteExistente.setRegistrationDate(student.getRegistrationDate());

        Student estudianteActualizado = studentService.updateStudent(estudianteExistente);
        return ResponseEntity.ok(estudianteActualizado);
    }

    @DeleteMapping("/estudiantes/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStudy(@PathVariable Long id) {
        studentService.deleteStudent(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}