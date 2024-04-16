import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <div className='headContainer'>
        <h1>E-cart Admin</h1>
        <div className='productController'>
            <Link to="/add-product"><button>Add Product</button></Link>
            <Link to={"/edit-product"}><button>Edit Product</button></Link>
             <Link to="/delete-product"><button>Remove Product</button></Link>
        </div>
      </div>
    </>
  )
}
