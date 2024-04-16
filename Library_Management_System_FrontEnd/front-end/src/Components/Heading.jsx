import React from 'react'
import './Heading.css'
import { Link } from 'react-router-dom'

export const Heading = () => {
  return (
    <div className='heading'> 
       <h1>Library Management Systems</h1>
       <div className='heading-btn'> 
       <Link to="/add-book"><button id="add-book">Add Book</button></Link>
       <Link to="/book-detail"><button id="add-book">Book Details</button></Link>
       <Link to={"/replace-book"}><button id="add-book">Replace Book</button></Link>
       <Link to="/delete-book"><button id="add-book">Delete Book</button></Link>
       </div>
    
    </div>
  )
}
