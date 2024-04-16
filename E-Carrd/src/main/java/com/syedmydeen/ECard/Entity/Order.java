package com.syedmydeen.ECard.Entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Document
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {

    @MongoId
    private Integer order_id;
    private String buyer_Name;
    private String buyer_Address;
    private String buyer_Phone;
    private String product_Img;
    private String product_Name;
    private Integer product_Count;
    private Double total_Amount;
    private String payment_mode;
    private String order_Status;
}
