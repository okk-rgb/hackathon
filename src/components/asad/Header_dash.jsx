import React from 'react'
import himg from '../../assets/logo.png'
import { IoIosSearch } from 'react-icons/io'

const Header_dash = () => {
  return (
    <header className='site__header'>
      <div className="container">
        <div className="header__wrapper">
          <img src={himg} alt="" />

          <div className="search__bar">
            <IoIosSearch />
            <input type="text" placeholder=''/>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header_dash
