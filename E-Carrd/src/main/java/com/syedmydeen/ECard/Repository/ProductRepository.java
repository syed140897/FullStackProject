package com.syedmydeen.ECard.Repository;

import com.syedmydeen.ECard.Entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@EnableMongoRepositories
public interface ProductRepository extends MongoRepository<Product,Integer> {

}
