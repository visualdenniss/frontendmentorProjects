import React from 'react'
import './Quality.css'
import qualityImg from '../assets/images/about/desktop/image-quality.jpg'
import qualityImgTablet from '../assets/images/about/tablet/image-quality.jpg'

const Quality = () => {
    return (
        <section className='coffee-about-quality'>
            <div className="coffee-about-quality-text">
                <h1>Uncompromising quality</h1>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
            <picture>
                    <source media='(max-width:1200px)'
                        srcSet={`${qualityImgTablet} 1200w`}
                        sizes="1200px"
                    />
                    <source media='(min-width:1201px)'
                        srcSet={`${qualityImg} 1201w`}
                        sizes="1201px"
                    />
                    <img src={qualityImg}
                    alt="" />
            </picture> 
            {/* <img src={qualityImg} srcSet={`${qualityImg}, ${qualityImgTablet} 1200w`} alt="" /> */}
        </section>
    )
}

export default Quality
