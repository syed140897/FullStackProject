import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../API';

export const ForgotPassWord = () => {
  const[buyer_Phone,setBuyer_Phone]=useState("");
  const[buyer_newPassword,setBuyer_NewPassword]=useState("");


  const navigate=useNavigate();

  async function submitBuyer(e){
      e.preventDefault();
      await changePassword(buyer_Phone,buyer_newPassword).then(res => alert(res.data)).catch(err => console.log(err));
      navigate("/");
  }

  function returnPage(){
    navigate("/");
  }

  return (
    <>   <div className='HeadingTitle '>
    <h1>E-Cart</h1>
</div>
<div>
    <form className='loginContainer'>
        <h2>Reset PassWord</h2>
        <div className='inputContainer'>    
        <input type="text" value={buyer_Phone} placeholder='Enter Your Phone Number' onChange={(e) => setBuyer_Phone(e.target.value)}/><br/>
        <input type='text' value={buyer_newPassword} placeholder='Enter Your New PassWord'onChange={(e)=> setBuyer_NewPassword(e.target.value)}/><br/>
        <button id="login" onClick={(e) =>  submitBuyer(e)}>Submit</button>
        <button id='login' onClick={returnPage}>Back</button>
        </div>  
    </form>
</div>
     
    </>
  )
}
