package com.syedmydeen.Library_Management_System.DTO;

import com.syedmydeen.Library_Management_System.Entity.Books;
import com.syedmydeen.Library_Management_System.Entity.Learner;

public class LearnerDataConverter {

    public static LearnerData convertLearnerData(Learner learner){
        return new LearnerData(
                learner.getLearnerId(),
                learner.getLearnerBook(),
                learner.getLearnerName(),
                learner.getLearnerAge(),
                learner.getLearnerProof(),
                learner.getLearnerPhone());
    }

    public static Learner convertLearner(LearnerData learnerData){
        return new Learner(
                learnerData.getLearnerId(),
                learnerData.getLearnerBook(),
                learnerData.getLearnerName(),
                learnerData.getLearnerAge(),
                learnerData.getLearnerProof(),
                learnerData.getLearnerPhone());
    }
}
