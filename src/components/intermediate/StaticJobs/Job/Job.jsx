import React, {useContext} from 'react'
import './Job.css'
import {StaticJobsContext} from '../StaticJobs'

// images are pulled from public/assets of the main app 

const Job = ({job}) => {

    const {setCategories, categories} = useContext(StaticJobsContext)

    const handleFilter = (e) => {
        const category = e.target.textContent
        !categories.includes(category) && setCategories([...categories, category])
    }

    return (
        <article style={{borderLeft: job.featured && '5px solid #5ba4a4'}} className='static-jobs-job'
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="-20"
        data-aos-duration="1000"
        >
            <div className="static-jobs-job-img-wrap">
                <img src={job.logo} alt="" className="static-jobs-job-img"/>
            </div>
            <div className="static-jobs-job-details">
                <div className="static-jobs-job-company">
                    <p>{job.company}</p>
                    <div className="static-jobs-job-features">
                    {job.new && <span>New</span>} 
                    {job.featured && <span style={{backgroundColor: 'hsl(180, 14%, 20%)'}}>Featured</span>}
                    </div>
                </div>
                <div className="static-jobs-job-position">
                    <h2 className="static-jobs-job-position-name">
                        {job.position}
                    </h2>
                </div>
                <ul className="static-jobs-job-other-details">
                    <li>{job.postedAt}</li>
                    <li>{job.contract}</li>
                    <li>{job.location}</li>
                </ul>
            </div>
            <div className="static-jobs-job-filter-btns">
                <button className="static-jobs-job-filter-btn"
                onClick={handleFilter}
                >
                    {job.role}
                </button>
                <button className="static-jobs-job-filter-btn"
                onClick={handleFilter}>
                    {job.level}
                </button>
                {job.languages.map((language, index)=>(
                <button className="static-jobs-job-filter-btn" key={index}
                onClick={handleFilter}>
                   {language}
                </button>
                ))}
                {job.tools.map((tool, index)=>(
                <button className="static-jobs-job-filter-btn" key={index}
                onClick={handleFilter}>
                   {tool}
                </button>
                ))}

            </div>
        </article>
    )
}

export default Job
