import React from 'react'
import './Headquarters.css'
import {headQData} from '../data'

const Headquarters = () => {

    return (
        <section className='coffee-about-headq'>
         <h3 className="coffee-about-headq-section-title">Our headquarters</h3>
            <ul className='coffee-about-headq-items'>
                {headQData.map(({img,title,address})=>(
                <li className='coffee-about-headq-item'>
                    <img src={img} alt="" />
                    <h3 className='coffee-about-headq-title'>{title}</h3>
                    <p className='coffee-about-headq-desc'>{address.street}</p>
                    <p className='coffee-about-headq-desc'>{address.city}</p>
                    <p className='coffee-about-headq-desc'>{address.region}</p>
                    <p className='coffee-about-headq-desc'>{address.number}</p>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Headquarters
