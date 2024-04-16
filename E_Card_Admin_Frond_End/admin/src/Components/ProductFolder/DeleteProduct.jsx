import React, { useState } from 'react'
import RemoveIcon from './Product-Icon/delete-product.png'
import { deleteProduct } from '../API';
import { useNavigate } from "react-router-dom";


export const DeleteProduct = () => {
   const [product_Id,setProduct_Id]=useState();

   async function removeProduct(){
      await deleteProduct(product_Id).then(res => alert(res.data)).catch(err => console.log(err));
      setProduct_Id();
   }
      
   const navigate=useNavigate();

   function returnPage(){
     navigate("/");
 }

  return (
     <>
        <div className='headContainer'>
        <h1 id='add-head'>E-card Admin</h1>
        <button id="backButton" onClick={returnPage}>Back</button>
     </div>
       <div className='addContainer'>
           <h2>Remove Product</h2>
            <div className='inputContainer'>
            <div className='add-icon'>
              <img src={RemoveIcon} alt="add-Icon"/>
            </div>
           <div className='add-input'> 
            <form className='addProductContainer'>
                    <label>Product ID</label>
                    <input type='text' onChange={(e)=> setProduct_Id(e.target.value)}/>
                    <button id='confirm' onClick={removeProduct}>Confirm</button>                  
             </form>
            </div>
         </div>  
        
        </div>
     </>
  )
}
