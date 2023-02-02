import React, {useState} from 'react'
import './Nav.css'
import logo from '../assets/sunnyside-agency-landing-page-main/images/logo.svg'
import hamburger from '../assets/sunnyside-agency-landing-page-main/images/icon-hamburger.svg'
import HamburgerSunny from './HamburgerSunny'

const Nav = () => {

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(prev => !prev)

    const handleMobileNav = () => {
        document.querySelector('.sunnySide-nav-mobile-links').classList.toggle('sunnySide-nav-mobile-links-active')
        toggleMenu();
    }

    return (
        <header className='sunnySide-header'>
            <nav className='sunnySide-header-nav'>
              <div className="sunnySide-logo">
                  <img src={logo} alt="" />
              </div>
              <ul className='sunnySide-nav-links'>
                <li className="sunnySide-nav-link">About</li>
                <li className="sunnySide-nav-link">Services</li>
                <li className="sunnySide-nav-link">Projects</li>
                <li className="sunnySide-nav-link">
                  <button>Contact</button>
                </li>
              </ul>
              <HamburgerSunny handleMobileNav={handleMobileNav} showMenu={showMenu}></HamburgerSunny>
              <ul className='sunnySide-nav-mobile-links'
              >
                <li className="sunnySide-nav-mobile-link">About</li>
                <li className="sunnySide-nav-mobile-link">Services</li>
                <li className="sunnySide-nav-mobile-link">Projects</li>
                <li className="sunnySide-nav-mobile-link">
                  <button>Contact</button>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Nav
