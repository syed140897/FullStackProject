package com.syedmydeen.ECard.Service;

import com.syedmydeen.ECard.DTO.ProductData;
import com.syedmydeen.ECard.Exception.ProductNotFoundException;

import java.util.List;

public interface IProductService {

    String addProduct(ProductData productData);

    ProductData getById(Integer product_id) throws ProductNotFoundException;

    List<ProductData> getProducts();

    List<ProductData> searchProduct(String product);

    String productUpdate(Integer product_Id, ProductData productData) throws ProductNotFoundException;

    String deleteProduct(Integer product_id);
}
