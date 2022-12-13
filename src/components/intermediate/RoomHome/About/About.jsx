import React from 'react'
import './About.css'

const About = ({about}) => {
    return (
            <section className="room-home-about">
                <img src={about.imgDark} alt="" className="room-home-about-left-img"/>
                <div className="room-home-about-text-content">
                        <h5>{about.title}</h5>
                        <p>{about.text}</p>
                </div>
                <img  src={about.imgLight} alt=""
                className="room-home-about-right-img"/>
            </section>
    )
}

export default About
