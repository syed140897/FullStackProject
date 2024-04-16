import React from 'react'
import {Link} from 'react-router-dom'
import './LoginPage.css'
import { useState } from 'react'
import { validBuyer } from '../API'
import {useNavigate} from 'react-router-dom'

export const LoginPage = () => {
     
     const[buyer_Phone,setBuyer_Phone]=useState();
     const[buyer_Password,setBuyer_Password]=useState();

     const navigate=useNavigate();

     async function loginfunction(e){
             e.preventDefault();
             await validBuyer(buyer_Phone,buyer_Password)
               .then(buyer =>  {
                if(buyer.data){
                  alert("SuccessFully Login")
                  navigate("/buyerpage/"+buyer.data.buyer_Id);
                }else{
                  alert("InCorrect credential")
                }
               }).catch(err => console.log(err))
     }

  return (
    <>
    <div className='HeadingTitle '>
        <h1>E-Cart</h1>
    </div>
    <div>
        <form className='loginContainer'>
            <h2>Login Page</h2>
            <div className='inputContainer'>    
            <input type="text" value={buyer_Phone} onChange={(e)=> setBuyer_Phone(e.target.value)} placeholder='Enter Your Phone Number'/><br/>
            <input type='password' value={buyer_Password} onChange={(e) => setBuyer_Password(e.target.value)} placeholder='Enter Your PassWord'/><br/>
            <button id="login" onClick={(e) => loginfunction(e)}>Login</button>
            </div>  
            <div className='linkContainer'>
            <Link to="/forgotpassword"><p>forgot password</p></Link>
            <Link to="/registerpage"><h3>Register Page</h3></Link>
            </div>
        </form>
    </div>
    </>
  )
}
