import React from 'react'
import './Hamburger.css'

const Hamburger = ({toggleMenu,showMenu}) => {

    return (
        <button className='product-page-nav-toggle'
        onClick={toggleMenu}>
            <span className={showMenu ? 'product-page-nav-toggle-hamburger product-page-nav-toggle-hamburger-active' : 'product-page-nav-toggle-hamburger'}></span>
        </button>
    )
}

export default Hamburger
