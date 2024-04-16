import React, { useState } from 'react'
import { learnerBooking } from './API';
import { useNavigate, useParams } from 'react-router-dom';

export const Booking = () => {

    const {id} =useParams();
    
    const [learnerBook,setLearnerBook]=useState(id);
    const [learnerName,setLearnerName]=useState("");
    const [learnerAge,setLearnerAge]=useState("");
    const [learnerProof,setLearnerProof]=useState("");
    const [learnerPhone,setLeanerPhone]=useState("");

    const navigate=useNavigate();

    async function learnerBookingFunction(){
    
      if(learnerBook.length>0 && learnerAge>=18 && learnerProof.length>0 && learnerPhone.length==10){
      const learner={learnerBook,learnerName,learnerAge,learnerProof,learnerPhone}
      await learnerBooking(learnerBook,learner).then(res => alert(res.data))
                  .catch(err => console.log("Error Occured",err));
                  setLearnerBook("");
                  setLearnerName("");
                  setLearnerAge("");
                  setLearnerProof("");
                  setLeanerPhone("");
      }else{
        alert("Fill Correct Data");
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
      <h2>Booking Page</h2>
      <label>Book ID : </label>
      <input type='text' value={learnerBook} onChange={(e) => setLearnerBook(e.target.value)}/>
      <label>Student/Learner Name: </label>
      <input type='text' value={learnerName} onChange={(e) => setLearnerName(e.target.value)}/>
      <label>Student/Learner Age: </label>
      <input type='text' value={learnerAge} onChange={(e) => setLearnerAge(e.target.value)}/>
      <label>Student/Learner Proof : </label>
      <input type='text' value={learnerProof} onChange={(e) => setLearnerProof(e.target.value)} />
      <label>Student/Learner Ph Number: </label>
      <input type='text' value={learnerPhone} onChange={(e) => setLeanerPhone(e.target.value)}/>
     </form>
     <div className='add-book-btn'>
      <button id="confirm-btn" onClick={learnerBookingFunction}>Confirm</button>
      <button id='cancel-btn' onClick={cancelBook}>Cancel</button>
     </div>
    
    </>
  )
}
