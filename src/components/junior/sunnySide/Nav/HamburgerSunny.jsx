import React from 'react'
import './HamburgerSunny.css'

const HamburgerSunny = ({ handleMobileNav, showMenu }) => {
    //  delete class all-hamburger-containers when copypasting.
    return (
        <button className='hamburger-sunny-container'
            onClick={handleMobileNav}>
            <span className={showMenu ? 'hamburger-sunny hamburger-sunny-active' : 'hamburger-sunny'}></span>
            <span className={showMenu ? 'hamburger-sunny hamburger-sunny-active' : 'hamburger-sunny'}></span>
            <span className={showMenu ? 'hamburger-sunny hamburger-sunny-active' : 'hamburger-sunny'}></span>
        </button>
    )
}

export default HamburgerSunny
