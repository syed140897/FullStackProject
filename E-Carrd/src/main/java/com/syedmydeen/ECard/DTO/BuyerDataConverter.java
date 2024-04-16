package com.syedmydeen.ECard.DTO;

import com.syedmydeen.ECard.Entity.Buyer;

public class BuyerDataConverter {

    public static BuyerData convertBuyerData(Buyer buyer){
        return new BuyerData(buyer.getBuyer_Id(),
                buyer.getBuyer_Name(),
                buyer.getBuyer_Password(),
                buyer.getBuyer_Address(),
                buyer.getBuyer_Country(),
                buyer.getBuyer_Phone());
    }

    public static Buyer convertBuyer(BuyerData buyerData){
        return new Buyer(buyerData.getBuyer_Id(),
                buyerData.getBuyer_Name(),
                buyerData.getBuyer_Password(),
                buyerData.getBuyer_Address(),
                buyerData.getBuyer_Country(),
                buyerData.getBuyer_Phone());
    }
}
