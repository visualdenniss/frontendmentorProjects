import React from 'react'
import './Qr.css'
import qr from '../QR/assets/qr-code-component-main/images/image-qr-code.png'

const Qr = () => {
    return (
        <div className='qr df'>
            <div 
            data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
            className="qr-container">
                <img src={qr} alt="" className="qr-img"/>
                <h1 className="qr-title">
                     Improve your front-end skills by building projects
                </h1>
                <p className="qr-desc">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}

export default Qr
