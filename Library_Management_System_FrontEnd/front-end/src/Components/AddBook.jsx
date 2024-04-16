import React, { useState} from 'react'
import './AddBook.css'
import { addBooks } from './API';
import { useNavigate} from 'react-router-dom'

export const AddBook = () => {
   
  const [bookName,setBookName]=useState("");
  const [bookAuth,setBookAuth]=useState("");
  const [bookCategory,setBookCategory]=useState("");
  const [bookPublish,setBookPublish]=useState(0);
  const [bookStatus,setBookStatus]=useState();

  const navigate=useNavigate();
   
  async function submitBook(){
      if(bookName.length>0 && bookAuth.length>0 && bookCategory.length>0){
      const books={bookName,bookAuth,bookCategory,bookPublish,bookStatus};
      await addBooks(books).then((res)=> console.log("Submitted SuccessFully")).catch((err) => console.log(err));
      setBookName("");
      setBookAuth("");
      setBookCategory("");
      setBookPublish(1997);
      setBookStatus(true);
      alert("Book Added SucessFully");
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
      <h2>Add Book</h2>
      <label>Book Name         : </label>
      <input type='text' value={bookName} onChange={(e) => setBookName(e.target.value)}/>
      <label>Book Author Name  : </label>
      <input type='text' value={bookAuth} onChange={(e) => setBookAuth(e.target.value)}/>
      <label>Book Category     : </label>
      <input type='text' value={bookCategory} onChange={(e) => setBookCategory(e.target.value)}/>
      <label>Book Publish Year : </label>
      <input type='text' value={bookPublish} onChange={(e) => setBookPublish(e.target.value)}/>
      <label>Book Status       : </label>
      <input type='text' value={bookStatus} onChange={(e) => setBookStatus(e.target.value)} placeholder='Available'/>
     </form>
     <div className='add-book-btn'>
      <button id="confirm-btn" onClick={submitBook}>Confirm</button>
      <button id='cancel-btn' onClick={cancelBook}>Cancel</button>
     </div>
    </>
   
  )
}
