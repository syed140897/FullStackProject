package com.syedmydeen.ECard.Repository;

import com.syedmydeen.ECard.Entity.Buyer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface BuyerRepository extends MongoRepository<Buyer,Integer> {

}
