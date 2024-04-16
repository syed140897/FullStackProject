package com.syedmydeen.Library_Management_System.Service;

import com.syedmydeen.Library_Management_System.DTO.BookData;
import com.syedmydeen.Library_Management_System.DTO.LearnerData;
import com.syedmydeen.Library_Management_System.Exception.BookNotFoundException;

import java.util.List;

public interface IBookService {

    public String addBooks(BookData data);

    public List<BookData> fetchBook();

    public BookData findById(Long id) throws BookNotFoundException;

    public List<BookData> findByName(String name)throws BookNotFoundException;

    public String updateBook(Long id,BookData bookData) throws BookNotFoundException;

    public String deleteBook(Long id);

    public List<BookData> fetchAvailableBooks();

    public String learnerBooking(Long bookId,LearnerData learnerData) throws BookNotFoundException;

    public LearnerData learnerReturn(Long bookId);

    public String learnerDeleted(Long bookId) throws BookNotFoundException;

}
