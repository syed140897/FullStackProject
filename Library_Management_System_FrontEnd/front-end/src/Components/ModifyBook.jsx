import React, { useEffect, useState} from 'react'
import './AddBook.css'
import { modifyBooks } from './API';
import { useNavigate} from 'react-router-dom'

export const ModifyBook = () => {

  const [bookID,setBookID]=useState();
  const [bookName,setBookName]=useState(null);
  const [bookAuth,setBookAuth]=useState(null);
  const [bookCategory,setBookCategory]=useState(null);
  const [bookPublish,setBookPublish]=useState(null);
  const [bookStatus,setBookStatus]=useState(null);
  const navigate=useNavigate();
  
    
  function submitBook(){
    if(bookID){
    const books={bookName,bookAuth,bookCategory,bookPublish,bookStatus};
    modifyBooks(bookID,books).then(res => console.log("Modified Done")).catch( err => console.log("Error Occured",err))
    setBookName("");
    setBookAuth("");
    setBookCategory("");
    setBookPublish(1997);
    setBookStatus(true);
    alert("Book Modified SucessFully");
    navigate("/");
    }else{
      alert("Please Filling all Inputs");
    }
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
      <h2>Modify Book</h2>
      <label>Book ID         : </label>
      <input type='text' value={bookID} onChange={(e) => setBookID(e.target.value)}/>
      <label>Book Name         : </label>
      <input type='text' value={bookName} onChange={(e) => setBookName(e.target.value)}/>
      <label>Book Author Name  : </label>
      <input type='text' value={bookAuth} onChange={(e) => setBookAuth(e.target.value)}/>
      <label>Book Category     : </label>
      <input type='text' value={bookCategory} onChange={(e) => setBookCategory(e.target.value)}/>
      <label>Book Publish Year : </label>
      <input type='text' value={bookPublish} onChange={(e) => setBookPublish(e.target.value)}/>
      <label>Book Status       : </label>
      <input type='text' value={bookStatus}  placeholder='Available' onChange={(e) => setBookStatus(e.target.value)}/>
     </form>
     <div className='add-book-btn'>
      <button id="confirm-btn" onClick={submitBook}>Confirm</button>
       <button id='cancel-btn' onClick={cancelBook}>Cancel</button>
     </div>
    </>
   
  )
}
