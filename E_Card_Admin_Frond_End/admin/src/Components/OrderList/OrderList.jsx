import React, { useEffect, useState } from 'react'
import './OrderList.css'
import { getOrders, modifyOrder } from '../API';
import confirm from '../ProductFolder/Product-Icon/ok.png'
import cancel from '../ProductFolder/Product-Icon/no.png'
import { useNavigate } from 'react-router-dom';

export const OrderList = () => {

   
   const[orderList,setOrderList]=useState([]);
   const[order_Status,setOrder_Status]=useState();
   const[showOrderList,setShowOrderList]=useState(true)
   const[showDelivery,setShowDelivery]=useState(false)
   

    useEffect(()=>{
      getOrders().then(order => order.data.filter(order => order.order_Status=="Order"))
      .then(orders => setOrderList(orders))
      .catch(err => console.log(err))},[])

     function confirmfunction(order_Id,e){
              e.preventDefault();
              let order_Status="Delivery";
              modifyOrder(order_Id,order_Status).then(res => alert(res.data)).catch(err => console.log(err))
    }

     function cancelfunction(order_Id,e){
              e.preventDefault();
              let order_Status="Cancel";
              modifyOrder(order_Id,order_Status).then(res => alert(res.data)).catch(err => console.log(err))

    }

    function currentPage(e){
      e.preventDefault();
      setShowOrderList(true)
     getOrders().then(order => order.data.filter(order => order.order_Status=="Order"))
           .then(orders => setOrderList(orders))
           .catch(err => console.log(err))
    }

    function deliveryOrder(e){
      e.preventDefault();
        setShowOrderList(false);
        setShowDelivery(true)
        getOrders().then(order => order.data.filter(order => order.order_Status=="Delivery"))
            .then(orders => setOrderList(orders))
            .catch(err => console.log(err))

    }
    function cancelOrder(e){
      e.preventDefault();
        setShowOrderList(false)
        setShowDelivery(false)
      getOrders().then(order => order.data.filter(order => order.order_Status=="Cancel"))
      .then(orders => setOrderList(orders))
      .catch(err => console.log(err))

    }

  return (
    <> 
       <div className='body-contents'>
        <div className='orderList'>
        <h2>Order List</h2>
           <table>
            <thead>
                <th>Order ID</th>
                <th>Buyer Name</th>
                <th>Buyer Address</th>
                <th>Buyer Phone</th>
                <th>Product Name</th>
                <th>Product Count</th>
                <th>Product Total Amount</th>
                <th>Payment Mode</th>
                <th>Order Action</th>
            </thead>
             <tbody>
              {orderList.map(order => 
                <tr key={order.order_id}>
                    <td>{order.order_id}</td>
                    <td>{order.buyer_Name}</td>
                    <td>{order.buyer_Address}</td>
                    <td>{order.buyer_Phone}</td>
                    <td>{order.product_Name}</td>
                    <td>{order.product_Count}</td>
                    <td>{order.total_Amount}</td>
                    <td>{order.payment_mode}</td>
                    <td>
                       {showOrderList ? 
                      <>
                      <button id="btn" onClick={(e) => confirmfunction(order.order_id,e)}><img src={confirm} id='confirm-logo'/></button>
                      <button id="btn" onClick={(e) => cancelfunction(order.order_id,e)}><img src={cancel} id='cancel-logo'/></button>
                      </> :  showDelivery ? <p id='deliveryaction'>Delivery Order</p> : <p id='cancelaction'>Order Cancel</p>}
                   
                    </td>

                   </tr>
               )}
             </tbody>
           </table>
        </div>
        <div className='filter-option'>
          <h3>Filter Option</h3>
          <div className='filter-group'>
             <button onClick={(e) => currentPage(e)}>Current Order</button>
             <button onClick={(e) => deliveryOrder(e)}>Deliverd Order</button>
             <button onClick={(e) => cancelOrder(e)}>Cancel Order</button>
          </div>
        </div>
       </div>
       
    </>
  )
}
