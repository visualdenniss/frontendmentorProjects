import React from 'react'
import './Features.css'
import enjoyPc from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import enjoyTablet from '../assets/images/homepage/enjoyable-place-tablet.jpg'
import enjoyMobile from '../assets/images/homepage/enjoyable-place-mobile.jpg'

import localPc from '../assets/images/homepage/locally-sourced-desktop.jpg'
import localTablet from '../assets/images/homepage/locally-sourced-tablet.jpg'
import localMobile from '../assets/images/homepage/locally-sourced-mobile.jpg'

const Features = () => {
    return (
        <section className='dine-features'>
            <div className="dine-features-container">
                <div className="dine-feature-item">
                    <div className="dine-feature-item-img-container">
                        <picture>
                            <source media='(max-width:600px)'
                            srcSet={`${enjoyMobile} 600w`}
                            sizes="600px"
                            />
                            <source media='(max-width:1150px)'
                            srcSet={`${enjoyTablet} 1150w`}
                            sizes="1150px"
                            />
                            <source media='(min-width:1151px)'
                            srcSet={`${enjoyPc} 1151w`}
                            sizes="1151px"
                            />
                            <img src={enjoyPc} 
                        alt="" />
                        </picture>
                        {/* <img src={enjoyPc} srcSet={`${enjoyMobile} 600w, ${enjoyTablet} 1150w, ${enjoyPc} 1440w`} 
                        alt="" /> */}
                    </div>
                    <div className="dine-feature-text-content dine-feature-text-content-top">
                        <h2>Enjoyable place for all the family</h2>
                        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                    </div>
                </div>
                <div className="dine-feature-item">
                    <div className="dine-feature-text-content dine-feature-text-content-bottom">
                        <h2>The most locally sourced food</h2>
                        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                    </div>
                    <div className="dine-feature-item-img-container">
                    <picture>
                            <source media='(max-width:600px)'
                            srcSet={`${localMobile} 600w`}
                            sizes="600px"
                            />
                            <source media='(max-width:1150px)'
                            srcSet={`${localTablet} 1150w`}
                            sizes="1150px"
                            />
                            <source media='(min-width:1151px)'
                            srcSet={`${localPc} 1151w`}
                            sizes="1151px"
                            />
                            <img src={localPc} 
                        alt="" />
                        </picture>
                        {/* <img src={localPc} srcSet={`${localPc}, ${localTablet} 1150w, ${localMobile} 600w`} alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
