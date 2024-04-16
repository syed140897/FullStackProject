package com.syedmydeen.Library_Management_System.Exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class BookNotFoundException extends  Exception{

    public BookNotFoundException(String msg){
        super(msg);
    }
}
