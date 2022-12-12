import React from 'react'
import './Testimonials.css'
import {testimonials} from './data.js'

const Testimonials = () => {
    return (
        <div className='testimonials df'>
            <div className="testimonials-container">
                {testimonials.map((item)=>(
                    <article className="testimonial-item">
                        <div className="testimonial-author">
                            <img src={item.img} alt="" className="testimonial-avatar"/>
                            <div className="testimonial-author-info">
                                <p className="testimonial-author-name">{item.author}</p>
                                <p className="testimonial-author-desc">{item.authorInfo}</p>
                            </div>
                        </div>
                        <h3 className="testimonial-title">
                            {item.title}
                        </h3>
                        <p className="testimonial-text">{item.testimonial}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
