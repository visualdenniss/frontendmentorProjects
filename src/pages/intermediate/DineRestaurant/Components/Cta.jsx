import React from 'react'
import './Cta.css'
import {Link} from 'react-router-dom'

const Cta = () => {
    return (
        <section className='dine-cta'>
            <h2 className="dine-cta-title">
            Ready to make a reservation?
            </h2>
            <Link to='/pages/dine-restaurant/booking'>
            <button className="dine-hero-cta dine-hero-cta-light">
                Book a table
            </button>
            </Link>
        </section>
    )
}

export default Cta
