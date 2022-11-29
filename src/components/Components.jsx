import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import './Components.css'
import {componentCardData} from './data.js'

const Components = () => {

    return (
        <div className='components'>
                <div data-aos="fade-right"    
                data-aos-delay="50"
                data-aos-duration="500" 
                className="components-title">
                    <Link className="components-title-text" to="/"> <h2 >Home</h2></Link>
                    <h2>COMPONENTS</h2>
                    <Link className="components-title-text" to="/pages"> <h2>Pages</h2></Link>
                </div>
                <div className="cards-grid">
                    {componentCardData.map((card) => <Card card={card}></Card>)}
                </div>
        </div>
    )
}

export default Components
