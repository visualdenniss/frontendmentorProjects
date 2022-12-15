import React, {useState} from 'react'
import './Pricing.css'
import {planData} from './data'

const Pricing = () => {


    const [isMonthly, setIsMonthly] = useState(true)

    const handleClick = () => {
        setIsMonthly(!isMonthly)
        document.querySelector('.pricing-toggle-circle').classList.toggle('pricing-toggle-circle-annual')
        
        document.querySelectorAll('.pricing-price')
        .forEach((price)=>
        price.classList.toggle('pricing-price-animate'))
 
        
    }

    return (
        <div className="pricing df">
            <div className="pricing-container"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            >
                <header className="pricing-header">
                    <h2 className="pricing-title">
                        Our Pricing
                    </h2>
                    <div className="pricing-options">
                        <p>Annually</p>
                        <div className="pricing-toggle" onClick={handleClick}>
                            <div className="pricing-toggle-circle"></div>
                        </div>
                        <p>Monthly</p>
                    </div>
                </header>
                <ul className="pricing-cards">
                    {planData.map((plan)=>(
                    <li className="pricing-card">
                        <h4 className="pricing-plan-name">
                            {plan.plan}
                        </h4>
                        <div className="pricing-price">
                            ${isMonthly ? plan.monthlyPrice : plan.annualPrice}
                        </div>
                        <ul className="pricing-specs">
                            {plan.specs.map((spec)=>(

                            <li className="pricing-spec">
                                {spec}
                            </li>
                            )
                            )}
                        </ul>
                        <button className="pricing-cta">
                            Learn More
                        </button>
                    </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Pricing
