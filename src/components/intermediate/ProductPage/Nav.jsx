import React, {useEffect, useState} from 'react'
import './Nav.css'
import logo from './assets/ecommerce-product-page-main/images/logo.svg'
import cart from './assets/ecommerce-product-page-main/images/icon-cart.svg'
import avatar from './assets/ecommerce-product-page-main/images/image-avatar.png'
import Hamburger from './Hamburger'
import Cart from './Cart'

const Nav = ({setCartItems, cartItems, amount}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const toggleMenu = () => setShowMenu(prev => !prev)
    const handleToggle = (e) => e.target === e.currentTarget && showMenu && setShowMenu(false)

    return (
        <header className='product-page-header'>
            <Hamburger toggleMenu={toggleMenu} showMenu={showMenu}/>
            <img src={logo} className='product-page-header-logo' alt="" />
            <nav className="product-page-header-nav">
                <ul className="product-page-header-nav-links">
                   <li className="product-page-header-nav-link">Collections</li>
                   <li className="product-page-header-nav-link">Men</li>
                   <li className="product-page-header-nav-link">Women</li>
                   <li className="product-page-header-nav-link">About</li>
                   <li className="product-page-header-nav-link">Contact</li>
                </ul>
            </nav>
            <nav className={showMenu ? "product-page-header-nav-mobile product-page-header-nav-mobile-active" : "product-page-header-nav-mobile "}
            onClick={handleToggle}
            >
                <ul 
                className=
                "product-page-header-nav-mobile-links">
                   <li className="product-page-header-nav-mobile-link" onClick={()=>setShowMenu(false)}>Collections</li>
                   <li className="product-page-header-nav-mobile-link" onClick={()=>setShowMenu(false)}>Men</li>
                   <li className="product-page-header-nav-mobile-link" onClick={()=>setShowMenu(false)}>Women</li>
                   <li className="product-page-header-nav-mobile-link" onClick={()=>setShowMenu(false)}>About</li>
                   <li className="product-page-header-nav-mobile-link" onClick={()=>setShowMenu(false)}>Contact</li>
                </ul>
            </nav>
            <div className="product-page-header-right">
                <button className="product-page-header-chart" onClick={()=>setShowCart(prev=>!prev)}>
                    {cartItems !== '' && 
                    <div className= "product-page-item-count">1</div>
                    }
                    <img src={cart} alt="" />
                </button>
                <div className="product-page-header-avatar">
                    <img src={avatar} alt="" />
                </div>
            {showCart && <Cart amount={amount} cartItems={cartItems} setCartItems={setCartItems} setShowCart={setShowCart}></Cart>}
            </div>
        </header>
    )
}

export default Nav
