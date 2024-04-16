import React from 'react'
import {useNavigate,useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { buyerById, deleteOrder, findOrderByBuyerId} from '../../API';
import phone from './productImage/Phone.jpg'
import './OrderPage.css'


export const OrderPage = () => {

    const {id}=useParams();

    const navigate=useNavigate();
  
     const[buyer,setBuyer]=useState({});
     const[order,setOrder]=useState([]);
    
     useEffect(()=>{
           buyerById(id).then(res => setBuyer(res.data)).catch(err => console.log(err));
           findOrderByBuyerId(id).then(res => setOrder(res.data)).catch(err => console.log(err));
  
     },[order])
  
     function logout(){
            navigate("/")
     }

     function deleteOrders(order_id){
          deleteOrder(order_id).then(res => alert(res.data)).catch(err => console.log(err));
     }

  return (

       <>
         <div className='buyerTitle'>
          <h1>E-Cart Shopping</h1>
         <div className='buyerName'>
         <h4>{buyer.buyer_Name}</h4>
         <Link to={`/buyerpage/${id}`}><button id="btn">Home</button></Link>
         <button id="btn" onClick={() => logout()}>Log Out</button>
         </div>
         </div>
         <h2>Order List</h2>
         <div className='orderPage'>
            {order.map(order => <>
                <div className='orderListPage'>
          <div>
              <img src={order.product_Img} alt='Product Image'/>            
         </div>
          <div>
            <p id='orderNamepage'>Product Name:{order.product_Name}</p>
            <p id='orderCountpage'>Product Count:{order.product_Count}</p>
            <p id='orderPricepage'>Total Amount:{order.total_Amount}</p>
            {order.order_Status == "Order" ?
            <p id="orderStatusPage">Status : Order</p> :
             order.order_Status == "Delivery" ?  <p id="orderStatusPage">Status : Delivery Done</p> : 
                                                       <p id="orderStatusPage">Status : Product Not Availble</p>}
          </div>
          <div className='orderDelete'>
            {order.order_Status == "Order" ?
            <button onClick={() => deleteOrders(order.order_id)} id="orderDelete">Order Delete</button> :
             order.order_Status == "Delivery" ? <button onClick={() => deleteOrders(order.order_id)} id="historyDeleteD">History Delete</button> : 
             <button onClick={() => deleteOrders(order.order_id)} id='historyDeleteC'>History Delete</button>}
          </div>
          </div>
          </>
          )}
           
           </div>
       </>
    )
}
