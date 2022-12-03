import React from 'react'
import './OrderSummary.css'
import dancing from '../OrderSummary/assets/order-summary-component-main/images/illustration-hero.svg'
import icon from '../OrderSummary/assets/order-summary-component-main/images/icon-music.svg'
import bgDesktop from '../OrderSummary/assets/order-summary-component-main/images/pattern-background-desktop.svg'
import bgMobile from '../OrderSummary/assets/order-summary-component-main/images/pattern-background-mobile.svg'

const OrderSummary = () => {
    return (
        <div className='orderSummary df'>
            <div className="orderSummary-container"
            data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
            >
                <img src={dancing} alt="" className="orderSummary-img"/>
                <div className="orderSummary-text-content">
                    <h1 className="orderSummary-title">
                        Order Summary
                    </h1>
                    <p className="orderSummary-desc">
                        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!                        
                    </p>
                    <div className="orderSummary-plan">
                        <img src={icon} alt="" className="orderSummary-plan-icon"/>
                        <div className="orderSummary-plan-info">
                            <p>Annual Plan</p>
                            <p>$59.99/year</p>
                        </div>
                        <a href="" className="orderSummary-plan-link">
                            Change
                        </a>
                    </div>
                    <button className="orderSummary-cta"
                    data-aos="fade-up" data-aos-delay="450" 
                    data-aos-offset="-60" 
                    data-aos-duration="500"
                    >
                        Proceed to Payment
                    </button>
                    <button className="orderSummary-cta"
                    data-aos="fade-up" data-aos-delay="650" 
                    data-aos-offset="-60" 
                    data-aos-duration="500"
                    >
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
