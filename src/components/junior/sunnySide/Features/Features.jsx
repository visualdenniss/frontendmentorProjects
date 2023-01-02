import React, {forwardRef} from 'react'
import './Features.css'

const Features = forwardRef(({features}, ref) => {

    return (
        <section ref={ref} className='sunnySide-features'>
            <img className='sunnySide-features-img' src={features[0].imgDesktop} alt="" />
            <article className='sunnySide-features-article'>
                <div className="sunnySide-features-article-content">
                <h2 className="sunnySide-features-article-title">{features[0].title}</h2>
                <p className="sunnySide-features-article-text">
                    {features[0].desc}
                </p>
                <button className='yellow-btn'>
                    <div>Learn More</div>
                </button>
                </div>
            </article>
            <img className='sunnySide-features-img' src={features[1].imgDesktop} alt="" />
            <article className='sunnySide-features-article'>
            <div className="sunnySide-features-article-content">
                <h2 className="sunnySide-features-article-title">{features[1].title}</h2>
                <p className="sunnySide-features-article-text">
                    {features[1].desc}
                </p>
                <button className='pinkish-btn'>
                <div>Learn More</div>
                </button>
                </div>
            </article>
            
            <article className='sunnySide-features-article cherry'>
            <img src={features[2].imgDesktop} alt="" />
                <h2 className="sunnySide-features-article-title">{features[2].title}</h2>
                <p className="sunnySide-features-article-text">
                    {features[2].desc}
                </p>
                <button>Learn More</button>
            </article>
            <article className='sunnySide-features-article orange'>
            <img src={features[3].imgDesktop} alt="" />
                <h2 className="sunnySide-features-article-title">{features[3].title}</h2>
                <p className="sunnySide-features-article-text">
                    {features[3].desc}
                </p>
                <button>Learn More</button>
            </article>
            
        </section >
    )
} )

export default Features
