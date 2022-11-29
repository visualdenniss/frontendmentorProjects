import React from 'react'
import './ParfumCard.css'
import icon from '../parfumCard/assets/product-preview-card-component-main/images/icon-cart.svg'

const ParfumCard = () => {
    return (
        <div className='parfumeCard df'>
            <div data-aos="fade-in" data-aos-delay="250" data-aos-duration="500" className="parfumeCard-item">
                <div className="parfumeCard-left">
                </div>
                <div className="parfumeCard-right">
                    <div className="parfumeCard-title-desc">Perfume</div>
                    <div className="parfumeCard-title">Gabrielle Essence Eau De Parfum</div>
                    <div className="parfumeCard-desc">
                        A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                        Perfumer-Creator for the House of CHANEL.
                    </div>
                    <div className="parfumeCard-price">
                        <div className="parfumeCard-price-actual">
                            $149.99
                        </div>
                        <div className="parfumeCard-price-old">
                            $169.99
                        </div>
                    </div>
                    <button className="parfumeCard-button"> 
                    <img src={icon} alt=""/>
                    <p>
                        Add to Cart
                    </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ParfumCard
