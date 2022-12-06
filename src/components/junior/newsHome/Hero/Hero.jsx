import React from 'react'
import './Hero.css'

const Hero = ({heroData,recentNews}) => {

    const {title,desc,cta,imgDesktop,imgMobile} = heroData

    return (
        <main className='newsHome-hero'>
            <section className="newsHome-hero-left">
                <div className="newsHome-hero-left-img-holder">
                    <img src={imgDesktop} srcSet={`${imgDesktop}, ${imgMobile} 400w`} alt=""/>
                </div>
                <header className='newsHome-hero-left-header'>
                    <h2 className="newsHome-hero-left-header-title">
                        {title}
                    </h2>
                    <div className="newsHome-hero-left-header-desc">
                        <p>{desc}</p>
                        <button>{cta}</button>
                    </div>
                </header>
            </section>
            <section className="newsHome-hero-right">
                <h2 className="newsHome-hero-right-title">
                    NEW
                </h2>
                <ul className="newsHome-hero-right-recentNews">
                    {recentNews.map((news)=>(
                        <li className="newsHome-hero-right-recentNews-news">
                            <h3 className="newsHome-hero-right-recentNews-news-title">
                                {news.newsTitle}
                            </h3>
                            <p className="newsHome-hero-right-recentNews-news-desc">
                                {news.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Hero
