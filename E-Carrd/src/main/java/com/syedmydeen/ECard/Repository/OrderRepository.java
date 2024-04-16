package com.syedmydeen.ECard.Repository;

import com.syedmydeen.ECard.Entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface OrderRepository extends MongoRepository<Order,Integer> {
}
