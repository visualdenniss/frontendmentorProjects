import React from 'react'
import './Collection.css'
import { collectionData } from '../data'

const Collection = () => {

    return (
        <section className='coffee-collection'>
            <h2 className="coffee-collection-title">
                our collection
            </h2>
            <ul className="coffee-collection-items">
                {collectionData.map(({title,desc,img})=>(
                <li className="coffee-collection-item">
                    <img src={img} alt="" />
                    <h3 className="coffee-collection-item-title">
                        {title}
                    </h3>
                    <p className="coffee-collection-item-desc">{desc}</p>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Collection
