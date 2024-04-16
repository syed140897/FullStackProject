package com.syedmydeen.ECard.DTO;

import com.syedmydeen.ECard.Entity.Product;
import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BuyerData {

    private Integer buyer_Id;
    private String buyer_Name;
    private String buyer_Password;
    private String buyer_Address;
    private String buyer_Country;
    private String buyer_Phone;
}
