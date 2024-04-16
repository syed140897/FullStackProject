package com.syedmydeen.Library_Management_System.Repository;

import com.syedmydeen.Library_Management_System.DTO.BookData;
import com.syedmydeen.Library_Management_System.Entity.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IbookRepo extends JpaRepository<Books,Long> {

      Books findByBookName(String name);
}
