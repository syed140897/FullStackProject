package com.syedmydeen.ECard.Controller;

import com.syedmydeen.ECard.DTO.BuyerData;
import com.syedmydeen.ECard.DTO.OrderData;
import com.syedmydeen.ECard.DTO.ProductData;
import com.syedmydeen.ECard.Exception.BuyerNotFoundException;
import com.syedmydeen.ECard.Exception.OrderNotFountException;
import com.syedmydeen.ECard.Exception.ProductNotFoundException;
import com.syedmydeen.ECard.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("product-api")
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping
    public ResponseEntity<String> addProduct(@RequestBody ProductData productdata){
        String msg=service.addProduct(productdata);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductData> getById(@PathVariable("id") Integer product_Id) throws ProductNotFoundException {
        ProductData productData=service.getById(product_Id);
        return new ResponseEntity<>(productData,HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<ProductData>> getProducts(){
        List<ProductData> productData=service.getProducts();
        return new ResponseEntity<>(productData,HttpStatus.OK);
    }

    @GetMapping("search/{product}")
    public ResponseEntity<List<ProductData>> searchProduct(@PathVariable String product){
        List<ProductData> productData=service.searchProduct(product);
        return new ResponseEntity<>(productData,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> productUpdate(@PathVariable("id") Integer product_Id,@RequestBody ProductData productData) throws ProductNotFoundException {
        String msg=service.productUpdate(product_Id,productData);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Integer product_Id){
        String msg=service.deleteProduct(product_Id);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }

    @PostMapping("buyer")
    public ResponseEntity<String> addBuyer(@RequestBody BuyerData buyerData){
        String msg=service.addBuyer(buyerData);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }
    @GetMapping("buyer/{id}")
    public ResponseEntity<BuyerData> buyerById(@PathVariable("id") Integer buyer_Id) throws BuyerNotFoundException {
          BuyerData buyerData=service.buyerById(buyer_Id);
          return new ResponseEntity<>(buyerData,HttpStatus.OK);
    }

    @GetMapping("buyer")
    public ResponseEntity<BuyerData> validBuyer(@RequestParam String buyer_Phone,@RequestParam String buyer_Password){
        BuyerData buyer=service.validBuyer(buyer_Phone,buyer_Password);
        return new ResponseEntity<>(buyer,HttpStatus.OK);
    }

    @PutMapping("buyer")
    public ResponseEntity<String> changePassword(@RequestParam String buyer_Phone,@RequestParam String buyer_newPassword){
        String msg=service.changePassword(buyer_Phone,buyer_newPassword);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }


    @PostMapping("order/{id}")
    public ResponseEntity<String> addOrder(@PathVariable("id") Integer buyer_id,@RequestBody OrderData orderData) throws BuyerNotFoundException {
        String msg=service.addOrder(buyer_id,orderData);
        return new ResponseEntity<>(msg,HttpStatus.OK);

    }

    @GetMapping("order")
    public ResponseEntity<List<OrderData>> getOrders(){
        List<OrderData> orderDataList=service.getOrders();
        return new ResponseEntity<>(orderDataList,HttpStatus.OK);
    }

    @PutMapping("order/{id}")
    public ResponseEntity<String> modifyOrder(@PathVariable("id") Integer order_Id,@RequestParam String order_Status) throws OrderNotFountException {
        String msg=service.modifyOrder(order_Id,order_Status);
        return new ResponseEntity<>(msg,HttpStatus.OK);
   }

    @DeleteMapping("order/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Integer order_Id){
        String msg=service.deleteOrder(order_Id);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }

    @GetMapping("buyer/order/{id}")
    public ResponseEntity<List<OrderData>> findOrderByBuyerId(@PathVariable("id") Integer buyer_Id) throws BuyerNotFoundException {
        List<OrderData> orderData=service.findOrder(buyer_Id);
        return new ResponseEntity<>(orderData,HttpStatus.OK);
    }
}
