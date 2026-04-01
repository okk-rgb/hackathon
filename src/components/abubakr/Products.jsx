import React from 'react'
import productImg from '../../../public/products-add.png'
import './Products.css'
// import { useNavigate } from 'react-router-dom'

const Products = () => {
    // const navigate = useNavigate()

  return (
    <div className='products-main'>
      <img className='product-img' src={productImg} alt="img" />
      <p className='product-title'>Add Products</p>
      <p className='procuts__desc'>Start making sales by adding your products. <br /> You can import and manage your products at any time.</p>
      <button  className='product-btn'>+ Add Product</button>
      {/* <button  className='product-btn'>+ Add Product</button>onClick={() => navigate='/addProducts'} */}
    </div>
  )
}

export default Products
