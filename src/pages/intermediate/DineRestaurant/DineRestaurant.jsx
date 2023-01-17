import React from 'react'
import './DineRestaurant.css'
import {Link} from 'react-router-dom'
import Hero from './Components/Hero'
import Footer from './Footer.jsx'
import Features from './Components/Features'
import Highlights from './Components/Highlights'
import Events from './Components/Events'
import Cta from './Components/Cta'


const DineRestaurant = () => {
    return (
        <div className='dine'>
            <Hero></Hero>
            <Features></Features>
            <Highlights></Highlights>
            <Events></Events>
            <Cta></Cta>
            <Footer></Footer>
        </div>
    )
}

export default DineRestaurant
