package com.syedmydeen.Library_Management_System.DTO;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookData {

    private Long bookId;
    private String bookName;
    private String bookAuth;
    private String bookCategory;
    private Long bookPublish;
    private boolean bookStatus;
}
