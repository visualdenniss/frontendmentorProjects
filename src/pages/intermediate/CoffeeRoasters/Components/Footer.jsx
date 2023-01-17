import React from 'react'
import logo from '../assets/images/shared/desktop/logo-footer.svg'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='coffee-footer'>
            <img className='coffee-logo' src={logo} alt="" />
            <nav className="coffee-footer-links">
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
            <ul className="coffee-social-links">
                <li className="coffee-social-link">
                <i class="bi bi-facebook"></i>
                </li>
                <li className="coffee-social-link">
                <i class="bi bi-twitter"></i>
                </li>
                <li className="coffee-social-link">
                <i class="bi bi-instagram"></i>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
