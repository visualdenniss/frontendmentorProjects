import React from 'react'
import './Testimonials.css'

const Testimonials = ({testimonials}) => {
    return (
        <section className='sunnySide-testimonials'>
            <h3>Client Testimonials</h3>
            <ul className="sunnySide-testimonials-items">
                {testimonials.map((testimonial)=>
                <li>
                    <img src={testimonial.img} alt="" className="sunnySide-testimonials-author-img" />
                    <p className="sunnySide-testimonials-testimonial-text">
                        {testimonial.testimonial}
                    </p>
                    <div className="sunnySide-testimonials-author-name">
                        {testimonial.name}
                    </div>
                    <p className="sunnySide-testimonials-author-title">
                        {testimonial.title}
                    </p>
                </li>
                )}
            </ul>
        </section >
    )
}

export default Testimonials
