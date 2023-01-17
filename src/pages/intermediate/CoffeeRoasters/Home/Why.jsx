import React from 'react'
import './Why.css'
import {whyData} from '../data'

const Why = () => {

    return (
        <section className='coffee-why'>
            <h2 className="coffee-why-title">
            Why choose us?
            </h2>
            <p className="coffee-why-desc">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            <ul className='coffee-why-items'>
                {whyData.map(({title,img,desc})=> (
                    <li  className='coffee-why-item'>
                        <img src={img} alt="" />
                        <div className="coffee-why-text-container">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Why
