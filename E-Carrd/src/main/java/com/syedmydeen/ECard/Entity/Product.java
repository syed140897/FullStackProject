package com.syedmydeen.ECard.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {

    @Id
    private Integer product_Id;
    private String product_Name;
    private String product_Img;
    private String product_Category;
    private String product_Description;
    private Long product_Price;
    private Integer product_Rate;

}
