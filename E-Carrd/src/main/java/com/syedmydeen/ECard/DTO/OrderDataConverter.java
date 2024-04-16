package com.syedmydeen.ECard.DTO;

import com.syedmydeen.ECard.Entity.Order;

public class OrderDataConverter {

    public static Order convertOrder(OrderData orderData){
        return new Order(orderData.getOrder_id(),
                orderData.getBuyer_Name(),
                orderData.getBuyer_Address(),
                orderData.getBuyer_Phone(),
                orderData.getProduct_Img(),
                orderData.getProduct_Name(),
                orderData.getProduct_Count(),
                orderData.getTotal_Amount(),
                orderData.getPayment_mode(),
                orderData.getOrder_Status());
    }

    public static OrderData convertOrderData(Order order){
        return new OrderData(order.getOrder_id(),
                order.getBuyer_Name(),
                order.getBuyer_Address(),
                order.getBuyer_Phone(),
                order.getProduct_Img(),
                order.getProduct_Name(),
                order.getProduct_Count(),
                order.getTotal_Amount(),
                order.getPayment_mode(),
                order.getOrder_Status());
    }
}
