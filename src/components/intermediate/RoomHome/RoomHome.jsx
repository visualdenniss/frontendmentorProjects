import React from 'react'
import './RoomHome.css'
import {nav, sliderData as slider, aboutData as about} from './roomData.js'
import Hero from './Hero/Hero'
import About from './About/About'
import Nav from './Nav/Nav'

const RoomHome = () => {
    return (
        <div className='room-home' 
        data-aos="fade-in"
        data-aos-delay="150"
        data-aos-duration="1000">
            <Nav nav={nav}></Nav>
            <main className="room-home-container">
            <Hero slider={slider}></Hero>
            <About about={about}></About>
            </main>
        </div>
    )
}

export default RoomHome
