import React, {useEffect, useState} from 'react'
import './Hero.css'
import arrowLeft from '../assets/room-homepage-master/images/icon-angle-left.svg'
import arrowRight from '../assets/room-homepage-master/images/icon-angle-right.svg'
import iconArrow from '../assets/room-homepage-master/images/icon-arrow.svg'

const Hero = ({slider}) => {

    const [currentIndex,setCurrentIndex] = useState(0)

    const handleClick = (direction) => {

        const imgs = document.querySelectorAll('.room-home-hero-img') 
        const text = document.querySelector('.room-home-hero-text-content-wrapper')

        text.classList.add('room-home-hero-text-content-wrapper-fade-in')

        if (direction === 'prev') {
            if (currentIndex < 1) {
                setCurrentIndex(2)
                imgs.forEach((img)=>(
                    img.style.transform = 'translateX(-200%)'
                ))
            } else {
                setCurrentIndex(prev => prev - 1)
                imgs.forEach((img)=>(
                    img.style.transform = `translateX(${(currentIndex - 1) * -100}%)`
                ))
            }
        } 
        else {
            if (currentIndex == 2) {
                setCurrentIndex(0)
                imgs.forEach((img)=>(
                    img.style.transform = 'translateX(0)'
                ))
            } else {
                setCurrentIndex(prev => prev + 1)
                imgs.forEach((img)=>(
                    img.style.transform = `translateX(${(currentIndex + 1) * -100}%)`
                ))
            }
        }

       setTimeout(()=>{
            text.classList.remove('room-home-hero-text-content-wrapper-fade-in')
       },800 )
    }

    return (
            <section className="room-home-hero">
                <div className="room-home-hero-slider">
                    <div className="room-home-hero-slider-container">
                    <div className="room-home-hero-img-wrapper">
                        <img src={slider[0].imgDesktop}
                         srcSet={`${slider[0].imgDesktop}, ${slider[0].imgMobile} 400w`}
                          alt="" className="room-home-hero-img"/>
                        <img src={slider[1].imgDesktop}
                        srcSet={`${slider[1].imgDesktop}, ${slider[1].imgMobile} 400w`} alt="" className="room-home-hero-img"/>
                        <img src={slider[2].imgDesktop}
                        srcSet={`${slider[2].imgDesktop}, ${slider[2].imgMobile} 400w`} alt="" className="room-home-hero-img"/>
                    </div>
                    </div>
                    <div className="room-home-hero-nav">
                        <button className="room-home-hero-nav-btn" 
                        onClick={()=>handleClick('prev')}>
                            <img src={arrowLeft} alt="" className="room-home-hero-nav-arrow"/>
                        </button>
                        <button className="room-home-hero-nav-btn" 
                        onClick={()=>handleClick('next')}>
                            <img src={arrowRight} alt="" className="room-home-hero-nav-arrow"/>
                        </button>
                    </div>
                </div>
                <div className="room-home-hero-text-content-wrapper">
                    <h4 className="room-home-hero-text-content-title">
                        {slider[currentIndex].title}
                    </h4>
                    <p className="room-home-hero-text-content-desc">
                        {slider[currentIndex].text}
                    </p>
                    <button className="room-home-hero-text-content-cta">
                        <p>SHOP NOW</p>
                        <img src={iconArrow} alt=""/>
                    </button>
                </div>
            </section>
    )
}

export default Hero
