package com.syedmydeen.Library_Management_System.DTO;

import com.syedmydeen.Library_Management_System.Entity.Books;
import lombok.AllArgsConstructor;

public class BookDataConverter {

    public static BookData convertbookData(Books books){
        return new BookData(
                books.getBookId(),
                books.getBookName(),
                books.getBookAuth(),
                books.getBookCategory(),
                books.getBookPublish(),
                books.isBookStatus());

    }

    public static Books convertbook(BookData bookData){
        return new Books(
                 bookData.getBookId()
                ,bookData.getBookName()
                ,bookData.getBookAuth()
                ,bookData.getBookCategory()
                ,bookData.getBookPublish()
                ,bookData.isBookStatus());
    }
}
