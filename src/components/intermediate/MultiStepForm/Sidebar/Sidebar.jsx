import React, { useEffect, useContext } from 'react'
import './Sidebar.css'
import {MultiStepFormContext} from '../MultiStepForm'

const Sidebar = ({step}) => {

     const {stepIndex} = useContext(MultiStepFormContext)

useEffect(()=> {

    if(stepIndex < 5) {

        document.querySelectorAll('.multi-step-form-sidebar-step').forEach((item)=>{
            item.classList.remove('multi-step-form-sidebar-step-active')
        })
        document.getElementById('stepNo' + stepIndex).classList.add(('multi-step-form-sidebar-step-active'))
    } 

    return

},[stepIndex])

    return (
        <section className='multi-step-form-sidebar'>
            <ul className="multi-step-form-sidebar-steps">
                {step.map((item)=>(
                <li className="multi-step-form-sidebar-step" key={item.id} id={item.id}>
                    <div className="multi-step-form-sidebar-step-no">
                        {item.stepNo}
                    </div>
                    <div className="multi-step-form-sidebar-step-info">
                        <div className="multi-step-form-sidebar-step-name">
                            Step {item.stepNo}
                        </div>
                        <div className="multi-step-form-sidebar-step-desc">
                            {item.stepDesc}
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Sidebar
