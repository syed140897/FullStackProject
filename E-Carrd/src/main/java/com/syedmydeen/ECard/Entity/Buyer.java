package com.syedmydeen.ECard.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Buyer {
    @Id
    private Integer buyer_Id;
    private String buyer_Name;
    private String buyer_Password;
    private String buyer_Address;
    private String buyer_Country;
    private String buyer_Phone;
}
