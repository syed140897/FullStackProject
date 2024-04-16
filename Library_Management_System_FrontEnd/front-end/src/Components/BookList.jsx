import React, { useEffect, useState } from 'react'
import './BookList.css'
import { fetchAvailableBooks, fetchBooks, findByName } from './API';
import Search from '../assets/search.gif'
import { Link } from 'react-router-dom';

export const BookList = () => {
  

  const [bookList,setBookList]=useState([]);
  const [showBookList,setShowBookList]=useState(true);
  const [availableList,setAvailableList]=useState([])
  const [showSearchList,setShowSearchList]=useState(false)
  const [searchBook,setSearchBook]=useState("")
  const [searchAndAvailable,setSearchAndAvailable]=useState()
  const [loading,setLoading]=useState(true);
  
  useEffect(()=>{
         setShowSearchList(false)
         fetchBooks().then(response => setBookList(response.data)).then(res => setLoading(false))
         .catch((err) => console.log(err))
  },[]);

  function bookShow(){
    setShowBookList(true)
  }
  function availableshow(){
   setSearchAndAvailable("Available Book List")
    setShowBookList(false)
    setShowSearchList(false)
    fetchAvailableBooks().then(response => setAvailableList(response.data))
    .catch((err) => console.log(err))
    console.log(availableList);
  }
  function searchBookfunction(){
          setSearchAndAvailable("Find Book List")
          setShowBookList(false);
          setShowSearchList(true);
          findByName(searchBook).then(res => setAvailableList(res.data)).catch(err =>  console.log(err))
        }
         
  return (
    <div className='front-container'>
       <div className='menu'>
    <button onClick={bookShow}>Book List</button>
    <button onClick={availableshow}>Available</button>
    <Link to="/booking" id="booking-btn"><button>Booking</button></Link>
    <Link to="/return-book" id="booking-btn"><button>Return</button></Link>
     </div>
     {loading ? <h3 className='Loading'>Book Loading....</h3> : 
         <>
             { showBookList ? 
      <div className='book-container'>
        <div className='bookList'> 
        <h2>Book List</h2>
        <div className='search-container'>
        <input type='text' id="search-input" onChange={(e) => setSearchBook(e.target.value)} 
                        onKeyDown={(key) => {if(key.key == "Enter")searchBookfunction()}} />
        <img src={Search} alt="search-icon" onClick={searchBookfunction}/>
        </div>
      <table className='book-list-table'>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Book Category</th>
            <th>Book Publish Year</th>
            <th>Book Status</th>
          </tr>
        </thead>
        <tbody>
           { bookList.map((book) =>
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.bookName}</td>
                <td>{book.bookAuth}</td>
                <td>{book.bookCategory}</td>
                <td>{book.bookPublish}</td>
                <td>{book.bookStatus ? <h4 id="booked">Booked</h4> : <h4 id="available">Available</h4> }</td>
              </tr>
            )}
        </tbody>
      </table>
        </div>     
      </div> : 
           <div className='book-container'>
                  <div className='bookList'> 
                     <h2>{searchAndAvailable}</h2>
                     <div className='search-container'>
                     <input type='text' id="search-input" onChange={(e) => setSearchBook(e.target.value)} 
                        onKeyDown={(e) => {if(e.key=="Enter")searchBookfunction()}} />
                         <img src={Search} alt="search-icon" onClick={searchBookfunction}/>
                         </div>
                       <table className='book-list-table'>
                          <thead>
                            <tr>
                              <th>Book ID</th>
                              <th>Book Name</th>
                              <th>Book Author</th>
                              <th>Book Category</th>
                              <th>Book Publish Year</th>
                              <th>Book Status</th>
                              {showSearchList ? 
                              <th>Action</th>
                             :<></>}
                            </tr>
                          </thead>
                         <tbody>
                           { availableList.map((book) =>
                             <tr key={book.bookId}>
                             <td>{book.bookId}</td>
                             <td>{book.bookName}</td>
                             <td>{book.bookAuth}</td>
                             <td>{book.bookCategory}</td>
                             <td>{book.bookPublish}</td>
                             <td>{book.bookStatus ? <h4 id="booked">Booked</h4> : <h4 id="available">Available</h4> }</td>
                             {showSearchList ? book.bookStatus ?  <h4 id="booking">Already Booking</h4>  : 
                             <td>
                               <Link to={`/booking/${book.bookId}`}><button id='search-book-btn'>Booking</button></Link>
                              </td>    
                             :<></>}
                             </tr>
                             )}
                           </tbody>
                       </table>
                   </div>     
               </div>}
         </>
      
     }
     
    </div>
  )
}
