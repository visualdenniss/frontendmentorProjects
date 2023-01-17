import React from 'react'
import Commitment from './About/Commitment'
import Headquarters from './About/Headquarters'
import Hero from './About/Hero'
import Quality from './About/Quality'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import './CoffeeAbout.css'

const CoffeeAbout = () => {
    return (
        <div className='coffee coffee-about'>
                <Nav></Nav>
            <div className="coffee-container">
                <Hero></Hero>
                <Commitment></Commitment>
                <Quality></Quality>
                <Headquarters></Headquarters>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default CoffeeAbout
