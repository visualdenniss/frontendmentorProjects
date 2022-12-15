import React from 'react'
import './StepFive.css'
import thanks from '../../../assets/multi-step-form-main/assets/images/icon-thank-you.svg'

const StepFive = () => {
    return (
        <section className="multi-step-form-step-five df"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600">
            <div className="multi-step-form-step-five-container">
                <img src={thanks} alt="" className="multi-step-form-thanks-img"/>
                <h3 className="multi-step-form-thanks-title">
                    Thank You!
                </h3>
                <p className="multi-step-form-thanks-text">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </section>
    )
}

export default StepFive
