import React from 'react'
import productImg from '../../../public/products-add.png'
import './Products.css'

const Products = () => {

  return (
    <div className='products-main'>
      <img className='product-img' src={productImg} alt="img" />
      <p className='product-title'>Add Products</p>
      <p className='procuts__desc'>Start making sales by adding your products. <br /> You can import and manage your products at any time.</p>
      <button  className='products-btn'>+ Add Product</button>
    </div>
  )
}

export default Products
