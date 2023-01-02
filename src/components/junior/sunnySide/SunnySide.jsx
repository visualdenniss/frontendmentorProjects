import React, {useRef} from 'react'
import './SunnySide.css'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import Testimonials from './Testimonials/Testimonials'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'

import {features, testimonials, galleryDesktop , galleryMobile , socialMed} from './data'

const SunnySide = () => {

    const myRef = useRef()

    const handleScroll = () => {
        window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    }

    return (
        <div className='sunnySide' 
        data-aos="fade-in"    
        data-aos-delay="400"
        data-aos-duration="600">
            <Nav></Nav>
            <main className='sunnySide-container'>
            <Hero handleScroll={handleScroll}></Hero>
            <Features ref={myRef} features={features}></Features>
            <Testimonials testimonials={testimonials}></Testimonials>
            <Gallery galleryDesktop={galleryDesktop} galleryMobile={galleryMobile} ></Gallery>
            </main>
            <Footer socialMed={socialMed}></Footer>
        </div>
    )
}

export default SunnySide
