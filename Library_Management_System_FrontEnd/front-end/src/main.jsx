import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { AddBook } from './Components/AddBook.jsx'
import { ModifyBook } from './Components/ModifyBook.jsx'
import { DeleteBook } from './Components/DeleteBook.jsx'
import { Booking } from './Components/Booking.jsx'
import { ReturnBook } from './Components/ReturnBook.jsx'
import { BookDetails } from './Components/BookDetails.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App />
},{
  path:"/add-book",
  element:<AddBook/>
},{
  path:"/replace-book",
  element:<ModifyBook />
},{
  path:"/delete-book",
  element:<DeleteBook />
},{
  path:"/booking",
  element:<Booking/>
},{
  path:"/booking/:id",
  element:<Booking/>
},{
  path:"/return-book",
  element:<ReturnBook/>
},{
  path:"/book-detail",
  element:<BookDetails/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
