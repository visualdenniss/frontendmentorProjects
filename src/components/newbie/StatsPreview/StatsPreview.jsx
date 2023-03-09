import React, {useState} from 'react'
// import {AnimatePresence, motion} from 'framer-motion'
import './StatsPreview.css'
import img from './assets/stats-preview-card-component-main/images/image-header-desktop.jpg'
// import bgbg from './assets/stats-preview-card-component-main/images/bgbg.jpg'



const StatsPreview = () => {

    const statsData = [
        {
            title: 'companies',
            stat: '10k+'
        },
        {
            title: 'templates',
            stat: '314'
        },
        {
            title: 'queries',
            stat: '12M+'
        },
    ]

    return (
        <main className='stats-preview-main'>
            <h1 class="sr-only">Stats preview card component</h1>
                        <article className='stats-preview-card'>
                            <div className="stats-preview-left">
                                <h2>Get <span> insights</span> that help your business grow.</h2>
                                <p> Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                                    experience, and overall efficiency.
                                </p>
                                <ul role='list' className='stats-preview-stats'>
                                    {statsData.map((statItem)=> {
                                        return (
                                            <li role='listitem' className='stats-preview-stat' key={statItem.title}>
                                                <span>{statItem.stat}</span>
                                                <p>{statItem.title}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div  className="stats-preview-right">
                                    <img src={img} alt="An Abstract Photo" />
                            </div>
                        </article>
        </main>
    )

}

export default StatsPreview
