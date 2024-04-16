import axios from 'axios'

const ORDER_URL="http://localhost:8081/product-api/order";

const PRODUCT_URL="http://localhost:8081/product-api";

export const getOrders=() => axios.get(ORDER_URL);

export const addProduct=(product) => axios.post(PRODUCT_URL,product);

export const getById=(productId) => axios.get(PRODUCT_URL+"/"+productId);

export const productUpdate=(productId,product) => axios.put(PRODUCT_URL+"/"+productId,product)

export const deleteProduct=(productId) => axios.delete(PRODUCT_URL+"/"+productId);

export const modifyOrder=(orderId,orderStaus) => axios.put(ORDER_URL+"/"+orderId+"?order_Status="+orderStaus)