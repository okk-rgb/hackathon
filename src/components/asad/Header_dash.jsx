import React from 'react'
import himg from '../../assets/logo.png'
import { IoIosSearch } from 'react-icons/io'
import './Header_dash.css'
import { Link } from 'react-router-dom'
import { CiFolderOn, CiHome } from 'react-icons/ci'
import { IoPricetagOutline } from 'react-icons/io5'

const Header_dash = () => {
  return (
    <header className='site__header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">\

          <img src={himg} alt="" />
          </div>

          <div className="search__bar">
            <div className="header__icon"><IoIosSearch /></div>
            <input type="text" placeholder='Search...'/>
          </div>
        </div>

        <aside className='sidebar__wrapper'> 
          <div className="container">
          <ul>
            <li>
              <button><Link><span><CiHome /></span> Dashboard</Link></button>
            </li>
            <li>
              <button><Link><span><IoPricetagOutline /></span> Products</Link></button>
              
            </li>
            <li>
              <button><Link><span><CiFolderOn /></span>Categories</Link></button>
              
            </li>
          </ul>
          </div>
        </aside>
      </div>
      
    </header>
  )
}

export default Header_dash
