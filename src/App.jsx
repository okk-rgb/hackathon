import React from 'react'
import Header_dash from './components/asad/Header_dash'
import Products from './components/abubakr/Products'
import AddProducts from './components/abubakr/AddProducts'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div style={{
      display: 'flex'
    }}>
      <Header_dash/>
      <Routes>
        <Route path='/' element={''}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/' element={''}/>
      </Routes>
      {/* <Products/> */}
      {/* <AddProducts/> */}
    </div>
  )
}

export default App
