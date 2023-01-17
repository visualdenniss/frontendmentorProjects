import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from './assets/images/logo.svg'

const Footer = () => {
    return (
        <section className='dine-footer'>
            <Link to='/pages/dine-restaurant'>
                <img src={logo} alt="" />
            </Link>
            <div className="dine-footer-content">
            <div className="dine-footer-address-section">
                <p className="dine-footer-address-region">MARTHWAITE, SEDBERGH</p>
                <p className="dine-footer-address-region">CUMBRIA</p>
                <p className="dine-footer-address-tel">
                +00 44 123 4567
                </p>
            </div>
            <div className="dine-footer-times">
                <p>OPEN TIMES</p>
                <p>MON - FRI: 9:00 AM - 10:00 PM</p>
                <p>SAT - SUN: 9:00 AM - 11:30 PM</p>
            </div>
            </div>
        </section>
    )
}

export default Footer
