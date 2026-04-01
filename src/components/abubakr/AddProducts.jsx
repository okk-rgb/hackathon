import React from 'react'
import './AddProducts.css'

const AddProducts = () => {
  return (
    <div className='add-products-container'>
      <div className="add-product-form">
        <p className='info'>Information</p>
        <label className='add-product-label__name'>Product Name</label>
        <input className='add-product-input__name' type="text" placeholder='Summer T-Shirt'/>
        <label className='add-product-label__desc'>Product Name</label>
        <input className='add-product-input__desc' type="text" placeholder='Summer T-Shirt'/>
      </div>
    </div>
  )
}

export default AddProducts
