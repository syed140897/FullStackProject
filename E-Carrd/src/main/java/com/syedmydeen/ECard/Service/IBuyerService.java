package com.syedmydeen.ECard.Service;

import com.syedmydeen.ECard.DTO.BuyerData;
import com.syedmydeen.ECard.DTO.OrderData;
import com.syedmydeen.ECard.Exception.BuyerNotFoundException;
import com.syedmydeen.ECard.Exception.OrderNotFountException;

import java.util.List;

public interface IBuyerService {
    String addBuyer(BuyerData buyerData);

    String addOrder(Integer buyer_id, OrderData orderData) throws BuyerNotFoundException;

    String deleteOrder(Integer order_id);

    String modifyOrder(Integer order_id, String order_Status) throws OrderNotFountException;

    List<OrderData> getOrders();

    String changePassword(String buyer_phone, String buyer_newPassword);

    BuyerData validBuyer(String buyer_phone, String buyer_password);

    BuyerData buyerById(Integer buyer_Id) throws BuyerNotFoundException;

    List<OrderData> findOrder(Integer buyer_id) throws BuyerNotFoundException;
}
