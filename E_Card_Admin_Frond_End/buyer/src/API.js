import axios from 'axios'

const BUYER_URL="http://localhost:8081/product-api/buyer";

const PRODUCT_URL="http://localhost:8081/product-api"

const ORDER_URL="http://localhost:8081/product-api/order"

export const addBuyer=(buyer) => axios.post(BUYER_URL,buyer);

export const changePassword=(buyer_Phone,buyer_newPassword) => axios.put(BUYER_URL+"?buyer_Phone="+buyer_Phone+"&buyer_newPassword="+buyer_newPassword);

export const validBuyer=(buyer_Phone,buyer_Password) => axios.get(BUYER_URL+"?buyer_Phone="+buyer_Phone+"&buyer_Password="+buyer_Password);

export const getProducts=() => axios.get(PRODUCT_URL);

export const getById=(productId) => axios.get(PRODUCT_URL+"/"+productId);

export const addOrder=(buyerId,order) => axios.post(ORDER_URL+"/"+buyerId,order);

export const buyerById=(buyerId) => axios.get(BUYER_URL+"/"+buyerId);

export const findOrderByBuyerId=(buyerId) => axios.get(BUYER_URL+"/order/"+buyerId)

export const deleteOrder=(order_Id) => axios.delete(ORDER_URL+"/"+order_Id);

export const getOrders=() => axios.get(ORDER_URL);

export const searchProduct=(productName) => axios.get(PRODUCT_URL+"/search/"+productName);