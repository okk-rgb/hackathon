import React from 'react'
import './AddProducts.css'

const AddProducts = () => {

  return (
    <div className="container">
    <div className='add-products-container'>
      <div className="add-product-form">
        <p className='info'>Information</p>
        <label className='add-product-label__name'>Product Name</label>
        <input className='add-product-input__name' type="text" placeholder='Summer T-Shirt'/>
        <label className='add-product-label__desc'>Product Name</label>
        <input className='add-product-input__desc' type="text" placeholder='Product Description'/>
        <label className='add-product-label__img'>Images URL</label>
        <input className='add-product-input__img' type="text"/>
        <label className='add-product-label__price'>Price</label>
        <div style={{display: 'flex', gap: '28px', marginLeft: '28px', marginTop: '48px'}}>
            <div>
                <label className='add-product-label__price'>Product Price</label>
                <input className='add-product-input__price' type="text" placeholder='Enter price'/>
            </div>
            <div>
                <label className='add-product-label__discount'>Product Discount</label>
                <input className='add-product-input__discount' type="text" placeholder='Enter Discount'/>
            </div>
        </div>
      </div>
    </div></div>
  )
}

export default AddProducts
