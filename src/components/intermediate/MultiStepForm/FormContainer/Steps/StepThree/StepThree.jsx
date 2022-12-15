import React, { useEffect, useContext } from 'react'
import Nav from '../../Nav/Nav'
import {MultiStepFormContext} from '../../../MultiStepForm'
import './StepThree.css'
import {addOns} from '../../../data'
import {createRipple} from '../StepTwo/ripple.js'
import '../StepTwo/ripple.css'

const StepThree = () => {

const {isMonthly, addOnsList, setAddOnsList} = useContext(MultiStepFormContext)

const handleClick = (e, id) => {
    createRipple(e)
    document.getElementById(id).classList.toggle('multi-step-form-step-three-add-on-checked')
    if(document.getElementById(id + id).checked) {
        document.getElementById(id + id).checked = false
    } else {
        document.getElementById(id + id).checked = true
    }

    // check if element is in list 
    if(addOnsList.includes(id)) {
        const newAddOnsList = addOnsList.filter((item)=> item !== id)
        setAddOnsList(newAddOnsList)
    } else {
        setAddOnsList([...addOnsList, id])
    }
    
}

useEffect(()=>{
    if (addOnsList.length > 0) {
        addOnsList.forEach((addOn)=> {
            document.getElementById(addOn+addOn).checked = true
            document.getElementById(addOn).classList.add('multi-step-form-step-three-add-on-checked')
        })
    }
},[])

    return (
        <section className="multi-step-form-step-three"
        data-aos="fade-in"
        data-aos-delay="0"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Pick add-ons
            </h2>
            <p className="multi-step-form-step-desc">
                Add-ons help enhance your gaming experience.
            </p>
            <ul className="multi-step-form-step-three-add-ons">
                {addOns.map(({id,name,desc,monthlyPrice, yearlyPrice})=>(
                <li className="multi-step-form-step-three-add-on" key={id} id={id}
                onClick={(e) => handleClick(e,id)}
                >
                    <input type="checkbox" name="" id={id + id} />
                    <div className="multi-step-form-step-three-add-on-labels">
                    <label htmlFor="">{name}</label>
                    <label htmlFor="">{desc}</label>
                    </div>
                    <div className="multi-step-form-step-three-add-on-price">
                        +${isMonthly ? monthlyPrice : yearlyPrice}/{isMonthly ? 'mo' : 'yr'}
                    </div>
                </li>
                )
                )}
            </ul>
             <Nav></Nav>
        </section>
    )
}

export default StepThree
