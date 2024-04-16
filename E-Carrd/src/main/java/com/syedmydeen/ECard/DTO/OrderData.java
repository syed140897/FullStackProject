package com.syedmydeen.ECard.DTO;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderData {

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
