import React, { useState } from 'react'
import './ReturnBook.css'
import { findById, getLearner, learnerDeleted } from './API';
import { useNavigate } from 'react-router-dom';

export const ReturnBook = () => {
      
    const [bookId,setBookId] = useState();
    const [bookName,setBookName]=useState("")
    const [showLearner,setShowLearner]=useState(false)
    const [learnerName,setLearnerName]=useState("")
    const [learnerAge,setLearnerAge]=useState("")
    const [learnerPhone,setLearnerPhone]=useState()

    const navigate=useNavigate();

   async function fetchDetails(e){
         e.preventDefault();
         setShowLearner(true)
         await getLearner(bookId).then(learner => {
            setLearnerName(learner.data.learnerName);
            setLearnerAge(learner.data.learnerAge);
            setLearnerPhone(learner.data.learnerPhone)
         }).catch(err =>  console.log(err))
         await findById(bookId).then(book => setBookName(book.data.bookName)).catch(err => console.log(err))
                       

   }

   function returnConfirm(){
            learnerDeleted(bookId).then(res => console.log(res.data)).catch(err => console.log(err));
            if(learnerName!="")
            alert("Book SuccessFully Returned");
          else
            alert("Book Not Booking")
            navigate("/");
   }

   function cancelReturnPage(){
    navigate("/");
   }

  return (
    <>
    <div className='bookAddHeading'> 
     <h1>Library Management Systems</h1>
    </div>
    <h2>Return Book</h2>
    <form className='returnContainer'>
     <label>Book ID         : </label>
     <input type='text' value={bookId} onChange={(e) => setBookId(e.target.value)}/>
     <div className='add-book-btn'>
     <button id="confirm-btn" onClick={fetchDetails}>Confirm</button>
    </div>
    </form>
    { showLearner ? 
       <div className='show-return-book'>
            <div className='return-book'>
            
            <div className='lable-container'>
            <label>Book Name</label>
            <label>Learner Name</label>
            <label>Learner Age</label>
            <label>Learner Phone</label>
           </div>
           <div className='value-container'>
            <label>: {bookName}</label>
            <label>: {learnerName}</label>
            <label>: {learnerAge}</label>
            <label>: {learnerPhone}</label>
        </div> 
    </div> 
    <div className='return-book-btn'>
       <button id="return-btn" onClick={returnConfirm}>Return</button>
       <button id='return-cancel-btn' onClick={cancelReturnPage}>Cancel</button>
     </div>
       </div>
        : <></>
    }
    
   </>
  )
}
