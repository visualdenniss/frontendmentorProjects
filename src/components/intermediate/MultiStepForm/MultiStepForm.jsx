import React, {useState, createContext} from 'react'
import FormContainer from './FormContainer/FormContainer'
import './MultiStepForm.css'
import Sidebar from './Sidebar/Sidebar'
import {stepData as step} from './data'

export const MultiStepFormContext = createContext()

const MultiStepForm = () => {

    const [stepIndex, setStepIndex] = useState(1)

    // STEP 1 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // STEP 2 

    const [isMonthly, setIsMonthly] = useState(true)
    const [selectedPlan, setSelectedPlan] = useState('plan1') 

    // STEP 3 

    const [addOnsList, setAddOnsList] = useState(['addOn1'])

    return (
        <MultiStepFormContext.Provider 
        value={{
            stepIndex, setStepIndex,
            name, setName,
            email, setEmail,
            phone, setPhone,
            isMonthly, setIsMonthly,
            selectedPlan, setSelectedPlan,
            addOnsList, setAddOnsList
            }}>
        <div className='multi-step-form df'
        data-aos="fade-in"
        data-aos-delay="150"
        data-aos-duration="1000"
        >
            <main className="multi-step-form-wrapper">
                <Sidebar step={step}></Sidebar>
                <FormContainer></FormContainer>
            </main>
        </div>
         </MultiStepFormContext.Provider>
    )
}

export default MultiStepForm
