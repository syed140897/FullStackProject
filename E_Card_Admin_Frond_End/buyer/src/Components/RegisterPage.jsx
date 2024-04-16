import React from 'react'
import { useState } from 'react'
import { addBuyer } from '../API';
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
  const[buyer_Name,setBuyer_Name]=useState("");
  const[buyer_Password,setBuyer_Password]=useState("");
  const[buyer_Address,setBuyer_Address]=useState("")
  const[buyer_Country,setBuyer_Country]=useState("India");
  const[buyer_Phone,setBuyer_Phone]=useState("");

  const navigate=useNavigate();


  async function submitBuyer(e){
    e.preventDefault();
    console.log(buyer_Phone);
    if(buyer_Phone.length==10){
    const buyer={buyer_Name,buyer_Password,buyer_Address,buyer_Country,buyer_Phone};
    await addBuyer(buyer).then(res => alert(res.data)).catch(err => console.log(err));
    navigate("/")
    }else{
      alert("Enter Your Correct Phone Number")
    }
  }

  function returnPage(){
    navigate("/");
  }

  return (
    <>
       <div className='HeadingTitle '>
        <h1>E-Cart</h1>
    </div>
    <div>
        <form className='loginContainer'>
            <h2>Register Page</h2>
            <div className='inputContainer'>    
            <input type="text" value={buyer_Name} placeholder='Enter Your Name' onChange={(e) => setBuyer_Name(e.target.value)}/><br/>
            <input type='text' value={buyer_Password} placeholder='Enter Your PassWord'onChange={(e)=> setBuyer_Password(e.target.value)}/><br/>
            <input type='text' value={buyer_Address} placeholder='Enter Your Address'onChange={(e)=>setBuyer_Address(e.target.value)}/><br/>
            <input type='text' value={buyer_Country} placeholder='Enter Your Country' onChange={(e) =>setBuyer_Country(e.target.value)}/><br/>
            <input type='text' value={buyer_Phone} placeholder='Enter Your Phone' onChange={(e)=>setBuyer_Phone(e.target.value)}/><br/>
            <button id="login" onClick={(e) =>  submitBuyer(e)}>Submit</button>
            <button id='login' onClick={returnPage}>Back</button>
            </div>  
        </form>
    </div>
    </>
  )
}
