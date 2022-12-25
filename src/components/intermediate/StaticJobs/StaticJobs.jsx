import React, {useState, useEffect, createContext} from 'react'
import JobList from './JobList/JobList'
import './StaticJobs.css'
import FilterSection from './FilterSection/FilterSection'
import data from './assets/static-job-listings-master/data.json'

export const StaticJobsContext = createContext()


const StaticJobs = () => {

    const allJobs = data.map(job=>{
        job.filterableCategories = [
            job.role, job.level, ...job.languages, ...job.tools
        ]
        return job
    })

    const [showFilters, setShowFilters] = useState(false)
    const [categories, setCategories] = useState([])

    const filteredJobs = allJobs.filter((job) => {
    return categories.every((item) => job.filterableCategories.includes(item))
    })


    useEffect(()=>{
      categories.length > 0 ? setShowFilters(true) : setShowFilters(false)
    }, [categories])

    return (

        <StaticJobsContext.Provider
        value={{categories, setCategories}}
        >
        <div className='static-jobs'>
            <main className="static-jobs-wrapper">
                {showFilters && <FilterSection categories={categories}
                setCategories={setCategories}
                ></FilterSection>}
                <JobList jobsList={filteredJobs}></JobList>
            </main>
        </div>
        </StaticJobsContext.Provider>
    )
}

export default StaticJobs
