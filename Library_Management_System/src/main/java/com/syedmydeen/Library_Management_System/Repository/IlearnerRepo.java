package com.syedmydeen.Library_Management_System.Repository;

import com.syedmydeen.Library_Management_System.Entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IlearnerRepo extends JpaRepository<Learner,Long> {

    public Learner findByLearnerBook(Long bookId);

}
