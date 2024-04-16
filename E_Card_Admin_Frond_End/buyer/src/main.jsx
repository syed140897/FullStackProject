import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { LoginPage } from './Components/LoginPage.jsx'
import { ForgotPassWord } from './Components/ForgotPassWord.jsx'
import { RegisterPage } from './Components/RegisterPage.jsx'
import { BuyerPage } from './Components/BuyerPage/BuyerPage.jsx'
import { ProductView } from './Components/BuyerPage/ProductView.jsx'
import { OrderPage } from './Components/BuyerPage/OrderPage.jsx'

const routers=createBrowserRouter([{
  path:"/",
  element:<LoginPage/>
},{
  path:"/forgotpassword",
  element:<ForgotPassWord/>
},{
  path:"/registerpage",
  element:<RegisterPage/>
},{
  path:"/buyerpage/:id",
  element:<BuyerPage/>
},{
  path:"/productView/:id/:buyerId",
  element:<ProductView/>
},{
  path:"/orderview/:id",
  element:<OrderPage/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}/>
)
