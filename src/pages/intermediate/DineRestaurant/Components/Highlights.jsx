import React from 'react'
import './Highlights.css'

import salmonDesktop from '../assets/images/homepage/salmon-desktop-tablet.jpg'
import salmonMobile from '../assets/images/homepage/salmon-mobile.jpg'

import beefDesktop from '../assets/images/homepage/beef-desktop-tablet.jpg'
import beefMobile from '../assets/images/homepage/beef-mobile.jpg'

import chocolateDesktop from '../assets/images/homepage/chocolate-desktop-tablet.jpg'
import chocolateMobile from '../assets/images/homepage/chocolate-mobile.jpg'

const Highlights = () => {

    const highlightsData = [
        {
          title: 'Seared Salmon Fillet',
          desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
          imgDesktop: salmonDesktop, 
          imgMobile: salmonMobile,  
        },
        {
          title: 'Rosemary Filet Mignon',
          desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
          imgDesktop: beefDesktop, 
          imgMobile: beefMobile,  
        },
        {
          title: 'Summer Fruit Chocolate Mousse',
          desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
          imgDesktop: chocolateDesktop, 
          imgMobile: chocolateMobile,  
        },
    ]


    return (
        <section className='dine-highlights'> 
                <div className="dine-feature-item">
                    <div className="dine-feature-text-content">
                        <h2>A few highlights from our menu</h2>
                        <p> We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                    </div>
                    <ul className="dine-highlights-items">
                        {highlightsData.map((item)=>(
                        <li className="dine-highlights-item">
                        <picture>
                            <source media='(max-width:700px)'
                            srcSet={`${item.imgMobile} 700w`}
                            sizes="700px"
                            />
                            <source media='(min-width:701px)'
                            srcSet={`${item.imgDesktop} 701w`}
                            sizes="701px"
                            />
                            <img src={item.imgDesktop} className="dine-events-img" className="dine-highlights-thumbnail"
                        alt="" />
                        </picture> 
                            {/* <img src={item.imgDesktop} srcSet={`${item.imgDesktop}, ${item.imgMobile} 700w`} alt="" className="dine-highlights-thumbnail" /> */}
                            <div className="dine-highlights-item-text">
                                <h4 className="dine-highlights-item-title">
                                      {item.title}
                                </h4>
                                <p className="dine-highlights-item-desc">
                                      {item.desc}
                                </p>
                            </div>
                        </li>
                        ))}
                        </ul>
                </div>
        </section>
    )
}

export default Highlights
