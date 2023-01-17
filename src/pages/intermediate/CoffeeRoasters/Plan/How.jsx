import React from 'react'
import './How.css'
import { howData } from '../data'

const How = () => {

    return (
        <section className='coffee-how coffee-plan-how'>
            <ul className='coffee-how-steps'>
                {howData.map(({id,title,desc})=>(
                <li className='coffee-how-step'>
                    <div className="coffee-deco">
                        <div className="coffee-deco-circle"></div>
                        <div className="coffee-deco-line"></div>
                    </div>
                    <span>{id}</span>
                    <h3 className='coffee-how-step-title'>{title}</h3>
                    <p className='coffee-how-step-desc'>{desc}</p>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default How
