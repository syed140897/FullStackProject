import React, { useEffect, useState } from 'react'
import './BuyerPage.css'
import { buyerById, getProducts, searchProduct} from '../../API';
import {Link, useParams, useNavigate} from 'react-router-dom'
import search from './productImage/search.gif'

export const BuyerPage = () => {

  const {id}=useParams();

  const navigate=useNavigate();

   const[product,setProduct]=useState([]);
   const[buyer,setBuyer]=useState({});
   const [searchProductList,setSearchProductList]=useState();
  
   useEffect(()=>{
         getProducts().then(res => setProduct(res.data)).catch(err => console.log(err))
         buyerById(id).then(res => setBuyer(res.data)).catch(err => console.log(err));

   },[])

   function searchProductFunction(){
         searchProduct(searchProductList).then(res => setProduct(res.data)).catch(err => console.log(err))

   }

   function logout(){
          navigate("/")
   }

  return (
   <>
     <div className='buyerTitle'>
     <h1>E-Cart Shopping</h1>
     <div className='buyerName'>
      <h4>{buyer.buyer_Name}</h4>
      <Link to={`/orderview/${buyer.buyer_Id}`}><button id="btn">Order List</button></Link>
      <button id="btn" onClick={() => logout()}>Log Out</button>
     </div>
     </div>
     <div className='productHead'>
     <h3>Product List</h3>
     <div className='search-container'>
        <input type='text' id="search-input" onChange={(e) => setSearchProductList(e.target.value)} 
                        onKeyDown={(key) => {if(key.key == "Enter")searchProductFunction()}} />
        <img src={search} alt="search-icon" onClick={searchProductFunction}/>
        </div>
     </div>
     <div className='productList'>
        {product.map( product => 
        <>
         <div className='product'>
        <Link to={`/productView/${product.product_Id}/${buyer.buyer_Id}`}><img src={product.product_Img} alt='Product Image'/></Link> 
        <p id="productName">{product.product_Name}</p>
        <p id='productPrice'>Rs: {product.product_Price}</p>
        <p id='productRate'>Rating :{product.product_Rate}</p>
        <div>
        <Link to={`/productView/${product.product_Id}/${buyer.buyer_Id}`}><button className='addcart'>Add Cart</button></Link>
        </div>
        </div>
        </>
       )}
     </div>
   </>
   
  )
}
