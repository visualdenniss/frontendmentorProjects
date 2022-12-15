import React, {useContext, useState, useEffect} from 'react'
import {MultiStepFormContext} from '../../../MultiStepForm'
import Nav from '../../Nav/Nav'
import './StepFour.css'
import {plans, addOns} from '../../../data.js'

const StepFour = () => {

    const {isMonthly, setStepIndex,
           selectedPlan, 
           addOnsList,
    } = useContext(MultiStepFormContext)

    const plan = plans.filter((item)=> item.id === selectedPlan)[0]
    const planPrice = isMonthly ? plan.monthlyPrice : plan.yearlyPrice

    const extras = addOns.filter(addOn => addOnsList.includes(addOn.id))

    const sum = (priceList) => {
        let total = 0;
        priceList.forEach((item)=> total+= item)
        return total;
    }

    return (
        <section className="multi-step-form-step-four"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Finishing up
            </h2>
            <p className="multi-step-form-step-desc">
                Double-check everything looks OK before confirming.
            </p>
            <div className="multi-step-form-step-four-summary-container">
                <div className="multi-step-form-step-four-summary">
                <div className="multi-step-form-step-four-summary-plan">
                    <div className="multi-step-form-step-four-summary-plan-name">
                        {plan.planName}({'Yearly'})
                    </div>
                    <button className="multi-step-form-step-four-summary-plan-change"
                    onClick={()=>setStepIndex(2)}
                    >
                        Change
                    </button>
                </div>
                <div className="multi-step-form-step-four-summary-plan-amount">
                    ${planPrice}/{isMonthly ? 'mo' : 'yr'}
                </div>
            </div>
                <ul className="multi-step-form-step-four-summary-add-ons">
                    {extras.map((item)=>(
                    <li className="multi-step-form-step-four-summary-add-on" key={item.id}>
                        <div className="multi-step-form-step-four-summary-add-on-name">
                            {item.name}
                        </div>
                        <div className="multi-step-form-step-four-summary-add-on-price">
                            +${isMonthly ? item.monthlyPrice : item.yearlyPrice}/{isMonthly ? 'mo' : 'yr'}
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="multi-step-form-step-four-total">
                <div className="multi-step-form-step-four-total-text">
                    Total (per {isMonthly ? 'month' : 'year'})
                </div>
                <div className="multi-step-form-step-four-total-amount">
                    ${planPrice + 
                    (isMonthly ? sum(extras.map((item)=> item.monthlyPrice)) 
                    : sum(extras.map((item)=>item.yearlyPrice)))
                    }/{isMonthly ? 'mo' : 'yr'}
                </div>
            </div>
            <Nav></Nav>
        </section>
    )
}

export default StepFour
