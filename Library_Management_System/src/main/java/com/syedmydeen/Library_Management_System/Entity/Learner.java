package com.syedmydeen.Library_Management_System.Entity;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table
public class Learner {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long learnerId;
    private Long learnerBook;
    private String learnerName;
    private Long learnerAge;
    private String learnerProof;
    private String learnerPhone;
}
