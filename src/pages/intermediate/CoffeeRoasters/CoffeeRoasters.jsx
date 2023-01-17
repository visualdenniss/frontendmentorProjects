import React from 'react'
import './CoffeeRoasters.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Hero from './Home/Hero'
import Collection from './Home/Collection'
import Why from './Home/Why'
import How from './Home/How'

const CoffeeRoasters = () => {
    return (
        <div className='coffee'>
            <Nav/>
            <div className="coffee-container">
            <Hero/>
            <Collection/>
            <Why></Why>
            <How></How>
            <Footer/>
            </div>
        </div>
    )
}

export default CoffeeRoasters
