import React from 'react'
import './How.css'
import { howData } from '../data'

const How = () => {

    return (
        <section className='coffee-how'>
            <h3 className="coffee-how-title">How it works</h3>
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
            <button className="coffee-hero-cta">Create your plan</button>
        </section>
    )
}

export default How
