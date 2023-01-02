import React from 'react'
import './Hero.css'
import arrow from '../assets/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg'

const Hero = ({handleScroll}) => {

    return (
        <section className='sunnySide-hero'>
            <h1>
                We are creatives
            </h1>
            <img src={arrow} alt="" className="sunnySide-hero-arrow" 
            onClick={handleScroll}
            />
        </section>
    )
}

export default Hero
