import React, { useEffect } from 'react'
import { useState } from 'react';
import './ProductView.css'
import { addOrder, buyerById, getById } from '../../API';
import { useParams, useNavigate, Link} from 'react-router-dom';

export const ProductView = () => {


    const {id,buyerId}=useParams()

   const[product_Name,setProduct_Name]=useState();
   const[product_Img,setProduct_Img]=useState();
   const[product_Description,setProduct_Description]=useState();
   const[product_Price,setProduct_Price]=useState();
   const[product_Rate,setProduct_Rate]=useState();
   const[product_Count,setProduct_Count]=useState(1);

   const[total_Amount,setTotal_Amount]=useState();
   const[payment_mode,setPayment_mode]=useState("COD");
   const[order_Status]=useState("Order");
   const[buyer,setBuyer]=useState({});
     
   const navigate=useNavigate();
   
   useEffect(() =>{
        buyerById(buyerId).then(res => setBuyer(res.data)).catch(err => console.log(err));
        getById(id).then(res => {
        setProduct_Name(res.data.product_Name);
        setProduct_Description(res.data.product_Description);
        setProduct_Img(res.data.product_Img);
        setProduct_Price(res.data.product_Price);
        setProduct_Rate(res.data.product_Rate);
        setTotal_Amount(product_Count*(res.data.product_Price));
       })
   },[product_Count])

   function logout(){
    navigate("/")
     }

   function addOrders(e){
          e.preventDefault();
          console.log(total_Amount,product_Count)
          let order={product_Img,product_Name,product_Count,total_Amount,payment_mode,order_Status};
          addOrder(buyerId,order).then(res => alert(res.data)).catch(err => console.log(err));

   }

  return (
       <>
        <div className='buyerTitle'>
     <h1>E-Cart Shopping</h1>
     <div className='buyerName'>
      <h4>{buyer.buyer_Name}</h4>
      <Link to={`/buyerpage/${buyer.buyer_Id}`}><button id="btn">Home</button></Link>
      <Link to={`/orderview/${buyer.buyer_Id}`}><button id="btn">Order List</button></Link>
      <button id="btn" onClick={() => logout()}>Log Out</button>
     </div>
     </div>
     <h3>Product Details</h3>
     <div className='productViewPage'>
        <div className='productDetaiils'>
          <div className='productImg'>
            <img src={product_Img} alt='phone' />
          </div>
          <div className='productDecrip'>
            <div>
            <p id="productName">{product_Name}</p>
            <p id="productDes">{product_Description}</p>
            <p id="productPrice">Rs : {product_Price}</p>
            <p id="productRate">Rating: {product_Rate}</p>
            <div id="payment">
            <h5>Payment Mode :</h5>
             <select id='orderMode' onChange={(e) => setPayment_mode(e.target.value)}>
                <option value="COD">COD</option>
                <option value="Online">Online Payment</option>
              </select>
              </div>
            </div>
            <div className='productViewBtn'>
                <p id="productCount">Count : <input id='count' type='number' 
                                     min={1} value={product_Count} 
                                        onChange={e => setProduct_Count(e.target.value)}/></p>
                <button id="btn" className='addcart' onClick={(e) => addOrders(e)}>Order Now</button>
            </div>  
          </div>
         </div>
         <div className='orderView'>
            <p id='orderDetail'>Order Detail</p>
            <div className='order'>
            <div className='orderHead'>    
            <p id='orderName'>Product Name </p>
            <p id='orderPrice'>Product Price </p>
            <p id='productCount'>Product Count </p>
            <p id='total'>Total</p>
            </div>
            <div >
            <p id='orderName'>: {product_Name} </p>
            <p id='orderPrice'>: {product_Price}</p>
            <p id='productCount'>: {product_Count}</p>
            <p id='total'>: {product_Count*product_Price}</p>
            </div>
           </div>
         </div>
       
     </div>
    
       
       </>
  )
}
