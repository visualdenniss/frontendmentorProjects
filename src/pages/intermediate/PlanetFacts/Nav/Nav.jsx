import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import arrow from '../assets/images/icon-chevron.svg'

const Nav = ({planets}) => {


    const handleToggle = () => {
        document.querySelector('.planetFacts-nav-toggle-hamburger').classList.toggle('planetFacts-nav-toggle-hamburger-active')
        document.querySelector('.planetFacts-nav-links-mobile').classList.toggle('planetFacts-nav-links-mobile-active')
    }

    return (
        <header className='planetFacts-nav-container'>
            <nav className='planetFacts-nav'> 
            <h2>The Planets</h2>
            <ul className='planetFacts-nav-links'>
                {planets.map((planet)=> (
                <li>
                    <Link to={`/pages/planet-facts/${(planet.name).toLowerCase()}`} className={`planetFacts-nav-link planet-${(planet.name).toLowerCase()}`} >
                    {planet.name}
                    </Link>
                    </li>
                    
                ))}
            </ul>
            <button className='planetFacts-nav-toggle'
            onClick={handleToggle}
            >
                <span className='planetFacts-nav-toggle-hamburger'></span>
            </button>
            <ul className='planetFacts-nav-links-mobile'>
                {planets.map((planet)=> (
                <li  onClick={handleToggle}>
                    <Link to={`/pages/planet-facts/${(planet.name).toLowerCase()}`} className={`planetFacts-nav-link planets-nav-mobile-link planet-${(planet.name).toLowerCase()}`} >
                    {planet.name}
                    <img src={arrow} alt="" />
                    </Link>
                    </li>
                ))}
            </ul>
            </nav>
        </header>
    )
}

export default Nav
