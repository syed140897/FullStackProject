import React from 'react'
import { useState } from 'react';
import { findById } from './API';
import {useNavigate} from 'react-router-dom'

export const BookDetails = () => {

    const [bookId,setBookId] = useState();
    const [bookName,setBookName]=useState("");
    const [bookAuth,setBookAuth]=useState("");
    const [bookCategory,setBookCategory]=useState("");
    const [bookPublish,setBookPublish]=useState();
    const [bookStatus,setBookStatus]=useState();
    const [showBook,setShowBook]=useState(false)

    const navigate=useNavigate();

    async function fetchDetails(e){
        e.preventDefault();
       await findById(bookId).then(res => {
            setBookName(res.data.bookName);
            setBookAuth(res.data.bookAuth);
            setBookCategory(res.data.bookCategory);
            setBookPublish(res.data.bookPublish);
            setBookStatus(res.data.bookStatus);
        } ).then(res => setShowBook(true)).catch(err => console.log("Error Occured",err));
  }

  function cancelReturnPage(){
    navigate("/");
   }


  return (
    <>
     <div className='bookAddHeading'> 
     <h1>Library Management Systems</h1>
    </div>
    <h2>Book Detail</h2>
    <form className='returnContainer'>
     <label>Book ID         : </label>
     <input type='text' value={bookId} onChange={(e) => setBookId(e.target.value)}/>
     <div className='add-book-btn'>
     <button id="confirm-btn" onClick={fetchDetails}>Confirm</button>
    </div>
    </form>
    { showBook ? 
       <div className='show-return-book'>
            <div className='return-book'>
        <div className='lable-container'>
            <label>Book Name</label>
            <label>Book Auth</label>
            <label>Book Category</label>
            <label>Publish Year</label>
            <label>Book Status</label>
        </div>
        <div className='value-container'>
            <label>: {bookName}</label>
            <label>: {bookAuth}</label>
            <label>: {bookCategory}</label>
            <label>: {bookPublish}</label>
            <label>: {bookStatus ? "Booking" : "Available"}</label>
        </div>
    </div> 
    <div className='return-book-btn'>
       <button id='return-cancel-btn' onClick={cancelReturnPage}>Cancel</button>
     </div>
       </div>
        : <></>
    }
    
   </>
  )
}
