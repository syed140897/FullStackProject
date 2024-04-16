package com.syedmydeen.ECard.DTO;

import lombok.*;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductData {

    private Integer product_Id;
    private String product_Name;
    private String product_Img;
    private String product_Category;
    private String product_Description;
    private Long product_Price;
    private Integer product_Rate;

}
