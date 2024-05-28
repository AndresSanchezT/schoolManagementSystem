package backendems.project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "estudiantes")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long   id;


    private String name;


    private String lastName;

    @NotNull

    private String dni;

    private String modality;
    private String degree;
    private String gender;
    private String email;


    private String contactNumber;

    private String address;
    private LocalDate birthdate;


    /*********************FATHER DATA**********************/

    private String fatherName;

    private String motherName;

    private String cellphoneNumber;
    private LocalDateTime registrationDate;

    /******************************************************/


    private String previousSchoolName;
    private String shift;
    private String observations;


    private String state;

    @PrePersist
    private void registrationDate() {
        registrationDate = LocalDateTime.now();
    }

}
