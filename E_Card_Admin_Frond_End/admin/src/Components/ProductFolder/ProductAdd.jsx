import React, { useState } from 'react'
import './ProductAdd.css'
import AddIcon from './Product-Icon/add-product.png'
import { addProduct } from '../API';
import { useNavigate } from "react-router-dom";

export const ProductAdd = () => {

    const[product_Id,setProduct_Id]=useState("");
    const[product_Name,setProduct_Name]=useState("");
    const[product_Img,setProduct_Img]=useState("");
    const[product_Category,setProduct_Category]=useState("");
    const[product_Description,setProduct_Description]=useState("");
    const[product_Price,setProduct_Price]=useState("");
    const[product_Rate,setProduct_Rate]=useState(0);

    const navigate=useNavigate();

   async function SumbitOrder(e){
         e.preventDefault();
         console.log(product_Category);
         const product={product_Id,product_Name,product_Img,product_Category,product_Description,product_Price,product_Rate};
         await addProduct(product).then(res => alert(res.data)).catch(err => console.log("Error Occured",err));
         console.log(product_Category);

         setProduct_Id("");
         setProduct_Name("");
         setProduct_Img("");
         setProduct_Category("");
         setProduct_Description("");
         setProduct_Price("");
         setProduct_Rate(0)

   }

   function returnPage(){
           navigate("/");
   }

  return (
    <>
    <div className='headContainer'>
        <h1 id='add-head'>E-card Admin</h1>
     </div>
       <div className='addContainer'>
           <h2>Add Product</h2>
            <div className='inputContainer'>
            <div className='add-icon'>
              <img src={AddIcon} alt="add-Icon"/>
            </div>
           <div className='add-input'> 
            <form className='addProductContainer'>
                    <label>Product ID</label>
                    <input type='text' value={product_Id} onChange={(e) => setProduct_Id(e.target.value)}/>
                    <label>Product Name</label>
                    <input type='text' value={product_Name} onChange={(e) => setProduct_Name(e.target.value)} />
                    <label>Product Img</label>
                    <input type='text' value={product_Img} onChange={(e) => setProduct_Img(e.target.value)}/>
                    <label>Product Category</label>
                    <input type="text" value={product_Category} onChange={(e) => setProduct_Category(e.target.value)}/>
                    <label>Product Price</label>
                    <input type="text" value={product_Price} onChange={(e) => setProduct_Price(e.target.value)}/>
                    <label>Product Description</label>
                    <textarea type='text' value={product_Description} onChange={(e) => setProduct_Description(e.target.value)}/>
                    <label>Product rate</label>
                    <input type='text' placeholder='Default Rate 0' value={product_Rate} onChange={(e) => setProduct_Rate(e.target.value)}/>
             </form>
            </div>
         </div>  
         <div className='add-btn'>
              <button id='confirm' onClick={(e) => SumbitOrder(e)}>Confirm</button>
              <button id='cancel' onClick={returnPage}>Cancel</button>
            </div>
        </div>
    </>

  )
}
