import React, {useContext} from 'react'
import './StepOne.css'
import {MultiStepFormContext} from '../../../MultiStepForm'
import Nav from '../../Nav/Nav'

const StepOne = () => {

    const {name, email, phone,
           setName, setEmail, setPhone
    } = useContext(MultiStepFormContext)


    const handleName = (e) => {
        document.getElementById('multiFormNameError').style.display = 'none'
        const InputField = document.getElementById('multiFormNameInput')
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        document.getElementById('multiFormEmailError').style.display = 'none'
        const InputField = document.getElementById('multiFormEmailInput')
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setEmail(e.target.value)
    }
    
    const handlePhone = (e) => {
        document.getElementById('multiFormPhoneError').style.display = 'none'
        const InputField = document.getElementById('multiFormPhoneInput')
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setPhone(e.target.value)
    }



    return (
        <section className="multi-step-form-step-one"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Personal info
            </h2>
            <p className="multi-step-form-step-desc">
                Please provide your name, email address, and phone number.
            </p>
            <form action="" className='multi-step-form-person-form'>
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormNameError">Name</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormNameError'
                >
                    This field is required
                </div>
                </div>
                <input id='multiFormNameInput' type="text" placeholder='e.g. Stephen King'
                value={name}
                onChange={handleName}
                />
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormNameInput" >Email Adress</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormEmailError'
                >
                    This field is required
                </div>                
                </div>
                <input id='multiFormEmailInput' type="email" placeholder='e.g. stephenking@lorem.com'
                value={email}
                onChange={handleEmail}
                />
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormPhoneError">Phone Number</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormPhoneError'
                >
                    This field is required
                </div>                
                </div>
                <input id='multiFormPhoneInput' type="text" placeholder='e.g. +1 234 567 890'
                value={phone}
                onChange={handlePhone}
                />
            </form>
            <Nav></Nav>
        </section>
    )
}

export default StepOne
