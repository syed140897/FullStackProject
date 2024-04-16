package com.syedmydeen.Library_Management_System.Controller;

import com.syedmydeen.Library_Management_System.DTO.LearnerData;
import com.syedmydeen.Library_Management_System.Exception.BookNotFoundException;
import com.syedmydeen.Library_Management_System.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("learner-api")
public class LearnerController {

     @Autowired
     private BookService service;

     @PostMapping("{id}")
     public ResponseEntity<String> learnerBooking(@PathVariable("id") Long bookId,@RequestBody LearnerData learnerData) throws BookNotFoundException {
        String msg=service.learnerBooking(bookId,learnerData);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
     }
     @GetMapping("{id}")
     public ResponseEntity<LearnerData> getLearner(@PathVariable("id") Long bookID) throws BookNotFoundException {
        LearnerData learnerData=service.learnerReturn(bookID);
        return new ResponseEntity<>(learnerData,HttpStatus.OK);
     }
     @DeleteMapping("{id}")
     public ResponseEntity<String> returnBook(@PathVariable("id") Long bookId) throws BookNotFoundException {
         String msg=service.learnerDeleted(bookId);
         return new ResponseEntity<>(msg,HttpStatus.OK);
     }


}
