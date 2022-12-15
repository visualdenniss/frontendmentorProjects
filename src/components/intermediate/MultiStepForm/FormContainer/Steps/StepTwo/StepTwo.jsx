import React, {useState, useEffect, useContext } from 'react'
import './StepTwo.css'
import {MultiStepFormContext} from '../../../MultiStepForm'
import Nav from '../../Nav/Nav'
import {plans} from '../../../data.js'
import {createRipple} from './ripple.js'
import './ripple.css'

const StepTwo = () => {

    const {isMonthly, setIsMonthly, selectedPlan, setSelectedPlan} = useContext(MultiStepFormContext)

    const handleBilling = () => {
        setIsMonthly(prev => !prev)
    }


    const selectPlan = (e, id) => {
        createRipple(e)

        document.querySelectorAll('.multi-step-form-step-two-plan').forEach((item)=>{
            item.classList.remove('multi-step-form-step-two-plan-active')
        })
        document.getElementById(id).classList.add('multi-step-form-step-two-plan-active')

        setSelectedPlan(id)
    }
    
    useEffect(()=>{
        document.getElementById(selectedPlan).classList.add('multi-step-form-step-two-plan-active')
    },[])


    return (
        <section className="multi-step-form-step-two"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Select your plan
            </h2>
            <p className="multi-step-form-step-desc">
                You have the option of monthly or yearly billing.
            </p>
            <ul className="multi-step-form-step-two-plans">
                {plans.map(({id, planName, monthlyPrice, yearlyPrice, img})=>(
                    <li key={id} id={id} className="multi-step-form-step-two-plan"
                    onClick={(e) => selectPlan(e,id)}
                    >
                        <img src={img} alt="" className="multi-step-form-step-two-plan-icon"/>
                        <div className="multi-step-form-step-two-plan-name">{planName}</div>
                        <div className="multi-step-form-step-two-plan-price">
                            ${isMonthly ? monthlyPrice : yearlyPrice}/{isMonthly ? 'mo' : 'yr'}
                        </div>
                        {!isMonthly && <p>2 Months free</p>}
                    </li>
                ))}
            </ul>
            <section className="multi-step-form-step-two-toggle">
                <p className={isMonthly ? 'multi-step-form-step-active-billing' : ''}>Monthly</p>
                    <div className="multi-step-form-step-two-toggle-container"
                    onClick={handleBilling}>
                        <div className={isMonthly ? "multi-step-form-step-two-toggle-circle" : 'multi-step-form-step-two-toggle-circle multi-step-form-step-two-toggle-circle-annual'}></div>
                    </div>
                <p 
                className={!isMonthly ? 'multi-step-form-step-active-billing' : ''}
                >Annually</p>
            </section>
             <Nav></Nav>
        </section>
    )
}

export default StepTwo
