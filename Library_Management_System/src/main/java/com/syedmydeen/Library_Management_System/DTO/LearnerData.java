package com.syedmydeen.Library_Management_System.DTO;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LearnerData {
        private Long learnerId;
        private Long learnerBook;
        private String learnerName;
        private Long learnerAge;
        private String learnerProof;
        private String learnerPhone;
}
