package com.syedmydeen.Library_Management_System.Service;

import com.syedmydeen.Library_Management_System.DTO.BookData;
import com.syedmydeen.Library_Management_System.DTO.BookDataConverter;
import com.syedmydeen.Library_Management_System.DTO.LearnerData;
import com.syedmydeen.Library_Management_System.DTO.LearnerDataConverter;
import com.syedmydeen.Library_Management_System.Entity.Books;
import com.syedmydeen.Library_Management_System.Entity.Learner;
import com.syedmydeen.Library_Management_System.Exception.BookNotFoundException;
import com.syedmydeen.Library_Management_System.Repository.IbookRepo;
import com.syedmydeen.Library_Management_System.Repository.IlearnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService implements IBookService{


    @Autowired
    private IbookRepo repo;
    @Autowired
    private IlearnerRepo learnerRepo;

    public String addBooks(BookData data){
        Books books= BookDataConverter.convertbook(data);
        repo.save(books);
        return "Books Added SuccessFully";
    }

    public List<BookData> fetchBook() {
        List<BookData> bookData=repo.findAll().stream()
                .map(books -> BookDataConverter.convertbookData(books)).collect(Collectors.toList());

        return bookData;
    }

    @Override
    public BookData findById(Long id) throws BookNotFoundException {
          Books book=repo.findById(id).orElseThrow(() -> new BookNotFoundException("Book ID Not Fount"));
          return BookDataConverter.convertbookData(book);
    }

    @Override
    public List<BookData> findByName(String name) throws BookNotFoundException {
         List<BookData> books=fetchBook().stream().filter((book) ->
                         book.getBookName().equals(name) || book.getBookAuth().equals(name) || book.getBookCategory().equals(name))
                 .collect(Collectors.toList());

       return books;
    }

    @Override

    public String updateBook(Long id, BookData bookData) throws BookNotFoundException {
         Books books=repo.findById(id).orElseThrow(() -> new BookNotFoundException("Book ID Not Fount"));
         if(bookData.getBookName()!=null)
          books.setBookName(bookData.getBookName());
         if(bookData.getBookAuth()!=null)
          books.setBookAuth(bookData.getBookAuth());
         if(bookData.getBookCategory()!=null)
          books.setBookCategory(bookData.getBookCategory());
         if(bookData.getBookPublish()!=null)
          books.setBookPublish(bookData.getBookPublish());
         if(bookData.isBookStatus()!=books.isBookStatus())
          books.setBookStatus(bookData.isBookStatus());
         repo.save(books);
         return "Update SuccessFully";
    }

    @Override
    public String deleteBook(Long id) {
          repo.deleteById(id);
          return "Book Successfully Deleted";
    }

    @Override
    public List<BookData> fetchAvailableBooks() {
        List<BookData> bookData = repo.findAll().stream()
                .filter((books) -> books.isBookStatus() == false)
                .map((book) -> BookDataConverter.convertbookData(book)).collect(Collectors.toList());

        return bookData;
    }

    @Override
    public String learnerBooking(Long bookId,LearnerData learnerData) throws BookNotFoundException {
        Books books=repo.findById(bookId).orElseThrow(() -> new BookNotFoundException("Book ID Not Fount"));
        if(!books.isBookStatus()){
            Learner learner= LearnerDataConverter.convertLearner(learnerData);
            learnerRepo.save(learner);
            books.setBookStatus(true);
            repo.save(books);
            return "Booking SuccessFully";
        }else{
            return "Book ID Not Available";
        }


    }

    @Override
    public LearnerData learnerReturn(Long bookId){
          Learner learner=learnerRepo.findByLearnerBook(bookId);
          LearnerData learnerData=LearnerDataConverter.convertLearnerData(learner);
          return learnerData;
    }

    @Override
    public String learnerDeleted(Long bookId) throws BookNotFoundException {
        Learner learner=learnerRepo.findByLearnerBook(bookId);
        learnerRepo.delete(learner);
        Books books=repo.findById(bookId).orElseThrow(() -> new BookNotFoundException("Book ID Not Fount"));
        books.setBookStatus(false);
        repo.save(books);
        return "Return SuccessFull";
    }
}
