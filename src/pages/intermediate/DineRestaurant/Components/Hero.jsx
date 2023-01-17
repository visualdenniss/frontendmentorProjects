import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const Hero = () => {
    return (
        <section className='dine-hero'>
            <Link to='/pages/dine-restaurant'>
                <img src={logo} alt="" />
            </Link>
            <h1 className="dine-hero-title">
            Exquisite dining <br></br> since 1989
            </h1>
            <p className="dine-hero-subtitle">
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Link to='/pages/dine-restaurant/booking'>
            <button className="dine-hero-cta dine-hero-cta-light">
                Book a table
            </button>
            </Link>
        </section>
    )
}

export default Hero
