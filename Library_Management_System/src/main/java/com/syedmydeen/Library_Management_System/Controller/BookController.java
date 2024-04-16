package com.syedmydeen.Library_Management_System.Controller;

import com.syedmydeen.Library_Management_System.DTO.BookData;
import com.syedmydeen.Library_Management_System.Exception.BookNotFoundException;
import com.syedmydeen.Library_Management_System.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("books-api")
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping
    public ResponseEntity<String> addBooks(@RequestBody BookData bookData){
        String status=service.addBooks(bookData);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<BookData>> fetchBooks(){
        List<BookData> bookDataList=service.fetchBook();
        return new ResponseEntity<>(bookDataList,HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<BookData> findById(@PathVariable("id") Long bookId) throws BookNotFoundException {
        BookData bookData=service.findById(bookId);
        return new ResponseEntity<>(bookData,HttpStatus.OK);
    }

    @GetMapping("book-search/{name}")
    public ResponseEntity<List<BookData>> findByName(@PathVariable("name") String name) throws BookNotFoundException {
        List<BookData> bookData=service.findByName(name);
        return new ResponseEntity<>(bookData,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updateBook(@PathVariable("id") Long bookID,@RequestBody BookData bookData) throws BookNotFoundException {
       String msg= service.updateBook(bookID,bookData);
       return new ResponseEntity<>(msg,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long bookID){
        String msg=service.deleteBook(bookID);
        return new ResponseEntity<>(msg,HttpStatus.ACCEPTED);
    }

    @GetMapping("available")
    public ResponseEntity<List<BookData>> fetchAvailableBooks(){
        List<BookData> bookData=service.fetchAvailableBooks();
        return new ResponseEntity<>(bookData,HttpStatus.OK);
    }
}
