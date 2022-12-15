import React, {useState, useContext} from 'react'
import './FormContainer.css'
import {MultiStepFormContext} from '../MultiStepForm'
import StepFour from './Steps/StepFour/StepFour'
import StepOne from './Steps/StepOne/StepOne'
import StepThree from './Steps/StepThree/StepThree'
import StepTwo from './Steps/StepTwo/StepTwo'
import StepFive from './Steps/StepFive/StepFive'


const FormContainer = () => {

    const {stepIndex} = useContext(MultiStepFormContext)

    const steps = {
        1 : <StepOne></StepOne> ,
        2 : <StepTwo></StepTwo>,
        3 : <StepThree></StepThree>, 
        4 : <StepFour></StepFour>,
        5 : <StepFive></StepFive>
    }

    return (
        <section className='multi-step-form-section'>
            {steps[stepIndex]}
        </section>
    )
}

export default FormContainer
