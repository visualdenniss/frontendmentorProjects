import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import {pagesData} from './data.js'

const Pages = () => {
    return (
        <div>
            <div className='components'>
                <div data-aos="fade-right"    
                data-aos-delay="50"
                data-aos-duration="500" 
                className="components-title">
                    <Link to="/" className="components-title-text"> <h2 >Home</h2></Link>
                    <h2>PAGES</h2>
                    <Link to="/components" className="components-title-text"> <h2>Components</h2></Link>
                </div>
                <div className="cards-grid">
                    {pagesData.map((card) => <Card card={card}></Card>)}
                </div>
        </div> 
        </div>
    )
}

export default Pages
