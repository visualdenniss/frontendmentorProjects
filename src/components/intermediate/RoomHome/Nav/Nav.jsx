import React from 'react'
import logo from '../assets/room-homepage-master/images/logo.svg'
import './Nav.css'

const Nav = ({nav}) => {

    const handleHamburger = () => {
        document.querySelector(".room-home-header-hamburger").classList.toggle('room-home-header-hamburger-active')

        const nav = document.querySelector('.room-home-nav-mobile')

        nav.classList.toggle('room-home-nav-mobile-active')

    }

    return (
            <header className="room-home-header">
                        <div class="room-home-header-hamburger" onClick={handleHamburger}>
                            <div class="room-home-header-hamburger__slice"></div>
                            <div class="room-home-header-hamburger__slice"></div>
                            <div class="room-home-header-hamburger__slice"></div>
                        </div>

                <nav className="room-home-nav-mobile">
                    <ul className="room-home-nav-links-mobile">
                        {nav.map((link)=>(
                        <li className="room-home-nav-link-item-mobile">
                            <a href="#" className="room-home-nav-link-mobile">
                                {link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>

                <nav className="room-home-nav">
                    <img src={logo} alt="" className="room-home-logo"/>
                    <ul className="room-home-nav-links">
                        {nav.map((link)=>(
                        <li className="room-home-nav-link-item">
                            <a href="#" className="room-home-nav-link">
                                {link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
    )
}

export default Nav
