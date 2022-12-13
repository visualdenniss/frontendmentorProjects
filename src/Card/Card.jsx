import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({card}) => {
    return (
        <div data-aos="fade-up"    
            data-aos-delay="100"
            data-aos-offset="-25"
            data-aos-duration="400"  className='card'>
                    <img src={card.img} alt=""/>
            <div className="app-main-components-card-title">
                <h3>
                {card.title}
                </h3>
            </div>
            <div className="app-main-components-card-desc">
                <p>
                {card.desc}
                </p>
            </div>
            {card.type === 'component' ? 
             <Link className="app-main-components-card-link" to={card.link}>
                 <button className="app-main-item-btn">Go to section <i class="bi bi-arrow-right"></i></button>
            </Link> 
            : <a className="app-main-components-card-link" rel="noreferrer" target="_blank" href={card.link}>
                <button className="app-main-item-btn">Go to live site <i class="bi bi-arrow-right"></i></button>   
            </a>
        }
        </div>
    )
}

export default Card
