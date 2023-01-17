import React, {useState} from 'react'
import './Events.css'
import familyPc from '../assets/images/homepage/family-gathering-desktop.jpg'
import familyTablet from '../assets/images/homepage/family-gathering-tablet.jpg'
import familyMobile from '../assets/images/homepage/family-gathering-mobile.jpg'

import specialPc from '../assets/images/homepage/special-events-desktop.jpg'
import specialTablet from '../assets/images/homepage/special-events-tablet.jpg'
import specialMobile from '../assets/images/homepage/special-events-mobile.jpg'

import socialPc from '../assets/images/homepage/social-events-desktop.jpg'
import socialTablet from '../assets/images/homepage/social-events-tablet.jpg'
import socialMobile from '../assets/images/homepage/social-events-mobile.jpg'
import { Link } from 'react-router-dom'

const Events = () => {

    const eventsData = [
        {
          title: 'Family Gathering', 
          content: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all." , 
          imgDesktop: familyPc,
          imgTablet: familyTablet,
          imgMobile: familyMobile,
        }, 
        {
          title: 'Special Events', 
          content: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal." , 
          imgDesktop: specialPc,
          imgTablet: specialTablet,
          imgMobile: specialMobile,
        }, 
        {
          title: 'Social Events', 
          content: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone." , 
          imgDesktop: socialPc,
          imgTablet: socialTablet,
          imgMobile: socialMobile,
        }, 
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <section className='dine-events'>
            <div className="dine-events-img-holder">
            <img src={eventsData[currentIndex].imgDesktop} srcSet={`${eventsData[currentIndex].imgDesktop}, ${eventsData[currentIndex].imgTablet} 1275w, ${eventsData[currentIndex].imgMobile} 725w,`} alt="" className="dine-events-img" />
            </div>
            <div className="dine-events-content">
                <h2 className="dine-events-title">
                    {eventsData[currentIndex].title}
                </h2>
                <p className="dine-events-desc">
                    {eventsData[currentIndex].content}
                </p>
                <Link to='/pages/dine-restaurant/booking' className='dine-link'> 
                   <button className="dine-hero-cta dine-hero-cta-dark">
                      Book a table
                   </button>
                </Link>
            <ul className="dine-events-options">
                {eventsData.map((item, index)=> (
                <li>
                    <button className={currentIndex === index ? "dine-events-options-title dine-events-options-title-selected" : "dine-events-options-title"}
                    onClick={()=>setCurrentIndex(index)}>
                        {item.title}
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </section>
    )
}

export default Events
