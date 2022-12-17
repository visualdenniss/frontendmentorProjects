import React from 'react'
import './FilterSection.css'
import remove from '../assets/static-job-listings-master/images/icon-remove.svg'



const FilterSection = ({categories, setCategories}) => {


    const removeFilter = (category) => {
        setCategories(categories.filter((item)=> item !== category))
    }
    
    return (
                <section className="static-jobs-filter-section">
                    <ul>
                    {categories?.map((category)=>(
                    <li className="static-jobs-applied-filter">
                        <button className="static-jobs-applied-filter-name">
                            {category}
                        </button>
                        <button className='static-jobs-filter-remove-btn'
                        onClick={() => removeFilter(category)}>
                            <img src={remove} alt="" className="static-jobs-filter-remove-icon"/>
                        </button>
                    </li>
                    ))}
                    </ul>
                    <button className="static-jobs-clear-filter-btn"
                    onClick={()=>setCategories([])}
                    >
                        Clear all
                    </button>
                </section>
    )
}

export default FilterSection
