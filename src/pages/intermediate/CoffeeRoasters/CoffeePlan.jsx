import React from 'react'
import Hero from './Plan/Hero'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import How from './Plan/How'
import Aq from './Plan/Aq'

const CoffeePlan = () => {
    return (
        <div className='coffee coffee-plan'>
                <Nav></Nav>
            <div className="coffee-container">
                <Hero></Hero>
                <How></How>
                <Aq></Aq>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default CoffeePlan
