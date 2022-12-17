import React, {useState} from 'react'
import Job from '../Job/Job'
import './JobList.css'

const JobList = ({jobsList}) => {

    return (
        <section className='static-jobs-list'>
            {jobsList.map((job)=>
            <Job job={job} key={job.id}></Job>
            )}

        </section>
    )
}

export default JobList
