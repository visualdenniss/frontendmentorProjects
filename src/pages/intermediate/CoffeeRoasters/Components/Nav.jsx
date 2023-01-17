import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Hamburger from '../../../../components/intermediate/ProductPage/Hamburger'
import logo from '../assets/images/shared/desktop/logo-header.svg'
import './Nav.css'


const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const toggleMenu = () => setShowMenu(prev => !prev)
    const handleToggle = (e) => e.target === e.currentTarget && showMenu && setShowMenu(false)
    
    return (
            <header className='coffee-header'>
                <div className="coffee-header-container">
               <img className="coffee-logo" src={logo} alt="" />
               <nav className="coffee-nav">
                   <li className="coffee-nav-link-item">
                       <Link to='/pages/coffee-roasters' className='coffee-nav-link'>Home</Link>
                    </li>
                   <li className="coffee-nav-link-item">
                   <Link to='/pages/coffee-roasters/about' className='coffee-nav-link'>About Us</Link>
                   </li>
                   <li className="coffee-nav-link-item">
                   <Link to='/pages/coffee-roasters/create-your-plan' className='coffee-nav-link'>Create your Plan</Link>
                   </li>
               </nav>
               <Hamburger toggleMenu={toggleMenu} showMenu={showMenu}></Hamburger>
               <nav className={showMenu ? "coffee-mobile-nav coffee-mobile-nav-active" : "coffee-mobile-nav"}>
                   <li className="coffee-nav-mobile-link-item">
                       <Link to='/pages/coffee-roasters' className='coffee-nav-link'>Home</Link>
                    </li>
                   <li className="coffee-nav-mobile-link-item">
                   <Link to='/pages/coffee-roasters/about' className='coffee-nav-link'>About Us</Link>
                   </li>
                   <li className="coffee-nav-mobile-link-item">
                   <Link to='/pages/coffee-roasters/create-your-plan' className='coffee-nav-link'>Create your Plan</Link>
                   </li>
               </nav>
                </div>
            </header>
    )
}

export default Nav
