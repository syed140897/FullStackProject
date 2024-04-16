import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ProductAdd } from './Components/ProductFolder/ProductAdd.jsx'
import { EditProduct } from './Components/ProductFolder/EditProduct.jsx'
import { DeleteProduct } from './Components/ProductFolder/DeleteProduct.jsx'


const router=createBrowserRouter([{
  path:"/",
  element:<App />
},{
  path:"/add-product",
  element:<ProductAdd />
},{
  path:"/edit-product",
  element:<EditProduct />
},{
  path:"/delete-product",
  element:<DeleteProduct/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
   
)
