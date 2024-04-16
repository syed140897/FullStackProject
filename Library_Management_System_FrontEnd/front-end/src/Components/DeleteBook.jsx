import React, { useState} from 'react'
import './AddBook.css'
import { deleteBooks, modifyBooks } from './API';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

export const DeleteBook = () => {

  const [bookID,setBookID]=useState();

  const navigate=useNavigate();
   
    
  function submitBook(){
        deleteBooks(bookID).then(res => console.log(res.data)).catch(err => console.log("Error Occured",err))
        setBookID("");
   } 
   function cancelBook(){
    navigate("/")
  }

  return (
    <>
     <div className='bookAddHeading'> 
      <h1>Library Management Systems</h1>
     </div>
     <form className='addBookContainer'>
      <h2>Delete Book</h2>
      <label>Book ID         : </label>
      <input type='text' value={bookID} onChange={(e) => setBookID(e.target.value)}/>
     </form>
     <div className='add-book-btn'>
      <button id="confirm-btn" onClick={submitBook}>Confirm</button>
       <button id='cancel-btn' onClick={cancelBook}>Cancel</button>
     </div>
    </>
   
  )
}
