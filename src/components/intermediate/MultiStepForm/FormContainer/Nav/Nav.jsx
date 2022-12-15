import React, {useContext, useEffect} from 'react'
import './Nav.css'
import {MultiStepFormContext} from '../../MultiStepForm'

const Nav = () => {


    const {stepIndex, setStepIndex,
           name, email, phone,
    } = useContext(MultiStepFormContext)

    const showPrevPage = () => {
        setStepIndex(prev => prev - 1)
    }

    const showNextPage = () => {

        if(stepIndex === 1) {

        if(name === '') {
                document.getElementById('multiFormNameError').style.display = 'block'
                document.getElementById('multiFormNameInput').classList.add('multi-step-form-person-form-field-error')
                return
            }
            else if(email === '') {
                document.getElementById('multiFormEmailError').style.display = 'block'
                document.getElementById('multiFormEmailInput').classList.add('multi-step-form-person-form-field-error')
                return
            }
            else if(phone === '') {
                document.getElementById('multiFormPhoneError').style.display = 'block'
                document.getElementById('multiFormPhoneInput').classList.add('multi-step-form-person-form-field-error')
                return
            }
        }

        setStepIndex(prev => prev + 1)
    }

    return (
        <nav className='multi-step-form-nav'>

            {stepIndex > 1 &&
            <button className="multi-step-form-nav-back-btn"
            onClick={showPrevPage}
            >
                Go back
            </button>
            }
            {stepIndex === 4 ? 
            <button className="multi-step-form-nav-next-btn
            multi-step-form-nav-confirm-btn"
            onClick={showNextPage}
            >
                Confirm
            </button>
            :
            <button className="multi-step-form-nav-next-btn"
            onClick={showNextPage}
            >
                Next Step
            </button>
        
        }
        </nav>
    )
}

export default Nav
