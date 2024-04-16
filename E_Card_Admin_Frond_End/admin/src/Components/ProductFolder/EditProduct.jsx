import React, { useState } from 'react'
import EditIcon from'./Product-Icon/edit.png'
import { getById, productUpdate } from '../API';
import { useNavigate } from "react-router-dom";


export const EditProduct = () => {

const [showProduct,setShowProduct]=useState(false);
    const[product_Id,setProduct_Id]=useState();
    const[product_Name,setProduct_Name]=useState("");
    const[product_Img,setProduct_Img]=useState("");
    const[product_Category,setProduct_Category]=useState("");
    const[product_Description,setProduct_Description]=useState("");
    const[product_Price,setProduct_Price]=useState("");
    const[product_Rate,setProduct_Rate]=useState(0);

  async function fetchProduct(e){
    e.preventDefault();
    await getById(product_Id).then(res => {
      setProduct_Name(res.data.product_Name);
      setProduct_Img(res.data.product_Img);
      setProduct_Category(res.data.product_Category);
      setProduct_Description(res.data.product_Description);
      setProduct_Price(res.data.product_Price);
      setProduct_Rate(res.data.product_Rate);
    }).then(res => setShowProduct(true))
  }

  async function updateProduct(){
    const product={product_Id,product_Name,product_Img,product_Category,product_Description,product_Price,product_Rate};
       await productUpdate(product_Id,product).then(res => alert(res.data)).catch(err => console.log("Error Occured",err));
       setShowProduct(false);     
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
           <h2>Edit Product</h2>
            <div className='inputContainer'>
            <div className='add-icon'>
              <img src={EditIcon} alt="add-Icon"/>
            </div>
           <div className='add-input'> 
            <form className='addProductContainer'>
                    <label>Product ID</label>
                    <input type='text' value={product_Id} onChange={(e)=> setProduct_Id(e.target.value)}/>
                    <button id='confirm' onClick={(e) => fetchProduct(e)}>Confirm</button>
                    {showProduct ? <>
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
                    <input type='text' placeholder='Default Rate 0' value={product_Rate} onChange={(e) => setProduct_rate(e.target.value)}/>
                    <div className='add-btn'>
                      <button id='confirm' onClick={() => updateProduct()}>Confirm</button>
                      <button id='cancel' onClick={returnPage}>Cancel</button>
                     </div>
                    </> : <></>}
                   
             </form>
            </div>
         </div>  
        
        </div>
    </>
  )
}
