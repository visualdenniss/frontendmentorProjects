import React from 'react'
import './Commitment.css'
import commitmentImg from '../assets/images/about/desktop/image-commitment.jpg'
import commitmentImgTablet from '../assets/images/about/tablet/image-commitment.jpg'
import commitmentImgMobile from '../assets/images/about/mobile/image-commitment.jpg'

const Commitment = () => {
    return (
        <section className='coffee-about-commitment'>
                <picture>
                    <source media='(max-width:768px)'
                        srcSet={`${commitmentImgMobile} 768w`}
                        sizes="768px"
                    />
                    <source media='(max-width:1200px)'
                        srcSet={`${commitmentImgTablet} 1200w`}
                        sizes="1200px"
                    />
                    <source media='(min-width:1201px)'
                        srcSet={`${commitmentImg} 1201w`}
                        sizes="1201px"
                    />
                    <img src={commitmentImg}
                    alt="" />
                </picture> 
            {/* <img src={commitmentImg} srcSet={`${commitmentImg}, ${commitmentImgTablet} 1200w, ${commitmentImgMobile} 768w`} alt="" /> */}
            <div className="coffee-about-commitment-text">
                <h1>Our commitment</h1>
                <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </section>
    )
}

export default Commitment
