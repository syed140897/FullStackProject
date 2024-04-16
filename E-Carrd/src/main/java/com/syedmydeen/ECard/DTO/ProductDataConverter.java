package com.syedmydeen.ECard.DTO;

import com.syedmydeen.ECard.Entity.Product;

public class ProductDataConverter {


    public static ProductData productDataConverter(Product product){
        return new ProductData(product.getProduct_Id(),
                product.getProduct_Name(),
                product.getProduct_Img(),
                product.getProduct_Category(),
                product.getProduct_Description(),
                product.getProduct_Price(),
                product.getProduct_Rate());
    }

    public static Product productConverter(ProductData productData){
        return new Product(productData.getProduct_Id(),
                productData.getProduct_Name(),
                productData.getProduct_Img(),
                productData.getProduct_Category(),
                productData.getProduct_Description(),
                productData.getProduct_Price(),
                productData.getProduct_Rate());
    }
 }
