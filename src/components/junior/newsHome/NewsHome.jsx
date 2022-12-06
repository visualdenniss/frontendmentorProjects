import React from 'react'
import Hero from './Hero/Hero'
import Nav from './Nav/Nav'
import './NewsHome.css'
import {navData,heroData,recentNews,topNews} from './contentData.js'
import FeaturedNews from './FeaturedNews/FeaturedNews'

const NewsHome = () => {

    return (
        <div className="newsHome">
            <main className="newsHomeWrapper"
            data-aos="fade-in"
            data-aos-delay="250"
            data-aos-duration="1000">
            <Nav navData={navData}></Nav>
            <Hero heroData={heroData} recentNews={recentNews}></Hero>
            <FeaturedNews topNews={topNews}></FeaturedNews>
            </main>
        </div>
    )
}

export default NewsHome
