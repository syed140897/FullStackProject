package com.syedmydeen.ECard.Service;

import com.syedmydeen.ECard.DTO.*;
import com.syedmydeen.ECard.Entity.Buyer;
import com.syedmydeen.ECard.Entity.Order;
import com.syedmydeen.ECard.Entity.Product;
import com.syedmydeen.ECard.Exception.BuyerNotFoundException;
import com.syedmydeen.ECard.Exception.OrderNotFountException;
import com.syedmydeen.ECard.Exception.ProductNotFoundException;
import com.syedmydeen.ECard.Repository.BuyerRepository;
import com.syedmydeen.ECard.Repository.OrderRepository;
import com.syedmydeen.ECard.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService implements IProductService,IBuyerService{

    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private BuyerRepository buyerRepo;
    @Autowired
    private OrderRepository orderRepo;

    public String addProduct(ProductData productData){
        try {
            Product product = ProductDataConverter.productConverter(productData);
            productRepo.insert(product);
            return "SuccessFully Product Add";
        }catch (Exception e){
            return "This ID Already Register";
        }
    }

    public ProductData getById(Integer product_id) throws ProductNotFoundException {
        Product product=productRepo.findById(product_id).orElseThrow(() -> new ProductNotFoundException("Product ID not Found"));
        ProductData productData=ProductDataConverter.productDataConverter(product);
        return productData;
    }

    @Override
    public List<ProductData> getProducts() {
        List<Product> products=productRepo.findAll();
        List<ProductData> productData=products.stream().map(product -> ProductDataConverter.productDataConverter(product)).collect(Collectors.toList());
        return productData;
    }

    @Override
    public List<ProductData> searchProduct(String product) {
         List<Product> productList=productRepo.findAll();
         List<ProductData> productDatas=productList.stream().map(products -> ProductDataConverter.productDataConverter(products))
                 .filter(productdata -> productdata.getProduct_Name().equals(product) || productdata.getProduct_Category().equals(product)).collect(Collectors.toList());
         return productDatas;
    }

    @Override
    public String productUpdate(Integer product_Id, ProductData productData) throws ProductNotFoundException {
          Product product=productRepo.findById(product_Id).orElseThrow(() -> new ProductNotFoundException("Product ID not Found"));
          if(productData.getProduct_Name()!=null){
              product.setProduct_Name(productData.getProduct_Name());
          }
          if(productData.getProduct_Img()!=null){
            product.setProduct_Img(productData.getProduct_Img());
          }
          if(productData.getProduct_Category()!=null){
              product.setProduct_Category(productData.getProduct_Category());
          }
          if(productData.getProduct_Description()!=null){
            product.setProduct_Description(productData.getProduct_Description());
          }
          if(productData.getProduct_Price()!=null){
            product.setProduct_Price(productData.getProduct_Price());
          }
          if(productData.getProduct_Rate()!=null){
              product.setProduct_Rate(productData.getProduct_Rate());
          }
          productRepo.save(product);
         return "Update SuccessFully";
        }

    @Override
    public String deleteProduct(Integer product_id) {
         productRepo.deleteById(product_id);
         return "SuccessFully Product Remove";
    }

    @Override
    public String addBuyer(BuyerData buyerData) {
        boolean result=true;
        Integer buyerCount=buyerRepo.findAll().size();
        List<Buyer> buyerList=buyerRepo.findAll();
        for(Buyer buyer:buyerList){
              if(buyer.getBuyer_Phone().equals(buyerData.getBuyer_Phone())){
                  result=false;
              }
        }
        if(result) {
            buyerData.setBuyer_Id(buyerCount + 1);
            Buyer buyer = BuyerDataConverter.convertBuyer(buyerData);
            buyerRepo.save(buyer);
            return "Buyer SuccessFully Register";
        }else{
            return "This Number Already Register";
        }
    }

    @Override
    public String addOrder(Integer buyer_id, OrderData orderData) throws BuyerNotFoundException {
        Buyer buyer=buyerRepo.findById(buyer_id).orElseThrow(() -> new BuyerNotFoundException("Buyer ID not Valid"));
        if(buyer.getBuyer_Address()!=null){
            Integer orderCount=orderRepo.findAll().size();
            orderData.setOrder_id(orderCount+1);
            orderData.setBuyer_Name(buyer.getBuyer_Name());
            orderData.setBuyer_Address(buyer.getBuyer_Address());
            orderData.setBuyer_Phone(buyer.getBuyer_Phone());
            Order order=OrderDataConverter.convertOrder(orderData);
            orderRepo.save(order);
            return "Order SuccessFully Added";
        }else{
            return "Please should Provide Address for Order Items";
        }

    }

    @Override
    public String deleteOrder(Integer order_id) {
         orderRepo.deleteById(order_id);
         return "Order SuccessFully Delivered";
    }

    @Override
    public String modifyOrder(Integer order_id, String order_Status) throws OrderNotFountException {
         Order order=orderRepo.findById(order_id).orElseThrow(() -> new OrderNotFountException("Order ID invalid"));
         order.setOrder_Status(order_Status);
         orderRepo.save(order);
         return "Order Status Modified";
    }

    @Override
    public List<OrderData> getOrders() {
        List<Order> orderList=orderRepo.findAll();
        List<OrderData> orderDataList=orderList.stream().map(order -> OrderDataConverter.convertOrderData(order)).collect(Collectors.toList());
        return orderDataList;
    }

    @Override
    public String changePassword(String buyer_phone, String buyer_newPassword) {
         String msg="Phone Number Not Found";
          List<Buyer> buyerList=buyerRepo.findAll().stream().filter(buyers -> buyers.getBuyer_Phone().equals(buyer_phone)).collect(Collectors.toList());
          for(Buyer buyer:buyerList ) {
                  buyer.setBuyer_Password(buyer_newPassword);
                  buyerRepo.save(buyer);
                  msg= "PassWord Changed";
          }
          return msg;
    }

    @Override
    public BuyerData validBuyer(String buyer_phone, String buyer_password) {
        BuyerData buyerData=null;
        List<Buyer> buyerList=buyerRepo.findAll().stream().filter(buyers -> buyers.getBuyer_Phone().equals(buyer_phone)).collect(Collectors.toList());
        for(Buyer buyer:buyerList ) {
                if(buyer.getBuyer_Password().equals(buyer_password))
                   buyerData=BuyerDataConverter.convertBuyerData(buyer);
        }
        return buyerData;
    }

    @Override
    public BuyerData buyerById(Integer buyer_id) throws BuyerNotFoundException {
        Buyer buyer=buyerRepo.findById(buyer_id).orElseThrow(() -> new BuyerNotFoundException("ID inValid"));
        BuyerData buyerData=BuyerDataConverter.convertBuyerData(buyer);
        return buyerData;
    }

    @Override
    public List<OrderData> findOrder(Integer buyer_id) throws BuyerNotFoundException {
        Buyer buyer=buyerRepo.findById(buyer_id).orElseThrow(() -> new BuyerNotFoundException("ID inValid"));
        List<OrderData> orderList=getOrders();
        List<OrderData> findOrder=orderList.stream().filter(order -> order.getBuyer_Name().equals(buyer.getBuyer_Name())).collect(Collectors.toList());
        return findOrder;
    }


}
